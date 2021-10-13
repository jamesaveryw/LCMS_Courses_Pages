
var g_isMSIE=false;
var g_isFirefox=false;

var g_bAicc=false;
var g_bLmsDebug=true;
var g_sAiccSid = "";
var g_sAiccUrl = "";
var g_sRelayAiccUrl ="https://services.loma.org/Relay/Proxy.ashx";

var g_sStudentID="";
var g_sStudentName="";

var g_dtSessionBegin="";
var g_sLmsCmiEntry="";
var g_sLmsCmiLocation="";
var g_sLmsCmiStatus="i";
var g_sLmsCmiSuspendData="";

var g_sMSXMLProgID;
var g_sMSXMLHTTPProgID;

var g_oSCO;
var g_oDocSCO;


function setAICCData(name,value,target) {
	var oModuleObjective = g_oSCO.selectSingleNode("objectives/o[@module='yes']");
	//alert("setAICCData "+name+"::"+value);
	if (name=="cmi.core.student_id") {
		g_sStudentID=value;
	}else if (name=="cmi.core.student_name") {
		g_sStudentName=value;
	}else if (name=="cmi.core.lesson_status") {
		g_sLmsCmiStatus=value;
	}else if(name=="cmi.core.lesson_location") {
		g_sLmsCmiLocation=value;
	}else if(name=="cmi.suspend_data") {
		g_sLmsCmiSuspendData=value;
	}else if(name=="cmi.core.score.raw" && oModuleObjective != null) {
		oModuleObjective.setAttribute("raw",value);
	}else if(name=="cmi.core.score.max" && oModuleObjective != null) {
		oModuleObjective.setAttribute("max",value);
	}else if(name=="cmi.core.score.min" && oModuleObjective != null) {
		oModuleObjective.setAttribute("min",value);
	}
	AICC_Save();
	
	//console.log("setAICCData: "+name+" , "+value+" , "+target);
	
	return true;
//	if (target) {
//		target.SetVariable("/:callbackSCORM","true");
//	}
}

function getAICCData(name,target) {
	var oModuleObjective = g_oSCO.selectSingleNode("objectives/o[@module='yes']");
	var value="";
	if (name=="cmi.core.student_id") {
		value=g_sStudentID;
	}else if (name=="cmi.core.student_name") {
		value=g_sStudentName;
	}else if (name=="cmi.core.lesson_status") {
		value=g_sLmsCmiStatus;
	}else if(name=="cmi.core.lesson_location") {
		value=g_sLmsCmiLocation;
	}else if(name=="cmi.suspend_data") {
		value=g_sLmsCmiSuspendData;
	}else if(name=="cmi.core.score.raw" && oModuleObjective != null) {
		value=oModuleObjective.getAttribute("raw");
	}else if(name=="cmi.core.score.max" && oModuleObjective != null) {
		value=oModuleObjective.getAttribute("max");
	}else if(name=="cmi.core.score.min" && oModuleObjective != null) {
		value=oModuleObjective.getAttribute("min");
	}
	
	//console.log("getAICCData: "+name+" , "+value+" , "+target);
	return value;
	
//	if (target) {
//		target.SetVariable("/:callbackSCORM",value);
//	}

}

function CheckBrowserType()
{
	var sUserAgent = navigator.userAgent.toLowerCase();

	/*if (sUserAgent.indexOf("msie") != -1)
		g_isMSIE = true;
	else if (sUserAgent.indexOf("gecko")!=-1)
		g_isFirefox = true;*/
	
	if (sUserAgent.indexOf("msie") != -1){
		g_isMSIE = true;
	}else if(sUserAgent.indexOf('trident/') > 0){
		g_isMSIE = true;
	}else if (sUserAgent.indexOf("gecko")!=-1){
		g_isFirefox = true;
	}
	
}


