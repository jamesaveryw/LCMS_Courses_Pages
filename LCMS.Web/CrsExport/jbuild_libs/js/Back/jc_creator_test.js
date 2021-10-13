var jcc_Comp_Creator;
var jcc_test;
var hrData;
var cmpData;
var Hero_Image_Size;
var Jcc_Comp_Maker;
var Component_Engine;
var List_Array = [];
var List_Text_Array = [];
var divider_start;
var sBubble_Text_Array = [];
var bubbleArray = [];
var Bbl_Creator;
var Bid_Num = [];
var bbl_text = [];
var bbl_count = [];
//var Speech_Bub_Array = [[],[]];
var Speech_Bub_Array = [];
var speech_number = [[],[]];
var sp_bbl_id = [[],[]];

var timeline_start_array = [];
var single_question_array = [];

var QSA_Correct_Answer = [[],[]];  //[[],[]];  [];
var QSA_Key_Array = [];
var QSA_Feedback_Array = [];
var QSA_Key_Array = [];
var QSA_Correct_Feedback = [[],[]];
var QSA_Incorrect_Feedback = [[],[]];

function Component_Engine(ceData)
{
	jcc_Comp_Creator = $("<div class='col-lg-12 col-md-12 col-xs-12 panel-group' style='width:100%'>");
	
	
	$(jcc_Comp_Creator).append("<div>" + ceData + "</div>");
	
	
	$(jcc_Comp_Creator).append("</div>");
	$("#JcComponents").append(jcc_Comp_Creator);
	
	jcc_Comp_Creator = "";
}

