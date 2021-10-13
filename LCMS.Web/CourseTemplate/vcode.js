/* Copyright 2004 e-Learning Consulting. All Rights Reserved. See license agreement */
/**
*
* Global Variables
*
**/
lmsAPI = null; /* the SCORM API from the LMS */
API = new Object; /* the SCORM API of the visualizer */
bInitialized = false; /* LMS Init was called */
bFinish = false; /* we finished the session */
sdList = null; /* the top of the scorm data item list */
sLastError = '0'; /* the last error code returned by a SCORM API call */
//sMsgLaunch = 'URL'; //original line... I got lazy and added the next line to keep from typing it over and over
sMsgLaunch = 'index.html';
wSCO = null; /* the course window */
intervalId = null; /* the interval timer to keep track of the SCO window */
wHelp = null; /* the help window */
bRestore = true; /* used to restore the data */

/**
*
* initVisualizer - called when the visualizer frame set is loaded
*
**/
function initVisualizer()
{
	/* init the visualizer SCORM API and set all of the default values based on an initial launch */
	initVisualizerAPI();

	/* get the parent API */
	initAPI(window);

	/* see if can find the SCORM API */
	if (lmsAPI != null)
	{
		/* we can, see if we can initialize */
		if (lmsAPI.LMSInitialize("") == "true")
		{
			/* we can, get all of the data we can get */
			getAllLMSData();
		}
	}
	
	/* fill the windows */
	showLaunch();
	showModify();
	showData();
	showLog('');
}

/**
*
* initVisualizerAPI - init the visualizer SCORM API and set all of the default values based on an initial launch 
*
**/
function initVisualizerAPI()
{
	/* init the SCORM data list */
	initScormData();

	/* create the visualizer SCORM API callbacks */
	API.LMSInitialize     = LMSInitialize;
	API.LMSFinish         = LMSFinish;
	API.LMSSetValue       = LMSSetValue;
	API.LMSGetValue       = LMSGetValue;
	API.LMSGetLastError   = LMSGetLastError;
	API.LMSGetErrorString = LMSGetErrorString;	
	API.LMSCommit         = LMSCommit;
	API.LMSGetDiagnostic  = LMSGetDiagnostic;
}

/**
*
* initScormData - initializes the lsit of SCORM data 
*
**/
function initScormData()
{
	var sdNew;
	
	/* init the SCORM data list */
	sdList = new ScormData('rw','0','cmi.comments','CMIString4096','','',null);
	sdNew = new ScormData('ro','0','cmi.comments_from_lms','CMIString4096','','',sdList);
	sdNew = new ScormData('ro','0','cmi.core._children','CMIString255','"credit","entry","exit","lesson_location","lesson_mode","lesson_status","score","session_time","student_id","student_name","total_time"','credit,entry,exit,lesson_location,lesson_mode,lesson_status,score,session_time,student_id,student_name,total_time',sdNew);
	sdNew = new ScormData('ro','0','cmi.core.credit','CMIVocabulary','"credit":"no-credit"','credit',sdNew);
	sdNew = new ScormData('ro','0','cmi.core.entry','CMIVocabulary','"":"ab-initio":"resume"','ab-initio',sdNew);
	sdNew = new ScormData('wo','0','cmi.core.exit','CMIVocabulary','"":"logout":"suspend":"time-out"','',sdNew);
	sdNew = new ScormData('rw','0','cmi.core.lesson_location','CMIString255','','',sdNew);
	sdNew = new ScormData('ro','0','cmi.core.lesson_mode','CMIVocabulary','"normal":"review":"browse"','normal',sdNew);
	sdNew = new ScormData('rw','0','cmi.core.lesson_status','CMIVocabulary','"passed":"completed":"failed":"incomplete":"browsed":"not attempted"','not attempted',sdNew);
	sdNew = new ScormData('ro','0','cmi.core.score._children','CMIString255','"max","min","raw"','max,min,raw',sdNew);
	sdNew = new ScormData('rw','0','cmi.core.score.max','CMIDecimal','0,100','',sdNew);
	sdNew = new ScormData('rw','0','cmi.core.score.min','CMIDecimal','0,100','',sdNew);
	sdNew = new ScormData('rw','0','cmi.core.score.raw','CMIDecimal','0,100','',sdNew);
	sdNew = new ScormData('wo','0','cmi.core.session_time','CMITimespan','','',sdNew);
		//sdNew = new ScormData('ro','0','cmi.core.student_id','CMIIdentifier','','Joe_Student',sdNew);
	sdNew = new ScormData('ro','0','cmi.core.student_id','CMIIdentifier','','Jo_Student_202010271612',sdNew); //Josephine
		//sdNew = new ScormData('ro','0','cmi.core.student_name','CMIString255','','Student, Joe',sdNew);
	sdNew = new ScormData('ro','0','cmi.core.student_name','CMIString255','','Student 202010271612, Josephine',sdNew);//Josephine
	sdNew = new ScormData('ro','0','cmi.core.total_time','CMITimespan','','00:00:00',sdNew);
	sdNew = new ScormData('ro','0','cmi.interactions._children','CMIString255','"id","objectives","time","type","correct_responses","weighting","student_response","result","latency"','id,objectives,time,type,correct_responses,weighting,student_response,result,latency',sdNew);
	sdNew = new ScormData('ro','0','cmi.interactions._count','CMIInteger','',0,sdNew);
	sdNew = new ScormData('ro','0','cmi.launch_data','CMIString4096','','',sdNew);
	sdNew = new ScormData('ro','0','cmi.objectives._children','CMIString255','"id","score","status"','id,score,status',sdNew);
	sdNew = new ScormData('ro','0','cmi.objectives._count','CMIInteger','',0,sdNew);
	sdNew = new ScormData('ro','0','cmi.student_data._children','CMIString255','"mastery_score","max_time_allowed","time_limit_action"','',sdNew);
	sdNew = new ScormData('ro','0','cmi.student_data.mastery_score','CMIDecimal','','',sdNew);
	sdNew = new ScormData('ro','0','cmi.student_data.max_time_allowed','CMITimespan','','',sdNew);
	sdNew = new ScormData('ro','0','cmi.student_data.time_limit_action','CMIVocabulary','"exit,message":"exit,no message":"continue,message":"continue,no message"','continue,no message',sdNew);
	sdNew = new ScormData('ro','0','cmi.student_preference._children','CMIString255','"audio","language","speed","text"','audio,language,speed,text',sdNew);
	sdNew = new ScormData('rw','0','cmi.student_preference.audio','CMIInteger','-9999,100','0',sdNew);
	sdNew = new ScormData('rw','0','cmi.student_preference.language','CMIString255','','',sdNew);
	sdNew = new ScormData('rw','0','cmi.student_preference.speed','CMIInteger','-100,100','0',sdNew);
	sdNew = new ScormData('rw','0','cmi.student_preference.text','CMIInteger','','0',sdNew);
	sdNew = new ScormData('rw','0','cmi.suspend_data','CMIString4096','-1,1','',sdNew);
}