// AICC_Load
function AICC_Load()
{
	try
	{
		var sAiccData = "";
		//var sSend = "command=GetParam&version=2.0&session_id="+ g_sAiccSid +"&AICC_Data="+ escape(sAiccData);
		var sSend = "AICCURL="+encodeURIComponent(g_sAiccUrl)+"&command=GetParam&version=2.0&session_id="+ g_sAiccSid +"&AICC_Data="+ escape(sAiccData);
		//alert(sSend);
		var oXmlHttp = CreateXMLHTTP();
		//oXmlHttp.open("POST", g_sAiccUrl, false);
		oXmlHttp.open("POST", g_sRelayAiccUrl, false);
		oXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		oXmlHttp.send(sSend);
		if (oXmlHttp.status != 200)
		{
			var e = "AICC_Load:\n";
			e += "XmlHttp.status "+ oXmlHttp.status;
			throw e;
		}

		var sResponse = oXmlHttp.responseText;
		//alert("load response: "+sResponse);
		AICC_HandleResponse(sResponse);
		AICC_InitSessionTime();
	}
	catch (e)
	{
		if(g_bLmsDebug) alert(e);
		return false;
	}
	return true;
}

// AICC_Save
function AICC_Save()
{
	try
	{
		var sAiccData = AICC_PrepareData();
		//alert("aicc save: "+sAiccData);
		var sSend = "AICCURL="+encodeURIComponent(g_sAiccUrl)+ "&command=PutParam&version=2.0&session_id="+ g_sAiccSid +"&AICC_Data="+ escape(sAiccData);

		var oXmlHttp = CreateXMLHTTP();
		//oXmlHttp.open("POST", g_sAiccUrl, false);
		oXmlHttp.open("POST", g_sRelayAiccUrl, false);
		oXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		oXmlHttp.send(sSend);
		if (oXmlHttp.status != 200)
		{
			var e = "AICC_Save:\n";
			e += "XmlHttp.status "+ oXmlHttp.status;
			throw e;
		}
	}
	catch (e)
	{
		if(g_bLmsDebug) alert(e);
		return false;
	}
	return true;
}

// AICC_HandleResponse
function AICC_HandleResponse(sResponse)
{
  //alert("handle response: "+sResponse);
	var sCRLF = String.fromCharCode(13,10);
	var sCR = String.fromCharCode(10);

	var sSrc = unescape(sResponse);
	// Remove comments
	sSrc = sSrc.replace(/^;.*$/gm, "");
	
	var corestart=sSrc.toLowerCase().indexOf("[core]");
	sSrc=sSrc.substr(corestart);
  //alert("massaged response: "+sSrc);

	var re = /^\[(\w+)\]$/m;
	var sNameSeparator = " ";

	var pGroups = null;
	for (;;)
	{
		if (sSrc.length == 0)
			break;

		var nGroupBegin = sSrc.search(re);
		sSrc = sSrc.substr(nGroupBegin);

		var sGroup = sSrc.replace(re, "$1" + sNameSeparator);
		var sGroupName = sGroup.substr(0, sGroup.search(sNameSeparator));
		sGroup = sGroup.substr(sGroupName.length + 1);

		var nNextGroupBegin = sGroup.search(re);
		if (nNextGroupBegin == -1)
			nNextGroupBegin = sGroup.length;

		sSrc = sGroup.substr(nNextGroupBegin);
		sGroup = sGroup.substr(0, nNextGroupBegin);

		// Remove extra line breaks
		sGroup = sGroup.replace(/[\n\r]+/gm, sCR);
		sGroup = sGroup.replace(/^[\n]+/gm, "");

		var oGroup = new Object;
		oGroup.sName = sGroupName.toLowerCase();
		oGroup.arVars = sGroup.split(sCR);
		oGroup.pNext = pGroups;
		pGroups = oGroup;
	}
	
	for (var oGroup = pGroups; oGroup != null; oGroup = oGroup.pNext)
	{
		for (var i = 0; i < oGroup.arVars.length; i++)
		{
			var sPair = oGroup.arVars[i];
			if (sPair.length > 0)
			{
				//var ar = sPair.split(/\s*=\s*/);
				//var sName = ar[0].toLowerCase();
				//var sValue = ar[1];

				var nBegin = sPair.search("=");
				var sName = sPair.substring(0, nBegin);
				var sValue = sPair.substring(nBegin + 1);

				sName = sName.toLowerCase();
				sName=sName.replace(/^\s+|\s+$/g,""); //trim
				if (oGroup.sName == "core")
				{
					switch (sName)
					{
						case "lesson_status":
						{
							sValue = sValue.toLowerCase();
							var arValues = sValue.split(",");
							var sStatus = arValues[0];
							if (sStatus=="i" || sStatus=="incomplete") {
								g_sLmsCmiStatus="incomplete";
							}else if (sStatus=="c" || sStatus=="complete") {
								g_sLmsCmiStatus="complete";
							}else if (sStatus=="p" || sStatus=="passed") {
								g_sLmsCmiStatus="passed";
							}else if (sStatus=="f" || sStatus=="failed") {
								g_sLmsCmiStatus="failed";
							}else if (sStatus=="b" || sStatus=="browsed") {
								g_sLmsCmiStatus="browsed";
							}else if (sStatus=="n" || sStatus=="not attempted") {
								g_sLmsCmiStatus="not attempted";
							}
							
							var sFlag = "r";
							if (arValues.length > 1)
								sFlag = arValues[1];

							if (sFlag == "r" || sFlag == "resume")
								g_sLmsCmiEntry = "resume";
							break;
						}
						case "lesson_location":
						{
							if (sValue!=null && sValue!="null") {
								g_sLmsCmiLocation = sValue;
							}
							break;
						}
						case "student_name": 
						{
							g_sStudentName=sValue;
							break;
						}
						case "student_id": 
						{
							g_sStudentID=sValue;
							break;
						}
						
					}
				}
				else if (oGroup.sName == "core_lesson")
				{
					switch (sName)
					{
						case "suspend_data":
							g_sLmsCmiSuspendData = sValue;
							break;
					}
				}
			}
		}
	}
}