function Lesson_Data_File(LDF)
{

		jcc_test = Object.keys(LDF[0]); // Lesson_Data_File main Keys:
		hrData = Object.keys(LDF[0][jcc_test[0]]); // Page_Setup

	//alert(hrData);
	
	cmpData = Object.keys(LDF[0][jcc_test[1]]);
	//alert(cmpData.length);
	
	//alert(jcc_test[1]);
	
	
for(var ln_num = 0; ln_num < Object.keys(LDF[0]).length; ln_num++)
		{
	//alert("ln_num: " + ln_num);
	switch(jcc_test[ln_num])
		{
			case "Page_Setup":
						
						for(var pps = 0; pps < hrData.length; pps++)
								{
									//alert(hrData[pps]);
									switch(hrData[pps])
										{
											case "Lesson_Header_Color":
												document.getElementById("pg_header").style.backgroundColor = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
											case "Lesson_Title_Color":
												document.getElementById("Page_Title").style.color = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
											case "Lesson_Title_Text":
												document.getElementById("Page_Title").innerHTML = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
											case "Page_Title":
												document.getElementById("Lesson_Page_title").innerHTML = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
												//alert(LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
												
											case "Progress_Bar_Color":
												document.getElementById("prg_Bar").style.backgroundColor = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
											case "Progress_Bar_Height":
												document.getElementById("prg_Bar").style.height = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
																
											case "heroSize":
												//alert(hrData[pps]);
												Hero_Image_Size = ((LDF[0][jcc_test[ln_num]][hrData[pps]]));	
																
Component_Engine("<img id='Hero_Image_File' src='../../images/" + LDF[0][jcc_test[ln_num]][hrData[pps + 1]] + "' alt='' style='width: " + Hero_Image_Size + "; height: " + Hero_Image_Size + "'>");																
														
																//alert("??: " + LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;	
											
											case "page_color":
												document.getElementById("Page_Body").style.backgroundColor = LDF[0][jcc_test[ln_num]][hrData[pps]];
											break;	
											
												
										}
								}	
						
				break;	
			
				case "JBuilder_Content":

//Jcc_Comp_Maker = "<div class='panel-group col-lg-12 col-md-12 col-xs-12'><div class='panel panel-default'><div class='panel-heading'>";	
Jcc_Comp_Maker = "<div class='col-lg-12 col-md-12 col-xs-12'>";					
				
						var SA_Data = Object.keys(LDF[0][jcc_test[ln_num]]);
						
						//alert(SA_Data);
						var sSelections = [];
							
						
						var snglBld = [];
						//alert(SA_Data.length);
					
						for(var jcc = 0; jcc < SA_Data.length; jcc++)
							{
								sSelections[jcc] = LDF[0][jcc_test[ln_num]][SA_Data[jcc]];
								snglBld[jcc] = String(Object.keys(LDF[0][jcc_test[ln_num]][SA_Data[jcc]]));
								//alert(String(Object.keys(sSelections)));
								//alert(String(Object.keys(LDF[0][jcc_test[ln_num]][SA_Data[jcc]])));
								//alert(LDF[0][jcc_test[ln_num]][SA_Data[jcc]]);
								//snglBld[jcc] = Object.keys(sSelections[jcc]);
								//switch( String(Object.keys(LDF[0][jcc_test[ln_num]][SA_Data[jcc]])) )
								switch(snglBld[jcc])
									{
//-------------------------------------------------------------------------------------------------------------	
//-------<( Video code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "video":
											
											//alert("jcc: " + jcc);
											//alert( snglBld[jcc] );
											//alert( sSelections[jcc][snglBld[jcc]] );
Jcc_Comp_Maker = Jcc_Comp_Maker + "<video style='margin-top: 20px' width='100%;' controls><source src='"+ sSelections[jcc][snglBld[jcc]] +"' id='vid_source' type='video/mp4'></video>";
										
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( Video code end )>-------											
//-------------------------------------------------------------------------------------------------------------
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Question Single Answer code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												

									case "Question_Single_Answer":
									//alert("jcc: " + jcc);				
										single_question_array[0] = 	sSelections[jcc][snglBld[jcc]][0].question;
											
										single_question_array[1] = 	sSelections[jcc][snglBld[jcc]][1].answer_01;
										single_question_array[2] = 	sSelections[jcc][snglBld[jcc]][2].answer_02;
										single_question_array[3] = 	sSelections[jcc][snglBld[jcc]][3].answer_03;
										single_question_array[4] = 	sSelections[jcc][snglBld[jcc]][4].answer_04;
										single_question_array[5] = 	sSelections[jcc][snglBld[jcc]][5].answer_05;
										single_question_array[6] = 	sSelections[jcc][snglBld[jcc]][6].answer_06;	
										
										
										QSA_Correct_Answer[jcc] = sSelections[jcc][snglBld[jcc]][7].correct_answer;
											
											
										
										single_question_array[7] = 	sSelections[jcc][snglBld[jcc]][7].correct_answer;
											
										single_question_array[8] = 	sSelections[jcc][snglBld[jcc]][8].correct_feedback;
										single_question_array[9] = 	sSelections[jcc][snglBld[jcc]][9].incorrect_feedback;
											
										QSA_Correct_Feedback[jcc] = sSelections[jcc][snglBld[jcc]][8].correct_feedback;
										QSA_Incorrect_Feedback[jcc] = sSelections[jcc][snglBld[jcc]][9].incorrect_feedback;
											
											
										single_question_array[10] = sSelections[jcc][snglBld[jcc]][10].top_margin;
										single_question_array[11] = sSelections[jcc][snglBld[jcc]][11].background_color;
											
//class='qOutline'		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='sqn_" + jcc + "' style='margin-top:"+single_question_array[10]+";background-color: " + single_question_array[11] + " '>";


Jcc_Comp_Maker = Jcc_Comp_Maker + "<form><div><qstn_text>" + single_question_array[0] + "</qstn_text></div><div class='qStyle'>";	

					var Question_Num_Array = []; // [[],[]];
					var a_div_name;						
						for(var sqsa = 1; sqsa < 7; sqsa++)
								{
									if(single_question_array[sqsa] !== "")
										{
											//Question_Num_Array[sqsa] = single_question_array[sqsa];
											//alert(Question_Num_Array[sqsa]);
											if(sqsa === 1){a_div_name = ("aOne_" + jcc);}
											if(sqsa === 2){a_div_name = ("aTwo_" + jcc);}
											if(sqsa === 3){a_div_name = ("aThree_" + jcc);}
											if(sqsa === 4){a_div_name = ("aFour_" + jcc);}
											if(sqsa === 5){a_div_name = ("aFive_" + jcc);}
											if(sqsa === 6){a_div_name = ("aSix_" + jcc);}	
											
                Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='" + a_div_name + "' class='qSpacing'><input style='cursor:pointer;' onclick='QSA_Check("+jcc+");' type='radio' name='radio' id=' " + (sqsa) + " '><label><answer_text>" + single_question_array[sqsa] + "</answer_text></label></div>";
										}
	
								}
												

											

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center'><div id='feedback_"+jcc+"' style='display: none; margin-top: 25px; width:90%;'></div></div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></form></div>";											
											

//single_question_array = [];											
											
											
											

											
									break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( Question Single Answer code end )>-------											
//-------------------------------------------------------------------------------------------------------------												
											

//-------------------------------------------------------------------------------------------------------------	
//-------<( Divider code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Divider":
									var flipper;		
										if(sSelections[jcc][snglBld[jcc]][3].flip === "false"){flipper = "0deg";}
										if(sSelections[jcc][snglBld[jcc]][3].flip === "true"){flipper = "180deg";}
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='pnl_wdth row' style='margin-top: "+ sSelections[jcc][snglBld[jcc]][2].top_margin +"'><img id='' style='transform: rotate("+ flipper +"); margin:-10px; overflow:hidden; width: 100%;' src='../../../jbuild_libs/images/" + sSelections[jcc][snglBld[jcc]][0].divider_image + ".png' height='"+ sSelections[jcc][snglBld[jcc]][1].height +"' alt=''/></div>";
	
									//alert("Divider Finished");
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( Divider code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Audio code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "audio":
											//alert( snglBld[jcc] );
											//alert( sSelections[jcc][snglBld[jcc]] );
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<audio controls style='width:80%; margin-top: 20px;'><source src='../../audio/" + sSelections[jcc][snglBld[jcc]] + "' type='audio/mpeg'></audio>";											
									break;

//-------------------------------------------------------------------------------------------------------------	
//-------<( Audio code end )>-------											
//-------------------------------------------------------------------------------------------------------------												
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Timeline code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Timeline":
										
										timeline_start_array[0] = sSelections[jcc][snglBld[jcc]][0].timeline_heading;
										timeline_start_array[1] = sSelections[jcc][snglBld[jcc]][1].timeline_font_heading_color;
										timeline_start_array[2] = sSelections[jcc][snglBld[jcc]][2].timeline_heading_b_color;
										timeline_start_array[3] = sSelections[jcc][snglBld[jcc]][3].timeline_background_color;
										timeline_start_array[4] = sSelections[jcc][snglBld[jcc]][4].top_margin;										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='timeline' style='background-color: " + timeline_start_array[3] + "; margin-top: "+ timeline_start_array[4] +"'><div style='background-color: " + timeline_start_array[2] + "; text-align: center; padding: 4px; z-index: 1; position: relative;'><h2 style='color:"+ timeline_start_array[1] +"'>" + timeline_start_array[0] + "</h2></div>";											
											
		for(var tmln = 5; tmln < sSelections[jcc][snglBld[jcc]].length; tmln++)	
				{
														//alert(sSelections[jcc][snglBld[jcc]][tmln].box_Heading);
														//alert(sSelections[jcc][snglBld[jcc]][tmln].box_Contents);
				switch(tmln % 2)
						{
							case 0:
									
		Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div class='timeline_container left'><div class='content'><h2>"+ sSelections[jcc][snglBld[jcc]][tmln].box_Heading +"</h2>");
								
						switch(sSelections[jcc][snglBld[jcc]][tmln].box_Contents.slice(-4))
							{
								case ".jpg":
										//alert("Image");
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<img src='../../images/" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/>");
								break;

								case ".mp3":
										Jcc_Comp_Maker = (Jcc_Comp_Maker +"<audio controls style='width:80%; margin-top: 20px;'><source src='../../audio/" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' type='audio/mpeg'></audio>");
								break;

								case ".mp4":
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<video style='margin-top: 20px' width='100%;' controls><source src='"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"' id='vid_source' type='video/mp4'></video>");
								break;	

								default:
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<p>"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"</p>");
								break;
							}

				Jcc_Comp_Maker = (Jcc_Comp_Maker + "</div></div>");										
																	
							break;
																	
							case 1:

		Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div class='timeline_container right'><div class='content'><h2>"+ sSelections[jcc][snglBld[jcc]][tmln].box_Heading +"</h2>");
								
						switch(sSelections[jcc][snglBld[jcc]][tmln].box_Contents.slice(-4))
							{
								case ".jpg":
										//alert("Image");
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<img src='../../images/" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/>");
								break;

								case ".mp3":
										Jcc_Comp_Maker = (Jcc_Comp_Maker +"<audio controls style='width:80%; margin-top: 20px;'><source src='../../audio/" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' type='audio/mpeg'></audio>");
								break;

								case ".mp4":
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<video style='margin-top: 20px' width='100%;' controls><source src='"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"' id='vid_source' type='video/mp4'></video>");
								break;	

								default:
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<p>"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"</p>");
								break;
							}

				Jcc_Comp_Maker = (Jcc_Comp_Maker + "</div></div>");									
							break;	
						}					
				}
											

											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";										
											
										
											
											
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Timeline code end )>-------											
//-------------------------------------------------------------------------------------------------------------												
//-------------------------------------------------------------------------------------------------------------	
//-------<( Speech Bubble code begin )>-------											
//-------------------------------------------------------------------------------------------------------------											
									case "Speech_Bubbles":
								//Speech_Bub_Array = [];			
											
									//alert("jcc: " + jcc);
									//alert(speech_number)		
	//alert(jcc_test[1].length);

	//alert(Object.keys(jcc_test[1]));	
	
	//jcc_test = Object.keys(LDF[0]); // Lesson_Data_File main Keys:										
											
											
	//QMA_Data = (Object.keys(LDF[0][jcc_test[ln_num]]));
	//QSA_Question = LDF[0][jcc_test[ln_num]][QMA_Data[0]];

	//var answer_selected = (LDF[0][jcc_test[ln_num]][QMA_Data[1]]);
											
	//alert(String(Object.keys(sSelections)));
	//alert(String(Object.keys(LDF[0][jcc_test[ln_num]][SA_Data[jcc]])));
	//snglBld[jcc] = Object.keys(sSelections[jcc]);	
											
											sBubble_Text_Array[0] = sSelections[jcc][snglBld[jcc]][0].talking_head_image;
											sBubble_Text_Array[1] = sSelections[jcc][snglBld[jcc]][1].start_text;
											sBubble_Text_Array[2] = sSelections[jcc][snglBld[jcc]][2].top_margin;											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='spb_"+ jcc +"' class='col-lg-12 col-md-12 col-xs-12 main_bubble' style='margin-top: "+ sBubble_Text_Array[2] +"; margin-bottom: 40px;'> <div class='bubbles'><div class='balloons'>";			


										
//bbl_cur_id[ln_num] = ("spb_"+ jcc);			
//alert(bbl_cur_id[ln_num]);
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='startBubble"+ jcc +"' class='bLeft bubble' style='display:block;'><div class='bText'><p>" + sBubble_Text_Array[1] + "</p></div></div>";												

							var sp_bl = 0;				
							for(var spb = 3; spb < sSelections[jcc][snglBld[jcc]].length; spb++)
								{
									sp_bl = (sp_bl + 1);
									
									Speech_Bub_Array[sp_bl] = sSelections[jcc][snglBld[jcc]][spb].bbl_txt;
									speech_number[jcc] = Speech_Bub_Array;
								
									
									switch(sp_bl % 2)
										{
												case 0:
									//var bbl_cur_id = [];
sp_bbl_id[jcc] = jcc + "_bbl_" + sp_bl;
//alert(sp_bbl_id[jcc]);												
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='" + sp_bbl_id[jcc] +"' class='bLeft bubble' style='display:none;'><div class='bText'><p>" + Speech_Bub_Array[sp_bl] + "</p></div></div>";											
												break;
												
												case 1:
sp_bbl_id[jcc] = jcc + "_bbl_" + sp_bl;												
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='" + sp_bbl_id[jcc] +"' class='bRight bubble' style='display:none;'><div class='bText'><p>" + Speech_Bub_Array[sp_bl] + "</p></div></div>";												
												break;
										}

								}
											
								Speech_Bub_Array = [];
		
											
											
									


									var bbl_cur_id = [];
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='spb_"+ jcc +"' class='col-lg-12 col-md-12 col-xs-12 main_bubble' style='margin-top: "+ sBubble_Text_Array[2] +"; margin-bottom: 40px;'> <div class='bubbles'><div class='balloons'>";			

//bbl_cur_id[ln_num] = ("spb_"+ jcc);			
				
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='startBubble"+ jcc +"' class='bLeft bubble' style='display:block;'><div class='bText'><p>" + sBubble_Text_Array[1] + "</p></div></div>";											

											//for(var spb = 3; spb < sSelections[jcc][snglBld[jcc]].length; spb++)
											//	{
											//		sp_bl = (sp_bl + 1);
											//		Speech_Bub_Array[sp_bl] = sSelections[jcc][snglBld[jcc]][spb].bbl_txt;
													
											//var Speech_Bub_Array = [];
											//var jcc_array = [[6],["blah blah blah"]];
											//alert(jcc_array[0]);		
													
													
													
													//sSelections[jcc][snglBld[jcc]][spb].bbl_txt;
													
											

											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='talkingheads'><img src='../../images/" + sBubble_Text_Array[0] +"' alt=''></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div></div></div></div>";	
											
											
//speech_number[jcc] = Speech_Bub_Array;
///////Speech_Bub_Array = [];
											
//alert(speech_number[jcc][1]);
										
											
//alert("Check");
										
											
//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div></div>";											
									break;		
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Speech Bubble code end )>-------											
//-------------------------------------------------------------------------------------------------------------									
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with Text code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "image_w_text":
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='padding: 10px; margin-top: " + sSelections[jcc][snglBld[jcc]][6].top_margin + " ;text-align: center; background-color: " + sSelections[jcc][snglBld[jcc]][7].background_color + "'>";
				
	switch(sSelections[jcc][snglBld[jcc]][1].image_position)	
		{
					//border-radius: 50%;	
		case "left":
			Jcc_Comp_Maker = Jcc_Comp_Maker + ("<div class='col-lg-6 col-md-6 col-xs-12' style='text-align: "+ sSelections[jcc][snglBld[jcc]][2].image_alignment +";'><img style='border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='../../images/" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][3].image_size + " ' height='auto' alt=''/></div>");
						
			Jcc_Comp_Maker = Jcc_Comp_Maker + ("<div class='col-lg-6 col-md-6 col-xs-12' style='text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'>" + sSelections[jcc][snglBld[jcc]][4].image_text + "</div>");
						
		break;
						
		case "right":
			Jcc_Comp_Maker = Jcc_Comp_Maker + ("<div class='col-lg-6 col-md-6 col-xs-12' style='text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'>" + sSelections[jcc][snglBld[jcc]][4].image_text + "</div>");						
						
			Jcc_Comp_Maker = Jcc_Comp_Maker + ("<div class='col-lg-6 col-md-6 col-xs-12' style='text-align: "+ sSelections[jcc][snglBld[jcc]][2].image_alignment +";'><img style='border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='../../images/" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][3].image_size + " ' height='auto' alt=''/></div>");
		break;

		case "top":
			Jcc_Comp_Maker = Jcc_Comp_Maker + ("<div class='col-lg-12 col-md-12 col-xs-12' style='text-align: "+ sSelections[jcc][snglBld[jcc]][2].image_alignment +";'><img style='border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='../../images/" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][3].image_size + " ' height='auto' alt=''/></div>");
						
			Jcc_Comp_Maker = Jcc_Comp_Maker + ("<div class='col-lg-12 col-md-12 col-xs-12' style='text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'>" + sSelections[jcc][snglBld[jcc]][4].image_text + "</div>");						
		break;
						
		case "bottom":
						
			Jcc_Comp_Maker = Jcc_Comp_Maker + ("<div class='col-lg-12 col-md-12 col-xs-12' style='text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'>" + sSelections[jcc][snglBld[jcc]][4].image_text + "</div>");	
						
			Jcc_Comp_Maker = Jcc_Comp_Maker + ("<div class='col-lg-12 col-md-12 col-xs-12' style='text-align: "+ sSelections[jcc][snglBld[jcc]][2].image_alignment +";'><img style='border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='../../images/" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][3].image_size + " ' height='auto' alt=''/></div>");	
		break;						
				}
						
		Jcc_Comp_Maker = Jcc_Comp_Maker + ("</div>");											
											
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with text code end )>-------											
//-------------------------------------------------------------------------------------------------------------									
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( List Text code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "List_text":
											//alert( snglBld[jcc] );
											//alert(sSelections[jcc][snglBld[jcc]].length);
Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+ sSelections[jcc][snglBld[jcc]][2].Type_of_List +"><h4 style='text-align: "+ sSelections[jcc][snglBld[jcc]][1].align_text +"'>"+ sSelections[jcc][snglBld[jcc]][0].List_Heading +"</h4>";	
											
							for(var lst = 3; lst < sSelections[jcc][snglBld[jcc]].length; lst++)
								{
													//String(Object.keys(LDF[0][jcc_test[ln_num]][SA_Data[jcc]]));
													//alert( String(Object.keys(sSelections[jcc][snglBld[jcc]][lst])) );
													
													//List_Array[lst] = String(Object.keys(sSelections[jcc][snglBld[jcc]][lst]));
													//alert(List_Array[lst]);
													//alert( sSelections[jcc][snglBld[jcc]][lst][List_Array[lst]] );
													
													
									List_Text_Array[lst] = (sSelections[jcc][snglBld[jcc]][lst].lstText);
									//alert(List_Text_Array[jcc]);
													
Jcc_Comp_Maker = Jcc_Comp_Maker + "<li style='text-align: "+ sSelections[jcc][snglBld[jcc]][1].align_text +";'>"+ List_Text_Array[lst] +"</li>";																	
													
													
								}
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</"+ sSelections[jcc][snglBld[jcc]][2].Type_of_List +">";											
											//alert( sSelections[jcc][snglBld[jcc]][0].List_Heading );
											
											//alert("List Text finished");
											
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( List Text code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Heading":	
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='color: "+ sSelections[jcc][snglBld[jcc]][5].color +"; font-weight: "+ sSelections[jcc][snglBld[jcc]][4].style +"; font-size: "+ sSelections[jcc][snglBld[jcc]][3].size +"; border-radius: "+ sSelections[jcc][snglBld[jcc]][10].border_radius +";border-weight:"+ sSelections[jcc][snglBld[jcc]][8].border_weight +" ;border-style:"+ sSelections[jcc][snglBld[jcc]][9].border_style +"; border-color:"+ sSelections[jcc][snglBld[jcc]][7].border_color +" ;background-color: "+ sSelections[jcc][snglBld[jcc]][6].background_color +" ;margin-top: "+ sSelections[jcc][snglBld[jcc]][2].top_margin +"; text-align: "+ sSelections[jcc][snglBld[jcc]][1].alignment +"'>"+ sSelections[jcc][snglBld[jcc]][0].sngl_Heading +"</p>";											
											
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Paragraphs":		
											//alert(sSelections[jcc][snglBld[jcc]][0].Paragraph_align);
											
											for(var para = 1; para < sSelections[jcc][snglBld[jcc]].length; para++)
												{
													//alert(sSelections[jcc][snglBld[jcc]][para].Paragraph_txt);
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h2 style='padding: 10px; text-align: "+ sSelections[jcc][snglBld[jcc]][0].Paragraph_align +"'>"+ sSelections[jcc][snglBld[jcc]][para].Paragraph_txt +"</h2>";													
												}
											
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph code end )>-------											
//-------------------------------------------------------------------------------------------------------------									
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Info box code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
											
									case "Info_Contents":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<br><br><span class='fa fa-info-circle' style='outline: 5px solid orange; padding: 20px; display:inline-block'><h2>" + sSelections[jcc][snglBld[jcc]] +"</h2></span><br><br>";												
									break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( Info box code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image only code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Image_File_Only":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='margin-top: 10px; width: auto;' src='../../images/" + sSelections[jcc][snglBld[jcc]] + "' height='100px' alt=''/></div>";												
									//alert("Image File Finished");
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image only code end )>-------											
//-------------------------------------------------------------------------------------------------------------												
									}		
							}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div></div>";				
			
