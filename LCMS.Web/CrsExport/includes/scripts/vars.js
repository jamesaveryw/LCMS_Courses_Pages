/*****************************************************************/
//                           REFERENCE                           //
/*****************************************************************/
//TOC.length //--> number of modules
//TOC[i].length // --> number of lessons per module
//TOC[i][j].length // --> Number of pages...

/*****************************************************************/
/* VARIABLES ONLY                                                */
/*****************************************************************/
// ------- JSON SETUP VARS --------//
var courseType = course_settings.Portal_Setup.Course_Type;
var portalSetup = course_settings.Portal_Setup;
var lessonSetup = course_settings.Lesson_setup;
var vidlibrarySetup = vidLibrary.libraryvids;
var glossarySetup = glossary_settings.glossary_setup;

var masterDiv = document.getElementById("portalContents");
var gAddedSpace = "<div style=\"height: 200px; width:100%; background: transparent;\">&nbsp;</div>";

//Can be turned off by using the "demo" course types
var isXAPI = true;
var isSCORM = true;

// The following is now automatic - Local testing is SCORMCloud, all others are Production
var useSCORMCloud = false;
var useLOMAProd = false;
var useLOMATest = false; // Currently seems to be broken 2019-07-05, IT?

//STAGE OR PRODUCTION
//var stageGUID = "763055D18CCA4F8AB0810A834089D485"; // Will change for each course... Potential hazard: need to update for each course and need to know before testing
//var stageURL = "https://stagelearningloma.mksi-lms.net/"; // Potential hazard: this url has already changed once. What if it changes again?
var COMPANY = "loma"; // Just in case there's a switch LLGlobal or some other name...
var PRODLMS = "learning.loma.org"; // Potential hazard: url could change, but less likely than above since it's an branded url
var INTLMS = "llg-ki.mksi-lms.net"; // "integrations.loma.org";
var SCORMCLOUDLMS = "cloud.scorm.com"; // Potential hazard: url could change, but less likely than above since it's an branded url
var STAGELMS = "stage";

//LMS vars...
var lmsConnected;
var g_stillConnected;
var bIgnore301 = true;
var completionstatus;
var bStudentName = "";
var studentnamefinal = "";
var sFirstname = portalSetup.Labels.name;
var sID;

//LRS Vars...
var lrs;
var gUser;
var gUser_old;
var courseGUID;
var lrsActor;
var strTestLocaleId = portalSetup.course_locale; // "en-US"
var theLRSerror;

//State object is defined in setState
var xapiSaveStateConfig;
var xapiGetStateConfig;
var gReturnedState;

var bTotalLessons = 0;
var lessonCounts = [];
var bPageViews = [];

//parts of gUserState
var dateStarted = new Date();
var courseName = course_settings.Portal_Setup.Course_Name;

//Course Number - "LOMA 361" --> "loma361"
var courseNumber;
courseNumber = course_settings.Portal_Setup.Course_Name.toLowerCase();
courseNumber = courseNumber.replace(/ /g, '');

//bookmarks
//module -> lesson -> value ... [[1,3,5,7,9],[2,4,6,8,10],...etc]
var gBookmarks = [];

//scoresvar bGprcnt = [];
var bGprcnt = [];
var moduleScores = [];
var courseScore;

//completions
var bLessonCompletions = [];

//Intro
var termsViewed = false;
var videoViewed = false;

//Attempts
var bAttemptCount;
var bSuspendData;
var lrsCourseAttempt;
var eomAttemptCount;
var lrsCourseStatus;

//Honesty Statements...
var honestyStatements = [];

//eReader downloaded...
var hasEreader;

//Inline question information
var pgQueArray = [[],[]];
var allPgQue = [];

//RESET SCORM? -- Only false in the course. True values will come from outside intervention using Postman or some other interface
var ResetSCORMLessonStatus = false;
// ------- AUTOCOMPLETE --------//
var autoCompleteObjArray = [];

var bCurrentModule;
var bCurrentLesson;
var bCurrentPage;

var isExamPrep = false;
var isExamPage = false;
var ttttReturn = -1;

var gBook = "";

var gScrollDestination;

var bShowBookmark = true;

//-------- Browser info ----------------//
var studentBrowserInfo;
var isIOSFF = false; //Mobile Firefox

//Chinese Ordinal Numbers...
var chNumbers = ["一","二","三","四","五","六"];