// AICC_PrepareData
function AICC_PrepareData()
{
	var sScore = "0";
	var sStatus = "i";

	var oModuleObjective = g_oSCO.selectSingleNode("objectives/o[@module='yes']");
	if (oModuleObjective != null)
	{
		// Score
		var sRaw = oModuleObjective.getAttribute("raw");
		//var sScaled = oModuleObjective.getAttribute("scaled");

		//if (g_bNormalize)
		//	sRaw = parseInt(parseFloat(sScaled) * 100 + 0.5);

		sScore = sRaw;

		// Status
		//var sSS = oModuleObjective.getAttribute("ss");
		//var sCS = oModuleObjective.getAttribute("cs");

		//if (sSS != "u")
		//	sStatus = sSS;
		//else
		//	sStatus = sCS;
		sStatus=g_sLmsCmiStatus.substring(0,1);
		if (sStatus=="n") {
			sStatus=g_sLmsCmiStatus="i";
		}

//		sStatus += ",suspend";
	}

	var sCRLF = String.fromCharCode(13,10);

	var sData = "";

	sData += "[CORE]" + sCRLF;
		sData += "Lesson_Location="+ g_sLmsCmiLocation + sCRLF;
		sData += "Lesson_Status="+ sStatus + sCRLF;
		sData += "Score="+ sScore + sCRLF;
		sData += "Time="+ AICC_ReturnSessionTime() + sCRLF;

	//AICC_InitSessionTime();

	sData += "[CORE_LESSON]" + sCRLF;
		sData += "Suspend_Data="+ g_sLmsCmiSuspendData + sCRLF;

	sData += "[OBJECTIVES_STATUS]" + sCRLF;

	var nIndex = 1;

	var oObjectives = g_oSCO.selectNodes("objectives/o");
	for (var i = 0; i < oObjectives.length; i++)
	{
		var oObjective = oObjectives[i];

		var sModule = oObjective.getAttribute("module");
		if (sModule != "yes")
		{
			var sId = oObjective.getAttribute("id");
			var sRaw = oObjective.getAttribute("raw");

			var sSS = oObjective.getAttribute("ss");
			var sCS = oObjective.getAttribute("cs");

			var sStatus;
			if (sSS != "u")
				sStatus = sSS;
			else
				sStatus = sCS;

			sData += "J_ID."+ nIndex +"="+ sId + sCRLF;
			sData += "J_Score."+ nIndex +"="+ sRaw + sCRLF;
			sData += "J_Status."+ nIndex +"="+ sStatus + sCRLF;

			nIndex += 1;
		}
	}

	return sData;
}

function AICC_InitSessionTime()
{
	g_dtSessionBegin = new Date();
}

