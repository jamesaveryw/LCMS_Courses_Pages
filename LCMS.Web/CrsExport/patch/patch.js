//╔══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Progress Bar Begin )>-------                                           ║
//╚══════════════════════════════════════════════════════════════════════════════════╝			

function progress_bar() //elmnt.clientHeight
{
	//var contScroll = document.getElementById("JcComponents").offsetHeight;
	//alert("contScroll: " + contScroll);

	var elmnt = document.getElementById("JcComponents");
	var x = elmnt.scrollLeft;
	var y = elmnt.scrollTop;

	//var scrlht = 100 / elmnt.scrollHeight;
	//var ccmpht = elmnt.offsetHeight
	//// var scrlht = ( (elmnt.scrollHeight) / (elmnt.scrollHeight - elmnt.offsetHeight)   );
	var scrlht = ( (elmnt.scrollHeight) - (elmnt.scrollHeight - elmnt.offsetHeight)   );
	var nwht = (elmnt.scrollHeight - scrlht);
	if($(window).width() < 768)
		{
			//alert("Mobile: " + contScroll);
			document.getElementById("prg_Bar").style.width = ( ( 100 / nwht ) * y) + "%";
		}
			else
		{
			//alert($('#JcComponents').height());
			//alert("sht: " + sht);
	
			//document.getElementById("prg_Bar").style.width = ( (scrlht  * y) + (nwht / 100) ) + "%";
			
  			document.getElementById("prg_Bar").style.width = ( ( 100 / nwht ) * y) + "%";
			
			//document.getElementById("first").innerHTML = "y : " + y;
			//document.getElementById("second").innerHTML = " nwht: " + nwht ;
			//document.getElementById("third").innerHTML = " elmnt.scrollHeight : " + elmnt.scrollHeight ;
			//if(y === )
		}
	
	//alert(contScroll);
	//alert("document.getElementById(JcComponents).offsetWidth: " + document.getElementById("JcComponents").clientHeight);
	// document.getElementById("prg_Bar").style.width = "100%";
	
	//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    //****************Added 2019-03-04 (Brian)****************************************
    //-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
	//MARK THE PAGE AS VIEWED WHEN THE USER HAS SCROLLED 90%
	if(courseType.indexOf("demo") === -1){
		var isNinety = ( 100 / nwht ) * y;
		if(isNinety > 90){

			//Checking to make sure that the page should be marked complete for shortcourseA
			var bQuestionsReady = true;

			if(courseType.indexOf("shortcourseA") !== -1){
				for (var bqCheck = 0; bqCheck < allPgQue[bCurrentPag + 1].length; bqCheck++){
					//change the value of bQuestionsReady if there's an answer property and it's still set to zero
					if(allPgQue[bCurrentPag + 1][bqCheck].hasOwnProperty("answer") && allPgQue[bCurrentPag + 1][bqCheck].answer === 0){
						bQuestionsReady = false;
						break;
					}
				}
			}

			//console.log("bPageViews["+bCurrentMod+"]["+bCurrentLsn+"]["+bCurrentPag+"] = " + bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag]);

			//if(bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] === 0){
			if(bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] === 0 && bQuestionsReady === true){
				bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] = 1;
				bSetState();
			}
		}
  
		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
		//****************Added 2019-03-04 (Brian)****************************************
		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
		
		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
		//****************Added 2019-03-08 (Brian)****************************************
		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
		for (var bCheck = 1; bCheck < document.getElementsByClassName("toc_fly_buttons").length; bCheck++){
			//console.log(document.getElementsByClassName("toc_fly_buttons")[bCheck].getElementsByTagName("span")[2].getElementsByTagName("img")[0].src);
			//console.log(bPageViews[bCurrentMod][bCurrentLsn][bCheck - 1]);
			
			if(bPageViews[bCurrentMod][bCurrentLsn][bCheck - 1] === 1){
				//if(courseType !== "hioc" || courseType !== "shortcourseA"){
				if(document.getElementsByClassName("toc_fly_buttons")[bCheck].getElementsByTagName("span")[2]){
					//slight change to deal with an extra span tag if it exists
					document.getElementsByClassName("toc_fly_buttons")[bCheck].getElementsByTagName("span")[2].getElementsByTagName("img")[0].src = "jbuild_libs/images/chk_comp.png";
				}else{
					document.getElementsByClassName("toc_fly_buttons")[bCheck].getElementsByTagName("span")[1].getElementsByTagName("img")[0].src = "jbuild_libs/images/chk_comp.png";
				}
			}
		}

		//START ADDED 2020-03-18 BRIAN
		if(courseType === "shortcourseB" && isNinety > 98){
			var scbShouldBeComplete = true;

			for (var scb = 0; scb < bPageViews[bCurrentMod][bCurrentLsn].length; scb++){
				if(bPageViews[bCurrentMod][bCurrentLsn][scb] === 0){
					scbShouldBeComplete = false;
					break;
				}
			}

			if(scbShouldBeComplete === true){
				markLessonComplete(1, 1);
				//showEOC();
				if(courseType.indexOf("shortcourse") !== -1 && TOC.length === 1){
					if(bLessonCompletions[bCurrentMod][bCurrentLsn] !== "---- - -- - --"){
						doLMSSetValue("cmi.core.lesson_status","completed");
						doLMSCommit();
					}
				}
			}
		}
		//START ADDED 2020-03-18 BRIAN
	}
	//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    //****************Added 2019-03-08 (Brian)****************************************
    //-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
}
//╔══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Progress Bar End )>-------                                             ║
//╚══════════════════════════════════════════════════════════════════════════════════╝