/**
*
*  deleteScormData - delete the list of SCORM data
*
**/
function deleteScormData()
{
	/* get a pointer to the top of the list */
	var sdCur = sdList;
	
	/* loop until the list is deleted */
	while (sdCur != null)
	{
		sdCur = sdCur.next;
		delete sdCur;
	}
}

/**
*
*  ScormData - a user defined object creation function
*	mode - is the data read-only (ro), read-write (rw) or write-only
*	lastError - the last error returned by the LMS for this data item
*	name - the name of this item, for example cmi.suspend_data
*	type - the type of data, for example CMIString4096
*	range - the range of the data, for example the allowable values for _children
*	value - the value of the data item
*	prev - the previous object in the list, if not null, we insert our new object after the previous one
*
**/
function ScormData(mode, lastError, name, type, range, value, prev)
{
	/* set data items */
	this.mode = mode;
	this.lastError = lastError;
	this.name = name;
	this.type = type;
	this.range = range;
	this.value = value;
	
	/* see if the previous item is null */
	if (prev == null)
	{
		/* it is, we don't need to point this object to anything */
		this.next = null;
	}
	else
	{
		/* insert this object in the list */
		this.next = prev.next;
		prev.next = this;
	}
	
	/* set functions */
	this.setValue = setValue;
	this.insertAlpha = insertAlpha;
}

/**
*
*  getAllLMSData - gets the data available from the LMS 
*
**/
function getAllLMSData()
{
	/* go through the list of scorm data objects */
	for (var sdCur = sdList; sdCur != null; sdCur = sdCur.next)
	{
		/* see if this is read-only or read-write data */
		if (sdCur.mode == 'ro' || sdCur.mode == 'rw')
		{
			/* it is, read it from the LMS */
			getLMSData(sdCur);
		}
	}

	/* get the objectives */
	getObjectives();
}
/**
*
*  getLMSData gets a SCORM value from the LMS 
*		sdCur - a SCORM data object
*
**/
function getLMSData(sdCur)
{
	/* get the data from the LMS */
	var sData = lmsAPI.LMSGetValue(sdCur.name);

	/* get the error */
	sdCur.lastError = lmsAPI.LMSGetLastError();
	
	/* put the value into the SCORM data object with a little bit of error checking */
	sdCur.setValue(sData);
	sLastError = sdCur.lastError;
}

/**
*
*   locateData - find the SCORM data item in the list
*		sName - the name of the data item
**/
function locateData(sName)
{
	for (var sdCur = sdList; sdCur != null; sdCur = sdCur.next)
	{
		if (sdCur.name == sName)
			return sdCur;
	}
	return null;
}

/**
*
*   setValue - store the data value and check to make sure the data format is correct
*		sData - the data to set
**/
function setValue(sData)
{
	var aParts, sVal;
	
	/* set the data, we'll keep track of it no matter what it is */
	sData += "";
	this.value = sData;

	/* set the lmsError to '0' for now, if it fails a test it will be set to the proper error code */
	this.lastError = '0';

	/* see what kind of data we are expecting */
	if (this.type == 'CMIString4096')
	{
		/* see if the length is the right size */
		if (sData.length > 4096)
			this.lastError = '405';
	}
	else if (this.type == 'CMIString255')
	{
		/* see if the length is the right size */
		if (sData.length > 255)
			this.lastError = '405';
	}
	else if (this.type == 'CMIIdentifier')
	{
		/* see if the length is the right size */
		if (sData.length > 255)
			this.lastError = '405';

		/* see if there are any spaces */
		if (sData.indexOf(' ') >= 0)
			this.lastError = '405';
	}
	else if (this.type == 'CMITimespan' || this.type == 'CMITime')
	{
		/* data can be blank */
		if (sData == "")
			return;

		/* see if the time format is correct, check that h:m:s fields are all there, are the 
		*  minimum length and all represent numbers */
		aParts = sData.split(':');
		if (aParts.length < 3 || aParts[0].length < 2 || aParts[1].length <2 || aParts[2].length < 2 ||
		    isNaN(aParts[0]) == true || isNaN(aParts[1]) == true || isNaN(aParts[2]) == true )
		{
			this.lastError = '205';
		}
		else
		{
			/* format seems good so far, break the seconds in whole and fractional parts */
			aParts = aParts[2].split('.');
			
			/* see if there is a fractional part */
			if (aParts.length > 1)
			{
				/* there is, see if there are too many digits in the fractional part */
				if (aParts[1].length > 2)
				{
					/* there are, set the error */
					this.lastError = '205';
				}
			}
		}

	}
	else if (this.type == 'CMIInteger')
	{
		/* data can be blank */
		if (sData == "")
			return;

		/* see if this is a number and an integer*/
		if (isNaN(sData) == true || sData != Math.floor(sData))
			this.lastError = '405';
	}
	else if (this.type == 'CMIDecimal')
	{
		/* data can be blank */
		if (sData == "")
			return;

		/* see if this is a number */
		if (isNaN(sData) == true)
			this.lastError = '405';
	}
	else if (this.type == 'CMIVocabulary')
	{
		/* break apart the range string into an array */
		aParts = this.range.split(':');

		/* loop until we have looked through all of the range items */
		for (i=0; i<aParts.length; i++)
		{
			/* strip the quotes from the range value */
			if (aParts[i] == '""')
				sVal = '';
			else
				sVal = aParts[i].substring(1,aParts[i].length-1);

			/* see if we found a match */
			if (sVal == sData)
				return;
			
			/* see if this could be a decimal value */
			if (sVal == 'CMIDecimal' && isNaN(sData) == false)
				return;
		}

		/* never found a match, must not have been a valid vocabulary value */
		this.lastError = '405';
	}
}