function AICC_ReturnSessionTime()
{
		try
		{
			var dtCurrent = new Date();

			var msecElapsed = dtCurrent - g_dtSessionBegin;
			var dtElapsed = new Date(msecElapsed);

			var nYears = dtElapsed.getUTCFullYear() - 1970;
			var nMonths = dtElapsed.getUTCMonth();
			var nDays = dtElapsed.getUTCDate() - 1;
			var nHours = dtElapsed.getUTCHours();
			var nMinutes = dtElapsed.getUTCMinutes();
			var nSeconds = dtElapsed.getUTCSeconds();

			var s = "";

			if (nHours < 10) 		s += "0";
			s += nHours + ":";

			if (nMinutes < 10)		s += "0";
			s += nMinutes + ":";

			if (nSeconds < 10)		s += "0";
			s += nSeconds;

			return s;

		}
		catch (e)
		{
			//alert(e);
			return "00:00:00";
		}
	return "00:00:00";
}


function RemoveInteractionNode(sID) {
	var oInteractions = g_oSCO.selectSingleNode("interactions");
	var oInteraction = GetInteraction(sID);
	if(oInteraction!=null) {
		var oTmp = oInteractions.removeChild(oInteraction);
		oTmp = null;
	}
}

function ReturnInteraction(sID, bReplace) {
	if(bReplace) RemoveInteractionNode(sID);
	var oInteraction = GetInteraction(sID);
	if(oInteraction==null) {
		var oInteractions = g_oSCO.selectSingleNode("interactions");
		if (oInteractions==null) {
			var oInteractions = g_oDocSCO.createElement("interactions");
			g_oSCO.appendChild(oInteractions);
		}
		var oInteraction = g_oDocSCO.createElement("i");
		oInteractions.appendChild(oInteraction);
		oInteraction.setAttribute("id", sID);
		var dDate = new Date();
		var sDate = ConvertDateToISO8601(dDate);
		oInteraction.setAttribute("b", sDate);
	}
	return oInteraction;
}

function SetInteractionParam(sID, sParam, sValue) {
	var oInteraction = ReturnInteraction(sID);
	var sAttrName = "y";
	if(sParam!="latency") sAttrName = sParam.charAt(0);
	oInteraction.setAttribute(sAttrName, sValue);
	return true;
}

function SetInteractionArrayItem(sID, sArray, sValue) {
	var oInteraction = ReturnInteraction(sID);
	var sParentName = sArray=="objectives" ? "oo" : "rr";
	var sNodeName = sArray=="objectives" ? "o" : "r";
	var sAttrName = sArray=="objectives" ? "id" : "p";
	var oParent = oInteraction.selectSingleNode(sParentName);
	if(oParent==null) {
		oParent = g_oDocSCO.createElement(sParentName);
		oInteraction.appendChild(oParent);
	}
	var aoNodes = oParent.selectNodes(sNodeName);
	if(aoNodes.length>0) {
		for(var i=0;i<aoNodes.length;i++) {
			if(aoNodes[i].getAttribute(sAttrName)==sValue) return false;
		}
	}
	var oNode = g_oDocSCO.createElement(sNodeName);
	oParent.appendChild(oNode);
	oNode.setAttribute(sAttrName, sValue);
	return true;
}

function GetInteractionParam(sID, sParam) {
	var oInteraction = GetInteraction(sID);
	if(oInteraction==null) return null;
	var sAttrName = sParam=="timestamp" ? "b" : "y";
	if(sParam!="latency" && sParam!="timestamp") sAttrName = sParam.charAt(0);
	return oInteraction.getAttribute(sAttrName);
}

function GetInteractionArray(sID, sArray) {
	var oInteraction = GetInteraction(sID);
	if(oInteraction==null) return null;
	var sParentName = sArray=="objectives" ? "oo" : "rr";
	var oParent = oInteraction.selectSingleNode(sParentName);
	if(oParent==null) return null;
	var sNodeName = sArray=="objectives" ? "o" : "r";
	var aNodes = oParent.selectNodes(sNodeName);
	if(aNodes.length==0) return null;
	var sAttrName = sArray=="objectives" ? "id" : "p";
	var sTmp = "";
	var aArray = new Array();
	for(var i=0;i<aNodes.length;i++) {
		sTmp = aNodes[i].getAttribute(sAttrName);
		if(sTmp==null) continue;
		aArray.push(sTmp);
	}
	return aArray;
}