Component_Engine(Jcc_Comp_Maker);
				break;
		}
	}
}


//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Single Answer 2 - 6  choice question begin )>-------                                  ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝	

function QSA_Check(qan) //,cid
{
	//alert("qan: " + qan);
	
	//alert(event.target.id);	
	//alert(jcc);
	//alert("Correct Answer is: " + QSA_Correct_Answer[qan]);
	
	var divid;
		//var stdt_answer = Number(event.target.id);
		var correct_single_answer = Number(QSA_Correct_Answer[qan]);
		QSA_Key_Array = [];
		QSA_Feedback_Array = [];

		QSA_Key_Array[1] = '#aOne_' + qan.toString();
		QSA_Key_Array[2] = '#aTwo_' + qan.toString();
		QSA_Key_Array[3] = '#aThree_' + qan.toString();
		QSA_Key_Array[4] = '#aFour_' + qan.toString();	
		QSA_Key_Array[5] = '#aFive_' + qan.toString();
	    QSA_Key_Array[6] = '#aSix_' + qan.toString();
	
			if(Number( event.target.id ) === correct_single_answer )
				{
					$( QSA_Key_Array[correct_single_answer] ).addClass('sqCorrect');
					
						document.getElementById("feedback_" + qan.toString()).style.display = "block";
						document.getElementById("feedback_" + qan.toString()).innerHTML = QSA_Correct_Feedback[qan];
						$( '#feedback_' + qan.toString() ).addClass('Feedback_Correct');
						$('#sqn_' + qan.toString()).addClass('bluescrn');	
								
				}
	
			if(Number( event.target.id ) !== correct_single_answer )
				{
					$( QSA_Key_Array[ Number(event.target.id)] ).addClass('sqIncorrect');
					$( QSA_Key_Array[correct_single_answer] ).addClass('sqCorrect');
					
						document.getElementById("feedback_" + qan.toString()).style.display = "block";
						document.getElementById("feedback_" + qan.toString()).innerHTML = QSA_Incorrect_Feedback[qan];
						$( '#feedback_' + qan.toString() ).addClass('Feedback_Incorrect');
				}	

}