/**
*
*   insertAlpha - insert a ScormData object in an alphabetically sorted list
*		sdTheList - the top of the list
*
**/
function insertAlpha(sdTheList)
{
	/* see if the list is emplty */
	if (sdTheList == null)
	{
		/* it is, return this object as the top of the list */
		return this;
	}
	
	/* see if this object should is alphabetically before the first item in the list */
	if (this.name < sdTheList.name)
	{
		/* it is, insert it in the begining of the list and return the object as the head of the list */
		this.next = sdTheList;
		return this;
	}
	
	var sdNext;
	
	/* look through the list until we find where it fits in alphabetically */
	for (var sdCur = sdTheList; sdCur != null; sdCur = sdCur.next)
	{
		/* see if this is the end of the list */
		if (sdCur.next == null)
		{
			/* it is, insert the object at the end of the list */
			sdCur.next = this;
			return sdTheList;
		}
		
		/* see if it fits after this item */
		sdNext = sdCur.next;
		if (this.name < sdNext.name)
		{
			/* it does, insert it */
			this.next = sdNext;
			sdCur.next = this;
			return sdTheList;
		}
	}
}

/**
*
*   getObjectives - read in all of the objectives from the LMS
*
**/
function getObjectives()
{
	/* get the children */
	var sChildren = lmsAPI.LMSGetValue('cmi.objectives._children');

	/* see if this LMS supports objectives */
	var sError = lmsAPI.LMSGetLastError();
	if (sError != "0")
		return;

	/* get the count of objectives */
	var nCount = lmsAPI.LMSGetValue('cmi.objectives._count') - 0;
	sError = lmsAPI.LMSGetLastError();
	if (sError != "0")
		return;
		
	/* set boolean values to indicate if the children exist */
	var bId = sChildren.indexOf('id');
	var bScore = sChildren.indexOf('score');
	var bStatus = sChildren.indexOf('status');
	
	/* get the location to insert the objectives */
	var sdNew = locateData(sName);
	
	var sName, sValue, bMin, bMax, bRaw;
	
	/* loop until we have read all of the objectives */
	for (var i=0; i<nCount; i++)
	{
		/* see if there is an id to get */
		if (bId)
		{
			/* there is, stick a proptotype of it in the list of SCORM data items */
			sName = 'cmi.objectives.' + i + '.id';
			sdNew = new ScormData('rw','0',sName,'CMIIdentifier','','', sdNew);
			
			/* get the value from the LMS */
			getLMSData(sdNew);
		}
		
		/* see if there is a score to get */
		if (bScore)
		{
			/* there is, get the children */
			sName = 'cmi.objectives.' + i + '.score_childern';
			sValue = lmsAPI.LMSGetValue(sName);
			sError = lmsAPI.LMSGetLastError();
			
			/* see if there is an error getting the children */
			if (sError != '0')
			{
				/* there is not, set booleans for the individual items */
				bMin = sChildren.indexOf('min');
				bMax = sChildren.indexOf('max');
				bRaw = sChildren.indexOf('raw');
				
				/* see if there is a min */
				if (bMin)
				{
					/* there is, stick a proptotype of it in the list of SCORM data items */
					sName = 'cmi.objectives.' + i + '.score.min';
					sdNew = new ScormData('rw','0',sName,'CMIDecimal','0,100','',sdNew);
					
					/* get the value from the LMS */
					getLMSData(sdNew);
				}

				/* see if there is a max */
				if (bMax)
				{
					/* there is, stick a proptotype of it in the list of SCORM data items */
					sName = 'cmi.objectives.' + i + '.score.max';
					sdNew = new ScormData('rw','0',sName,'CMIDecimal','0,100','',sdNew);
					
					/* get the value from the LMS */
					getLMSData(sdNew);
				}

				/* see if there is a raw */
				if (bRaw)
				{
					/* there is, stick a proptotype of it in the list of SCORM data items */
					sName = 'cmi.objectives.' + i + '.score.raw';
					sdNew = new ScormData('rw','0',sName,'CMIDecimal','0,100','',sdNew);
					
					/* get the value from the LMS */
					getLMSData(sdNew);
				}				
			}
		}

		/* see if there is a status to get */
		if (bStatus)
		{
			/* there is, stick a proptotype of it in the list of SCORM data items */
			sName = 'cmi.objectives.' + i + '.status';
			sdNew = new ScormData('rw','0',sName,'CMIVocabulary','"passed":"completed":"failed":"incomplete":"browsed":"not attempted"','',sdNew);
			
			/* get the value from the LMS */
			getLMSData(sdNew);
		}
	}
}

/**
*
*   showLaunch - show the launch controls in the launch window
*
**/
function showLaunch()
{
	/* create a the form to launch the course */
	var sData  = '<form name="launchit">';
	sData += '<strong>SCO URL: </strong>';
	sData += '<input type=text size=40 name=url value="' + sMsgLaunch + '"  onkeypress="return noenter()" /> &nbsp;';
	sData += '<input type=button name=launch value="Launch" onclick="parent.launchCourse();return false;" /> &nbsp;';
	if (lmsAPI == null)
	{
		sData += '<input type=button name=relaunch value="Relaunch" onclick="parent.relaunchCourse();return false;" /> &nbsp;';
		sData += '<input type=button name=reset value="Reset" onclick="parent.resetData();return false;" /> &nbsp;';
		sData += '<input type=button name=reset value="Save" onclick="parent.saveData();return false;" /> &nbsp;';
		sData += '<input type=button name=reset value="Restore" onclick="parent.restoreData();return false;" /> &nbsp;';
	}
	sData += '<input type=button name=help value="Help" onclick="parent.showHelp();return false;" /> &nbsp;';
	sData += '</form>';
	
	/* show it */
	var bod = window.launch.document.getElementById("bodyid");	
	bod.innerHTML = sData;
}

/**
*
*   showModify - show the modify controls in the modify window
*
**/
function showModify()
{
	/* tell the user how to modify data irems */
	var sData  = '<p>If you would like to change the value of one of the data items below, click on it and then modify it in this window.<p>';
	
	/* show it */
	var bod = window.modify.document.getElementById("bodyid");	
	bod.innerHTML = sData;
}

