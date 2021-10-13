//╔═══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Portal Setup File )>-------                                             ║
//╚═══════════════════════════════════════════════════════════════════════════════════╝
var course_settings = 
	{
		"Portal_Setup":
			{	
				//COURSE_TYPE = hioc || hybrid || pdf || shortcourseA || shortcourseB || demo-hioc || demo-hybrid || demo-pdf || demo-shortcourseA || demo-shortcourseB
				"Course_Type": "demo-shortcourseA",

				"Course_Number": "Ethnography",//"Virtual Worker Survival Skills",//"361",
				"Course_Folder": "LOMA_Ethnography", //"LOMA_VWC_2020", //"LOMA_361",			
				"Course_Name": "Ethnography: A Deeper Understanding of the Customer Experience",//"Virtual Worker Survival Skills",//"LOMA 361", // !!!!Actual line for LOMA 361!!!! PLEASE KEEP THIS SAME FORMAT --> "LOMA 361", "SRI 111", etc !!!!

				"isTranslated": "false",
				"course_locale": "en-US",
				
				"showTerms": true,
				"showIntroVideo": false,

				"LM_Logo":"loma_blue.png",//"loma_blue.png", // lomalogo, loma_blue // LLG.png is a special case for the Virtual Worker course
				"SRI_Logo": "sri_logo_rev.png",
				"Course_Title": "Ethnography: A Deeper Understanding of the Customer Experience",//"Virtual Worker Survival Skills",

				"About":{
					"Infographic": "LOMA_361_InfoGraphic.jpg",
					"Alt_Text": "An infographic describing course content by chapters using bulleted items"
				},
				"Labels":{
					"about": "About",
					"additionalDocs": "Additional Docs",
					"additionalDocuments": "Additional Documents",
					"answerKey": "Answer Key",
					"bCancel": "Cancel",
					"bClose": "Close",
					"bNo": "No",
					"bOK": "OK",
					"bookmark": "Bookmark",
					"bYes": "Yes",
					"comments": "Comments",
					"Contact": "Contact",
					"courseComplete": "Course complete",
					"courseContent": "Course Content",
					"courseProgress":"Course Progress",
					"courseGlossary": "Course Glossary",
					"currentStatus":"Current Status:", 
					"dashboard": "Dashboard",
					"ebook": "E-book",
					"email": "Email",
					"exam": " Exam",
					"examCompleted": "Exam Completed",
					"examLocked": "Exam Locked",
					"examPrep": "Exam Prep",
					"exit": "Exit",
					"expertVideos": "Expert Videos",
					"gettingStarted": "Getting Started",
					"Glossary": "Glossary",
					"gotoBookmark": "Go to Bookmark",
					"help": "Help",
					"home": "Home",
					"lesson": " Lesson ",
					"lessonComplete": "Lesson Complete",
					"lessonSummaries": "Lesson Summaries",
					"loginID": "Login ID",
					"module": "Module ",
					"myDashboard": "My Dashboard",
					"name": "Name",
					"practiceQuestions": "Practice questions",
					"privacyPolicy": "Privacy Policy",
					"resources": "Resources",
					"sampleExam": "Sample Exam",
					"SelectToGoToModule": "Select to go to Module ",// {{number}}",--> only used for Chinese courses
					"SelectToGoDirectlyToALessonExam": "Select to go directly to a lesson/exam",
					"Start": "Start",
					"startExam": "Start Exam",
					"startOver": "Start Over",
					"studyPlan": "Study Plan",
					"submit": "Submit", 
					"tableOfContents": "Table of Contents",
					"termsOfUse": "Terms of Use",
					"Transcript": "Transcript",
					"Video": "Video",
					"viewLesson": "View Lesson",
					"videoLibrary": "Video Library",
					"welcome": "Welcome",
					"youLeftOnPage": "You left on page ",// {{number}}",--> only used for Chinese courses
				},

				"Alerts":{
					"IntroVidTerms":{
						"startPara": "<p style=\"width:100%;\"><b>Welcome, ",
						"finishPara": ".</b> To begin this training, you must complete the two items below.</p>",
						"WelcomeVideoBtn": "Welcome Video",
						"TermsOfUseBtn": "Terms of Use Agreement"
					},

					"linkExamCompleted": "This exam has been completed.",
					
					"pleaseCompleteLessons": "Please complete all lessons in order to enable the exam link.",
					
					"btnExamComplete": "This button has been disabled. \n\nThe exam has been completed.",
					
					"btnPleaseCompleteLessons": "This button is disabled. \n\nPlease complete the remaining lessons \nin this module to enable the exam button.",
					
					//"LRSError": "There was an error saving your progress. \n\nPlease close the course window and relaunch it before attempting to continue.", //original line
					//"LRSError": "There was an error saving your progress. \n\n {{lrserror}} \n\n If the problem persists, please contact us at education@loma.org\n\n", // intermediate line
					//"LRSError": "<div style=\"padding:10px; background:red; color:white; margin-top:-1em; margin-bottom: 1em;\">" + response.status + ": " + response.responseText + "</div>"

					"LRSError": {
						"Header": "Something went wrong", //"An error occured", //"There was an error saving your progress.",
						"Body": "<p>Please tell us by using the button below.</p><p>Then, close the course and try again.<br>If the problem persists, please contact us at <a href=\"mailto:education@loma.org\">education@loma.org</a></p>",//"<div style=\"padding:10px; background:red; color:white; margin-top:-1em; margin-bottom: 1em;\">{{lrserror}}</div>",
						"Btn": "Report Error",
						"BtnB": "Close Window",
						"emailTellMore": "Please tell us more here",
						"emailDoNotAlter": "PLEASE DO NOT ALTER OR DELETE THE FOLLOWING INFORMATION.",
						"emailWeNeedThisInfo": "WE NEED THIS INFORMATION TO PROPERLY DIAGNOSE THE ERROR."
					},

					"DoNotAgree":{
						"Header": "Acceptance of the Honesty Statement is required<!-- to continue-->.",
						"Body": "If you do not accept the Honesty Statement, contact LOMA at <a href=\"mailto: education@loma.org\">education@loma.org</a>  to un-enroll for this course.",
						"Btn" : "Return to the course"
					},

					"integrityIncomplete":{
						"Header": "Acceptance of the entire Integrity Statement is required.",
						"Body": "You must accept all points of the Integrity Statement.<br>If you do not accept the entire Integrity Statement, contact LOMA at <a href=\"mailto: education@loma.org\">education@loma.org</a> to un-enroll for this course."
					},

					"HaveEreader": "Do you already have a supported e-reader installed?",

					"ContactError": {
						"Header": "There was a problem sending the information.",
						"Body": "Please check your internet connection and try again or contact us by phone at 1-800-ASK-LOMA or by email at <a href=\"mailto:education@loma.org\">education@loma.org</a>"
					},

					"ContactSuccess": {
						"Header": "Thank you!",
						"Body": "A LOMA representative will contact you shortly."
					},

					"shortCourseIncomplete":{
						"Header": "Sorry, you aren't done yet.",
						"Body": ""//Created by the script... NEED TO MOVE IT SOMEWHERE THAT CAN BE TRANSLATED
					},

					"demoMode":{
						"Header": "Demo Mode",
						"Body": "Access to this functionality has been disabled in this mode."
					},
					
					"copyright":{
						"Header": "Notification to U.S. Copyright Office",
						"Body": "Access to this functionality has been disabled in course files submitted to the U.S. Copyright Office.<br>A separate Copyright Application has been filed for the content normally accessed via this link."
					}
				},

				"ReturnTo":{
					"returnToModule": "&larr; Return to Module",
					"returnToLesson": "&larr; Return to Lesson",
					"returnToExamPrep": "&larr; Return to Exam Prep",
				},

				"PlaceholderText":{
					"glossarySearch": "Enter a search term here...",
					"glossaryFeedback": "Sorry, no matching results",
					"emailAddress": "janedoe@loma.org",
					"emailDescription":"Please describe your concern or issue here..."
				},

				"ContactWarnings":{
					"requiredEmail":"Please enter an email address.",
					"validEmail":"Please enter a <em>valid</em> email address.",
					"requiredStudentname": "Please enter your name",
					"requiredLoginID":"Please enter your login id",
					"alphaLoginID": "Letters, numbers, and underscores only please",
					"requiredComments": "All fields are required"
				},

				"TermsPrivacy":{
					"YouMustAccept": "You must accept the above Agreement to use this Course Portal.",
					"AcceptBtn": "Accept", // DD NOT TRANSLATE THIS LINE!!!
					"CloseBtn": "Close", // DD NOT TRANSLATE THIS LINE!!!
					"AcceptAlt": "接受",
					"CloseAlt": "關閉"
				},
				"Copyright":{
					"partOne": "Copyright &copy; ",
					"partTwo": ", LL Global, Inc. All Rights Reserved."
				},
				
				"Hero_Image": "Ethnography_Hero.jpg",

				"Welcome_text": {
					"Intro_Copy": [
						//Virtual Worker short course
							//"Employees who work from remote locations need vital skills to succeed in a non-traditional work environment. This course equips you, a virtual worker, with the skills you need to remain productive, focused and connected.",
						],
						
 						"shortcourse": [
							//Virtual Worker short course
							"Anthropologists in business use ethnography to gain deep customer insights. Whether you’re developing products or delivering customer service, it helps to empathize. This short activity will introduce you to the field of ethnography. You’ll learn about approaches and goals, and discover how life insurance companies can use ethnography to gain a deeper understanding of their products and services through the eyes of their customers. ",
						], 
					},
					
					"Dashboard_Text":"<p>This dashboard shows your progress through ACS 101. The <b>101</b> gauge shows how far you’ve gotten in the entire course. The <b>“M”</b> gauges show your progress through each Module.</p><p>Select any “M” gauge to see your status for the lessons and exam in that module. From this view, you can launch any of those items directly, or you can jump to the landing page for that module for an overview.</p>",

					/* "PDF_Dashboard_Text": "<p>This dashboard shows your progress through the course. The gauge shows how far you’ve gotten in the entire course. Check marks indicate which module exams you have passed and when.</p><p>Select any Module link to jump to a landing page with the content and exam for that module.</p>", */
				},

	"GettingStartedContent":{
		"Header": "Getting Started",
		"KotobeeReader": "Kotobee Reader",
		"AppleBooks": "Apple Books",

		"IntroParagraphs":[
			"<p style=\"width:100%; margin-bottom: 30px;\">The course content is delivered via an interactive e-book using one of our free supported e-readers: <a href=\"https://www.kotobee.com/en/products/reader\" class=\"kotobeeDownload\">Kotobee Reader</a><sup >&trade;</sup> or <a href=\"https://itunes.apple.com/us/app/apple-books/id364709193?mt=8\" class=\"appleDownload\">Apple Books</a><sup>&reg;</sup> (formerly iBooks; for Apple products only). Follow the steps below to install the correct e-reader on your device and download content to the e-reader:</p>",

			"<p style=\"width:100%;\"><b>Step 1:</b> Download and install an e-reader to your device(s).<br>See full details for <a href=\"pdf/Install-Setup.pdf\" target=\"pdfwindow\">Kotobee Reader</a> or <a href=\"pdf/Install-Setup.pdf\" target=\"pdfwindow\">Apple Books</a>.</p><div><img src=\"includes/images/Install_And_Setup.png\" style=\"cursor:pointer;\"onclick=\"showVid(vidLibrary.helpVideos.installation)\"></div>", //{Kotobee Reader}  {Apple Books}

			"<p style=\"width:100%; margin-top: 30px;\"><b>Step 2:</b> Go to each Module’s landing page to  download that Module’s e-book file (.epub) onto your e-reader.</p>",//{Module 1}	{Module 2}	{Module 3}

			"<p style=\"width:100%; margin-top: 30px;\">These videos explain the features of LOMA e-books using Kotobee Reader or Apple Books. To learn more, visit the <span class=\"helptextlink\">Help</span> page.</p><div><img src=\"includes/images/Kotobee_Features.png\" style=\"margin-right:20px; cursor:pointer;\" onclick=\"showVid(vidLibrary.helpVideos.kotobeeFeatures)\"><img src=\"includes/images/Apple_Features.png\" style=\"cursor:pointer;\"onclick=\"showVid(vidLibrary.helpVideos.appleBooksFeatures)\"></div>",

			"<p style=\"width:100%; margin-top: 30px;\">The entire book is available in PDF format, though it does not contain the interactive features of the e-book.</p>"
		], 
	},
	"CourseContentContent":
		{
			"Module": " Module ",
			//"Ebook": " E-book", //NOT USED
			//"EntireEbook": "Entire E-book", //NOT USED
			"EntirePDF": "Entire book PDF",
			"EntirePDFtoc": "Entire Table of Contents",
			//"KotobeeReader": "Kotobee Reader", //NOT USED
			"AnswerKeyPDF": "pdf/361-TXTPDF-19-AnswerKey.pdf",
			"StudyPlanPDF": "pdf/StudyPlans.pdf",
			"pdflinks":[
						{"link":"302-TXTPDF-19_M1.pdf"}, //NOT USED
						{"link":"302-TXTPDF-19_M2.pdf"}, //NOT USED
						{"link":"302-TXTPDF-19_M3.pdf"}, //NOT USED
						{"link":"361-TXTPDF-19.pdf"},
						{"link":"361-TXTPDFTOC-19.pdf"} // ONLY 361
			],
			"ebooklinks":[
						{"link":"LOMA361_Module1.epub"}, // M1
						{"link":"LOMA361_Module2.epub"}, // M2
						{"link":"LOMA361_Module3.epub"}, // M3
						{"link":"LOMA361.epub"} // WHOLE
			]
		},
		
	"Lesson_setup":[
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
		//-------<( Module 1 )>-------		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
			{
			"Header":"Module 1: ",
			
			"Title" : "Creating a Customer-Centric Culture",

			"Image": "ACS101_M1.png",
			
			"Paragraph":"What is a customer-centric culture? Why do insurers prioritize providing exceptional customer experiences?<br><br>In this module, you’ll learn about",
			
			"List":[
						{"List_info":"The various types of customers and their expectations and perceptions"},
						{"List_info":"The elements of a customer-centric culture"},
						{"List_info":"How insurers use voice of the customer (VOC) data"},
						{"List_info":"The customer journey and key touchpoints on that journey"},
						{"List_info":"The importance of making ethical decisions"},
						{"List_info":"How insurers protect customers from fraud, financial exploitation, and cybercrime"}
					],
					
			//HIOC
			"lesson_paragraph":[
				{"MLP_text":"In this lesson, we describe the types of customers that insurance company employees may serve, the factors that influence customer expectations and perceptions, and the challenges involved in delivering exceptional customer service."},
				
				{"MLP_text":"In this lesson, we identify the components of a customer-centric culture and describe the benefits and challenges of creating such a culture in an insurance company."},
				
				{"MLP_text":"This lesson describes how insurance companies use voice of the customer (VOC) data to drive change. The lesson also describes the customer journey and key touchpoints on that journey."},
				
				{"MLP_text":"This lesson explains why ethical conduct is important for insurance companies. We identify red flags that can help employees identify fraudulent acts, financial exploitation of seniors, and the threat of cybercrime."}
			],

			"Exam_Dialog_Paragraph":"You must complete all lessons in this module to unlock the exam.",	

			//HYBRID
			"Instructions":[
					"Select <b>Module 1 e-book</b> to download the content to your e-reader.",
					
					"The end of each chapter contains practice exam questions to check your understanding. Those questions are repeated via the <b>Practice Question</b> links below.",
					
					//self-proctored
					"<!--We recommend you review a few particularly <b>Tough Topics</b> in this module. Then, as-->As a final tune-up, try the <b>Sample Exam</b>, which mimics the actual exam for this module. You can also visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

					//proctored
					"<!--We recommend you review a few particularly <b>Tough Topics</b> in this module.--> You can <!--also--> visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

					"When you are ready to take the exam for this module, select <b>Module 1 Exam</b>.",
					
					"Note – Module exams are timed, and you have only two attempts to pass each exam!"
				],
			},
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
		//-------<( Module 2 )>-------				//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
			{
			"Header":"Module 2:",
			
			"Title" : "How Do We Meet Customer Needs?",

			"Image": "ACS101_M2.png",
			
			"Paragraph":"How can you best understand your customers’ needs? This module describes ways to communicate effectively with customers and, when needed, manage their behavior.<br><br>In this module, you’ll learn about",
			
			"List":[
				{"List_info":"Active listening skills and how they are used to improve customer interactions"},
				{"List_info":"Ways to avoid problems with verbal and nonverbal communication"},
				{"List_info":"Emotional intelligence skills that increase self-awareness and empathy"},
				{"List_info":"Cultural differences that may affect communication"},
				{"List_info":"The benefits of acting as a customer experience advocate"},
				{"List_info":"Appropriate ways to effectively manage interactions with customers"}
			],

			//HIOC
			"lesson_paragraph":[
				{"MLP_text":"This lesson explains how techniques such as identifying perceptual errors, active listening, and using paraphrasing and questioning techniques can help employees better understand customers’ needs. "},
				
				{"MLP_text":"This lesson identifies the elements of the communication process and provides steps to improve verbal and nonverbal communication."},
				
				{"MLP_text":"This lesson describes emotional intelligence skills that increase empathy, identifies cultural differences that may affect communication, and describes the role of a customer experience advocate."},
				
				{"MLP_text":"In this lesson, we describe the appropriate way to manage specific customer interactions, including using empathy and conflict management techniques to calm upset or angry customers and create appropriate solutions for them."}
			],

			"Exam_Dialog_Paragraph":"You must complete all lessons in this module to unlock the exam.",

			//HYBRID
			"Instructions":[
					"Select <b>Module 1 e-book</b> to download the content to your e-reader.",
					
					"The end of each chapter contains practice exam questions to check your understanding. Those questions are repeated via the <b>Practice Question</b> links below.",
					
					//self-proctored
					"<!--We recommend you review a few particularly <b>Tough Topics</b> in this module. Then, as-->As a final tune-up, try the <b>Sample Exam</b>, which mimics the actual exam for this module. You can also visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

					//proctored
					"<!--We recommend you review a few particularly <b>Tough Topics</b> in this module.--> You can <!--also--> visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

					"When you are ready to take the exam for this module, select <b>Module 1 Exam</b>.",
					
					"Note – Module exams are timed, and you have only two attempts to pass each exam!"
				],
			},			
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
		//-------<( Module 3 )>-------			//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
			{
			"Header":"Module 3:",
			
			"Title" : "Managing Customer Interactions",

			"Image": "ACS101_M3.png",
			
			"Paragraph":"How can you best interact with customers? This module describes effective strategies for verbal and written interactions, as well as time and stress management tips.<br><br>In this module, you’ll learn about",

			"List":[
				{"List_info":"The importance of following established procedures for various interactions"},
				{"List_info":"How to deliver clear, concise, and accurate information"},
				{"List_info":"How to use different communication channels effectively"},
				{"List_info":"The benefits of setting goals, using priority lists, and reducing stress and distress"}
			],

			//HIOC
			"lesson_paragraph":[
				{"MLP_text":"This lesson explains the importance of following established procedures and effective methods for handling a variety of verbal interactions."},
				
				{"MLP_text":"In this lesson, we explore ways to use written communication including emails, letters, instant messaging, and social media to communicate effectively with customers and enhance their experiences."},

				{"MLP_text":"This lesson explains the benefits of using techniques such as setting goals and creating priority lists. In addition, we describe some methods for managing stress."}
			],	

			"Exam_Dialog_Paragraph":"You must complete all lessons in this module to unlock the exam.",

			//HYBRID
			"Instructions":[
					"Select <b>Module 1 e-book</b> to download the content to your e-reader.",
					
					"The end of each chapter contains practice exam questions to check your understanding. Those questions are repeated via the <b>Practice Question</b> links below.",
					
					//self-proctored
					"<!--We recommend you review a few particularly <b>Tough Topics</b> in this module. Then, as-->As a final tune-up, try the <b>Sample Exam</b>, which mimics the actual exam for this module. You can also visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

					//proctored
					"<!--We recommend you review a few particularly <b>Tough Topics</b> in this module.--> You can <!--also--> visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

					"When you are ready to take the exam for this module, select <b>Module 1 Exam</b>.",
					
					"Note – Module exams are timed, and you have only two attempts to pass each exam!"
				],
			},	
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
		//-------<( Module 4 )>-------			//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
			{
			"Header":"Module 4:",
			
			"Title" : "Evaluating Customer Service",

			"Image": "ACS101_M4.png",
			
			"Paragraph":"How do insurers evaluate customer service processes and interactions?<br><br>In this module, you’ll learn about",
			
			"List":[
				{"List_info":"The role of customer service objectives, strategies, and performance standards"},
				{"List_info":"How insurers manage progress toward their targets and goals using key performance indicators"},
				{"List_info":"Process improvement methods insurers use"},
				{"List_info":"Operational and service metrics and how insurance companies use them to evaluate their customer service system and service provider performance"}
			],

			//HIOC
			"lesson_paragraph":[
				{"MLP_text":"This lesson describes how insurers use performance standards, benchmarks, and key performance indicators to monitor progress and measure the success of company objectives. In addition, the lesson explains the use of process management and process improvement methods to ensure that processes are efficient and effective."},
				
				{"MLP_text":"In this lesson, we distinguish between operational and service metrics and explain how insurers use them to measure various customer service interactions. We also describe how insurers use customer surveys, observation, and monitoring to evaluate their customer service systems."}
			],

			"Exam_Dialog_Paragraph":"You must complete all lessons in this module to unlock the exam.",	

			//HYBRID
			"Instructions":[
					"Select <b>Module 1 e-book</b> to download the content to your e-reader.",
					
					"The end of each chapter contains practice exam questions to check your understanding. Those questions are repeated via the <b>Practice Question</b> links below.",
					
					//self-proctored
					"<!--We recommend you review a few particularly <b>Tough Topics</b> in this module. Then, as-->As a final tune-up, try the <b>Sample Exam</b>, which mimics the actual exam for this module. You can also visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

					//proctored
					"<!--We recommend you review a few particularly <b>Tough Topics</b> in this module.--> You can <!--also--> visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

					"When you are ready to take the exam for this module, select <b>Module 1 Exam</b>.",
					
					"Note – Module exams are timed, and you have only two attempts to pass each exam!"
				],
			},	
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
		//-------<( Module 5 )>-------			//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
			{
			"Header":"Module 5:",
			
			"Title" : "Lorem ipsum dolores set",

			"Image": "LOMA_302_hero.png",
			
			"Paragraph":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",

			//HIOC
			"lesson_paragraph":[
				{"MLP_text":"05 01 This is text for the description of each lesson module dialog"},
				{"MLP_text":"05 02 This is text for the description of each lesson module dialog"},
				{"MLP_text":"05 03 This is text for the description of each lesson module dialog"},
			],

			"List":[
				{"List_info":"Mod 5 list 1"},
				{"List_info":"Mod 5 list 2"},
				{"List_info":"Mod 5 list 3"},
				{"List_info":"Mod 5 list 4"},
				{"List_info":"Mod 5 list 5"},
			],

			"Exam_Dialog_Paragraph":"You must complete all lessons in this module to unlock the exam.",	

			//HYBRID
			"Instructions":[
					"Select <b>Module 1 e-book</b> to download the content to your e-reader.",
					
					"The end of each chapter contains practice exam questions to check your understanding. Those questions are repeated via the <b>Practice Question</b> links below.",
					
					//self-proctored
					"<!--We recommend you review a few particularly <b>Tough Topics</b> in this module. Then, as-->As a final tune-up, try the <b>Sample Exam</b>, which mimics the actual exam for this module. You can also visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

					//proctored
					"<!--We recommend you review a few particularly <b>Tough Topics</b> in this module.--> You can <!--also--> visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

					"When you are ready to take the exam for this module, select <b>Module 1 Exam</b>.",
					
					"Note – Module exams are timed, and you have only two attempts to pass each exam!"
				],
			},
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
		//-------<( Module 6 )>-------			//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
			{
			"Header":"Module 6:",
			
			"Title" : "Lorem ipsum dolores set",

			"Image": "LOMA_302_hero.png",
			
			"Paragraph":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",

			"List":[
				{"List_info":"Mod 6 list 1"},
				{"List_info":"Mod 6 list 2"},
				{"List_info":"Mod 6 list 3"},
			],
			
			//HIOC
			"lesson_paragraph":[
				{"MLP_text":"06 01 This is text for the description of each lesson module dialog. Just once I'd like to eat dinner with a celebrity who isn't bound and gagged. Bender, hurry! This fuel's expensive! Also, we're dying! Yes. You gave me a dollar and some candy."},
				{"MLP_text":"06 02 This is text for the description of each lesson module dialog"},
			],
			
			"Exam_Dialog_Paragraph":"You must complete all lessons in this module to unlock the exam.",	

			//HYBRID
			"Instructions":[
					"Select <b>Module 1 e-book</b> to download the content to your e-reader.",
					
					"The end of each chapter contains practice exam questions to check your understanding. Those questions are repeated via the <b>Practice Question</b> links below.",
					
					//self-proctored
					"<!--We recommend you review a few particularly <b>Tough Topics</b> in this module. Then, as-->As a final tune-up, try the <b>Sample Exam</b>, which mimics the actual exam for this module. You can also visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

					//proctored
					"<!--We recommend you review a few particularly <b>Tough Topics</b> in this module.--> You can <!--also--> visit <b>Exam Prep</b> for additional resources to help you prepare for the exam.",

					"When you are ready to take the exam for this module, select <b>Module 1 Exam</b>.",
					
					"Note – Module exams are timed, and you have only two attempts to pass each exam!"
				],
			},				
		],
		
	"Additional_Docs":[
		/* {
			"name": "Active Listening Job Aid",
			"doc": "Active_Listening_Job_Aid.pdf"
		},
		{
			"name": "Call Evaluation Form",
			"doc": "Call_Evaluation_Form.pdf"
		},
		{
			"name": "Paraphrasing Guidelines",
			"doc": "Paraphrasing_Guidelines.pdf"
		} */
	],
	
	"Lesson_Summaries": false,
	"Answer_Key": false,
	"Course_Glossary": false,
	"Study_Plan": false,
	"HasExitVideo": false,

	"Resources":
	{
		"Header":"Resources",
		"IntroParagraph": "This page contains material that you might have missed in the lessons. It is collected here for your convenience.",

		// <ul>"
		"IntroLIs":{
			"Lesson_Summaries":"<li><span class=\"boldpagelink\">Lesson Summaries</span>: short pdf summaries of some of the most important points in each lesson</li>", //hioc
			
			"Expert_Videos": "<li><span class=\"boldpagelink\">Expert Videos</span>: Do you want to re-watch some of the Expert commentaries that appear in the course? Here they all are in one place.</li>", //hioc
			
			"Additional_Docs": "<li><span class=\"boldpagelink\">Additional Docs</span>: additional printable documents included in the course modules</li>", // hioc

			"Study_Plan": "<li><span class=\"boldpagelink\">Study Plan</span>: Use this PDF to help you set goals for completing this course.</li>", // hioc

			"Figure_Videos": "<li>The <span class=\"boldpagelink\">Video Library</span> shows all of the animated figures presented in the e-book.</li>",// ebook
			
			"Answer_Key": "<li>The <span class=\"boldpagelink\">Answer Key</span> reveals the answers – and answer choice explanations – for all of the \"What do you think?\" and \"Let’s Review\" and Practice Questions presented in the e-book.</li>",// ebook
			
			"Glossaary_Link": "<li>The <span class=\"boldpagelink\">Course Glossary</span> contains all of the key terms and definitions used in this course. Visit the LOMA website to see the complete LOMA Glossary.</li>"// ebook
		}
		//</ul>
	},
	"Glossary":
	{
		"Header": "Course Glossary",
		"Intro": "Listed below are all the glossary terms, with the definitions, used in this course. Visit the LOMA website to see the full <a href=\"https://www.loma.org/News/Glossary.aspx\" target=\"_blank\">LOMA Glossary</a>.",
		"SubIntro": "<em>Ethnography Glossary</em> Copyright &copy; 2021 LL Global, Inc. All rights reserved. Copying, downloading, reproducing, republishing, transmitting, or otherwise disseminating this content in any form or by any means, electronic or mechanical, without permission from LL Global is a violation of U.S. federal law and international law."
	},
    
    "Exam_Prep":
    {
        "Header": "Exam Prep",
		
		"Description": [
			//0 - HYBRID
			"<p style=\"text-align: left; margin-bottom: 20px; width: 100%;\">This page contains resources to help you prepare for the Module Exams.</p>",

			//1 - PDF
			"<p style=\"text-align: left; margin-bottom: 20px; width: 100%;\">This page contains resources to help you prepare for the Exam.</p>",
		
			//2 - HYBRID
			"<ul style=\"width: 100%; margin:0; padding:0 0 0 1em;\"><li><span class=\"boldpagelink\">Plans, Tips, and Strategies</span> to help you become test wise.</li><li><span class=\"boldpagelink\">Practice Questions</span> test your understanding of the course content with exam-style questions from each chapter.</li><!--<li><span class=\"boldpagelink\">Top 10 Tough Topics</span> review the topics that students historically find most challenging on the exams.</li>--><li><span class=\"boldpagelink\">Sample Exams</span> for each module mimic the experience—time, length, and question format&mdash;of taking the actual module exams.</li></ul>",

			//3 - PDF
			"<ul style=\"width: 100%; margin:0; padding:0 0 0 1em;\"><li><span class=\"boldpagelink\">Plans, Tips, and Strategies</span> to help you become test wise.</li><li><span class=\"boldpagelink\">Practice Questions</span> test your understanding of the course content with exam-style questions from each chapter.</li><li><span class=\"boldpagelink\">The Sample Exam</span> mimics the experience—time, length, and question format&mdash;of taking the actual exam.</li></ul>",

			//4 - HYBRID
			"<p style=\"text-align: left; margin-bottom: 20px; width: 100%;\">When you are ready to take the actual exam for any module, use the links at the top of the course or in the sliding menu to the right to return to the Module landing page to launch the Module Exam.</p>",

			//5 - HYBRID
			"<p style=\"text-align: left; margin-bottom: 20px; width: 100%;\"><span style=\"color: #FF0000;font-style:italic;\">Warning:</span> If you open the course on more than one device at a time, you risk losing your progress. Make sure to Exit the course using the Exit icon <img src=\"includes/images/glyphicons-389-exit.png\" alt=\"exit icon\"> or the course menu in the course portal after each session.</p>",

			//6 - HYBRID
			"Remember – Module exams are timed, and you have only two attempts to pass each exam!",

			//7 - HYBRID
			"Ready to take the Module Exam? Learn more here!",

			//8 - PDF
			"Ready to take the Exam? Learn more here!"

		],

		"indexOFLabel":{
			"Chapter": "Chapter",
			"SampleExam": "Sample Exam",
			"TTTT": "Top 10 Tough Topics",
			"PracticeQuestions": "Practice Questions",
			"PlansTipsStrategy": "Plans Tips Strategy"
		},
        "Sections":[
            {
                "title": "Plans Tips Strategy",
                "buttons":[
                    {
                        "prepLabel": "Study Plan",
                        "link": "LOMA_361_Study_Plan.pdf"
                    },
                    {
                        "prepLabel": "Study Tips",
                        "link": "Study_Tips-SelfProctored_2019.pdf"
					},
					{
                        "prepLabel": "Study Tips",
                        "link": "Study_Tips-Proctored_2019.pdf"
                    },
                    {
                        "prepLabel": "Policies/Procedures",
                        "link": "Exam_Policies_and_Procedures_(c)_2019.pdf"
                    }
                ]
            },
            {
                "title": "Practice Questions",
                "buttons":[
					{
						"module": "1",
						"prepLabel": "Chapter 1",
						"modLabel": "Ch.1 Practice",
						"link": "LOMA_361_PQ_0_1.html"
					},
					{
						"module": "1",
						"prepLabel": "Chapter 2",
						"modLabel": "Ch.2 Practice",
						"link": "LOMA_361_PQ_0_2.html"
					},
					{
						"module": "1",
						"prepLabel": "Chapter 3",
						"modLabel": "Ch.3 Practice",
						"link": "LOMA_361_PQ_0_3.html"
					},
					{
						"module": "1",
						"prepLabel": "Chapter 4",
						"modLabel": "Ch.4 Practice",
						"link": "LOMA_361_PQ_0_4.html"
					},
					{
						"module": "2",
						"prepLabel": "Chapter 5",
						"modLabel": "Ch.5 Practice",
						"link": "LOMA_361_PQ_0_5.html"
					},
					{
						"module": "2",
						"prepLabel": "Chapter 6",
						"modLabel": "Ch.6 Practice",
						"link": "LOMA_361_PQ_0_6.html"
					},
					{
						"module": "2",
						"prepLabel": "Chapter 7",
						"modLabel": "Ch.7 Practice",
						"link": "LOMA_361_PQ_0_7.html"
					},
					{
						"module": "2",
						"prepLabel": "Chapter 8",
						"modLabel": "Ch.8 Practice",
						"link": "LOMA_361_PQ_0_8.html"
					},
					{
						"module": "2",
						"prepLabel": "Chapter 9",
						"modLabel": "Ch.9 Practice",
						"link": "LOMA_361_PQ_0_9.html"
					},
					{
						"module": "2",
						"prepLabel": "Chapter 10",
						"modLabel": "Ch.10 Practice",
						"link": "LOMA_361_PQ_0_10.html"
					},
					{
						"module": "2",
						"prepLabel": "Chapter 11",
						"modLabel": "Ch.11 Practice",
						"link": "LOMA_361_PQ_0_11.html"
					},
					{
						"module": "3",
						"prepLabel": "Chapter 12",
						"modLabel": "Ch.12 Practice",
						"link": "LOMA_361_PQ_0_12.html"
					},
					{
						"module": "3",
						"prepLabel": "Chapter 13",
						"modLabel": "Ch.13 Practice",
						"link": "LOMA_361_PQ_0_13.html"
					},
					{
						"module": "3",
						"prepLabel": "Chapter 14",
						"modLabel": "Ch.14 Practice",
						"link": "LOMA_361_PQ_0_14.html"
					},
					{
						"module": "3",
						"prepLabel": "Chapter 15",
						"modLabel": "Ch.15 Practice",
						"link": "LOMA_361_PQ_0_15.html"
					},
					{
						"module": "3",
						"prepLabel": "Chapter 16",
						"modLabel": "Ch.16 Practice",
						"link": "LOMA_361_PQ_0_16.html"
					}
                ]
            },
            {
                "title": "Top 10 Tough Topics",
                "buttons":[
                    {
                        "prepLabel": "Top 10 Tough Topics",
                        "link": "TTTT"
                    }
                ]
            },
            {
				"title": "Sample Exam",
				"titlePlural": "Sample Exams",
                "buttons":[
                    {
                        "prepLabel": "Sample Exam",
                        "link": "LOMA_361_SE.html"
                    },
                    {
                        "prepLabel": "Mod 1 Sample Exam",
                        "link": "LOMA_361_SE_1.html"
                    },
                    {
                        "prepLabel": "Mod 2 Sample Exam",
                        "link": "LOMA_361_SE_2.html"
					},
					{
                        "prepLabel": "Mod 3 Sample Exam",
                        "link": "LOMA_361_SE_3.html"
					},
                ]
            },
        ]
    },
	"HelpSection":{
		"Header": "Help",
		"Intro": "<p style=\"text-align: left; margin-bottom: 20px; width:100%;\">Click \"Portal Help\" for questions about the way the course works. <br>Click on \"Course Help\" for answers about the content.</p>",
		//"portalHelp": "Portal Help",// no longer used...
		//"courseHelp": "Course Help",//no loner used...
		"helpSections": {
			"courseCompleteP": "Course Completion (Proctored)",
			"courseCompleteSP": "Course Completion (Self-Proctored)",
			"ereaders": "E-Readers/E-Books (Proctored and Self-Proctored)",
			"examCompP": "Exam Component (Proctored)",
			"examCompSP": "Exam Component (Self-Proctored)",
			"studyTipsP": "Study Tips (Proctored)",
			"studyTipsSP": "Study Tips (Self-Proctored)",
			"techReq": "Technical Requirements (Proctored and Self-Proctored)",
		},
		'helpTopics': "&#8617; Help Topics",
	},
	"EndOfCourse":{
		"passedMsg": "Congratulations!<br>You've completed",
		"shortCourseEOC":"Congratulations!<br>You completed the course!<!--<div class=\"eoctext\">Want to learn more about retirement security? <a href=\"https://learning.loma.org/public/ContentDetails.aspx?id=18A529AB11854E8B9BE9A168CDBE9C78\" target=\"_blank\">Check out SRI 111 - Retirement Fundamentals</a> for foundational knowledge about retirement needs, the retirement system, and how the financial services industry provides retirement solutions.</div>-->",//Specific to CARES ACT!!!!
		"whatsNextBtn": "What's Next",
		"whatsNextMsg": "What’s next for your professional development? Learn more about all the educational opportunities available from LOMA.",
		"surveyBtn": "Survey",
		"surveyMsg": "Please take a moment to share your feedback about this course through our End of Course Survey.",
		"videoMsg": "You’ve completed the first course in the FSRI program. What’s next?"
	},
	"FailDialog":{
		"failHeader": "Sorry, you did not pass this module exam.",
		"failMessage": "<p style=\"text-align:left; width: 100%;\">Because this was your second attempt for this module, your learning record has been updated to show a failing grade for this course.</p><p style=\"text-align:left; width: 100%;\">To try again, you will need to re-enroll for the course. Any progress from your previous enrollment will be lost &mdash; you will need to successfully complete all Module exams through your new enrollment to pass the course.</p><p style=\"text-align:left; width: 100%;\">If you re-enroll within six months, you will be eligible for a discounted enrollment fee.</p> ",
		"failCloseBtn": "Return to LOMA Learning"
	},
	"IntegrityStatement":{
		"Header": "Integrity Statement",
		"theStatement": "<p>This course is  designed to improve your job knowledge. Your company&rsquo;s support of your participation  in this course is an investment in your professional development. Completion of  LOMA courses and designations represents a professional achievement, and all  participants benefit when the standards of honesty and integrity are upheld. It  is therefore imperative that you act with honesty and integrity in representing  yourself and your company as you complete the examinations for this course. </p><p>By checking the  boxes below, I agree that:</p><ul class=\"honest\"><li><label class=\"bContainer\">I am enrolled in this course and I am eligible  to take the following exam.<input type=\"checkbox\" id=\"bIntegrity1\"><span class=\"bCheckmark\"></span></label></li><li><label class=\"bContainer\">I will be honest and act with integrity in all endeavors related to the  completion of this course and agree that <input type=\"checkbox\" id=\"bIntegrity2\"><span class=\"bCheckmark\"></span></label><ul><li><label class=\"bContainer\">I will not cheat on any exams or permit another student to cheat from my work;<input type=\"checkbox\" id=\"bIntegrity2a\"><span class=\"bCheckmark\"></span></label></li><li><label class=\"bContainer\">I  will not improperly acquire or share knowledge of the contents of an exam or  obtain access through stealing or other unauthorized means;<input type=\"checkbox\" id=\"bIntegrity2b\"><span class=\"bCheckmark\"></span></label></li><li><label class=\"bContainer\">I  will not use any outside sources including, but not limited to, study materials,  reference materials, other unauthorized materials, or any digital or mobile  devices during an exam.<input type=\"checkbox\" id=\"bIntegrity2c\"><span class=\"bCheckmark\"></span></label></li></ul></li><li><label class=\"bContainer\">LOMA regularly gathers demographic and  performance data for the purpose of statistical research projects and to  monitor students&rsquo; compliance with the elements of professional behavior noted  in this integrity statement.<input type=\"checkbox\" id=\"bIntegrity3\"><span class=\"bCheckmark\"></span></label></li><li><label class=\"bContainer\">LOMA works in partnership with our  member companies to ensure all learners adhere to standards of integrity in  completing course examinations<input type=\"checkbox\" id=\"bIntegrity4\"><span class=\"bCheckmark\"></span></label></li><li><label class=\"bContainer\">I will  report any suspected exam violations to LOMA&rsquo;s Office of the Registrar  immediately. Any violation of this Integrity Statement shall result in the loss  of course credit and any person suspected of engaging in misconduct on an exam  or assignment in this course will be subject to LOMA&rsquo;s <a href=\"https://www.loma.org/helpcenter/policies/dueprocess.aspx\" target=\"_blank\">Due Process  Policy</a>.<input type=\"checkbox\" id=\"bIntegrity5\"><span class=\"bCheckmark\"></span></label></li></ul><div style=\"text-align: center;\"><div class=\"hiocexam_btn_disabled\" id=\"exam_btn\">Start the exam!</div></div>"
	},
	"ContactSection": {
		"Header": "Contact Us",
		"Intro": "<p style=\"width:100%\">Confused about a topic? Want clarification or more information about something you read in the course? Does something in the course seem wrong? </p>",
		"Directions": "* You must fill out this form completely",
	},

};