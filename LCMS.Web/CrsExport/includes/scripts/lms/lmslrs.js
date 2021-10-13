/*********************************/
/*     SCORM Initialization      */
/*********************************/
function initCourse(){
	//turned off based on courseType -- for now, only "demo" should not report
	if(courseType.indexOf("demo") !== -1){
		isSCORM = false;
		isXAPI = false;
	}else{
		//make sure that no one can access the course until the lrs data is delivered...
		document.getElementById("terms_cover").style.display = "block";
	}

	//if we are using scorm to connect to a LMS...
	if(courseType !== "hioc"){
		if(isSCORM){
			
			//find out if the course is already connected to the scorm api
			g_stillConnected = LMSIsInitialized();
			//if not connected, then connect...
			if(!g_stillConnected){
				lmsConnected = doLMSInitialize();
			}else{
				//anything??
			}

			//If the doLMSInitialize succeeded...
			if(lmsConnected || g_stillConnected){
			
				//get the completion status 
				completionstatus = doLMSGetValue("cmi.core.lesson_status");
				
				//!!!NOTE: Can't send any completion to the LMS in Hybrid courses unless the value is "PASSED" or "FAILED"!!! (lower case of course)
				/*if(courseType !== "hybrid" || courseType === "pdf"){
					//best practice: set the lesson_status to incomplete if the course has not been accessed before
					if(completionstatus === "not attempted" || completionstatus === "unknown"){
						doLMSSetValue("cmi.core.lesson_status","incomplete");
					}
				}*/
				
				sID = doLMSGetValue("cmi.core.student_id");
				
				//COURSE ATTEMPTS...
				bSuspendData = doLMSGetValue("cmi.suspend_data");

			//If the course couldn't connect to the LMS for some reason...
			} else {
				handleError("Error: Course could not connect with the LMS");
			}
		}
	}else{
		//AICC
		if(courseType.indexOf("hioc") !== -1 && courseType.indexOf("demo") === -1){
			loadPage();
		}
	}

	//GET THE STUDENT NAME
	if(courseType.indexOf("demo") === -1){
		if(courseType.indexOf("hioc") === -1 ){
			bStudentName = doLMSGetValue("cmi.core.student_name"); // SCORM
		}else{
			bStudentName = getAICCData("cmi.core.student_name"); //AICC
			completionstatus = getAICCData("cmi.core.lesson_status");
		}
	}

	//STUDENT NAME
	//DISPLAY THE STUDENT'S FIRST NAME
	if (bStudentName !== ""){
		//display the username: first name + last name
		var fullname = bStudentName.split(","); 
		//using substr to remove the extra space before the first name...
		studentnamefinal = fullname[1].substr(1,fullname[1].length - 1) + " " + fullname[0];
		sFirstname = fullname[1];
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//DEFAULT VALUES FOR xAPI STATE			
	//Honesty Statements and Bookmarks
	for(var i = 0; i < TOC.length; i++){
		honestyStatements[i] = 0;
		gBookmarks[i] = [];
		for(var j = 0; j <= lessonCounts[i]; j++){
			gBookmarks[i][j] = 1;
		}
	}

	//INITIALIZE PAGE VIEWS
	for(var j = 0; j < TOC.length; j++){
		bPageViews[j] = [];
		for(var k = 0; k < TOC[j].length; k++){
			bPageViews[j][k] = [];
			for (var l = 0; l < TOC[j][k].length - 1; l++){
				bPageViews[j][k][l] = 0;
			}
		}
	}

	//set up bLessonCompletions with empty slots for each module and lesson
	/* for (var c = 0; c < TOC.length; c++){
		var bTempCount = TOC[c].length;
			console.log(bTempCount);
		var bFinalCount = bTempCount.length;
			console.log(bFinalCount);
		bLessonCompletions[c] = [];
		
		for(var d = 0; d < bFinalCount; d++){
			bLessonCompletions[c][d] = "---- - -- - --";
		}
	}  */

	//Setting up bLessonCompletions
	/* for(var i = 0; i < TOC.length; i++){
		for (var j = 0; j < TOC[i].length; j++){
			bLessonCompletions[i][j] = "---- - -- - --";
		}
	} */

	//set up bLessonCompletions with empty slots for each module and lesson
	for (var c = 0; c < TOC.length; c++){
		var bTempCount = TOC[c].length; // find out how many lessons there are in each module
			//console.log(bTempCount);

		bLessonCompletions[c] = []; // create an array for each module
		
		for(var d = 0; d < bTempCount; d++){
			bLessonCompletions[c][d] = "---- - -- - --"; //set default values for each lesson completion
		}
	} 
	//console.log(bLessonCompletions);


	

	//Setting up
	for(var page = 0; page < TOC[0][0].length; page++){
		if(TOC[0][0][page].hasOwnProperty("Questions_YN") && TOC[0][0][page].Questions_YN > 0){
			allPgQue[page] = [];
			//console.log(TOC[0][0][page]);
			for(var qcount = 0; qcount < parseInt(TOC[0][0][page].QuestionCount); qcount++){
				allPgQue[page][qcount] = {
					page_nm: page,
					question: qcount,
					answer: 0,
					choice: 0,
					module_number: 1,
				};
			}
		}else{
			allPgQue[page] = [""];
		}
	}
	//Scores
	for (var i = 0; i < TOC.length; i++){
		moduleScores[i] = [0, "---- - -- - --"];
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////	

	if(isXAPI){
		lrsInitialize();
	}
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

//xAPI Initialization...
function lrsInitialize() {
	//SCORM
	if (courseType !== "hioc"){
		//PRODUCTION
		try {
			lrsActor = window.parent.scorm_course_api.strUserId; // GUID
			courseGUID = window.parent.scorm_course_api.strCourseId;
		}
		catch (ex) {
			//values not found...
		}
		//LOCAL
		if (!lrsActor) {  
			lrsActor = sID; //SCORM Student ID
		}
		if (!courseGUID) {
			courseGUID = courseName;
		}
	//AICC
	}else{
		//console.log(getUrlParameter("AICC_SID"));
		var student_and_course = getUrlParameter("AICC_SID");
		var sacArray = student_and_course.split("|");
		//console.log("student = " + sacArray[0]);
		//console.log("course = " + sacArray[1]);
		lrsActor =  sacArray[0];
		courseGUID = sacArray[1];
		
		//works for SCORMCloud, not sure if other LMSs will be the same as Meridian or SCORMCloud... 
		//REMEMBER TO USE THE NON-MERIDIAN AICC.JS FILE!!!
		if(sacArray[1] === undefined || sacArray[1] === ""){
			lrsActor =  getAICCData("cmi.core.student_id");
			courseGUID = course_settings.Portal_Setup.Course_Name;
		}
	}

	/////////////////////////////////////////////////////////////////////////////////////
	//LogRocket
	//var lomatestname = getAICCData("cmi.core.student_name");
	//var lomatestid = getAICCData("cmi.core.student_id");//***
	//console.log("lomatestname = " + lomatestname);
	//console.log("lomatestid = " + lomatestid);
	//LogRocket.identify(lomatestid);//***
	//LogRocket.identify(lrsActor);
	/////////////////////////////////////////////////////////////////////////////////////

	/////////////////////////////////////////////////////////////////////////////////////
	// USED BY PQSE AND EXAM CODE
	window.lrsActorID = lrsActor;
    window.lrsCourseGUID = courseGUID;
	window.lrsActorName = studentnamefinal;
	lrsCourseAttempt = bAttemptCount;
	window.lrsCourseType = courseType;
	
	if(completionstatus === "not attempted" || completionstatus === "unknown" || completionstatus === "i" || completionstatus === "n" || ResetSCORMLessonStatus === "true"){
		lrsCourseStatus = "in progress";
	}else{
		lrsCourseStatus = completionstatus;
	}
	/////////////////////////////////////////////////////////////////////////////////////
	
	// creating user 
	gUser = new TinCan.Agent({
		name: studentnamefinal,
		"account": {
			name: lrsActor, // GUID or SCORM ID			
			"homePage": getHostname() //"homePage": "http://learning.loma.org/"
		}
	});
	//Only for retrieving info from old accounts
	gUser_old = new TinCan.Agent({
		name: lrsActor,// GUID or SCORM ID	
		"account": {
			name: studentnamefinal,		
			"homePage": getHostname() //"homePage": "http://learning.loma.org/"
		}
	});
    
    // Determine the proper LRS to report to...
    var bHostName = window.location.hostname;
    var bHostProtocol = window.location.protocol;	
    //console.log("bHostName = " + bHostName);
	//console.log("bHostProtocol = " + bHostProtocol);

	//ONLY USE SCORMCLOUD IF IT'S A LOCAL TEST
/* 	if(bHostProtocol.indexOf("file:") !== -1){
		useSCORMCloud = true;
	//Otherwise, it should go to the production lrs...
	}else{
		useLOMAProd = true;
	} */

	// Is it local, on Staging,  or on SCORMCloud?

	if(bHostProtocol.indexOf("file:") !== -1){useSCORMCloud = true;} // DESKTOP
	if(document.referrer.indexOf(STAGELMS) !== -1){useSCORMCloud = true;} // STAGING
	if(document.referrer.indexOf(SCORMCLOUDLMS) !== -1){useSCORMCloud = true;} // SCORM Cloud
	if(document.referrer.indexOf(PRODLMS) !== -1){useLOMAProd = true;} // PRODUCTION
	if(document.referrer.indexOf(INTLMS) !== -1 ){useLOMAProd = true;} // INTEGRATION

	//console.log("useSCORMCloud = " + useSCORMCloud);
	//console.log("useLOMAProd = " + useLOMAProd);
	
	//COMMENT OUT FOR PRODUCTION
	//JUST FOR USING SCORMCLOUD ON PRODUCTION LMS
	//useSCORMCloud = true;
	
	//creating LRS Object
	if(useSCORMCloud){
		//SCORM Cloud///////////////////////////////////////////////////////////////
		try {
			lrs = new TinCan.LRS(
				{
					endpoint: "https://cloud.scorm.com/tc/OMLFPP6SMA/sandbox/",
					username: "OMLFPP6SMA",
					password: "lkdanivr15epQNqVhLdCDFlHufFx2P6apO8zWDdU",
					allowFail: false
				}
			);
		} catch (ex) {
			console.log("Failed to setup LRS object: " + ex);
		}
	}else if(useLOMAProd){
		//LOMA's SCORM ENGINE///////////////////////////////////////////////////////
		try {
			lrs = new TinCan.LRS(
				{
					//endpoint: "https://LRS.loma.org/ScormEngineInterface/TCAPI/default/",
					//endpoint: "http://38.103.3.169/ScormEngineInterface/TCAPI/default/",
					endpoint: "https://services.loma.org/us-lrs/ScormEngineInterface/TCAPI/default/",// NEW ENDPOINT!!!
					username: "ap-mgmt",
					password: "ap-mgmt-LOM@-PWD",
					allowFail: false
				}
			);
		} catch (ex) {
			console.log("Failed to setup LRS object: " + ex);
		}
	}else if (useLOMATest){ //CAN ONLY BE USED ON INTERNAL LLG NETWORKS
		//LOMA's SCORM ENGINE///////////////////////////////////////////////////////
		try {
			lrs = new TinCan.LRS(
				{
					endpoint: "https://devlrs.loma.org/ScormEngineInterface/TCAPI/default/",
					//username: "DevLrsUser",
					//password: "DevLrsPassword!",
					username: "ap-mgmt",
					password: "ap-mgmt-password",
					allowFail: false
				}
			);
		} catch (ex) {
			console.log("Failed to setup LRS object: " + ex);
		}
	}

	var browserStatement = {
		"type": "browser",
		"verb": "experienced",
		"activity": "http://activitystrea.ms/schema/1.0/device",
		"objectID": portalSetup.Course_Name.replace(/ /g, '_'), 
		"extensions": studentBrowserInfo
	};
	LRSSend(browserStatement);

	//Get the state objects...
	bGetState(); // --> Will call getEOMState in callback
}

//Used by set/get state functions...
function getPortalActivity(theactivity){
	var stateActivity;
	var lrsCourse;
	var hname = getHostname();
	
	if(theactivity === "portal"){
		lrsCourse = hname + strTestLocaleId + '/' + courseGUID.replace(/ /g, '_');
		stateActivity = {"id": lrsCourse};

	}else if(theactivity === "eom"){
		lrsCourse = hname + 'activities/assessments/' + strTestLocaleId + '/' + courseGUID.replace(/ /g, '_');
		stateActivity = {"id": lrsCourse};
	}
	
	return stateActivity;
}

//Specific to the main portal
function bSetState(){
	var key = 'PortalStatus';

	xapiSaveStateConfig = {
		contentType: "application/json",
		agent: gUser,
		activity: getPortalActivity("portal"),
		callback: function(error, response) {
			if(error !== null){
				//LogRocket.captureException(error); //additional log rocket tracking if needed				
				//alert(course_settings.Portal_Setup.Alerts.LRSError);// #1 - Original alert
				
				//Final - only calls alert message in interface. All information will be in generated email.
				theLRSerror = response;
				doAlert("notconnected");
			}
		}
	};
    
    var gUserState;
	// creating a state object...

	gUserState = {
		dateStarted: dateStarted,

		//Terms of Use
		TermsAccepted: termsViewed,
		
		//Intro Video
		VideoViewed: videoViewed,

		//bookmarks
		gBookmarks: gBookmarks,

		//lesson completions...
		bLessonCompletions: bLessonCompletions,

		//Attempt Count...
		bAttemptCount: bAttemptCount,

		//Pages viewed...
		bPageViews: bPageViews,

		//Honesty...
		honestyStatements: honestyStatements,

		//Ereader...
		hasEreader: hasEreader,

		//Page Question Array (specifically shortcourseA for now)... whatever the last page was...
		allPgQue: allPgQue,

		//Reset SCORM
		ResetSCORMLessonStatus: ResetSCORMLessonStatus

	};

	//try/catch is log rocket, the lrs.saveState call is the normal part of the code
	//try{
		//save the state...
		lrs.saveState(key, gUserState, xapiSaveStateConfig);
	//}catch(err){
		//LogRocket.captureException(err);
	//}
	
}

function bGetState(){
	var key = 'PortalStatus';
	
	xapiGetStateConfig = {
		contentType: "application/json",
		agent: gUser,
		activity: getPortalActivity("portal"),
		callback: function(error, response) {
			if(error || response === null){
				bGetStateOLD();
				return; //make sure the terms/video code doesn't run if the course is getting the info from the old user agent...
			}else{
				gReturnedState = response.contents;
				
				//DATE STARTED...
				if(gReturnedState.hasOwnProperty("dateStarted")){
					dateStarted = gReturnedState.dateStarted; 
				}
				// RESET DATE IF A NEW ATTEMPT (hybrid courses only)
				if(courseType.indexOf("hybrid") !== -1 && bSuspendData.toString() === ""){
					dateStarted = new Date(); 			
				}
				
				//Terms of Use
				if(gReturnedState.hasOwnProperty("TermsAccepted")){termsViewed = gReturnedState.TermsAccepted;}

				//Intro Video
				if(gReturnedState.hasOwnProperty("VideoViewed")){videoViewed = gReturnedState.VideoViewed;}

				//Attempt Count(s)
				if(gReturnedState.hasOwnProperty("bAttemptCount")){lrsCourseAttempt = gReturnedState.bAttemptCount; bAttemptCount = gReturnedState.bAttemptCount; if(course_settings.Portal_Setup.Course_Type.indexOf("hioc") === -1) {doLMSSetValue("cmi.suspend_data", gReturnedState.bAttemptCount);} }
				
				//Honesty Statements...
				if(gReturnedState.hasOwnProperty("honestyStatements")){honestyStatements = gReturnedState.honestyStatements;}                
					
				//Bookmarks...
				if(gReturnedState.hasOwnProperty("gBookmarks")){gBookmarks = gReturnedState.gBookmarks;}

				//PAGE VIEWS...	
				if(gReturnedState.hasOwnProperty("bPageViews")){bPageViews = gReturnedState.bPageViews;}
				
				//lesson completions...
				if(gReturnedState.hasOwnProperty("bLessonCompletions")){bLessonCompletions = gReturnedState.bLessonCompletions;}

				//EREADER...
				if(gReturnedState.hasOwnProperty("hasEreader")){hasEreader = gReturnedState.hasEreader;}

				//ALLPGQUE - Inline questions...
				//if(gReturnedState.hasOwnProperty("allPgQue") && gReturnedState.allPgQue[3][0] !== ""){allPgQue = gReturnedState.allPgQue;}
				if(gReturnedState.hasOwnProperty("allPgQue")){allPgQue = gReturnedState.allPgQue;}
				
				//TERMS AND VIDEO...
				//"showTerms": true,
				//"showIntroVideo": false,

				showTerms = course_settings.Portal_Setup.showTerms;
				showIntroVideo = course_settings.Portal_Setup.showIntroVideo;

				if((showTerms === true && showIntroVideo === true) && (termsViewed !== true || videoViewed !== true)){
					document.getElementById("closeBtn").style.display = "none";
					document.getElementById("acceptBtn").style.display = "inline-block";
					document.getElementById("terms_cover").style.display = "none";
					bShowIntro();
				}else if ((showTerms === true && showIntroVideo === false) && termsViewed !== true){
					document.getElementById("closeBtn").style.display = "none";
					document.getElementById("acceptBtn").style.display = "inline-block";
					showLegal("terms");
				}else{
					document.getElementById("terms_cover").style.display = "none";
				}

				//RESET SCORM ???
				if(gReturnedState.hasOwnProperty("ResetSCORMLessonStatus")){
					ResetSCORMLessonStatus = response.contents.ResetSCORMLessonStatus;
					if(ResetSCORMLessonStatus === true){
						if(bAttemptCount > 1){
							bAttemptCount = bAttemptCount - 1;
						}
						doLMSSetValue("cmi.suspend_data",bAttemptCount);
						doLMSSetValue("cmi.core.lesson_status", "in progress");//"incomplete"? "in progress"? just an empty string?
						doLMSSetValue("cmi.core.score.raw", "");
						doLMSCommit();
						ResetSCORMLessonStatus = false;
					}
				}
			}

			//More can be added here. Especially things that need to happen after all the above has been set...

			//Save all the data to the LRS
			bSetState();

			//Only call the EOMState if needed...
			if(courseType !== "shortcourseA"){
				getEOMState(); // --> will call doCircles() when the eom state is retrieved...
			}
		}
	};

	//try/catch is log rocket, the lrs.retrieveState call is the normal part of the code
	//try{
		//retrieve the state
		lrs.retrieveState(key, xapiGetStateConfig);
	//}catch(err){
	//	LogRocket.captureException(err);
	//}
}
function bGetStateOLD(){
	var key = 'PortalStatus';
	
	xapiGetStateConfig = {
		contentType: "application/json",
		agent: gUser_old, //OLD USER AGENT
		activity: getPortalActivity("portal"),
		callback: function(error, response) {
			if(error || response === null){
				dateStarted = new Date();
				
				//INTRO - Terms and Video
				document.getElementById("closeBtn").style.display = "none";
				document.getElementById("acceptBtn").style.display = "inline-block";
				document.getElementsByClassName("terms_p")[0].innerText = course_settings.Portal_Setup.TermsPrivacy.YouMustAccept;

				//COURSE ATTEMPTS...bAttemptCount
				//No LRS data means that this is the first attempt...
				bAttemptCount = 1;
				bSuspendData = 1;
				lrsCourseAttempt = bAttemptCount; // These should always be equal... unless I can find a way to get rid of one of them...

				if(courseType === "hybrid"){
					//Save attempt count to lms...
					doLMSSetValue("cmi.suspend_data", bAttemptCount); // Need SCORM to save this so it can be checked against xAPI value
				}
				
				//allow access after the default values are set... Necessary?
				document.getElementById("terms_cover").style.display = "none";	

				
			}else{
				gReturnedState = response.contents;
				
				//DATE STARTED...
				if(gReturnedState.hasOwnProperty("dateStarted")){
					dateStarted = gReturnedState.dateStarted; 
				}
				// RESET DATE IF A NEW ATTEMPT (hybrid courses only)
				if(courseType.indexOf("hybrid") !== -1 && bSuspendData.toString() === ""){
					dateStarted = new Date(); 			
				}
				
				//Terms of Use
				if(gReturnedState.hasOwnProperty("TermsAccepted")){termsViewed = gReturnedState.TermsAccepted;}

				//Intro Video
				if(gReturnedState.hasOwnProperty("VideoViewed")){videoViewed = gReturnedState.VideoViewed;}

				//Attempt Count(s)
				if(gReturnedState.hasOwnProperty("bAttemptCount")){lrsCourseAttempt = gReturnedState.bAttemptCount; bAttemptCount = gReturnedState.bAttemptCount; if(course_settings.Portal_Setup.Course_Type.indexOf("hioc") === -1) {doLMSSetValue("cmi.suspend_data", gReturnedState.bAttemptCount);} }
				
				//Honesty Statements...
				if(gReturnedState.hasOwnProperty("honestyStatements")){honestyStatements = gReturnedState.honestyStatements;}                
					
				//Bookmarks...
				if(gReturnedState.hasOwnProperty("gBookmarks")){gBookmarks = gReturnedState.gBookmarks;}

				//PAGE VIEWS...	
				if(gReturnedState.hasOwnProperty("bPageViews")){bPageViews = gReturnedState.bPageViews;}
				
				//lesson completions...
				if(gReturnedState.hasOwnProperty("bLessonCompletions")){bLessonCompletions = gReturnedState.bLessonCompletions;}

				//EREADER...
				if(gReturnedState.hasOwnProperty("hasEreader")){hasEreader = gReturnedState.hasEreader;}

				//ALLPGQUE - Inline questions...
				if(gReturnedState.hasOwnProperty("allPgQue") && gReturnedState.allPgQue[3][0] !== ""){allPgQue = gReturnedState.allPgQue;}

				//RESET SCORM ???
				if(gReturnedState.hasOwnProperty("ResetSCORMLessonStatus")){
					ResetSCORMLessonStatus = response.contents.ResetSCORMLessonStatus;
					if(ResetSCORMLessonStatus === true){
						if(bAttemptCount > 1){
							bAttemptCount = bAttemptCount - 1;
						}
						doLMSSetValue("cmi.suspend_data",bAttemptCount);
						doLMSSetValue("cmi.core.lesson_status", "in progress");//"incomplete"? "in progress"? just an empty string?
						doLMSSetValue("cmi.core.score.raw", "");
						doLMSCommit();
						ResetSCORMLessonStatus = false;
					}
				}
				
			}

			//More can be added here. Especially things that need to happen after all the above has been set...
			
			//TERMS AND VIDEO...
			//"showTerms": true,
			//"showIntroVideo": false,
			showTerms = course_settings.Portal_Setup.showTerms;
			showIntroVideo = course_settings.Portal_Setup.showIntroVideo;

			if((showTerms === true && showIntroVideo === true) && (termsViewed !== true || videoViewed !== true)){
				//console.log("The legal should show for most courses");
				document.getElementById("closeBtn").style.display = "none";
				document.getElementById("acceptBtn").style.display = "inline-block";
				document.getElementById("terms_cover").style.display = "none";
				bShowIntro();
			}else if ((showTerms === true && showIntroVideo === false) && termsViewed !== true){
				//console.log("This terms should show for non-english courses and shortcourses");
				document.getElementById("closeBtn").style.display = "none";
				document.getElementById("acceptBtn").style.display = "inline-block";
				showLegal("terms");
			}else{
				document.getElementById("terms_cover").style.display = "none";
			}

			//Save all the data to the LRS
			bSetState();

			//Only call the EOMState if needed...
			if(courseType !== "shortcourseA"){
				getEOMState(); // --> will call doCircles() when the eom state is retrieved...
			}
		}
	};

	//try/catch is log rocket, the lrs.retrieveState call is the normal part of the code
	//try{
		//retrieve the state
		lrs.retrieveState(key, xapiGetStateConfig);
	//}catch(err){
	//	LogRocket.captureException(err);
	//}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function bShowIntro(){	
	var bIntroContents = "<div id=\"intro_cover\">";
		bIntroContents += "<div id=\"courseIntro\">";
		bIntroContents += course_settings.Portal_Setup.Alerts.IntroVidTerms.startPara;
		bIntroContents += studentnamefinal.split(" ")[0];
		bIntroContents += course_settings.Portal_Setup.Alerts.IntroVidTerms.finishPara;
		bIntroContents += "<div id=\"introVidBtn\" class=\"courseIntroBtn\">" + course_settings.Portal_Setup.Alerts.IntroVidTerms.WelcomeVideoBtn + "<img src=\"includes/images/lesson_indicator_check.png\"></div>";
		bIntroContents += "<div id=\"introTrmBtn\" class=\"courseIntroBtn\">" + course_settings.Portal_Setup.Alerts.IntroVidTerms.TermsOfUseBtn + "<img src=\"includes/images/lesson_indicator_check.png\"></div>";
		bIntroContents += "</div>";
		bIntroContents += "</div>";

	if(!document.getElementById("intro_cover")){
		$("body").prepend(bIntroContents);
	}

	if(termsViewed === true){$("#introTrmBtn img:eq(0)").css("display","block");}
	if(videoViewed === true){$("#introVidBtn img:eq(0)").css("display","block");}

	//VIDEO BUTTON
	if(document.getElementById("introVidBtn")){
		document.getElementById("introVidBtn").onclick = function(){			
			videoViewed = true;

			switch (courseType){
				case "hybrid": showVid(vidLibrary.helpVideos.welcome_self_proctored); break;
				case "pdf": showVid(vidLibrary.helpVideos.welcome_proctored); break;
				case "hioc": showVid(vidLibrary.helpVideos.welcome_hioc); break;
				// NEED TO FILL IN WHAT HAPPENS FOR THE REST...
				//case "shortcourseA":
				//default: break;
			}
			
			$("#introVidBtn img").css("display","block");
			
			if(termsViewed === true){
				document.getElementById("intro_cover").style.display = "none";
			}

			//xAPI stuff
			bSetState();
			var theStatement = {
				"type": "intro_video",
				"verb": "viewed",
				"activity": "http://activitystrea.ms/schema/1.0/video",
				"objectID": "/introvideo"
			};
			LRSSend(theStatement);
		};
	}

	//TERMS BUTTON
	if(document.getElementById("introTrmBtn")){
		document.getElementById("introTrmBtn").onclick = function(){
			$("#intro_cover").remove();
			showLegal("terms");
		};
	}	
}

/* <!-- Terms and Privacy -->	
<div id="terms_cover">
	<div id="lang_links"><span id="en">en</span><span id="ote">fr</span></div>
	<div id="terms_load"></div>
	<div id="accept_terms">
		<p class="terms_p">You must accept the above Agreement to use this Course Portal.</p>
        <span id="acceptBtn" tabindex="0">Accept</span>
		<span id="closeBtn" tabindex="0">Close</span>
	</div>
</div> */

//Terms of Use...
function showLegal(thisone){
	var legalContent = "<div id=\"terms_cover\">";
	if(portalSetup.isTranslated === "true"){
		legalContent += "<div id=\"lang_links\"><span id=\"en\">en</span><span id=\"ote\">" + portalSetup.course_locale + "</span></div>";
	}
	legalContent += "<div id=\"terms_load\"></div>";
	legalContent += "<div id=\"accept_terms\">";
	legalContent += "<p class=\"terms_p\">" + portalSetup.TermsPrivacy.YouMustAccept + "</p>";
	legalContent += "<span id=\"acceptBtn\" tabindex=\"0\">" + portalSetup.TermsPrivacy.AcceptBtn + "</span>";
	legalContent += "<span id=\"closeBtn\" tabindex=\"0\">" + portalSetup.TermsPrivacy.CloseBtn + "</span>";
	legalContent += "</div>";
	legalContent += "</div>";
	
	//console.log(legalContent);


	$('#terms_load').load(thisone + '.html #page-content', function(){
		document.getElementById("terms_load").scrollTop = "0";
		document.getElementById("acceptBtn").innerText = course_settings.Portal_Setup.TermsPrivacy.AcceptBtn
		document.getElementById("closeBtn").innerText = course_settings.Portal_Setup.TermsPrivacy.CloseBtn;
		
		if(course_settings.Portal_Setup.isTranslated === "true"){ // Display the language choices

			document.getElementById("acceptBtn").innerText = course_settings.Portal_Setup.TermsPrivacy.AcceptAlt
			document.getElementById("closeBtn").innerText = course_settings.Portal_Setup.TermsPrivacy.CloseAlt;

			$('#terms_load').css("margin-top","0");
			$("#terms_cover #lang_links").css("display", "block");

			document.getElementById("ote").className = "activated";
			document.getElementById("en").className = "";

			$('#terms_load #window_content_en').css("display","none");
			$('#terms_load #window_content').css("display","block");	

		}else if(course_settings.Portal_Setup.isTranslated === "false"){ // Hide the language choices
			$('#terms_load').css("margin-top","2.5%");
			$("#terms_cover #lang_links").css("display", "none");
			
			document.getElementById("en").className = "activated";
			document.getElementById("ote").className = "";

			$('#terms_load #window_content_en').css("display","block");
			$('#terms_load #window_content').css("display","none");
		}
	});	
	
	//Language Switching by click...
	if(document.getElementById("en")){
		document.getElementById("en").onclick = function(e){
			document.getElementById("acceptBtn").innerText = course_settings.Portal_Setup.TermsPrivacy.AcceptBtn
			document.getElementById("closeBtn").innerText = course_settings.Portal_Setup.TermsPrivacy.CloseBtn;
			document.getElementById("window_content_en").style.display = "block";
			document.getElementById("window_content").style.display = "none";
			document.getElementById("en").className = "activated";
			document.getElementById("ote").className = "";
		};
		document.getElementById("ote").onclick = function(e){
			document.getElementById("acceptBtn").innerText = course_settings.Portal_Setup.TermsPrivacy.AcceptAlt
			document.getElementById("closeBtn").innerText = course_settings.Portal_Setup.TermsPrivacy.CloseAlt;
			document.getElementById("window_content_en").style.display = "none";
			document.getElementById("window_content").style.display = "block";
			document.getElementById("ote").className = "activated";
			document.getElementById("en").className = "";
		};
	}
    
	$("#terms_load, #accept_terms, #terms_cover").css("display", "block");
}
//Button action...
document.getElementById("acceptBtn").onclick = function(){
	//xAPI stuff
	termsViewed = true;
	bSetState();
	var theStatement = {
		"type": "terms_of_use",
		"verb": "accepted",
		"activity": "http://activitystrea.ms/schema/1.0/file",
		"objectID": "/terms_of_use"
	};
	LRSSend(theStatement);
	document.getElementById("terms_cover").style.display = "none";
	
	//if(courseType !== "shortcourseA" && videoViewed !== true){
	if(showTerms === true && showIntroVideo === true){
		if(videoViewed !== true){
			bShowIntro();
		}
	}
};
document.getElementById("closeBtn").onclick = function(){
	document.getElementById("terms_cover").style.display = "none";	
};
$(".termslink").on("click", function(){
	document.getElementsByClassName("terms_p")[0].innerText = "";
	document.getElementById("closeBtn").style.display = "inline-block";
	document.getElementById("acceptBtn").style.display = "none";
    document.getElementById("terms_cover").style.display = "block";
	showLegal("terms");
});
$(".privacylink").on("click", function(){
	document.getElementsByClassName("terms_p")[0].innerText = "";
	document.getElementById("closeBtn").style.display = "inline-block";
	document.getElementById("acceptBtn").style.display = "none";
    document.getElementById("terms_cover").style.display = "block";
	showLegal("privacy");
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Specific to getting the EOM data...
function getEOMState(){
	var gReturnedState;
	var key = 'EOMStatus';
	
	var numberOfQuestions = Number();
	var numberCorrect = []; //EOMnumCorrect
	var scoreArray = [];
	var qArray = [];
	var finalNumerator = Number();
	
	// create a config object for retrieving state, plus a callback function
	// http://rusticisoftware.github.io/TinCanJS/doc/api/latest/classes/TinCan.LRS.html#method_retrieveState
	xapiGetStateConfig = {
	  contentType: "application/json",
	  agent: gUser, // CURRENT USER AGENT
	  activity: getPortalActivity("eom"),
	  callback: function(error, response) {
	  		if(error || response === null){
				getEOMStateOLD();
				return; //NOTHING AFTER THE XHR RESULTS, BUT ADDED TO BE CERTAIN
			} else {
				var readyForScore = true;

				//get what I actually need from the exams...
				gReturnedState = response.contents; 
				
				//COURSE STATUS
				lrsCourseStatus = gReturnedState.CourseStatus;
				eomAttemptCount = gReturnedState.CourseAttempt;
				bEOMAttempts = gReturnedState.EOMAttempts;
				
				//check to make sure that we have a number to use...
				for (var i = 0; i < TOC.length; i++){
					if(gReturnedState.EOMnumQ[i] === undefined || gReturnedState.EOMnumQ[i] === null){
						numberOfQuestions = null;
					}else{
						numberOfQuestions += gReturnedState.EOMnumQ[i];	
						numberCorrect[i] = gReturnedState.EOMnumCorrect[i];
                    }
                    
					scoreArray[i] = gReturnedState.EOMPassingScore[i];
					qArray[i] = gReturnedState.EOMnumQ[i];

					if(gReturnedState.EOMPassingScore[i] && eomAttemptCount === bAttemptCount || gReturnedState.EOMPassingScore[i] && courseType === "hioc"){
						//use the lrs data...
						moduleScores[i] = [gReturnedState.EOMPassingScore[i], gReturnedState.EOMCompletionD[i].split("T")[0]];
                    }else{
						//or set the default...
						moduleScores[i] = [0, "---- - -- - --"];
						readyForScore = false;
					}
				}

				if (courseType === "hybrid"){
						if(lrsCourseStatus === "failed" && eomAttemptCount === bAttemptCount){
							for(var modExam = 0; modExam < TOC.length; modExam++){
								if(bEOMAttempts[modExam] === 2){
									if(isExamPage !== true){showFAIL();}
									//Calculate a failing grade and set the course status to "failed"
									var failScore = (gReturnedState.EOMFailedAttemptnumCorrectSum[modExam]/gReturnedState.EOMFailedAttemptnumQSum[modExam]) * 100;
									//increment
									bAttemptCount = bAttemptCount + 1;

									//reset the terms and video
									termsViewed = false;
									videoViewed = false;

									//RESET EREADER...
									hasEreader = false;
					
									//Bookmarks... and exam Honesty Statements
									for(var i = 0; i < TOC.length; i++){TOC.length
										gBookmarks[i] = [];
										honestyStatements[i] = 0;
										for(var j = 0; j <= lessonCounts[i]; j++){
											gBookmarks[i][j] = 1;
										}
									}
									
									//RESET PAGE VIEWS
									for(var j = 0; j < TOC.length; j++){
										bPageViews[j] = [];
										for(var k = 0; k < TOC[j].length; k++){
											bPageViews[j][k] = [];
											for (var l = 0; l < TOC[j][k].length - 1; l++){
												bPageViews[j][k][l] = 0;
											}
										}
									}

									var failedCourseStatement = {
										"type": "course",
										"verb": "failed",
										"activity": "http://adlnet.gov/expapi/activities/course",
										"objectID": "Course_Failed"
									}
									
									LRSSend(failedCourseStatement);
									
									//save all
									doLMSSetValue("cmi.suspend_data", bAttemptCount);
									bSetState();									
									doLMSSetValue('cmi.core.score.raw', Math.round(failScore));
									doLMSSetValue("cmi.core.lesson_status","failed");
									doLMSCommit();
									break;
								}
							}
						}
					//}
				}

				//If the course has already been completed...
				if(completionstatus !== "completed" || completionstatus !== "passed" || completionstatus !== "c" || completionstatus !== "p"){

					/*********************************/
					/*     SCORM Scoring             */
					/*********************************/				
					//PASSING SCORE
					if (readyForScore === true){
						if(numberOfQuestions){

							for (var j = 0; j < TOC.length; j++){
								finalNumerator = finalNumerator + numberCorrect[j]; // add up all correct answers...
							}

							var finalWeightedScore = Math.round((finalNumerator/numberOfQuestions) * 100); // divide by the total number of questions...

							if(finalWeightedScore >= 70){
								if(courseType !== "hioc"){ //SCORM
									doLMSSetValue('cmi.core.score.raw', finalWeightedScore);
									doLMSSetValue("cmi.core.lesson_status","passed");
									doLMSCommit();
								
									if(doLMSGetValue("cmi.core.lesson_status") === "passed"){
										showEOC();
									}else{
										doLMSSetValue('cmi.core.score.raw', finalWeightedScore);
										doLMSSetValue("cmi.core.lesson_status","passed");
										doLMSCommit();
									}
								}else{ //AICC
									setAICCData('cmi.core.score.raw', finalWeightedScore);
									setAICCData("cmi.core.lesson_status","p");
									AICC_Save();

									if(getAICCData("cmi.core.lesson_status") === "p"){
										showEOC();
									}else{
										setAICCData('cmi.core.score.raw', finalWeightedScore);
										setAICCData("cmi.core.lesson_status","p");
										AICC_Save();
									}
								}
								
								//Check if the statement has already been sent...
								LRSReturn();

								/* var completedCourseStatement = {
									"type": "course",
									"verb": "completed",
									"activity": "http://adlnet.gov/expapi/activities/course",
									"objectID": "Course_Complete"
								}
								if(isXAPI){
									LRSSend(completedCourseStatement);
								} */
							}

						}
					//}else{
						//console.log("The score was NOT calculated...");
					}
				}
				
				if(courseType !== "pdf" || courseType !== "shortcourseA"){
					//CIRCLES...
		  			doCircles();
				}
			}			
	  	}
	};
	
	//retrieve the state
	lrs.retrieveState(key, xapiGetStateConfig);
}

function getEOMStateOLD(){
	var gReturnedState;
	var key = 'EOMStatus';
	
	var numberOfQuestions = Number();
	var numberCorrect = []; //EOMnumCorrect
	var scoreArray = [];
	var qArray = [];
	var finalNumerator = Number();
	
	//OLD USER AGENT
	var hname = getHostname();
	var eomUser = new TinCan.Agent ({
		"objectType": "Agent",
		"name": lrsActor,
		"account": {
				"name": studentnamefinal,
				"homePage": hname
			}
	});
	
	// create a config object for retrieving state, plus a callback function
	// http://rusticisoftware.github.io/TinCanJS/doc/api/latest/classes/TinCan.LRS.html#method_retrieveState
	xapiGetStateConfig = {
	  contentType: "application/json",
	  agent: eomUser, //OLD USER AGENT
	  activity: getPortalActivity("eom"),
	  callback: function(error, response) {
	  		if(error || response === null){
				//set default values for moduleScores array
				for(var c=0; c < TOC.length; c++){
					moduleScores[c] = [];
					moduleScores[c][0] = 0;
					moduleScores[c][1] = "---- - -- - --";
				}
				
				doCircles();
				return; //NOTHING AFTER THE XHR RESULTS, BUT ADDED TO BE CERTAIN
			} else {
				var readyForScore = true;

				//get what I actually need from the exams...
				gReturnedState = response.contents; 
				
				//COURSE STATUS
				lrsCourseStatus = gReturnedState.CourseStatus;
				eomAttemptCount = gReturnedState.CourseAttempt;
				bEOMAttempts = gReturnedState.EOMAttempts;
				
				//check to make sure that we have a number to use...
				for (var i = 0; i < TOC.length; i++){
					if(gReturnedState.EOMnumQ[i] === undefined || gReturnedState.EOMnumQ[i] === null){
						numberOfQuestions = null;
					}else{
						numberOfQuestions += gReturnedState.EOMnumQ[i];	
						numberCorrect[i] = gReturnedState.EOMnumCorrect[i];
                    }
                    
					scoreArray[i] = gReturnedState.EOMPassingScore[i];
					qArray[i] = gReturnedState.EOMnumQ[i];

                    if(gReturnedState.EOMPassingScore[i] && eomAttemptCount === bAttemptCount){
						//use the lrs data...
                        moduleScores[i] = [gReturnedState.EOMPassingScore[i], gReturnedState.EOMCompletionD[i].split("T")[0]];
                    }else{
						//or set the default...
						moduleScores[i] = [0, "---- - -- - --"];
						readyForScore = false;
                    }
				}			

				if (courseType === "hybrid"){
						if(lrsCourseStatus === "failed" && eomAttemptCount === bAttemptCount){
							for(var modExam = 0; modExam < TOC.length; modExam++){
								if(bEOMAttempts[modExam] === 2){
									if(isExamPage !== true){showFAIL();}
									//Calculate a failing grade and set the course status to "failed"
									var failScore = (gReturnedState.EOMFailedAttemptnumCorrectSum[modExam]/gReturnedState.EOMFailedAttemptnumQSum[modExam]) * 100;
									//increment
									bAttemptCount = bAttemptCount + 1;

									//reset the terms and video
									termsViewed = false;
									videoViewed = false;

									//RESET EREADER...
									hasEreader = false;
					
									//Bookmarks... and exam Honesty Statements
									for(var i = 0; i < TOC.length; i++){
										gBookmarks[i] = [];
										honestyStatements[i] = 0;
										for(var j = 0; j <= lessonCounts[i]; j++){
											gBookmarks[i][j] = 1;
										}
									}
									
									//RESET PAGE VIEWS
									for(var j = 0; j < TOC.length; j++){
										bPageViews[j] = [];
										for(var k = 0; k < TOC[j].length; k++){
											bPageViews[j][k] = [];
											for (var l = 0; l < TOC[j][k].length - 1; l++){
												bPageViews[j][k][l] = 0;
											}
										}
									}
									
									//save all
									doLMSSetValue("cmi.suspend_data", bAttemptCount);
									bSetState();									
									doLMSSetValue('cmi.core.score.raw', Math.round(failScore));
									doLMSSetValue("cmi.core.lesson_status","failed");
									doLMSCommit();
									break;
								}
							}
						}
					//}
				}

				//If the course has already been completed...
				if(completionstatus !== "completed" || completionstatus !== "passed"){
					/*********************************/
					/*     SCORM Scoring             */
					/*********************************/				
					//PASSING SCORE
					if (readyForScore === true){
						if(numberOfQuestions){

							for (var j = 0; j < TOC.length; j++){
								finalNumerator = finalNumerator + numberCorrect[j]; // add up all correct answers...
							}

							var finalWeightedScore = Math.round((finalNumerator/numberOfQuestions) * 100); // divide by the total number of questions...

							if(finalWeightedScore >= 70){
								doLMSSetValue('cmi.core.score.raw', finalWeightedScore);
								doLMSSetValue("cmi.core.lesson_status","passed");
								doLMSCommit();

								if(courseType !== "hioc"){
									if(doLMSGetValue("cmi.core.lesson_status") === "passed"){
										showEOC();
									}else{
										doLMSSetValue('cmi.core.score.raw', finalWeightedScore);
										doLMSSetValue("cmi.core.lesson_status","passed");
									}
								}								

								var completedCourseStatement = {
									"type": "course",
									"verb": "completed",
									"activity": "http://adlnet.gov/expapi/activities/course",
									"objectID": "Course_Complete"
								}
								if(isXAPI){
									LRSSend(completedCourseStatement);
								}
							}
						}
					//}else{
						//console.log("The score was NOT calculated...");
					}
				}
				
				if(courseType !== "pdf" || courseType !== "shortcourseA"){
					//CIRCLES...
		  			doCircles();
				}
			}			
	  	}
	};
	
	//retrieve the state
	lrs.retrieveState(key, xapiGetStateConfig);
}

//STATEMENTS RELATED CODE STARTS HERE...
var allVerbs = {
	"accepted" : {
		"id" : "http://activitystrea.ms/schema/1.0/accept",
		"display" : {"en-US" : "accepted"}
	},
	"answered" : {
		"id" : "http://adlnet.gov/expapi/verbs/answered",
		"display" : {"en-US" : "answered"}
	},
	"completed": {
		"id" : "http://adlnet.gov/expapi/verbs/completed",
		"display" : {"en-US" : "completed"}
	},
	"confirmed": {
		"id" : "http://activitystrea.ms/schema/1.0/confirm",
		"display" : {"en-US" : "confirmed"}
	},
	"downloaded" : {
		"id" : "http://id.tincanapi.com/verb/downloaded",
		"display" : {"en-US" : "downloaded"}
	},
	"experienced" : {
		"id" : "http://adlnet.gov/expapi/verbs/experienced",
		"display" : {"en-US" : "experienced"}
	},
	"failed" : {
		"id" : "http://adlnet.gov/expapi/verbs/failed",
		"display" : {"en-US" : "failed"}
	},
	"focused" : {
       "id" : "http://adlnet.gov/expapi/verbs/focused",
       "display" : {"en-US" : "focused"}
	},
	"interacted" : {
       "id" : "http://adlnet.gov/expapi/verbs/interacted",
       "display" : {"en-US" : "interacted"}
	},
	"paused" : {
		"id": "http://id.tincanapi.com/verb/paused",
		"display" : {"en-US" : "paused"}
	},
	"played" : {
		"id": "http://activitystrea.ms/schema/1.0/play",
		"display" : {"en-US" : "played"}
	},
	"preferred" : {
		"id" : "http://adlnet.gov/expapi/verbs/preferred",
		"display" : {"en-US" : "preferred"}
	},
	"pressed" : {
		"id" : "http://future-learning.info/xAPI/verb/pressed",
		"display" : {"en-US" : "pressed"}
	},
	"released" : {
		"id" : "http://future-learning.info/xAPI/verb/released",
		"display" : {"en-US" : "released"}
	},
	"resumed": {
		"id" : "http://adlnet.gov/expapi/verbs/resumed",
		"display" : {"en-US" : "resumed"}
	},
	"scored" : {
		"id" : "http://adlnet.gov/expapi/verbs/scored",
		"display" : {"en-US" : "scored"}
	},
	"skipped" : {
		"id" : "http://id.tincanapi.com/verb/skipped",
		"display" : {"en-US" : "skipped"}
	},
	"started": {
		"id" : "http://activitystrea.ms/schema/1.0/start",
		"display" : {"en-US" : "started"}
	},
	"suspended": {
		"id" : "http://adlnet.gov/expapi/verbs/suspended",
		"display" : {"en-US" : "suspended"}
	},
	"unlocked": {
		"id" : "https://w3id.org/xapi/seriousgames/verbs/unlocked",
		"display" : {"en-US" : "unlocked"}
	},
	"viewed": {
		"id" : "http://id.tincanapi.com/verb/viewed",
		"display" : {"en-US" : "viewed"}
	},
	"voided": {
		"id" : "http://adlnet.gov/expapi/verbs/voided",
		"display" : {"en-US" : "voided"}
	},
};

function LRSSend(xapiObject){
	if(isXAPI){

		var localID = getPortalActivity("portal");
		
		//if audio or video, record the extra information in context>>extensions
		var xapiExtensions;

		switch(xapiObject.type){
			case "video":
			case "audio":
			case "stopwatch":
				xapiExtensions = {
					"http://id.tincanapi.com/extension/starting-point": xapiObject.extensions.startTime,
					//"http://id.tincanapi.com/extension/ending-position": xapiObject.extensions.stopTime, //changed in favor of the following line...
					"http://id.tincanapi.com/extension/ending-point": xapiObject.extensions.stopTime,
					"http://id.tincanapi.com/extension/duration": xapiObject.extensions.duration
				};
			break;
			
			case "inlinequestion":
				if(courseType.indexOf("shortcourseA") === -1){
					xapiExtensions = {
						"http://id.learning.loma.org/extensions/inline-response-student" : xapiObject.extensions.studentResponse,
						"http://id.learning.loma.org/extensions/inline-response-correct" : xapiObject.extensions.correctResponse
					};
				}
			break;

			case "inlinefield":
				xapiExtensions = {
					"http://id.tincanapi.com/extension/feedback" : xapiObject.extensions.studentFeedback
				}

			break;

			case "accordion":
					xapiExtensions = {
						"http://id.learning.loma.org/extensions/tabclicked" : xapiObject.extensions.tabsclicked,
						"http://id.learning.loma.org/extensions/tabstotal" : xapiObject.extensions.tabstotal
					};
			break;

			case "carousel":
			case "speechbubble":
				xapiExtensions = {
					"http://id.learning.loma.org/extensions/slideclicked" : xapiObject.extensions.slideclicked,
					"http://id.learning.loma.org/extensions/slidesstotal" : xapiObject.extensions.slidestotal
				};
			break;

			case "browser":
					xapiExtensions = {
						"http://id.tincanapi.com/extension/browser-info": xapiObject.extensions
					};
			break;

			case "survey":
					//console.log(xapiObject.extensions);
					xapiExtensions = {
						"http://id.tincanapi.com/extension/feedback": xapiObject.extensions
					};
			break;
			
			default:
				xapiExtensions = {};
		}
		
		var object_id;
		var context_id;
		
		//Looking for "module" and "lesson"
		if(isExamPrep !== true){
			if (xapiObject.page && xapiObject.lesson && xapiObject.module){
				object_id =  localID.id + "/M" + xapiObject.module + "/L" + xapiObject.lesson + "/" + "P" + xapiObject.page + "/" + xapiObject.objectID;
				context_id = localID.id + "/M" + xapiObject.module + "/L" + xapiObject.lesson + "/" + "P" + xapiObject.page + "/";
			}else if (!xapiObject.page && xapiObject.lesson && xapiObject.module){
				object_id = localID.id + "/M" + xapiObject.module + "/L" + xapiObject.lesson + "/" + xapiObject.objectID;
				context_id = localID.id + "/M" + xapiObject.module + "/L" + xapiObject.lesson + "/";
			}else if(!xapiObject.page && !xapiObject.lesson && xapiObject.module){
				object_id = localID.id + "/M" + xapiObject.module + "/" + xapiObject.objectID;
				context_id = localID.id + "/M" + xapiObject.module + "/";
			}else if(!xapiObject.page && !xapiObject.lesson && !xapiObject.module){
				object_id = localID.id + "/" + xapiObject.objectID;
				context_id = localID.id + "/";
			}
		}else{
			object_id = localID.id + "/" + xapiObject.objectID;
			context_id = localID.id + "/" + xapiObject.objectID;
		}
		
		//console.log(xapiObject);
		//console.log(xapiObject.verb);
		//return;
		
		//start the statement with the Actor...
		var statement = new TinCan.Statement(
			{
				"actor": gUser,
				
				"verb": allVerbs[xapiObject.verb],
				
				"object": {
					"id": object_id,
					"objectType": "Activity",
					"definition": {
						"name": {
							"en-US": xapiObject.objectID // id should be ok here... aka a short description
						},
						"description": {
							"en-US": xapiObject.type // need to figure out a way to use this as a long description...
						},
						"type": xapiObject.activity
					}
				},
				"context": {
					"language": strTestLocaleId, 
					"contextActivities": {
						"parent": [
							{
								"definition": {
									"name": {
										"en-US": courseNumber
									},
									"description": {
										//"en-US": courseName
										"en-US": courseGUID.replace(/ /g, '_')
									},
									"type": xapiObject.objActivity
								},
								"id": context_id,
								"objectType": "Activity"
							}
						]
					},
					"extensions": xapiExtensions
					//{
						//just about anything seems to be able to go here...
						//research extensions... need valid uri here
					//}
				}
			}
		);
		
		//Send the constructed statement/object...
		lrs.saveStatement(
			statement,
			{
				callback: function (err, xhr) {
					if (err !== null) {
						if (xhr !== null) {
							//LogRocket.captureException(err);
							console.log("Failed to save statement: " + xhr.responseText + " (" + xhr.status + ")");
							// TODO: do something with error, didn't save statement
							return;
						}
						console.log("Failed to save statement: " + err);
						// TODO: do something with error, didn't save statement
						return;
					}
					// TOOO: do something with success... can be ignored or used to do more
					console.log("Statement saved");					
				}
			}
		);
		//////////////////////////////////////////
	}//end if...
}

//Specifically lookking for course completion, but can be modified to return other statements...
function LRSReturn(){
	var activityID = getPortalActivity("portal").id + "/Course_Complete";
	var thisVerb = allVerbs.completed.id;
	
	if(isXAPI){
		lrs.queryStatements(
			{
				params: {
					verb: new TinCan.Verb(
						{
							id: thisVerb
						}
					),
					
					agent: gUser,
					
					activity: new TinCan.Activity (
						{
							id: activityID,
						}
					),related_activities: true //related_activities will grab all activities related to this
				},
				callback: function (err, sr) {
					if (err !== null) {
						console.log("Failed to query statements: " + err);
						// TODO: do something with error, didn't get statements
						return;						
					}else{
						// TODO: do something with returned statements in sr.statements

						//Send the Course_Complete statement if it hasn't been sent before -- should only be sent one time
						if(!sr.statements[0]){
							console.log("Is this running?");
							var completedCourseStatement = {
								"type": "course",
								"verb": "completed",
								"activity": "http://adlnet.gov/expapi/activities/course",
								"objectID": "Course_Complete"
							}
							LRSSend(completedCourseStatement);
						}
					}

					if (sr.more !== null) {
						// TODO: additional page(s) of statements should be fetched
					}

				}
			}
		);
	}
}

/*********************************/
/*     General Functions         */
/*********************************/
function handleError(msg){
   alert(msg);
}

//used in most, if not all, of the lrs functions...
function getHostname() {
	var hname = window.location.hostname;
	var hprotocol = window.location.protocol;
	var retVal;
	
	//Forcing the retVal to stay as "http" 2019-07-05
	if (hname) {
		//if (hprotocol) {
			//retVal = hprotocol + '//' + hname + '/';
			retVal = 'http://' + hname + '/';
		//} else {
		//	retVal = 'http://' + hname + '/';
		//}
	} else {
		retVal = 'http://stagelearningloma.mksi-lms.net/';
		//retVal = 'http://learning.loma.org/';
	}
	return retVal;
}