/**
*
*   showData - show the SCORM data in the data window
*
**/
function showData()
{
	/* create the table for the data */
	var sData =  '<table border=1>';
	sData += '<thead>';
	sData += '<tr>';
	sData += '<th>E</th><th>Data</th><th>Value</th>';
	sData += '</tr>';
	sData += '</thead><tbody>';
	for (sdCur = sdList; sdCur != null; sdCur = sdCur.next)
	{
		sData += '<tr>';
		sData += '<td>' + sdCur.lastError + '</td>';
		sData += '<td><a href="javascript:parent.editData(\'' + sdCur.name + '\')">' + sdCur.name + '</a></td>';
		sVal = sdCur.value == '' ? '&nbsp;' : sdCur.value;
		sData += '<td>' + sVal + '</td>';
		sData += '</tr>';
	}
	sData += '</tbody></table>';		
	
	/* show it */
	var bod = window.data.document.getElementById("bodyid");	
	bod.innerHTML = sData;
}

/**
*
*   showLog - show the log of scorm data calls in the log window
*		sData - data to add to this window
*
**/
function showLog(sData)
{
	/* get the body of the log */
	var bod = window.log.document.getElementById("bodyid");	
	
	/* if there is nothing there, initialize it */
	if (bod.innerHTML == '')
	{
		/* see if have found an LMS */
		if (lmsAPI == null)
			sData = 'Could not find an LMS, running in standalone mode.';
		else
			sData = 'Found an LMS, running in passthrough mode.';
		bod.innerHTML = sData + '<br>The sequence of SCORM API calls made from the SCO will be shown below.';
	}
	else
	{
		/* tack the new text on the end */
		bod.innerHTML += '<br>' + sData;
	}
}

/**
*
*   showHelp - show the help page
*
**/
function showHelp()
{
	/* see if the help window exists */
	if (wHelp == null || wHelp.closed)
	{
		/* it doesn't, create it */
		wHelp = window.open('vhelp.htm', "Help", 'left=60,top=40,width=800,height=600,location=no,menubar=no,resizable=yes,status=no,toolbar=no,scrollbars');
	}
	wHelp.focus();
}

/**
*
*   resetData - resets the SCORM data. Usually used to prior to an initial launch
*			a reset can only be done when we are running in standalone mode
*
**/
function resetData()
{
	/* make sure the SCORM data has been set to intitial entry values */
	deleteScormData();
	initScormData();
	
	/* update the display */
	showData();
	
	/* tell the user in the log */
	showLog('<b>SCORM Data Reset</b>');
}

/**
*
*   saveData - write the SCORM ata to a file so we can stop for now and resume another time
*
**/
function saveData()
{
	/* create the HTML that we will use to reload the SCORM data at a later time */
	var sData = '<html>\r\n<head>\r\n<title>Save Data</title>\r\n';
	sData += '<sc' + 'ript type="text/javascript" language="JavaScript">\r\n';
	sData += 'var aState = new Array(\r\n';
	
	/* store the current launch URL */
	sData += '"sURL","' + escape(window.launch.document.launchit.url.value) + '",\r\n';
	
	/* store the SCORM data */
	for (var sdCur = sdList; sdCur != null; sdCur = sdCur.next)
	{
		sData += '"' + sdCur.name + '","' + escape(sdCur.value) + '",\r\n';
	}
	
	/* create the rest of the HTML */
	sData += '"");\r\n</s' + 'cript>\r\n</head>\r\n';
	sData += '<body onLoad="parent.restoreBuff(aState)">\r\n</body>\r\n</html>';
	
	/* we are about to write the data to the save frame so */
	/* set a global to make sure we do not try to process this now */
	bRestore = false;	
	saveFrame.document.open("text/html","replace");
	saveFrame.document.write(sData);
	saveFrame.document.close();
	
	/* use the IE command to save the file */
	alert('The next Dialog box will ask you to save your SCO data in a file.\n\nPlease save the data in the file "savedata.htm" in the visualizer folder');
	saveFrame.document.execCommand('SaveAs',false,"savedata.htm");
}

/**
*
*   restoreBuff - called when we are ready to get the data store on disk
*		aData - an array of name value pairs
*
**/
function restoreBuff(aState)
{
	var sName, sValue, sdCur, sdNew;
	
	/* see if the restore flag is set */
	if (bRestore)
	{
		/* see if w have enough data */
		if (aState.length < 3)
		{
			alert("The stored data is invalid, restore can not be completed");
			return;
		}

		/* it is, restore the URL */
		window.launch.document.launchit.url.value = unescape(aState[1]);
		
		/* loop through the data to restore the SCORM data */
		for (var i=2; i<aState.length; i++)
		{
			/* get the name */
			sName = aState[i];
			
			/* see if we have all of the data */
			if (sName == "")
			{
				break;
			}
				
			/* get the value */
			sValue = unescape(aState[i+1]);
			
			/* see if we can find this item */
			sdCur = locateData(sName);
			if (sdCur != null)
			{
				/* it does, add the value to our list */
				sdCur.value = sValue;
			}
			else
			{
				/* does not exist, add it */
				sdNew = createScormData(sName)
				if (sdNew != null)
				{
					/* it does, insert it alphabetically into the list */
					sdNew.insertAlpha(sdList);
					
					/* set the value */
					sdNew.value = sValue;
				}
			}
		}
		
		/* update the data window */
		showData();
	}
}

/**
*
*   restoreData - get the SCORM data from a file so we can pick up were we left off
*
**/
function restoreData()
{
	/* set the flag to read in the data */
	bRestore = true;
	
	/* read in the savedata file */
	saveFrame.location.href = nameToURL("savedata.htm");
}

/**
*
*   launchCourse - launch the course specified in the URL form field
*
**/
function launchCourse()
{
	/* if we have a valid URL, tell user we have launched */
	if (verifyURL())
	{
		showLog('<b>SCO Launched</b>');
		launchIt();
	}
}

/**
*
*   verifyURL - make sure user wants to use this URL
*
**/
function verifyURL()
{
	/* get the file name */
	var sName = window.launch.document.launchit.url.value;
	
	/* see if it is blank of our default message */
	//if (sName == '' || sName == sMsgLaunch)
	//I'm lazy, I wanted the default sMsgLaunch to be my filename...
	if (sName == '')
	{
		/* it is, tell the user and quit */
		alert("Please enter the URL of the SCO");
		return false;
	}
	
	/* turn whatever we have in the URL field into a valid URL */
	var sURL = nameToURL(sName);
	
	/* let the user make sure this is a valid URL */
	return confirm('Click OK if the following URL is the launch URL for the SCO\n\n' + sURL);
}