//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//****************Added 2019-06-14 (Brian)****************************************
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//Called by shortcourseA courses to check for deficiencies are mark complete...
function doCheckComplete(){
	//ONLY FOR CARES Act!!!
	markLessonComplete(1, 1);
	showEOC();

	/* if(courseType.indexOf("demo") !== -1){
		doAlert("coursedemo");
	}else{
		var bPagesToView = [];
		course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body = "";

		if(courseType === "shortcourseA"){
			for (var bCompletion = 0; bCompletion < bPageViews[bCurrentMod][bCurrentLsn].length; bCompletion++){
				if(bPageViews[bCurrentMod][bCurrentLsn][bCompletion] === 0){
					bPagesToView[bCompletion] = bCompletion;
				}
			}
		}
		//Pages that need to be viewed...
		var bPageOutput = "Please view all the material on page(s) ";
		if (bPagesToView.length > 0){
			for (var bPageViewEntry = 0; bPageViewEntry < bPagesToView.length; bPageViewEntry++){
				if(bPagesToView[bPageViewEntry] !== undefined && bPageViewEntry !== bPagesToView.length - 1){
					bPageOutput += "<span class=\"bListLink\" onclick=\"Page_Selection("+ (bPagesToView[bPageViewEntry] + 1) +", 1)\">"  + (bPagesToView[bPageViewEntry] + 1) + "</span>, ";
				}else if(bPageViewEntry === bPagesToView.length - 1){
					bPageOutput += "<span class=\"bListLink\" onclick=\"Page_Selection("+ (bPagesToView[bPageViewEntry] + 1) +", 1)\">"  + (bPagesToView[bPageViewEntry] + 1) + "</span>";
				}
			}
		}
		//console.log(bPageOutput);

		//Questions that need to be answered...
		var bQuestionOutput = "Please answer the following questions:<br><ul style=\"list-style-type:none;\">";
		for (var allPgQueEntry = 0; allPgQueEntry < allPgQue.length; allPgQueEntry++){

			if (allPgQue[allPgQueEntry] !== "" ){ // if no questions, it was initialized as an empty string. Better than checking for null or undefined
				
				for(var pqEntryQuestion = 0; pqEntryQuestion < allPgQue[allPgQueEntry].length; pqEntryQuestion++){
					
					if(allPgQue[allPgQueEntry][pqEntryQuestion].answer === 0){
						bQuestionOutput += "<li class=\"bListLink\" onclick=\"Page_Selection("+ allPgQueEntry +", 1)\">Question " + (pqEntryQuestion + 1) + " on Page " +  allPgQueEntry + "</li>";
					}

				}

			//}else{
			//	console.log("allPgQue[" + allPgQueEntry + "] = " + allPgQue[allPgQueEntry]);
			}
		}
		bQuestionOutput += "</ul>";
		//console.log(bQuestionOutput);

		//Build the message...
		if(bPageOutput !== "Please view all the material on page(s) "){ 
			course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body += "<p style=\"width:100%;\">" + bPageOutput + "</p>";
		}else{
			course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body += "";
		}
		if(bQuestionOutput !== "Please answer the following questions:<br><ul style=\"list-style-type:none;\"></ul>"){ 
			course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body += "<p>" + bQuestionOutput + "</p>";
		}else{
			course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body += "";
		}

		//console.log(bPageOutput);
		//console.log(bQuestionOutput);

		//if the vars haven't been altered, then everything is ready to mark the course complete...
		if(course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body === ""){ 
			markLessonComplete(1, 1);
			showEOC();
		}else{
			course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body = "<p style=\"width:100%;\">Return to this page and click on the finish button once you have satisfied the requirements below.</p>" + course_settings.Portal_Setup.Alerts.shortCourseIncomplete.Body;
			doAlert("shortCourseIncomplete");
		}
	} */
}
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//****************Added 2019-06-14 (Brian)****************************************
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-

