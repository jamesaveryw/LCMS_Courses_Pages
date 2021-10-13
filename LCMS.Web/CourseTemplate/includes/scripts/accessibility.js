/*************** HELPERS ***************/
/***************************************/
// create array from from querySelector
// Example: var arrayOfElements = slice(document.querySelectorAll('selector'));
function slice(nodes) {
    return Array.prototype.slice.call(nodes);
}
// set list of attributes on element
// Example: setAttrs(element, {'attribute-name': 'value', 'attribute-name': 'value', 'attribute-name': 'value'});
function setAttrs(el, attrs) {
	for (let key in attrs) {
		el.setAttribute(key, attrs[key]);
	}
}

// returns the ancestor of element based on class, node 
// type, or ID.
function findAncestor(el, type, selector) {
	if (type == 'class') {
		while ((el = el.parentNode) && !el.classList.contains(selector));

		return el;
	}
	else if (type == 'node') {
		while ((el = el.parentNode) && el.tagName != selector);
		
		return el;
	}
	else if (type == 'id') {
		while ((el = el.parentNode) && el.getAttribute('id') != selector);
		
		return el;
    }
    else {
        return null;
    }
}
/***************************************/
/***************************************/


/***************MUTATION****************/
/**************OBSERVERS****************/
/****************************************
Watches for changes on div#portalContents
and initiates accessibilty layer based
on the changes
****************************************/
// FOR PORTAL CONTENT CHANGES
// Select the node that will be observed for mutations
const targetNode = document.getElementById('portalContents');
// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };
// Callback function to execute when mutations are observed
const obsCallback = function(mutationsList) {
   // console.log("callback");
    for (const mutation of mutationsList) {

        //console.log(mutation);
        // add empty alt to image tags
        let images = slice(document.querySelectorAll('img'));
        for (const image of images) {
            if (!image.getAttribute('alt')) {
                image.setAttribute('alt', '');
            }
        }


        if (mutation.type === 'childList' && mutation.target === targetNode && mutation.addedNodes.length > 0) {
            determinePage(mutation.addedNodes);
        }
        // dash
        else if (mutation.type == 'childList' && mutation.target == document.getElementById('dashInfo')) {
            a11yDashboard();
        }
        // help
        else if (mutation.type == 'childList' && mutation.target == document.getElementById('bHelptopics')) {
            //console.log("help mutation");
            let helpTopicsDiv = document.getElementById('bHelptopics');
            let helpAnswer = document.getElementById('portalhelpanswer');
            let helpReady = setInterval(function() {
                if (helpTopicsDiv.childNodes.length > 0) {
                    clearInterval(helpReady);
                    let helpTopics = slice(helpTopicsDiv.querySelectorAll('.bHelpItem'));
                    for (i = 0; i < helpTopics.length; i++) {
                        setAttrs(helpTopics[i], { 'tabindex': '0', 'role': 'button' });
                    }
                    cloneClickEvents(helpTopics, helpAnswer);
                }
            }, 200);
        }
        // help answer revealed
        else if (mutation.type == 'childList' && mutation.target == document.querySelector('.helptopicbody')) {
            //console.log("help answer mutation");
            let theHelp = document.getElementById('theHelp');
            let helpTopicReady = setInterval(function() {
                if (document.querySelector('.helptopicbody').childNodes.length > 0) {
                    clearInterval(helpTopicReady);
                    setAttrs(document.querySelector('.helpback'), { 'tabindex': '0', 'role': 'button' });
                    cloneClickEvents(document.querySelectorAll('.helpback'), theHelp);
                }
            }, 200);
        }
        // resources
        else if (mutation.type == 'childList' && (mutation.target == document.getElementById('lesson_summaries_all') || mutation.target == document.getElementById('expert_videos_all') || mutation.target == document.getElementById('library_videos_all') || mutation.target == document.getElementById('more_resources_all'))) {
           // console.log("resources mutation");
            let resourceCont = mutation.target;

            // wait until content is ready
            let resourceContReady = setInterval(function() {
                if (resourceCont.childNodes.length > 0) {
                    clearInterval(resourceContReady);
                    let childDivs = slice(resourceCont.querySelectorAll('div'));
                    console.log(childDivs);
                    for (i = 0; i < childDivs.length; i++) {
                        if (typeof childDivs[i].getAttribute('onclick') == 'string' && childDivs[i].getAttribute('onclick').match(/showVid/)) {
                            cloneVideoEvent(childDivs[i]);
                        }
                        else if (typeof childDivs[i].getAttribute('onclick') == 'string' && childDivs[i].getAttribute('onclick').match(/doc/i)) {
                            if (childDivs[i].getAttribute('onclick') && childDivs[i].getAttribute('data-keyevent') != true) {
                                setAttrs(childDivs[i], { 'tabindex': '0', 'role': 'button' });
                                let func = childDivs[i].getAttribute('onclick');
                                let funcCall = func.replace(/([^\(]+)\([^\)]+\);/, '$1');
                                let funcParamString = func.replace(/[^\(]+\(([^\)]+)\);/, '$1').replace(/"/, '');
                                //let funcParamNum = funcParamString.replace(/[^\[]+\[(\d+)\]/, '$1');
                                let funcParam = [ funcParamString.replace(/'/g, '') ];

                                // find object
                                let fn = window[funcCall];
                                childDivs[i].setAttribute('data-keyevent', 'true');
                                $(childDivs[i]).on("keydown", function(event) {
                                    if (event.which == keyCodes.RETURN) {
                                        // is object a function?
                                        if (typeof fn === "function") fn.apply(null, funcParam);
                                        
                                    }
                                });
                            }
                        }
                    }
                }
            }, 200);
        }
        else if (mutation.type == 'childList') {
            
            // all other mutations (in case we need to add more)
            //console.log(mutation);
        }
    }
};
// Create an observer instance linked to the callback function
const observer = new MutationObserver(obsCallback);

// FOR MODAL POPUPS 
// Select the node that will be observed for mutations
const bodyTarget = document.body;
// Options for the observer (which mutations to observe)
const modalConfig = { childList: true, subtree: false };
// Callback function to execute when mutations are observed
const modalCallback = function(mutationsList) {
    for(const mutation of mutationsList) {
        //console.log("body observer");
        //console.log(mutation);
        if (mutation.addedNodes.length == 1 && (mutation.addedNodes[0].getAttribute('id') == 'alertCover' || mutation.addedNodes[0].getAttribute('id') == 'aboutCover')) {
            activeFocus = document.activeElement;
            openModal(null, mutation.addedNodes[0].getAttribute('id'));
        }
        if (mutation.removedNodes.length == 1 && (mutation.removedNodes[0].getAttribute('id') == 'alertCover' || mutation.removedNodes[0].getAttribute('id') == 'aboutCover')) {
            //console.log('setting focus');
            activeFocus.focus();
        }
    }
}
// Create an observer instance linked to the callback function
const modalObserver = new MutationObserver(modalCallback);

function cloneVideoEvent(videoButton) {
    if (videoButton.getAttribute('onclick') && videoButton.getAttribute('data-keyevent') != true) {
        setAttrs(videoButton, { 'tabindex': '0', 'role': 'button' });
        let func = videoButton.getAttribute('onclick');
        let funcCall = func.replace(/([^\(]+)\([^\)]+\);?/, '$1');
        let funcParamString = func.replace(/[^\(]+\(([^\)]+)\);?/, '$1').replace(/"/, '');
        let funcParamNum = funcParamString.replace(/[^\[]+\[(\d+)\]/, '$1');
        let funcParam;
        
        if (func.match(/expert/i)) {
            funcParam =  [ vidLibrary.expertvids_setup[funcParamNum] ];
        }
        else if (func.match(/vidlibrarySetup/i)) {
            funcParam =  [ vidlibrarySetup[funcParamNum] ];
        }
        else if (func.match(/help/i)) {
            funcParamNum = funcParamString.replace(/^[^\.]+\.[^\.]+\.(.*?)$/, '$1');
            funcParam = [ vidLibrary.helpVideos[funcParamNum] ]
            let alt;
            switch (funcParamNum) {
                case "welcome_self_proctored":
                case "welcome_proctored":
                    alt = "Welcome";
                    break;

                case "installation":
                    alt = "E-reader Installation and Setup";
                    break;

                case "kotobeeFeatures":
                    alt = "Kotobee Reader Features and Navigation";
                    break;

                case "appleBooksFeatures":
                    alt = "Apple Books Features and Navigation";
                    break;

                case "studyExperience":
                    alt = "Study Experience";
                    break;

                case "examExperience_self_proctored":
                case "examExperience_proctored":
                    alt = "Exam Experience";
                    break;

                default:
                    break;
                
            }

            videoButton.setAttribute('alt', alt);
        }

        
        // find object
        let fn = window[funcCall];
        videoButton.setAttribute('data-keyevent', 'true');
        $(videoButton).on("keydown", function(event) {
            if (event.which == keyCodes.RETURN) {
                // is object a function?
                if (typeof fn === "function") fn.apply(null, funcParam);
            
                let videoReady = setInterval(function() {
                    if (document.getElementById('vidContainer')) {
                        clearInterval(videoReady);
                        setAttrs(document.getElementById('vidContainer'), { 'tabindex': '-1' });
                        openModal(event, 'video');

                    }
                }, 200);
                
            }
        });
        $(videoButton).on("click", function(event) {
            setAttrs(document.getElementById('vidContainer'), { 'tabindex': '-1' });
            openModal(event);
        });
    }
}

// document ready
$(document).ready(function(){
    console.log("a11y ready");
    setTimeout(function(){ 
        if (courseType.match(/(pdf|hybrid|hioc)/)) {
            
            console.log("welcome ready");
            if (document.getElementById('intro_cover')) {
                a11yWelcome();
            }
        }
        else if (courseType.match(/short/)) {
            console.log("terms ready");
            if (document.getElementById('terms_cover').style.display != 'none') {
                openModal(null, document.getElementById('terms_cover'));
            }
        }
    }, 1000);
    
    // Start observing the target nodes for configured mutations
    observer.observe(targetNode, config);
    modalObserver.observe(bodyTarget, modalConfig);

    // set lang attribute
    document.querySelector('html').setAttribute('lang', portalSetup.course_locale);

    // add empty alt to image tags
    let images = slice(document.querySelectorAll('img'));
    for (const image of images) {
        if (!image.getAttribute('alt')) {
            image.setAttribute('alt', '');
        }
    }
    
    // call each a11y layer during initial load
    a11yHeader();
    a11yFooter();
    a11yFlyout();
    a11yModal();
    a11yHome();
});

// determines which page is being loaded so we 
// know which a11y function to call
function determinePage(nodeList) {
    console.log("Determining page");
    
    let pageTitle = "";
    // determine what was placed in div#portalContents
    for (i = 0; i < nodeList.length; i++) {
        if (nodeList[i].classList.contains('theContent') ||
        nodeList[i].classList.contains('bTopBlock')) {
            allyContainer = nodeList[i];
            console.log(allyContainer)
        }
        else if (nodeList[i].getAttribute('id') == 'eoleomobject') {
            allyContainer = nodeList[i];
            pageTitle = "pqse";
        }
    }
    
    // get page title
    if (allyContainer.querySelector('header')) {
        pageTitle = allyContainer.querySelector('header').innerText;
    }

    // change header tag to h1 while we're here
    let h1 = document.createElement('h1');
    let header = allyContainer.querySelector('header');
    if (header) {
        h1.innerHTML = header.innerHTML;
        header.parentNode.replaceChild(h1, header);
    }

    // just need to know it's a module landing page, not specific module
    if (pageTitle.match(portalSetup.Labels.module)) {
        pageTitle = "module landing";
    }
     
    // call a11y layer based on page type
    switch (pageTitle.trim()) {
        
        case portalSetup.Course_Title.trim():
            a11yHome();
            break;

        case 'module landing':
            a11yModLanding();
            break;

        case portalSetup.Labels.gettingStarted:
            a11yGetStarted();
            break;

        case portalSetup.Labels.examPrep:
            a11yExamPrep();
            break;

        case portalSetup.Labels.help:
            a11yHelp();
            break;

        case portalSetup.Labels.myDashboard:
            a11yDashboard();
            break;

        case portalSetup.Labels.resources:
            a11yResources();
            break;

        case portalSetup.Labels.courseGlossary:
            a11yGlossary();
            break;
        
        case 'pqse':
            a11yPQSE();
            break;
        
        default:
            alert("Unknown page");
            break;
    }
}


/************ ACCESSIBILITY ************/
/***************************************/
var contentDiv = document.getElementById('portalContents');
// string to collect all focusabile elements in a query selector
var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
// global empty array for focusable elements
var focusableElements = [];
// global for first and last tab stops (modal tab traps)
var firstTabStop;
var lastTabStop;
// global to keep track of active focus
var activeFocus;
// easier than remembering codes for each key
var keyCodes = Object.freeze({
    'TAB': 9,
    'RETURN': 13,
    'ESC': 27,
    'SPACE': 32,
    'PAGEUP': 33,
    'PAGEDOWN': 34,
    'END': 35,
    'HOME': 36,
    'LEFT': 37,
    'UP': 38,
    'RIGHT': 39,
    'DOWN': 40
});


// save click events
function getEvents(eventType, eleSource) { 
    let eleEvents = []; 
    let allEvents = jQuery._data(eleSource, "events"); 
    
    if (typeof allEvents === "object") { 
        if (typeof allEvents[eventType] === "object") { 
            for (var i = 0; i < allEvents[eventType].length; i++) { 
                eleEvents.push(allEvents[eventType][i].handler); 
            } 
        } 
    } 
    return eleEvents; 
}

// clone click events. this only works for events added using 
// jquery "on" method
function cloneClickEvents(elementArray, focusTarget) {
   // console.log('cloning click event');
    // get events from element in question
    if (elementArray) {
        for (i = 0; i < elementArray.length; i++) {
            var eleEvents  = getEvents("click", elementArray[i]); 
            //console.log(elementArray[i]);
            //console.log(eleEvents);
            // if event is returned 
            if (eleEvents.length > 0) { 
                //console.log('eleEvents exists');
                // cycle through
                for (var j = 0; j < eleEvents.length; j++) { 
                    // save function from event
                    var oldFunc = eleEvents[j];
                    // declare new function 
                    var newFunc = function clickCloneKeydown(event) {
                        // links respond to return key
                        if (event.target.getAttribute("role") == "link" || event.target.tagName.toLowerCase() == "a") {
                            if (event.which == keyCodes.RETURN || event.type == 'click') { 
                                // use call to declare "this"             
                                oldFunc.call(this, event);
                                if (focusTarget) {
                                    focusTarget.focus();
                                }
                            }
                        }
                        // buttons respond to return and space keys
                        else if (event.target.getAttribute("role") == "button" || event.target.tagName.toLowerCase() == "button") {
                            if (event.which == keyCodes.RETURN || event.which == keyCodes.SPACE || event.type == 'click') { 
                                // use call to declare "this"             
                                oldFunc.call(this, event);
                                if (focusTarget) {
                                    focusTarget.focus();
                                }
                            }
                        }
                    };

                    // add new event listener; use bind to set "this"
                    elementArray[i].addEventListener("keydown", newFunc.bind(elementArray[i]));

                    // break out of loop if resourcelink or dashlink 
                    // (these have multiple events for some reason
                    // and we only need to capture one)
                    // THIS BROKE THE RESOURCES/DASH LINKS IN FLYOUT
                    if ((elementArray[i].classList.contains('dashlink') || elementArray[i].classList.contains('resourcelink'))) {          
                        //break;
                    }
                } 
            }
        }
    }
}

// flyout a11y layer
function flyoutToggle(event){
    if (event.type == "click" || event.which == keyCodes.RETURN || event.which == keyCodes.SPACE) {
       // console.log("flyout toggle");
        // closing flyout focus mgmt
        if (document.getElementById('menu')) {
            var flyoutClosed = setInterval(function() {
                if (!document.getElementById('menu')) {
                    clearInterval(flyoutClosed);
                    activeFocus.focus();
                }
            }, 200);
            activeFocus.focus();
        }
        // opening flyout focus mgmt
        else {
            activeFocus = document.getElementById("indexName");
            
            var flyoutReady = setInterval(function(){
            
                if (document.getElementById('menu')) {
                    clearInterval(flyoutReady);

                    // set attributes for foucs
                    setAttrs(document.getElementById('menu'), {'tabindex': '-1'});
                    // focus
                    document.getElementById('menu').focus();
                    // event listeners for close button
                    document.querySelector("#menu .toggle").addEventListener("click", flyoutToggle, true);
                    document.querySelector("#menu .toggle").addEventListener("keydown", flyoutToggle, true);
                    var menuLinks = document.querySelectorAll('#menu li');

                    // set attrs for links
                    for (i = 0; i < menuLinks.length; i++) {
                        if (!menuLinks[i].classList.contains('termslink') && !menuLinks[i].classList.contains('privacylink') && !menuLinks[i].classList.contains('exitlink') && menuLinks[i].getAttribute('class')) {
                            setAttrs(menuLinks[i], { 'tabindex': '0', 'role': 'link' });
                        }
                        else if (menuLinks[i].getAttribute('class')) {
                            setAttrs(menuLinks[i], { 'tabindex': '0', 'role': 'button' });
                        }
                    }
                    setAttrs(document.querySelector("#menu .toggle"), { 'tabindex': '0', 'role': 'link' });
                    
                }
            }, 200);
        }
        var cloneReady = setInterval(function(){
            
            if (document.getElementById('menu')) {
                clearInterval(cloneReady);
                
                // clone click events for all
                if (document.querySelectorAll('#menu .toggle').length > 0) {
                    cloneClickEvents(slice(document.getElementById('menu').querySelectorAll('.toggle')), contentDiv);
                }
                if (document.querySelectorAll('#menu .mystatuslink').length > 0) {
                    cloneClickEvents(slice(document.getElementById('menu').querySelectorAll('.mystatuslink')), contentDiv);
                }
                if (document.querySelectorAll('#menu .moduleLink').length > 0) {
                    cloneClickEvents(slice(document.getElementById('menu').querySelectorAll('.moduleLink')), contentDiv);
                }
                if (document.querySelectorAll('#menu .getStartedlink').length > 0) {
                    cloneClickEvents(slice(document.getElementById('menu').querySelectorAll('.getStartedlink')), contentDiv)
                };
                if (document.querySelectorAll('#menu .aboutlink').length > 0) {
                    cloneClickEvents(slice(document.getElementById('menu').querySelectorAll('.aboutlink')), document.getElementById('contentBtns').querySelectorAll('.aboutlink'));
                }
                if (document.querySelectorAll('#menu .resourcelink').length > 0) {
                    cloneClickEvents(slice(document.getElementById('menu').querySelectorAll('.resourcelink')), contentDiv);
                }
                if (document.querySelectorAll('#menu .helplink').length > 0) {
                    cloneClickEvents(slice(document.getElementById('menu').querySelectorAll('.helplink')), contentDiv);
                }
                if (document.querySelectorAll('#menu .homelink').length > 0) {
                    cloneClickEvents(slice(document.getElementById('menu').querySelectorAll('.homelink')), contentDiv);
                }
                if (document.querySelectorAll('#menu .termslink').length > 0) {
                    cloneClickEvents(slice(document.getElementById('menu').querySelectorAll('.termslink')), contentDiv);
                }
                if (document.querySelectorAll('#menu .privacylink').length > 0) {
                    cloneClickEvents(slice(document.getElementById('menu').querySelectorAll('.privacylink')), contentDiv);
                }
                if (document.querySelectorAll('#menu .exitlink').length > 0) {
                    cloneClickEvents(slice(document.getElementById('menu').querySelectorAll('.exitlink')), contentDiv);
                }
                // set keydown event for close
                var togFunc = document.getElementById('main-nav-check').onclick;
                // create new functions
                var newTogFunc = function togKeydown(event) {
                    if (event.which == keyCodes.RETURN) {
                        togFunc.call(this, event);
                    }
                };  
                document.querySelector('#menu label.toggle').addEventListener("keydown", newTogFunc.bind(document.querySelector('#menu label.toggle')));
    
                // listener to close menu when keydown activates menu item
                $('#menu li').on("keydown", function(event) {
                    if (event.which == keyCodes.RETURN || event.which == keyCodes.SPACE) {
                        $("#menu").css({
                            "opacity": "0",
                            "webkitTransform":"",
                            "MozTransform":"",
                            "msTransform":"",
                            "OTransform":"",
                            "transform":"",
                        });
                        $("#menu").remove();
                    }
                });

                // listener to deal with modal trap
                $('.termslink').on("click keydown", openModal);
                $('.privacylink').on("click keydown", openModal);
                $('.aboutlink').on("click keydown", openModal);
    
                // listener to close menu with esc key
                $('#menu').on('keydown', function(event) {
                    if (event.which == keyCodes.ESC) {
                        $("#menu").css({
                            "opacity": "0",
                            "webkitTransform":"",
                            "MozTransform":"",
                            "msTransform":"",
                            "OTransform":"",
                            "transform":"",
                        });
                        $("#menu").remove();
                        activeFocus.focus();
                    }
                });
    
            }
        }, 200);
    }
    
}

function modalTrap(e) {
    console.log(this.getAttribute('id'));
    // console.log("modal trap triggered");
    // Check for TAB key press
    if (e.which === keyCodes.TAB) {
        // if there's only one tab stop, just prevent default
        if (firstTabStop === lastTabStop && document.activeElement == firstTabStop) {
            e.preventDefault();
        }
        // SHIFT + TAB
        else if (e.shiftKey) {
            if (document.activeElement === firstTabStop || document.activeElement.getAttribute("tabindex") == -1) {
                e.preventDefault();
                lastTabStop.focus();
            }

        // TAB
        } else {
            if (document.activeElement === lastTabStop) {
                e.preventDefault();
                firstTabStop.focus();
            }
        }
    }

    // ESCAPE
    if (e.which === keyCodes.ESC) {
        // only esc if termsViewed has been marked true
        if (this.getAttribute('id') == 'terms_load' && termsViewed == true) {
            this.parentNode.style.display = "none";
            activeFocus.focus();
        }
        else if (this.getAttribute('id') == 'vidContainer') {
            // remove #vidOverlay
            document.getElementById('vidOverlay').remove();
            activeFocus.focus();
        }
        else if (this.getAttribute('id') == 'alertCoverContainer') {
            $("#alertCover").remove();
        }
        else if (this.getAttribute('id') == 'imageHolder') {
            $("#aboutCover").remove();
        }
            	
    }
}

function openModal(e, alertTarget) {
    if (e == null || e.type == "click" || e.which === keyCodes.RETURN || e.which === keyCodes.SPACE) {
        focusableElements = [];
        let target;
        let targetClass;

        if (e != null) {
            target = e.currentTarget;
            targetClass = target.className;
            activeFocus = target;
        }
        else {
            targetClass = 'alert';
            activeFocus = document.activeElement;
        }

        if (e != null && target.tagName == 'IMG') {
            target = e.currentTarget;
            targetClass = 'figureVidBlock';
            activeFocus = target;
        }

        let modalLoad;
        let contentContainer;
        let modal;

        // set class for targets without unique class
        if (e != null && target.getAttribute('id') == 'introVidBtn') {
            targetClass = 'expertVidBlock';
        }
        else if ((e != null && target.getAttribute('id') == 'introTrmBtn') || e == null && alertTarget.getAttribute('id') == 'terms_cover') {
            targetClass = 'termslink';
        }
        
        // do stuff based on class
        switch (targetClass) {
            case 'termslink':
            case 'privacylink':
                
                // set container and modal vars
                modalLoad = '#terms_load #window_content_en';
                modal = document.getElementById('terms_load');
                if (course_settings.Portal_Setup.isTranslated == true) {
                    contentContainer = 'window_content';
                }
                else {
                    contentContainer = 'window_content_en';
                }
                // start focusableElements array based on termsViewed
                if (termsViewed == true) {
                    focusableElements.push(document.getElementById('closeBtn'));
                }
                else {
                    focusableElements.push(document.getElementById('acceptBtn'));
                }

                break;

            case 'expertVidBlock':
            case 'figureVidBlock':
                // set container and modal vars
                modalLoad = '#vidContainer';
                modal = document.getElementById('vidContainer');
                contentContainer = 'vidContainer';
                // set attrs
                setAttrs(document.getElementById('vidClose'), { 'tabindex': '0', 'role': 'button' });
                setAttrs(document.getElementById('transcriptBtn'), { 'tabindex': '0', 'role': 'button' });
                setAttrs(document.getElementById('bTranscript'), { 'tabindex': '-1' });

                // clone clicks
                cloneClickEvents([document.getElementById('vidClose')], activeFocus);
                cloneClickEvents([document.getElementById('transcriptBtn')], document.getElementById('bTranscript'))
                
                // set focus for transcriptBtn clicks
                $("#transcriptBtn").on("click", function(){
                    if(document.getElementById("bTranscript").style.display !== "block"){
                        document.querySelector("#vidContainer video").focus();
                    }else{
                        document.getElementById('bTranscript').focus();
                    }
                });
                break;
            
            case 'alert':
                let alertBtns = slice(document.querySelectorAll('.alertBtn'));
                let closeBtnSelector;
                if (alertTarget == 'alertCover') {
                    // set container and modal vars
                    modalLoad = '#alertCoverContainer';
                    modal = document.getElementById('alertCoverContainer');
                    contentContainer = 'alertCoverContainer';
                    closeBtnSelector = "#" + alertTarget + " .xSpot";
                }
                else if (alertTarget == 'aboutCover') {
                    // set container and modal vars
                    modalLoad = '#imageHolder';
                    modal = document.getElementById('imageHolder');
                    contentContainer = 'imageHolder';
                    closeBtnSelector = "#" + alertTarget + " #aboutClose";
                }
                console.log(this);
                // set attrs ALERT BUTTONS
                for (i = 0; i < alertBtns.length; i++) {
                    setAttrs(alertBtns[i], { 'tabindex': '0', 'role': 'button' });
                    
                    // clone clicks
                    let btnFunc = alertBtns[i].onclick;
                    
                    // create new functions
                    const newBtnFunc = function alertBtnKeydown(event) {
                        if (event.which == keyCodes.RETURN || event.which == keyCodes.SPACE || event.type == 'click') { 
                            btnFunc.call(this, event);
                        }
                    }
                    // set new event listeners
                    alertBtns[i].addEventListener("keydown", newBtnFunc.bind(activeFocus));
                }

                // set attrs CLOSE BUTTON
                setAttrs(document.querySelector(closeBtnSelector), { 'tabindex': '0', 'role': 'button' });

                // clone clicks
                let closeFunc = document.querySelector(closeBtnSelector).onclick;
                
                // create new functions
                const newCloseFunc = function closeKeydown(event) {
                    if (event.which == keyCodes.RETURN || event.which == keyCodes.SPACE || event.type == 'click') { 
                        // use call to declare "this"             
                        closeFunc.call();
                    }
                };

                // set new event listeners
                document.querySelector(closeBtnSelector).addEventListener("keydown", newCloseFunc.bind(activeFocus));

                break;

            default:
                break;
        }
        
        // focus on modal
        setAttrs(modal, { 'tabindex': '-1' });
        modal.focus();

        var contentReady = setInterval(function(){
            
            if (document.querySelector(modalLoad)) {
                clearInterval(contentReady);

                //set focusableElements after content is ready
                var newElements = slice(document.getElementById(contentContainer).querySelectorAll(focusableElementsString));
                for (i = 0; i < newElements.length; i++) {
                    focusableElements.splice(i, 0, newElements[i]);
                }
                // set first and last
                firstTabStop = focusableElements[0];
                lastTabStop = focusableElements[focusableElements.length - 1];
                // add tab trap listener
                modal.parentNode.addEventListener("keydown", modalTrap.bind(modal), true);
            }
        }, 200);
    }

}

function a11yWelcome() {
    console.log("ally welcome");
    var i;
    var welcomeContent = document.getElementById('courseIntro');
    var buttons = slice(document.getElementById('intro_cover').querySelectorAll('.courseIntroBtn'));
    // save active focus
    activeFocus = document.activeElement;

    // set attrs and focus on content div
    setAttrs(welcomeContent, { 'tabindex': '-1' });
    welcomeContent.focus();

    // set attrs for buttons
    for (i = 0; i < buttons.length; i++) {
        setAttrs(buttons[i], { 'tabindex': '0', 'role': 'button' });
    }

    // save click function
    var vidFunc = document.getElementById('introVidBtn').onclick;
    var trmFunc = document.getElementById('introTrmBtn').onclick;

    // create new functions
    var newVidFunc = function vidKeydown(event) {
        if (event.which == keyCodes.RETURN || event.which == keyCodes.SPACE || event.type == 'click') { 
            // use call to declare "this"             
            vidFunc.call(this, event);
            setAttrs(document.getElementById('vidContainer'), { 'tabindex': '-1' });
            document.getElementById('vidContainer').focus();
            openModal(event);
        }
    };
    var newTrmFunc = function vidKeydown(event) {
        if (event.which == keyCodes.RETURN || event.which == keyCodes.SPACE || event.type == 'click') { 
            // use call to declare "this"             
            trmFunc.call(this, event);
            setAttrs(document.getElementById('terms_load'), { 'tabindex': '-1' });
            document.getElementById('terms_load').focus();
            openModal(event);
        }
    };

    // add new event listeners; use bind to set "this"
    document.getElementById('introVidBtn').addEventListener("keydown", newVidFunc.bind(buttons[i]));
    document.getElementById('introTrmBtn').addEventListener("keydown", newTrmFunc.bind(buttons[i])); 
    document.getElementById('introVidBtn').addEventListener("click", openModal);
    document.getElementById('introTrmBtn').addEventListener("click", openModal);                        

    // set focusable elements and tab stops
    focusableElements = slice(document.getElementById("intro_cover").querySelectorAll(focusableElementsString));
    firstTabStop = focusableElements[0];
    lastTabStop = focusableElements[focusableElements.length - 1];

    // add modal trap
    welcomeContent.addEventListener("keydown", modalTrap.bind(welcomeContent), true);

}
 
function a11yHeader() {
    // console.log("a11y header");
    // fix attributes for portalContents div
    setAttrs(contentDiv, {'tabindex': '-1'});
    if (document.getElementById('headerModules')) {
        // set required attributes for header links
        var headerModLinks = slice(document.getElementById('headerModules').querySelectorAll('.moduleLink'));
    
        for (i = 0; i < headerModLinks.length; i++) {
            setAttrs(headerModLinks[i], {'tabindex': '0', 'role': 'link'});
        }
    }
    setAttrs(document.getElementById('courseTitle'), {'role': 'link', 'aria-label': 'Home', 'title': 'Home'});
    setAttrs(document.getElementById('hhe_home'), {'role': 'link', 'aria-label': 'Home', 'title': 'Home'});
    setAttrs(document.getElementById('hhe_help'), {'role': 'link', 'aria-label': 'Help', 'title': 'Help'});
    setAttrs(document.getElementById('hhe_exit'), {'role': 'button', 'aria-label': 'Exit', 'title': 'Exit'});
    setAttrs(document.getElementById('hhe_exit'), {'role': 'button', 'aria-label': 'Exit', 'title': 'Exit'});
    setAttrs(document.getElementById('hhe_exit'), {'role': 'button', 'aria-label': 'Exit', 'title': 'Exit'});
    
    // clone clicks
    cloneClickEvents(headerModLinks, contentDiv);
    cloneClickEvents(slice(document.getElementById('indexHead').querySelectorAll('.homelink')), contentDiv);
    cloneClickEvents(slice(document.getElementById('indexHead').querySelectorAll('.helplink')), contentDiv);
    cloneClickEvents(slice(document.getElementById('indexHead').querySelectorAll('.exitlink')), contentDiv);

}

function a11yFooter() {
   // console.log("a11y footer");
    setAttrs(document.getElementById('terms_load'), {'tabindex': '-1'});
    
    if (document.querySelector('footer#indexFooter span.preplink')) {
        // set required attrs for footer links
        setAttrs(document.querySelector('footer#indexFooter img.preplink'), {'alt': ''});
        setAttrs(document.querySelector('footer#indexFooter span.preplink'), {'role': 'link'});
        // clone click event listeners
        cloneClickEvents(slice(document.getElementById('footMenu').querySelectorAll('span.preplink')), contentDiv);
    }
    
    if (document.querySelector('footer#indexFooter span.dashlink')) {
        // set required attrs for footer links
        setAttrs(document.querySelector('footer#indexFooter img.dashlink'), {'alt': ''});
        setAttrs(document.querySelector('footer#indexFooter span.dashlink'), {'role': 'link'});
        // clone click event listeners
        cloneClickEvents(slice(document.getElementById('footMenu').querySelectorAll('span.dashlink')), contentDiv);
    }

    if (document.querySelector('footer#indexFooter span.resourcelink')) {
        // set required attrs for footer links
        setAttrs(document.querySelector('footer#indexFooter img.resourcelink'), {'alt': ''});
        setAttrs(document.querySelector('footer#indexFooter span.resourcelink'), {'role': 'link'});
        // clone click event listeners
        cloneClickEvents(slice(document.getElementById('footMenu').querySelectorAll('span.resourcelink')), contentDiv);
    }

    if (document.querySelector('footer#indexFooter span.contactlink')) {    
        // set required attrs for footer links
        setAttrs(document.querySelector('footer#indexFooter img.contactlink'), {'alt': ''});
        setAttrs(document.querySelector('footer#indexFooter span.contactlink'), {'role': 'link'});
        // clone click event listeners
        cloneClickEvents(slice(document.getElementById('footMenu').querySelectorAll('span.contactlink')), contentDiv);
    }

    if (document.querySelector('footer#indexFooter span.glossarylink')) {
        // set required attrs for footer links
        setAttrs(document.querySelector('footer#indexFooter img.glossarylink'), {'alt': ''});
        setAttrs(document.querySelector('footer#indexFooter span.glossarylink'), {'role': 'link'});
        // clone click event listeners
        cloneClickEvents(slice(document.getElementById('footMenu').querySelectorAll('span.glossarylink')), contentDiv);
    }

    if (document.querySelector('footer#indexFooter span.termslink')) {    
        // set required attrs for footer links
        setAttrs(document.querySelector('footer#indexFooter span.termslink'), {'role': 'button'});
        // clone click event listeners
        cloneClickEvents(slice(document.getElementById('legalstuff').querySelectorAll('span.termslink')), contentDiv);
    }

    if (document.querySelector('footer#indexFooter span.privacylink')) {
        // set required attrs for footer links
        setAttrs(document.querySelector('footer#indexFooter span.privacylink'), {'role': 'button'}); 
        // clone click event listeners   
        cloneClickEvents(slice(document.getElementById('legalstuff').querySelectorAll('span.privacylink')), contentDiv);
    }
    
    
    // listener to deal with modal trap
    $('.termslink').on("click keydown", openModal);
    $('.privacylink').on("click keydown", openModal);
        
}

function a11yFlyout() {
   // console.log("a11y flyout");

    // add event listenrs
    document.getElementById("indexName").addEventListener("keydown", flyoutToggle, true);
    document.getElementById("indexName").addEventListener("click", flyoutToggle, true);

    // save old function
    var togFunc = document.getElementById('main-nav-check').onclick;

    // create new functions
    var newTogFunc = function togKeydown(event) {
        if (event.which == keyCodes.RETURN) {
            togFunc.call(this, event);
        }
    };
    
    // add listener
    document.getElementById('indexName').addEventListener("keydown", newTogFunc.bind(document.getElementById('indexName')));
    
}

function a11yModal() {
    var closeButtons = slice(document.querySelectorAll('#accept_terms span[tabindex="0"]'));
    for (i = 0; i < closeButtons.length; i++) {
        setAttrs(closeButtons[i], {'role': 'button'});
    }
    document.getElementById("acceptBtn").onkeydown = function(event){
        if (event.which == keyCodes.RETURN || event.which == keyCodes.SPACE) { 
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
            
            if(showTerms === true && showIntroVideo === true){
                if(videoViewed !== true){
                    bShowIntro();
                }
            }
        }
    };
    document.getElementById("closeBtn").onkeydown = function(event){
        if (event.which == keyCodes.RETURN || event.which == keyCodes.SPACE) {	
            document.getElementById("terms_cover").style.display = "none";
            activeFocus.focus();
        }
    };
    document.getElementById("closeBtn").onclick = function(event) {
        document.getElementById("terms_cover").style.display = "none";
        activeFocus.focus();
    };
    
}

function a11yHome() {
    console.log("a11y home");

    // set required attrs for portal home links 
    var homeLinks = slice(document.querySelectorAll('#contentBtns .indexBtn'));
    for (i = 0; i < homeLinks.length; i++) {
        setAttrs(homeLinks[i], {'tabindex': '0', 'role': 'link'});
    }
    
    if (document.querySelectorAll('#contentBtns .dashlink').length > 0) {
        console.log(document.querySelectorAll('.dashlink'))
        cloneClickEvents(slice(document.getElementById('contentBtns').querySelectorAll('.dashlink')), contentDiv);
    }
    if (document.querySelectorAll('#contentBtns .resourcelink').length > 0) {
        cloneClickEvents(slice(document.getElementById('contentBtns').querySelectorAll('.resourcelink')), contentDiv);
    }
    if (document.querySelectorAll('#contentBtns .helplink').length > 0) {
        cloneClickEvents(slice(document.getElementById('contentBtns').querySelectorAll('.helplink')), contentDiv);
    }
    if (document.querySelectorAll('#contentBtns .getStartedlink').length > 0) {
        cloneClickEvents(slice(document.getElementById('contentBtns').querySelectorAll('.getStartedlink')), contentDiv);
    }
    if (document.querySelectorAll('#contentBtns .aboutlink').length > 0) {
        cloneClickEvents(slice(document.getElementById('contentBtns').querySelectorAll('.aboutlink')), document.getElementById('contentBtns').querySelectorAll('.aboutlink'));
    }
    if (document.querySelectorAll('#contentBtns .preplink').length > 0) {
        cloneClickEvents(slice(document.getElementById('contentBtns').querySelectorAll('.preplink')), contentDiv);
    }
}

function a11yModLanding() {
   // console.log("a11y mod landing");
    contentDiv.focus();

    // HIOC links to lessons
    var lessonLinks = slice(document.querySelectorAll('.modulePageBlocks'));
    if (lessonLinks) {
        for (i = 0; i < lessonLinks.length; i++) {
            
            if (!lessonLinks[i].classList.contains('examBlockDisabled')) {
                var currentButton = lessonLinks[i].querySelector('.lesson_launch_btn');
                setAttrs(currentButton, { 'tabindex': '0', 'role': 'link' });
                var func = lessonLinks[i].querySelector('.lesson_launch_btn').getAttribute('onclick').replace(/javascript:/, '');
                var funcCall = func.replace(/([^\(]+)\([^\)]+\);/, '$1');
                var funcParam = func.replace(/[^\(]+\(([^\)]+)\);/, '$1').replace(/"/, '').split(',');
                for (j = 0; j < funcParam.length; j++) {
                    funcParam[j] = parseInt(funcParam[j]);
                }
                
                
                // find object
                var fn = window[funcCall];

                $(currentButton).on("keydown", function(event) {
                    if (event.which == keyCodes.RETURN) {
                        if (typeof fn === "function") fn.apply(null, funcParam);
                        document.getElementById('lessonContent').focus();
                    }
                });
            }
        }
    }

    // HYBRID links to content
    let modLinks = slice(document.querySelectorAll('#moduleBtns div.module_btn'));
    if (modLinks) {
        for (const modLink of modLinks) {
            setAttrs(modLink, { 'tabindex': '0', 'role': 'link' });
            cloneClickEvents( [modLink] , modLink);
            
            if (modLink.getAttribute('id') == 'ebook_btn' && hasEreader !== true) {
                $('#ebook_btn').on("click keydown", openModal);
            }

            if (modLink.getAttribute('id') == 'exam_btn' && courseType.match('demo')) {
                $('#exam_btn').on("click keydown", openModal);
            }
        }
    }

    // HYBRID help videos
    let helpVids = slice(document.querySelectorAll('#moduleBtns img'));
    if (helpVids) {
        for (const helpVid of helpVids) {
            if (helpVid.hasAttribute('onclick')) {
                cloneVideoEvent(helpVid);
            }
        }
    }
}

function a11yGetStarted() {
    console.log("a11y get started");
    contentDiv.focus();
    let gsVideos = slice(document.querySelectorAll('div.description div > img'));
    if (gsVideos) {
        for (const gsVid of gsVideos) {
            if (gsVid.hasAttribute('onclick')) {
                cloneVideoEvent(gsVid);
            }
        }
    }
    
    let modLinks = slice(document.querySelectorAll('.description div.module_btn'));
    if (modLinks) {
        console.log(modLinks)
        for (const modLink of modLinks) {
            setAttrs(modLink, { 'tabindex': '0', 'role': 'link' });
            cloneClickEvents( [modLink] , modLink);
        }
    }

    let helpLink = document.querySelector('.helptextlink');
    setAttrs(helpLink, { 'tabindex': '0', 'role': 'link'});
    cloneClickEvents( [helpLink], contentDiv);
}

function a11yExamPrep() {
    console.log("a11y exam prep");
    contentDiv.focus();
    let epLinks = slice(document.querySelectorAll('#theResources div.examprep_btn'));
    if (epLinks) {
        for (const epLink of epLinks) {
            setAttrs(epLink, { 'tabindex': '0', 'role': 'link' });
            cloneClickEvents( [epLink], epLink);
        }
    }

    let epVideos = slice(document.querySelectorAll('#theResources img'));
    if (epVideos) {
        for (const epVid of epVideos) {
            if (epVid.hasAttribute('onclick')) {
                cloneVideoEvent(epVid);
            }
        }
    }
}

function a11yHelp() {
   // console.log("a11y help");
    contentDiv.focus();
    var buttons = slice(document.querySelectorAll('.resource_btn'));
    var theHelp = document.getElementById('theHelp');
    var helpAnswer = document.getElementById('portalhelpanswer');

    // set req attrs
    setAttrs(theHelp, { 'tabindex': '-1' });
    setAttrs(helpAnswer, { 'tabindex': '-1' });
    for (i = 0; i < buttons.length; i++) {
        setAttrs(buttons[i], { 'tabindex': '0', 'role': 'button' });
    }

    // clone clicks
    cloneClickEvents(buttons, theHelp);
}

function a11yDashboard() {
   // console.log("a11y dash");
    contentDiv.focus();
    var bigCircle = document.getElementById('big_circle');
    var smallCircles = slice(document.querySelectorAll('#dashSmall .circle'));
    var lessonLinks = slice(document.querySelectorAll('#dashInfo .dashgroup'));
    if (bigCircle.querySelector('span.labeled').innerText != portalSetup.Labels.Course_Number) {
        setAttrs(document.querySelector('.btooltiplarge'), { "tabindex": "0", "role": "link", });
        cloneClickEvents([bigCircle], contentDiv);
    }
    for (i = 0; i < smallCircles.length; i++) {
        setAttrs(smallCircles[i], { "tabindex": "0", "role": "link" });
    }
    cloneClickEvents(smallCircles, document.getElementById('big_circle'));
    if (lessonLinks) {
        for (i = 0; i < lessonLinks.length; i++) {
            var style = lessonLinks[i].getAttribute('style');
            if (!style.match('not-allowed')) {
                setAttrs(lessonLinks[i].querySelector('.dashlessonnumber'), { "tabindex": "0", "role": "link" });
            }
            else {
                lessonLinks.splice(i, 1);
            }
        }
        cloneClickEvents(lessonLinks, contentDiv);
    }
    
}

function a11yResources() {
   // console.log("a11y resources");
    contentDiv.focus();
    var theResources = document.getElementById('theResources');
    var resourceLinks = slice(document.querySelectorAll('.resource_btn'));

    // set required attrs
    setAttrs(theResources, { 'tabindex': '-1' });
    for (i = 0; i < resourceLinks.length; i++) {
        setAttrs(resourceLinks[i], { 'tabindex': '0', 'role': 'button' });
    }

    // clone clicks
    cloneClickEvents(resourceLinks, theResources);

    // set focus for each
    for (i = 0; i < resourceLinks.length; i++) {
        $(resourceLinks[i]).on('click', function() {
            theResources.focus();
        });
    }
}

function a11yGlossary() {
   // console.log("a11y glossary");
    var i;

    // set focus
    contentDiv.focus();

    // add role presentation to anchors that aren't links
    var anchors = slice($('.glossary_items a:not([href])'));
    for (i = 0; i < anchors.length; i++) {
        setAttrs(anchors[i], { 'role': 'presentation' });
    }
}

function a11yPQSE() {
    let returnLink = document.getElementById('returnToLsn');
    setAttrs(returnLink, { 'role': 'link'} );
    cloneClickEvents([returnLink], contentDiv);
}