//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Single Answer 2 - 6  choice question end )>-------                                    ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝




//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Speech Bubble Buttons Begin )>-------                                                 ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝	
var bid_Count = 0;
var direction = 1;

function bub_Next(bb_cur)
{
//alert("bb_cur: " + bb_cur);
//alert(Speech_Bub_Array.length);
	
//alert(speech_number[bb_cur]);		
switch(document.getElementById("bub_next_button" + bb_cur).innerText)
	{
		case "Start":
			bid_Count = 0;
			document.getElementById("bub_next_button" + bb_cur).innerText = "Next";
				document.getElementById("startBubble" + bb_cur).style.display = "none";
				document.getElementById("bub_next_button" + bb_cur).innerText = "Next";
			bid_Count = (bid_Count + 1);
				
				document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "block";
				//document.getElementById("bbl_" + bid_Count + "_" + bb_cur).style.display = "block";
				document.getElementById("bub_prev_buton" + bb_cur).style.display = "block";			

		break;
			
		case "Next":
				document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "none";
				bid_Count = (bid_Count + 1);
				document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "block";

				if(bid_Count === (speech_number[bb_cur].length - 1))
						{
							document.getElementById("bub_next_button" + bb_cur).innerText = "Replay";
						}
		break;
			
		case "Replay":
			//alert(bid_Count);
			document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "none";
			document.getElementById("startBubble" + bb_cur).style.display = "block";
			document.getElementById("bub_next_button" + bb_cur).innerText = "Start";
			document.getElementById("bub_prev_buton" + bb_cur).style.display = "none";
		break;	
	}
}


function bub_Back(bb_cur)


{
			switch(bid_Count)
			{
					
				case 1:
						
						document.getElementById("startBubble" + bb_cur).style.display = "block";
						document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "none";
						document.getElementById("bub_next_button" + bb_cur).innerText = "Start";
						document.getElementById("bub_prev_buton" + bb_cur).style.display = "none";
						bid_Count = 0;
				break;	
				
				default:	
						document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "none";
						bid_Count = (bid_Count - 1);
						document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "block";
				break;	
		
			}

}


//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Speech Bubble Buttons End )>-------                                                   ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝	


//╔══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Progress Bar )>-------                                                 ║
//╚══════════════════════════════════════════════════════════════════════════════════╝			


window.onscroll = function(ev) {

window.onscroll = function() {myFunction();};
var scrolled;
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
	//document.getElementById("Lesson_Title").innerHTML = $(window).width();
	 if($(window).width() < 768){scrolled = (winScroll / height) * 110;}	
	 
	 if($(window).width() >= 768){scrolled = (winScroll / height) * 102;}
		
	
	
  document.getElementById("prg_Bar").style.width = scrolled + "%";
}	


	
	if ((window.innerHeight + window.scrollY) >= document.getElementById("JcComponents").offsetHeight +20) {	
    }
};