// AICC_Obtain
function AICC_Initialize(oWindow)
{
		var s = window.location.search;
		if (s.length > 0)
		{
			var arPairs = s.split("&");
			for(var i = 0; i < arPairs.length; i++)
			{
				if (arPairs[i].indexOf("?") == 0)
					arPairs[i] = arPairs[i].substring(1, arPairs[i].length);

				var arPair = arPairs[i].split("=");
				if (arPair.length == 2)
				{
					var sName = arPair[0];
					var sValue = arPair[1];

					sName = sName.toLowerCase();
					switch (sName)
					{
						case "aicc_sid":
							g_sAiccSid = sValue;
							break;
						case "aicc_url":
							g_sAiccUrl = unescape(sValue);
							break;
					}
				}
			}
			if (g_sAiccSid != "" && g_sAiccUrl != "") {
				g_bAicc = true;
				g_dtSessionBegin = new Date();
			}
		}
		
		AICC_Load();
}

function loadPage() {
	AICC_Initialize();
}

function unloadPage(status) {
	try
	{
		var sAiccData = "";
		var sSend = "AICCURL="+encodeURIComponent(g_sAiccUrl)+ "&command=ExitAU&version=4.0&session_id="+ g_sAiccSid;

		var oXmlHttp = CreateXMLHTTP();
		//oXmlHttp.open("POST", g_sAiccUrl, false);
		oXmlHttp.open("POST", g_sRelayAiccUrl, false);
		oXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		oXmlHttp.send(sSend);
		if (oXmlHttp.status != 200)
		{
			var e = "unloadPage:\n";
			e += "XmlHttp.status "+ oXmlHttp.status;
			throw e;
		}

		var sResponse = oXmlHttp.responseText;
		AICC_HandleResponse(sResponse);
	}
	catch (e)
	{
		if(g_bLmsDebug) alert(e);
		return false;
	}

	return true;	
}

function CreateXMLHTTP()
{
	var oXmlHttp;

	if (g_isMSIE)
	{
		oXmlHttp = new ActiveXObject(g_sMSXMLHTTPProgID);
	}
	else if (g_isFirefox)
	{
		oXmlHttp = new XMLHttpRequest();
	}

	return oXmlHttp;
}

function CreateDOMDocument()
{
	var oDoc;

	if (g_isMSIE)
	{
		oDoc = new ActiveXObject('Microsoft.XMLDOM');
		//oDoc = new ActiveXObject(g_sMSXMLProgID);
	}
	else if (g_isFirefox)
	{
		oDoc = document.implementation.createDocument("", "doc", null);
	}

	return oDoc;
}

function CreateSCO()
{
	oDoc = CreateDOMDocument();

	var oSCO = oDoc.createElement("SCO");
	if (g_isMSIE)
		oDoc.appendChild(oSCO);
	else if (g_isFirefox)
		oDoc.documentElement.appendChild(oSCO);

	var oVisits = oDoc.createElement("visits");
	oSCO.appendChild(oVisits);

	var oObjects = oDoc.createElement("objects");
	oSCO.appendChild(oObjects);

	var oObjectives = oDoc.createElement("objectives");
	oSCO.appendChild(oObjectives);

	var oInteractions = oDoc.createElement("interactions");
	oSCO.appendChild(oInteractions);

	var oObjective=oDoc.createElement("o");
	oObjectives.appendChild(oObjective);
	oObjective.setAttribute("max","100");
	oObjective.setAttribute("min","0");
	oObjective.setAttribute("raw","0");
	oObjective.setAttribute("module","yes");
	
	

//	var oModuleObjectives = g_oModule.selectSingleNode("objectives");
//	if (oModuleObjectives != null)
//	{
//		oModuleObjectives = oModuleObjectives.selectNodes("objective");
//		var nModuleObjectives = oModuleObjectives.length;
//
//		for (var i = 0; i < nModuleObjectives; i++)
//		{
//			var oModuleObjective = oModuleObjectives[i];
//
//			var oObjective = oDoc.createElement("o");
//			oObjectives.appendChild(oObjective);
//
//			var s;
//			s = oModuleObjective.getAttribute("id");
//			oObjective.setAttribute("id", s);
//
//			s = oModuleObjective.getAttribute("name");
//			oObjective.setAttribute("desc", s);
//
//			s = oModuleObjective.getAttribute("module");
//			if (s == "yes")
//				oObjective.setAttribute("module", "yes");
//
//			s = oModuleObjective.getAttribute("cs");
//			if (s == null)
//				s = "n";
//			oObjective.setAttribute("cs", s);
//
//			s = oModuleObjective.getAttribute("ss");
//			if (s == null)
//				s = "u";
//			oObjective.setAttribute("ss", s);
//
//			s = oModuleObjective.getAttribute("scoremax");
//			oObjective.setAttribute("max", s);
//
//			s = oModuleObjective.getAttribute("scoremin");
//			oObjective.setAttribute("min", s);
//
//			oObjective.setAttribute("raw", "0");
//			oObjective.setAttribute("scaled", "0");
//		}
//	}

	g_oDocSCO = oDoc;
	g_oSCO = oSCO;
}