/**
*
*   launchIt - the code to actually launch a course
*
**/
function launchIt()
{
	/* get the file name */
	var sName = window.launch.document.launchit.url.value;
	
	/* turn whatever we have in the URL field into a valid URL */
	var sURL = nameToURL(sName);
	
	/* init our session boolean vals to watch for init and finish */
	bInitialized = false;
	bFinish = false;
	
	/* launch the course in a popup */
	var sWinName;
	if (lmsAPI != null)
		sWinName = "SCO";
	else
		sWinName = "SCOSINGLE";
	wSCO = window.open(sURL, sWinName, sLaunchParams);
	wSCO.focus();
	
	/* set an interval timer to check for window existence */
	intervalId = setInterval('checkSCO()',1000);
}


/**
*
*   relaunchCourse - relaunch the course specified in the URL form field
*		a relaunch can only be done when we are running in standalone mode
*
**/
function relaunchCourse()
{
	/* if we have a valid URL, tell user we have relaunched */
	if (verifyURL())
	{
		showLog('<b>SCO Relaunched</b>');
		launchIt();
	}
}

/**
*
*   checkSCO - see if the SCO window still exists, if not, wrap up the SCORM session
*
**/
function checkSCO()
{
	/* see if the window is closed */
	if (wSCO.closed)
	{
		/* it is, cancel the interval timer */
		clearInterval(intervalId);
		intervalId = null;
		
		/* wrap up the SCORM session */
		finishSession();
	}
}

/**
*
*   finishSession - the SCO window has gone away, make sure we complete the session
*
**/
function finishSession()
{
	var sdStatus, sdRaw, sdMastery, sdExit, sdEntry, sdSession, sdTotal;
	
	/* see if this has been called */
	if (!bFinish)
	{
		/* it has not, remember it */
		bFinish = true;

		/* set the lesson status to completed */
		sdStatus = locateData('cmi.core.lesson_status');
		//sdStatus.value = 'completed';
	
		/* see if a raw score was set */
		sdRaw = locateData('cmi.core.score.raw');
		if (sdRaw.value != "")
		{
			/* it was, get the mastery score */
			sdMastery = locateData('cmi.student_data.mastery_score');
		
			/* see if it has a value */
			if (sdMastery.value != '')
			{
				/* see if the raw score is greater than or equal to the mastery score */
				if (sdRaw.value >= sdMastery.value)
				{
					/* it is, set the status to passed */
					sdStatus.value = 'passed';
				}
				else
				{
					/* it's less, set status to failed */
					sdStatus.value = 'failed';
				}
			}
		}
	
		/* see if the exit was set */
		sdExit = locateData('cmi.core.exit');
		sdEntry = locateData('cmi.core.entry');
		if (sdExit.value = 'suspend')
		{
			sdEntry.value = 'resume';
		}
		else
		{
			sdEntry.value = '';
		}
	
		/* get the session and total times */
		sdSession = locateData('cmi.core.session_time');
		sdTotal = locateData('cmi.core.total_time');
		sdTotal.value = addTimes(sdTotal.value, sdSession.value);
	
	
		/* update the data display */
		showData();
	}
}

/**
*
*   addTimes - add session time to total time return the result
*		timeTotal, timeSession - SCORM formatted times (HHHH:MM:SS.)
*
**/
function addTimes(timeTotal, timeSession)
{
	/* see if there is a session time */
	if (timeSession == '')
		return timeTotal;
	
	/* break apart the times */
	var aTotal = timeTotal.split(':');
	var aSession = timeSession.split(':');
	for (var i=0; i<3; i++)
	{
		aTotal[i] -= 0;
		aSession[i] -= 0;
	}
	var nMin = 0;
	var nHour = 0;
	
	/* add the seconds */
	aTotal[2] += aSession[2];
	if (aTotal[2] > 60)
	{
		nMin = 1;
		aTotal[2] -= 60;
	}
	/* add the minutes */
	aTotal[1] += aSession[1] + nMin;
	if (aTotal[1] > 60)
	{
		nHour = 1;
		aTotal[1] -= 60;
	}
	/* add the hours */
	aTotal[0] += aSession[0] + nHour;
	
	/* format */
	for (i=0; i<3; i++)
	{
		/* avoid math round off problems */
		aTotal[i] = Math.floor((aTotal[i] - 0) * 100) / 100;
		
		/* convert to character */
		aTotal[i] += "";
		
		/* pad with leading 0 if needed */
		if (aTotal[i].length < 2)
			aTotal[i] = '0' + aTotal[i];
	}
	
	/* reassemble and return */
	return aTotal.join(':');
}

/**
*
*   nameToURL - turns a partial URL into a full URL
*
**/
function nameToURL(sName)
{
	/* replace any spaces and turn backslahes into forward slashes */
	sName = sName.replace('%20', ' ');
	sName = sName.replace('\\', '\/');
	
	/* see if this looks like a full URL */
	if ( ! ( sName.match(/^(http|https|file):\/\/[A-Za-z0-9-]+\.[A-Za-z0-9]+/) ) )
	{
		/* it does not, put the baseref of this page in front of the name */
		var sWinURL = window.location.href;
		var sBaseRef = sWinURL.substring(0, sWinURL.lastIndexOf('/') );
		sName = sBaseRef + '/' + sName;
	}
	return sName;
}

/**
*
*   editData - show the SCORM data item so it can be editted
*		sName - the name of the SCORM data item
*
**/
function editData(sName)
{
	/* find the SCORM data item object and get its value */
	var sdCur = locateData(sName);
	var sValue = sdCur.value;
	
	/* build the form to modify the selected SCORM data */
	var sData =  '<form name="updateform">';
	sData += '<input type=submit name=update value="Update" onclick="parent.updateData(\'' + sName + '\');return false;" /> &nbsp;';
	sData += sName + ' = ';
	sData += '<input type=text name=dataval value="' + sValue + '" size=80 onkeypress="return noenter()" />';
	sData += '</form>';

	/* show it */
	var bod = window.modify.document.getElementById("bodyid");	
	bod.innerHTML = sData;
}

/**
*
*   updateData - takes the info from the modify form and updates the appropriate SCORM data
*		sName - the name of the SCORM data item
*
**/
function updateData(sName)
{
	/* get the data value */
	var sValue = window.modify.document.updateform.dataval.value;

	/* locate the SCORM data item */
	var sdCur = locateData(sName);
	
	/* adjust the data type for numbers */
	if (sdCur.mode == 'CMIInteger' || sdCur.mode == 'CMIDecimal')
		sValue = sValue - 0;
		
	/* remember this value */
	sdCur.value = sValue;

	/* redraw the data window */
	showData();
}