//╔══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Page Selection Begin )>-------                                         ║
//╚══════════════════════════════════════════════════════════════════════════════════╝	
function Page_Selection(pgSel,loc){
	// BL Commented the code below for some reason
	// BL
	// This code changes the translation and the submit buttons for the video and multi question buttons to other languages
	// For some reason BL commeted this out. Need to ask him when he I see him.	
		
	//Start BRIAN 01/13/2020 Should be commented or removed
	/*	
		if(portalSetup.course_locale === "en-US")
			{
				trans_button = "Open Transcript";
				submit_button = "Submit";
			}		
		
		
		if(portalSetup.course_locale === "zh-CHT")
			{
				trans_button = "抄本";
				submit_button = "發送";
			}
	*/			
	// BL	
	// End BRIAN 01/13/2020 - SHould be commented or removed	
	
	pvc = 0;
	fvc = 0;	
	
	if(document.getElementById("alertCover")){
		$("#alertCover").remove();
	}

	$("#JcComponents").empty();
	
	np_num = pgSel;
	
	if($(window).width() < 768){
		jcc_toc_fly_num = 1;
		toc_slide();
	}	
	
	if(loc !== 1){
		moduleFolder = (moduleFolder + "json/");
	}
	
	//Start BRIAN 01/13/2020 - HIOC part writtent to account for Chinese ordinal numbers...
	//if(pgSel === (Number(toc_flyout_fn_array.length) - 1)){
	if(pgSel === (Number(toc_flyout_fn_array.length) - 1) && courseType.indexOf("hioc") !== -1 ){
		window.showEOLEOM(mod_lsn[0],mod_lsn[1],"EOL");
	}else{
		document.getElementById("Page_Title").innerHTML = lesson_title_text;

		if(courseType.indexOf("hioc") === -1){
			document.getElementById("cRpage").innerHTML = "Page " + pgSel + " of " + (toc_flyout_fn_array.length - 1);
		}else{

			var pageLocale = returnLocale();
			//console.log("pageLocale = " + pageLocale);

			switch (pageLocale.locale){
				case "en-US": 
					document.getElementById("cRpage").innerHTML = "Module " + mod_lsn[0] + ", Lesson " + mod_lsn[1] + " || Page " + pgSel + " of " + (toc_flyout_fn_array.length - 1);
				break;

				case "fr-CA":
				case "fr-FR": 
					document.getElementById("cRpage").innerHTML = "Module " + mod_lsn[0] + ", Leçon " + mod_lsn[1] + " || Page " + pgSel + " de " + (toc_flyout_fn_array.length - 1);
				break;
				
				case "zh-TW":
				case "zh-CN": 
					var chModuleNum = mod_lsn[0];
					
					switch(chModuleNum){
						case 1: chModuleNum = "一";break;
						case 2: chModuleNum = "二";break;
						case 3: chModuleNum = "三";break;
						case 4: chModuleNum = "四";break;
						case 5: chModuleNum = "五";break;
						case 6: chModuleNum = "六";break;
                    }
                    if (pageLocale.locale === "zh-CN"){
                        document.getElementById("cRpage").innerHTML = "第" + chModuleNum + "单元第" + mod_lsn[1] + "课第" + pgSel + "/" + (toc_flyout_fn_array.length - 1) + "页";//Simplified
                    }else{
                        document.getElementById("cRpage").innerHTML = "第" + chModuleNum + "單元第" + mod_lsn[1] + "課第" + pgSel + "/" + (toc_flyout_fn_array.length - 1) + "頁";//Traditional
                    }
				break;

				default: 
					document.getElementById("cRpage").innerHTML = "Module " + mod_lsn[0] + ", Lesson " + mod_lsn[1] + " || Page " + pgSel + " of " + (toc_flyout_fn_array.length - 1);
				break;
			}
			
		}
		//End BRIAN 01/13/2020 - HIOC part writtent to account for Chinese ordinal numbers...	
	
	
		//cRpage
		//alert("moduleFolder: " + moduleFolder);

		////$("#JcComponents").empty();
		//document.getElementById("JcComponents").scrollTop.scrollTop = 0;
		document.getElementById("JcComponents").scrollTop = 0;
		document.getElementById("prg_Bar").style.width = 0;

		var myScript = document.createElement('script');

		////alert("myScript: " + myScript);

		var selected_page = moduleFolder + TOC_File_Order_Array[pgSel];
		//console.log("selected_page: " + selected_page);
		myScript.setAttribute('src', selected_page);

		document.getElementById("lessonContent").style.display = "none";
		document.getElementById("pg_header").style.display = "block";
		document.getElementById("JcComponents").style.display = "block";
	
		//document.getElementById("JcComponents").appendChild(myScript);
	
		$("#JcComponents").append(myScript);	

		contScroll = document.getElementById("JcComponents").offsetHeight;

		//var elmnt = document.getElementById("myDIV");
		// elmnt.scrollLeft = 50;
		// elmnt.scrollTop = 0;	
		//alert("Page_Selection called with value of: " + pgSel);	

		document.getElementById("JcComponents").scrollTop = 100;

		if(courseType === "shortcourseA" && pgSel === bPageViews[bCurrentModule][bCurrentLesson].length){
			bPageViews[bCurrentModule][bCurrentLesson][bPageViews[bCurrentLesson][bCurrentLesson].length-1] = 1;
	
			//var easyBtn ="<div style=\"width: 50%; text-align: center; line-height: 3; background: #0069aa; font-size: 2em; border-radius: 50px; vertical-align: middle;\">Click to Finish</div>";
	
			//document.getElementsByClassName("jb_char_para")[0].append(easyBtn);
		}
	}    
	//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    //****************Added 2019-02-26 (Brian)****************************************
    //-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-	
   /*  //Get the information needed from the url...
    var bTemp = TOC_File_Order_Array[pgSel].split("_");
	//console.log(bTemp);
    var bMod = bTemp[2].substr(1,1);
    var bLsn = bTemp[3].substr(1,1);
	var bPag = bTemp[4];
    //console.log("Module number = " + bTemp[2].substr(1,1));
    //console.log("Lesson number = " + bTemp[3].substr(1,1));
	//console.log("Page is " + bPag);
	
	//Make sure that we have the right page number for the array...
	if(bPag.indexOf("LO") !== -1){
		bPag = 0;
	}else if (bPag.indexOf("EOL") !== -1){
		bPag = bPageViews.length - 1;
	}else if(bPag.indexOf("P") !== -1){
		bPag = pgSel - 1;
	} */
	
	//Get the information needed from the url...
    var bTemp = TOC_File_Order_Array[pgSel].split("_");
	//console.log(bTemp);
	var bMod, bLsn, bPag;

	if(courseType === "hioc"){
		bMod = bTemp[2].substr(1,1);
		bLsn = bTemp[3].substr(1,1);
		bPag = bTemp[4];
	}else{
		bMod = 1;
		bLsn = 1;
		if(bTemp[2] !== "10.js"){
			bPag = bTemp[2].substr(0,1);
		}else{
			bPag = bTemp[2].substr(0,2);
		}
	}

	/* if(bTemp[0].indexOf("TTTT" > -1)){
		console.log("THis is TTTT");
	} */
	//console.log("isExamPrep (from creator)");


    //console.log("Module number = " + bTemp[2].substr(1,1));
    //console.log("Lesson number = " + bTemp[3].substr(1,1));
		//console.log("Page is " + bPag);

		//console.log("Module Number = " + bMod);
		//console.log("Lesson Number = " + bLsn);
		//console.log("Page Number = " + bPag);
	
	//Make sure that we have the right page number for the array...
	if(bPag.indexOf("LO") !== -1){
		bPag = 0;
	}else if (bPag.indexOf("EOL") !== -1){
		bPag = bPageViews.length - 1;
	}else if(bPag.indexOf("P") !== -1){
		bPag = pgSel - 1;
	}else{
		bPag = pgSel - 1;
	}
    
    //USED BY THE PROGRESS_BAR() FUNCTION TO KNOW WHICH PAGE TO MARK COMPLETE...
    bCurrentMod = bMod - 1;
    bCurrentLsn = bLsn - 1;
    bCurrentPag = bPag;
	
	//FOR TOC ONLY!!! 
	if(bCurrentPag === 0){
		//Mark the TOC viewed in the Portal State...
		bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] = 1;
		//Update the flyout menu...
		if(document.getElementsByClassName("toc_fly_buttons")[1].getElementsByTagName("span")[2]){
			document.getElementsByClassName("toc_fly_buttons")[1].getElementsByTagName("span")[2].getElementsByTagName("img")[0].src = "jbuild_libs/images/chk_comp.png";
		}else{
			document.getElementsByClassName("toc_fly_buttons")[1].getElementsByTagName("span")[1].getElementsByTagName("img")[0].src = "jbuild_libs/images/chk_comp.png";
		} 
	}
	
    //MOVED TO PROGRESS_BAR()...
	//bPageViews[bMod - 1][bLsn - 1][bPag] = 1;

	if(courseType.indexOf("demo") === -1){
		gBookmarks[bMod - 1][bLsn - 1] = selected_page;

		//console.log(selected_page);

		//Check to see if the lesson should be marked complete
		var markComplete = true;
		//for (var i = 0; i <  bPageViews[bMod - 1][bLsn - 1].length - 1; i++){ // Original, Excludes the eols
		//if(courseType === "hioc"){
			for (var i = 0; i <  bPageViews[bMod - 1][bLsn - 1].length; i++){ //2019-03-04: INCLUDES THE EOLs...
				if(bPageViews[bMod - 1][bLsn - 1][i] === 0){
					markComplete = false;
					break;
				}
			}

		/* }else{//Sets it complete at the top of the last page, not at the bottom...!!!!!!!!!!!!!!!!
			for (var i = 0; i <  bPageViews[bMod - 1][bLsn - 1].length - 1; i++){ // Excludes the eols, if there are any... Mostly this is shortcourseA related.
				if(bPageViews[bMod - 1][bLsn - 1][i] === 0){
					markComplete = false;
					break;
				}
			} */
		//}
    }

	
	if(markComplete === true){
		if(bLessonCompletions[bMod - 1][bLsn - 1] === "---- - -- - --"){
			bLessonCompletions[bMod - 1][bLsn - 1] = new Date().toISOString();
			if(isXAPI){
				var lessonStatement = {
					"type": "lesson",
					"verb": "completed",
					"activity": "http://adlnet.gov/expapi/activities/lesson",
					"module": bMod,
					"lesson": bLsn,		
					"objectID": "M" + bMod + "L" + bLsn
				};
				LRSSend(lessonStatement);
                bSetState();
			}
		}
	}
	
	//console.log(markComplete);
    
    var statementType;
    var xapiPage;
    
    switch (bTemp[4]){
        case "TC.js": statementType = "Table of Contents";
            xapiPage = "TC";
            break;
        case "LO.js": statementType = "Lesson Learning Objectives";
            xapiPage = "LO"
            break;
        case "EOL.html": statementType = "End of Lesson Questions";
            xapiPage = "EOL";
			break;
		default: 
			if(isExamPrep === true){
				statementType = "Tough Topic";
				xapiPage = "Number_" + (bPag + 1); // Top Ten Tough Topics...
			}else{
				statementType = "Lesson Page"; // Normal lesson page...
				xapiPage = "P" + bPag;
			}
       		break;
	}
	
	var bPObjID;
	if(isExamPrep === true){
		//modObjID = "M" + (mdl_num + 1) + "_TTTT";
		bPObjID = "TTTT_" + xapiPage;
	}else{
		bPObjID =  "M" + bMod + "L" + bLsn + xapiPage;
	}

    var pageStatement = {
        "type": statementType,
        "verb": "viewed",
        "activity": "http://activitystrea.ms/schema/1.0/page",
        "module": bMod,
        "lesson": bLsn,		
		//"objectID": "M" + bMod + "L" + bLsn + xapiPage
		"objectID": bPObjID
    };
    if(isXAPI){
        //Send the Statement...
        LRSSend(pageStatement);
        //Set the State...
        bSetState();
    }else{
        //console.log(theStatement);
    }
    //-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    //****************Added 2019-02-26 (Brian)****************************************
    //-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-	
}

//╔══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Page Selection End )>-------                                           ║
//╚══════════════════════════════════════════════════════════════════════════════════╝	
//-----<( Brians updates )>-------