// DetermineMSXMLProgID
function DetermineMSXMLProgID()
{
	var oDoc;
	var sProgID;
	for (var i = 6; i >= 3; i--)
	{
		try
		{
			sProgID = "MSXML2.DOMDocument."+ i +".0";
			oDoc = new ActiveXObject(sProgID);
		}
		catch (e)
		{
		}
		if (typeof(oDoc) != "undefined")
		{
			g_sMSXMLProgID = sProgID;
			g_nFirst = (i <= 3 ? 0 : 1);
			break;
		}
	}
}

// DetermineMSXMLHTTPProgID
function DetermineMSXMLHTTPProgID()
{
	var oDoc;
	var sProgID;
	for (var i = 6; i >= 3; i--)
	{
		try
		{
			sProgID = "MSXML2.XMLHTTP."+ i +".0";
			oDoc = new ActiveXObject(sProgID);
		}
		catch (e)
		{
		}
		if (typeof(oDoc) != "undefined")
		{
			g_sMSXMLHTTPProgID = sProgID;
			break;
		}
	}
}

function UpdateFirefoxDOM()
{
	// selectNodes
	if (document.implementation.hasFeature("XPath", "3.0"))
	{
		XMLDocument.prototype.selectNodes =
			function (cXPathString, xNode)
			{
					if (!xNode)
						xNode = this;

					var oNSResolver = this.createNSResolver(this.documentElement)
					var aItems = this.evaluate(cXPathString, xNode, oNSResolver,
						XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
					var aResult = [];
					for (var i = 0; i < aItems.snapshotLength; i++)
						aResult[i] = aItems.snapshotItem(i);

					return aResult;
			}

		Element.prototype.selectNodes =
			function (cXPathString)
			{
				if (this.ownerDocument.selectNodes)
					return this.ownerDocument.selectNodes(cXPathString, this);
				else
					throw "For XML Elements Only";
			}
	}

	// selectSingleNode
	if (document.implementation.hasFeature("XPath", "3.0"))
	{
		// prototyping the XMLDocument
		XMLDocument.prototype.selectSingleNode =
			function (cXPathString, xNode)
			{
				if (!xNode)
					xNode = this;

				var xItems = this.selectNodes(cXPathString, xNode);
				if (xItems.length > 0)
					return xItems[0];
				else
					return null;
			}

		// prototyping the Element
		Element.prototype.selectSingleNode =
			function (cXPathString)
			{
				if (this.ownerDocument.selectSingleNode)
					return this.ownerDocument.selectSingleNode(cXPathString, this);
				else
					throw "For XML Elements Only";
			}
	}

	// loadXML
	Document.prototype.loadXML =
	function (sXML)
	{
		var objDOMParser = new DOMParser();
		var objDoc = objDOMParser.parseFromString(sXML, "text/xml");
		while (this.hasChildNodes())
			this.removeChild(this.lastChild);
		for (var i=0; i < objDoc.childNodes.length; i++)
		{
			var objImportedNode = this.importNode(objDoc.childNodes[i], true);
			this.appendChild(objImportedNode);
		}
	}

	Node.prototype.__defineGetter__("xml",
	function()
	{
		var oXMLSerializer = new XMLSerializer;
		var sXML = oXMLSerializer.serializeToString(this);
		return sXML;
	});

	// text
	Node.prototype.__defineGetter__("text",
	function()
	{
		var sText = "";

		var oText = this.firstChild;
		while (oText != null)
		{
			if (oText.nodeType == 3 || oText.nodeType == 4)
				sText += oText.nodeValue;

			oText = oText.nextSibling;
		}

		return sText;
	});

	g_nFirst = 1;
}

//function calls
CheckBrowserType();
	if (g_isFirefox)
	{
		UpdateFirefoxDOM();
	}
	else if (g_isMSIE)
	{
		DetermineMSXMLProgID();
		DetermineMSXMLHTTPProgID();
	}

CreateSCO();