/**
*
*   termVisualizer - terminate the visualizer frameset
*
**/
function termVisualizer()
{
}

/**
*
*   findAPI - look up through the frameset hierarchy for the SCORM API
*
**/
function findAPI(win)
{
	while ((win.API == null) && (win.parent != null) && (win.parent != win))
	{
		win = win.parent;
	}
	return win.API;
}

/**
*
*   initAPI - init the global variable that holds the LMS supplied SCORM API
*
**/
function initAPI(win)
{
	/* see if we are in a frameset */
	if (win.parent != null && win != win.parent)
	{
		/* we are, look for the API in the frameset */
		lmsAPI = findAPI(win.parent);
	}
	else if (win.opener != null)
	{
		/* must be in an opener, look for the API there */
		lmsAPI = findAPI(win.opener);
	}
	else
	{
		/* not launched by an LMS */
		lmsAPI = null;
	}
}

/**
*
*   LMSInitialize - the visualizer function to handle LMSInitialize
*
**/
function LMSInitialize(value)
{
	/* set a global variable to remmember this call was made */
	bInitialized = true;
	var sData = '';
	
	/* see if there is a LMS provided SCORM API */
	if (lmsAPI != null)
	{
		/* there is, call it and save the result */
		sReturn = lmsAPI.LMSInitialize(value);
		sLastError = lmsAPI.LMSGetLastError();
	}
	else
	{
		/* just calling our API, we always return true */
		sReturn = "true";
		
		/* see if this is a legal value */
		if (value != "")
		{
			/* it is not, set the error */
			sLastError = '201';
		}
		else
		{
			sLastError = '0';
		}
	}
	
	/* see if this is a legal value */
	if (value != "")
	{
		/* it is not, tell the user */
		sData += '<br>Your call to LMSInitialize passed an illegal value = (' + value + ')<br>';
	}	
	
	/* build the string for the log */
	sData += 'Called LMSInitialize(' + value + ') - returned: ' + sReturn;
	
	/* update the log */
	showLog(sData);
	
	/* return the result */
	return sReturn;
}

/**
*
*   LMSFinish - the visualizer function to handle LMSFinish
*
**/
function LMSFinish(value)
{
	var sReturn;
	
	var sData = '';
	
	/* see if there is a LMS provided SCORM API */
	if (lmsAPI != null)
	{
		/* there is, call it and return the result */
		sReturn = lmsAPI.LMSFinish(value);
	}
	else
	{
		/* just calling our API, we always return true */
		sReturn = "true";
		
		/* see if this is a legal value */
		if (value != "")
		{
			/* it is not, set the error */
			sLastError = '201';
		}
		else
		{
			sLastError = '0';
		}
	
		/* check to see if initialize was called */
		sData = checkInit(sData);

		/* wrap up the SCO */
		finishSession();
	}
	
	/* see if this is a legal value */
	if (value != "")
	{
		/* it is not, tell the user */
		sData += '<br>The call to LMSFinish passed an illegal value = (' + value + ')<br>';
	}	

	/* build the string for the log */
	sData += 'Called LMSFinish(' + value + ') - returned: ' + sReturn;

	/* update the log */
	showLog(sData);
	
	/* return the result */
	return sReturn;
}

/**
*
*   checkInit - see if LMSInitialize has been called, if not add an error to the log string
*		sData - the error log string
*
**/
function checkInit(sData)
{
	if (!bInitialized)
	{
		sData += '<br><b>Error:</b>Illegal Function call before LMSInitialize.<br>';
		sLastError = '301';
	}
	return sData;
}

/**
*
*   LMSGetValue - the visualizer function to handle LMSGetValue
*		sName - the name of the SCORM data item
*
**/
function LMSGetValue(sName)
{
	var sReturn, sdCur, sPart;
	
	/* init the string to send to the log */
	var sData = '';
	
	/* assume we have no error unless we learn otherwise */
	sLastError = '0';

	/* see if there is a LMS provided SCORM API */
	if (lmsAPI != null)
	{
		/* there is, call it and save the result */
		sReturn = lmsAPI.LMSGetValue(sName);
	}
	else
	{
		/* just calling our API, see if this data already exists */
		sdCur = locateData(sName);
		sReturn = '';
		if (sdCur != null)
		{
			/* it is, see if it was write only data */
			if (sdCur.mode == 'wo')
			{
				/* it was, give back an error */
				sLastError = '404';
			}
			else
			{
				/* must be a legal call, return the value and set the error */
				sReturn = sdCur.value;
			}
		}
		else
		{
			/* we don't have this data so it must be invalid */
			/* see if it is an attempt to look for children */
			if (sName.indexOf('._children') > -1)
			{
				/* it is, break off the last part and see if we can find it in our array */
				sPart = sName.substring(0,sName.lastIndexOf('._children'));
				sdCur = locateData(sPart);
				if (sdCur != null)
				{
					/* attempted to get children of a non-array value */
					sLastError = '202';
				}
			}
			else if (sName.indexOf('._count') > -1)
			{
				/* looking for count break off the last part and see if we can find it in our array */
				sPart = sName.substring(0,sName.lastIndexOf('._count'));
				sdCur = locateData(sPart);
				if (sdCur != null)
				{
					/* attempted to get children of a non-array value */
					sLastError = '203';
				}
			}
			
			/* see if we set an error */
			if (sLastError == '0')
			{
				/* we did not, set it for an incorrect name */
				sLastError = '201';
			}			
		}
		/* check to see if initialize was called */
		sData = checkInit(sData);
	}
	
	/* build the string for the log */
	sData += 'Called LMSGetValue(' + sName + ') - returned: "' + sReturn + '"';
	
	/* update the log */
	showLog(sData);
	
	/* return the result always as a string */
	return sReturn + '';
}

/**
*
*   LMSSetValue - the visualizer function to handle LMSSetValue
*		sName - the name of the SCORM data item
*		sValue - the new value
*
**/
function LMSSetValue(sName, sValue)
{
	var sdCur, sdNew, sReturn;
	
	/* init the string to send to the log */
	var sData = '';

	/* see if there is a LMS provided SCORM API */
	if (lmsAPI != null)
	{
		/* there is, call it and save the result */
		sReturn = lmsAPI.LMSSetValue(sName, sValue);
		
		/* see if the LMS accepted it */
		if (sReturn == 'true')
		{
			/* it did, see if the data item already exists in our list */
			sdCur = locateData(sName);
			if (sdCur != null)
			{
				/* it does, add the value to our list */
				sdCur.value = sValue;
			}
			else
			{
				/* does not exist, add it */
				sdNew = createScormData(sName)
				if (sdNew != null)
				{
					/* it does, insert it alphabetically into the list */
					sdNew.insertAlpha(sdList);
					
					/* set the value */
					sdNew.value = sValue;
				}
			}
		}
	}
	else
	{
		/* see if the data item already exists */
		sdCur = locateData(sName);
		sReturn = 'false';
		if (sdCur != null)
		{
			/* it does, see if this data can be written */
			if (sdCur.mode == 'wo' || sdCur.mode == 'rw')
			{
				/* it can, set the data */
				sdCur.setValue(sValue);
				
				/* set the global error value to the format error in this item */
				sLastError = sdCur.lastError;
				
				/* see if there was an error */
				if (sLastError  == '0')
				{
					/* no error, return true */
					sReturn = 'true';
				}
			}
			else
			{
				/* item is read-only, it cannot be written */
				sLastError = '403';
			}
		}
		else
		{
			/* the name is not in the list, see if it has a legal format */
			sdNew = createScormData(sName)
			if (sdNew != null)
			{
				/* it does, insert it alphabetically into the list */
				sdNew.insertAlpha(sdList);
				
				/* set the value */
				sdNew.setValue(sValue);
				sLastError = sdNew.lastError;
				sReturn = 'true';
			}
			else
			{
				/* illegal data item  */
				sLastError = "201";
			}
		}

		/* check to see if initialize was called */
		sData = checkInit(sData);
	}

	/* build the string for the log */
	sData += 'Called LMSSetValue(' + sName + ', "' + sValue + '") - returned: ' + sReturn;
	
	/* update the log */
	showLog(sData);
	
	/* update the scorm data list */
	showData();
	
	/* return the result */
	return sReturn;
}

/**
*
*   createScormData - tries to create a SCORM data item given a name of a data item
*		sName - the name of the data item
*
**/
function createScormData(sName)
{
	var nNum, sMode, sType, sdCur, nCurCount;
	
	/* set an error for an illegal value. This will remain set if we return a null */
	sLastError = '201'; 
	var sRange = ''; /* default range of the new object */
		
	/* see if this is a potential match for an objectives item */
	if ( sName.match(/^cmi\.objectives\.(\d){1,}\./) )
	{
		/* it is a potential objectives item, remember the number */
		nNum = RegExp.$1 - 0;
		sMode = 'rw'; /* default mode of the new object */

		/* find the specific data item */
		if (sName.match(/^cmi\.objectives\.\d{1,}\.id$/))
		{
			/* cmi.objectives.n.id */
			sType = 'CMIIdentifier';
		}
		else if (sName.match(/^cmi\.objectives\.\d{1,}\.score\.(min|max|raw)$/))
		{
			/* cmi.objectives.n.min max or raw */
			sType = 'CMIDecimal';
			sRange = '0,100';
		}
		else if (sName.match(/^cmi\.objectives\.\d{1,}\.status$/))
		{
			/* cmi.objectives.n.status */
			sType = 'CMIVocabulary';
			sRange = '"passed":"completed":"failed":"incomplete":"browsed":"not attempted"';
		}
		else
		{
			/* not a match, return null */
			return null;
		}
		
		/* get the current count of objectives */
		sdCur = locateData('cmi.objectives._count');
		nCurCount = sdCur.value - 0;
		
		/* see if the number passed is too high, that is, is it more that one past the current count */
		if (nNum > (nCurCount + 1) )
		{
			/* it is, this makes it an illegal value */
			return null;
		}
		
		/* see if we need to increment the count */
		if (nNum == nCurCount)
			sdCur.value += 1 - 0;
		
		/* return the created object */
		return new ScormData(sMode,'0',sName,sType,sRange,'',null);
	}
	else if ( sName.match(/^cmi\.interactions\.(\d){1,}\./) )
	{
		/* its a potential match for an interactions item, remember the number */
		nNum = RegExp.$1 - 0;
		sMode = 'wo'; /* default mode */

		/* find the specific data item */
		if (sName.match(/^cmi\.interactions\.\d{1,}\.id$/))
		{
			/* cmi.interactions.n.id */
			sType = 'CMIIdentifier';
		}
		else if (sName.match(/^cmi\.interactions\.\d{1,}\.objectives._count$/))
		{
			/* cmi.interactions.n.objectives._count */
			/* this is a read-only field */
			sLastError = '403'; 
			return null;
		}
		else if (sName.match(/^cmi\.interactions\.(\d){1,}\.objectives.(\d){1,}.id$/))
		{
			/* cmi.interactions.n.objectives.n.id */
			/* see if the count data item exists */
			sCount = 'cmi.interactions.' + RegExp.$1 + '.objectives._count';
			sdCur = locateData(sCount);
			if (sdCur == null)
			{
				/* it doesn't, see if this is the 0 index objective */
				if (RegExp.$2 == 0)
				{
					/* it does, we will need to create the count */
					sdCur = new ScormData('r','0',sCount,'CMIInteger','',1,null);
					sdCur.insertAlpha(sdList);
				}
				else
				{
					/* this is an invalid data item */
					return null;
				}
			}
			else
			{
				/* get the current count of objectives */
				nCurCount = sdCur.value - 0;
				
				/* see if the number passed is too high, that is, is it more that one past the current count */
				if (RegExp.$2 > (nCurCount + 1) )
				{
					/* it is, this makes it an illegal value */
					return null;
				}
	
				/* see if we need to increment the count */
				if (nNum == nCurCount)
					sdCur.value += 1 - 0;
			}
			
			/* set the values to insert this item */
			sType = 'CMIIdentifier';
		}
		else if (sName.match(/^cmi\.interactions\.\d{1,}\.time$/))
		{
			/* cmi.interactions.n.time */
			sType = 'CMITime';
		}
		else if (sName.match(/^cmi\.interactions\.\d{1,}\.type$/))
		{
			/* cmi.interactions.n.type */
			sType = 'CMIVocabulary';
			sRange = '"true-false":"choice":"fill-in":"matching":"performance":"likert":"sequencing":"numeric"';
		}
		else if (sName.match(/^cmi\.interactions\.\d{1,}\.correct_responses._count$/))
		{
			/* cmi.interactions.n.correct_responses._count */
			/* this is a read-only field */
			sLastError = '403'; 
			return null;
		}
		else if (sName.match(/^cmi\.interactions\.(\d){1,}\.correct_responses.(\d){1,}.pattern$/))
		{
			/* cmi.interactions.n.correct_responses.n.pattern */
			/* see if the count data item exists */
			sCount = 'cmi.interactions.' + RegExp.$1 + '.correct_responses._count';
			sdCur = locateData(sCount);
			if (sdCur == null)
			{
				/* it doesn't, see if this is the 0 index objective */
				if (RegExp.$2 == 0)
				{
					/* it does, we will need to create the count */
					sdCur = new ScormData('r','0',sCount,'CMIInteger','',1,null);
					sdCur.insertAlpha(sdList);
				}
				else
				{
					/* this is an invalid data item */
					return null;
				}
			}
			else
			{
				/* get the current count of objectives */
				nCurCount = sdCur.value - 0;
				
				/* see if the number passed is too high, that is, is it more that one past the current count */
				if (RegExp.$2 > (nCurCount + 1) )
				{
					/* it is, this makes it an illegal value */
					return null;
				}
	
				/* see if we need to increment the count */
				if (nNum == nCurCount)
					sdCur.value += 1 - 0;
			}
			
			/* set the values to insert this item */
			sType = 'CMIFeedback';
		}
		else if (sName.match(/^cmi\.interactions\.\d{1,}\.weighting$/))
		{
			/* cmi.interactions.n.weighting */
			sType = 'CMIDecimal';
		}
		else if (sName.match(/^cmi\.interactions\.\d{1,}\.student_response$/))
		{
			/* cmi.interactions.n.student_response */
			sType = 'CMIFeedback';
		}
		else if (sName.match(/^cmi\.interactions\.\d{1,}\.result$/))
		{
			/* cmi.interactions.n.result */
			sType = 'CMIVocabulary';
			sRange = '"correct":"wrong":"unanticipated":"neutral":"CMIDecimal"';
		}
		else if (sName.match(/^cmi\.interactions\.\d{1,}\.latency$/))
		{
			/* cmi.interactions.n.latency */
			sType = 'CMITimespan';
		}
		else
		{
			/* not a match, return null */
			return null;
		}
		
		/* get the current count of interactions */
		sdCur = locateData('cmi.interactions._count');
		nCurCount = sdCur.value - 0;
		
		/* see if the number passed is too high, that is, is it more that one past the current count */
		if (nNum > (nCurCount + 1) )
		{
			/* it is, this makes it an illegal value */
			return null;
		}

		/* see if we need to increment the count */
		if (nNum == nCurCount)
			sdCur.value += 1 - 0;

		/* return the created object */
		return new ScormData(sMode,'0',sName,sType,sRange,'',null);
	}
	
	/* it's neither, set the error and bail out */
	sLastError = '201'; 
	return null;	
}

/**
*
*   LMSGetLastError - the visualizer function to handle LMSGetLastError
*
**/
function LMSGetLastError()
{
	/* init the string to send to the log */
	var sData = '';

	/* see if there is a LMS provided SCORM API */
	if (lmsAPI != null)
	{
		/* there is, call it and save the result */
		sLastError = lmsAPI.LMSGetLastError();
	}
	
	/* build the string for the log */
	sData += 'Called LMSGetLastError() - returned: ' + sLastError;
	
	/* update the log */
	showLog(sData);
	
	return sLastError;
}

/**
*
*   LMSGetErrorString - the visualizer function to handle LMSGetErrorString
*
**/
function LMSGetErrorString(value)
{
	var sReturn = "";
	
	/* init the string to send to the log */
	var sData = '';

	/* see if there is a LMS provided SCORM API */
	if (lmsAPI != null)
	{
		/* there is, call it and save the result */
		sReturn = lmsAPI.LMSGetErrorString(value);
	}
	else
	{
		if (value == "0")   sReturn = "No error";
		else if (value == "101") sReturn = "General exception";
		else if (value == "201") sReturn = "Invalid argument error";
		else if (value == "202") sReturn = "Element cannot have children";
		else if (value == "203") sReturn = "Element not an array – cannot have count";
		else if (value == "301") sReturn = "Not initialized";
		else if (value == "401") sReturn = "Not implemented error";
		else if (value == "402") sReturn = "Invalid set value, element is a keyword";
		else if (value == "403") sReturn = "Element is read only";
		else if (value == "404") sReturn = "Element is write only";
		else if (value == "405") sReturn = "Incorrect Data Type";
		else
		{
			sData +='<br>Illegal value passed to LMSGetErrorString, value = (' + value + ')<br>';
		}
	}
	
	/* build the string for the log */
	sData += 'Called LMSGetErrorString(' + value + ') - returned: ' + sReturn;
	
	/* update the log */
	showLog(sData);
	
	/* return the result */
	return sReturn;
}

/**
*
*   LMSCommit - the visualizer function to handle LMSCommit
*
**/
function LMSCommit(value)
{
	var sReturn;
	
	/* init the string to send to the log */
	var sData = '';

	/* see if there is a LMS provided SCORM API */
	if (lmsAPI != null)
	{
		/* there is, call it and save the result */
		sReturn = lmsAPI.LMSCommit(value);
	}
	else
	{
		/* we always return true */
		sReturn = 'true';
	}
	
	/* see if this is a legal value */
	if (value != "")
	{
		/* it is not, tell the user */
		sData += '<br>LMSCommit passed an illegal value = (' + value + ')<br>';
	}	
	
	/* build the string for the log */
	sData += 'Called LMSCommit(' + value + ') - returned: ' + sReturn;
	
	/* update the log */
	showLog(sData);
	
	/* return the result */
	return sReturn;
}

/**
*
*   LMSGetDiagnostic - the visualizer function to handle LMSGetDiagnostic
*
**/
function LMSGetDiagnostic(value)
{
	/* init the string to send to the log */
	var sData = '';

	/* see if there is a LMS provided SCORM API */
	if (lmsAPI != null)
	{
		/* there is, call it and save the result */
		sReturn = lmsAPI.LMSGetDiagnostic(value);
	}
	else
	{
		/* we're not a real LMS so return something from the magic 8-ball */
		sReturn = 'REPLY HAZY, TRY AGAIN';
	}
	
	/* build the string for the log */
	sData += 'Called LMSGetDiagnostic(' + value + ') - returned: ' + sReturn;
	
	/* update the log */
	showLog(sData);
	
	/* return the result */
	return sReturn;
}