var jcc_test;
var Jcc_Acc_Data;
var jackDiv;

var hrData;
var Hero_Image_Size;
var Component_Engine;

var Bbl_Creator;
var talking_head_image;
var sBubble_data;
var sBubble_Text_Array = [];
var bubbleArray = [];
var Start_Text_For_Bubble;
//var Bid_Num = 1;
var bbl_count = [];

var Bid_Num = [];
var cur_bub_comp;
var bbl_num;
var bbl_margin;
var bbl_cur_id = [];

var Info_Box_Data;
var Infobox_Creator;

var Video_Creator;
var Video_Player;

var jcc_Comp_Creator;
var acLbl_Data;
var acCol_Data = [];
var accCol_Comp = [];
var accCol_Comp_Name = [];
var Acc_Number = [];
var cur_ln_num;
var	Column_Accordion_Contents_left;
var	Column_Accordion_Contents_right;
var column_div_data = "none";
var Single_Accordion_Creator;
var Column_Accordion_Creator;
var acCol_Comp_Data = [];
var acCol_Side_Data = [];

var Column_Button_Label;
var top_col_data;
var Column_Top_Text;
var Column_Top;
var Column_Bottom;
var Column_Bottom_Text;
var Accordion_Contents_Array = [];

var Multi_Selection_Accordion;
var mc_num;
var mlty_contents;

var Left_Col_Whole = "none";
var Right_Col_Whole = "none";

var Current_Col_Contents = [];

var Audio_Contents = [];
var Audio_Contents_Array = [];

var bot_col_data;

var ImgTxt_creator;
var image_w_text_data;

var Video_Data;

var timeline_data;
var timeline_box_name_array = [];
var timeline_box_data_array = [];
var timeline_main_title;
var timeline_main_title_color;
var timeline_creator;
var timeline_background_color;
var timeline_font_color;
var box_Title = [];
var box_Contents = [];
var timeline_margin;


var QSA_Data;
var QSA_Question;				
var QSA_01;
var QSA_02;
var QSA_03;
var QSA_04;
var QSA_Correct_Answer = [];
var QSA_Correct_Feedback = [];
var QSA_Incorrect_Feedback = [];
var QSA_Top_Margin;
var QSA_Background_Color;
var QSA_Creator;
var QSA_cur_comp;
var sgl_answers = [];
var a_div_name;
var QSA_Key_Array = [];
var QSA_Feedback_Array = [];

var QMA_Data;
var QMA_Question;
var QMA_Answers_Array = [];
var QMA_Creator;
var QMA_Background_Color;
var QMA_Checkbox_Array = [];
var QMA_Correct_Answer_Array = [];
var QMA_Correct_Feedback_Array = [];
var QMA_Incorrect_Feedback_Array = [];
var QMA_IC_Array = [];
var Incorrect_answer_count;

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
	//alert(jcc_test);
		
		
for(var ln_num = 0; ln_num < Object.keys(LDF[0]).length; ln_num++)
		{
	
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
	

				
				case "Question_Multiple_Answer1":
				case "Question_Multiple_Answer2":
				case "Question_Multiple_Answer3":
				case "Question_Multiple_Answer4":
				case "Question_Multiple_Answer5":

				
					QMA_Data = (Object.keys(LDF[0][jcc_test[ln_num]]));
					QSA_Question = LDF[0][jcc_test[ln_num]][QMA_Data[0]];

					var answer_selected = (LDF[0][jcc_test[ln_num]][QMA_Data[1]]);

						//alert(answer_selected[0].q_answer);
						//alert(answer_selected[0].true_false);
					
				
				
				//alert(LDF[0][jcc_test[ln_num]][QMA_Data[2]]);
				
				QMA_Correct_Feedback_Array[ln_num] = LDF[0][jcc_test[ln_num]][QMA_Data[2]];
				QMA_Incorrect_Feedback_Array[ln_num] = LDF[0][jcc_test[ln_num]][QMA_Data[3]];
				
				//alert(LDF[0][jcc_test[ln_num]][QMA_Data[3]]);
				
				//alert(answer_selected.length);
				//QMA_Correct_Answer_Array[ln_num] = 
				
/*				
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon", "Pineapple");
*/
	var arr_tester = [];
				for(var tf = 0; tf < answer_selected.length; tf++)
					{
						//alert(answer_selected[tf].true_false);
						arr_tester.push(answer_selected[tf].true_false);
	
					}
				QMA_Correct_Answer_Array[ln_num] = arr_tester;
			//alert(QMA_Correct_Answer_Array[ln_num].length);
				
				arr_tester = "";
				
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
				
	QMA_Creator = "<div class='qOutline' id='mqn_" + ln_num + "' style='margin-top:"+ LDF[0][jcc_test[ln_num]][QMA_Data[4]] +"; background-color: " + LDF[0][jcc_test[ln_num]][QMA_Data[5]] + " '>";
	QMA_Creator = QMA_Creator + "<div><qstn_text>" + QSA_Question + "</qstn_text></div><div class='qStyle'>";

var chbx_array = [];	
//QMA_Creator = QMA_Creator + "<form id='QMA_" + ln_num +"'>";				
	for(var QMA_MA = 0; QMA_MA < answer_selected.length; QMA_MA++)
							{
								
	//QMA_Correct_Answer_Array[ln_num] = answer_selected[QMA_MA].true_false;
								
								
									//alert("QMA_Correct_Answer_Array["+QMA_MA+"]:"+ QMA_Correct_Answer_Array[QMA_MA]);
							
		QMA_Creator = QMA_Creator + "<form id='Q_" + QMA_MA + "_" + ln_num +"'><input id='multiple_" + QMA_MA + "_" + ln_num +"' style='cursor:pointer;' type='checkbox' name='multiple_" + ln_num +"' value='" + QMA_MA +'_' + ln_num + "' onclick='MSub_on("+ln_num+")'; /> '" + answer_selected[QMA_MA].q_answer +"'</form>";						

/*								
		QMA_Creator = QMA_Creator + "<div><input id='multiple_" + QMA_MA + "_" + ln_num +"' style='cursor:pointer;' type='checkbox' name='multiple_" + ln_num +"' value='" + QMA_MA +'_' + ln_num + "' /> '" + answer_selected[QMA_MA].q_answer +"'</div>";									
*/								
			chbx_array.push("multiple_" + QMA_MA + "_" + ln_num);					
								
		//QMA_Checkbox_Array[QMA_MA] = ("multiple_" + QMA_MA + "_" + ln_num);
								//alert(QMA_Checkbox_Array[QMA_MA]);
								//alert(document.getElementById(QMA_Checkbox_Array[QMA_MA]).value);
								
								//id='multiple_" + QMA_MA + "_" + ln_num +"'
	
							}
				QMA_Checkbox_Array[ln_num] = chbx_array;
				
				//alert(QMA_Checkbox_Array[ln_num]);
				
//QMA_Creator = QMA_Creator + "</form>";
				
		//alert("QMA_Correct_Answer_Array["+ln_num+"]:"+ QMA_Correct_Answer_Array[ln_num]);		
				


	QMA_Creator = QMA_Creator + "<div align='center'><div id='feedback_"+ln_num+"' style='display: none; margin-top: 25px; width:90%;'></div></div>";
	
	QMA_Creator = QMA_Creator + "<div align='center'> <button disabled id='mtl_sub_button"+ln_num+"' onclick='QMA_Check("+ln_num+");' class='btn btn-primary disabled bbl_btns' type='button'>Submit</button> </div>";			
	
	QMA_Creator = QMA_Creator + "<div id='mFeedback_" + ln_num +"'></div>";			
				
			
	QMA_Creator = QMA_Creator + "</div></div>";
	Component_Engine(QMA_Creator);	
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@				
				break;
				
				
				
//╔════════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Single Question 3 to 4 choices Begin )>-------                                           ║
//╚════════════════════════════════════════════════════════════════════════════════════════════════════╝				
				case "Question_Single_Answer1":
				case "Question_Single_Answer2":
				case "Question_Single_Answer3":
				case "Question_Single_Answer4":
				case "Question_Single_Answer5":
				case "Question_Single_Answer6":
				case "Question_Single_Answer7":
				case "Question_Single_Answer8":
				case "Question_Single_Answer9":
				case "Question_Single_Answer10":
				
						QSA_Data = (Object.keys(LDF[0][jcc_test[ln_num]]));
						//QSA_Data = (Object.keys(LDF[0][jcc_test[ln_num]]));
							QSA_cur_comp = jcc_test[ln_num];

						QSA_Question = ( LDF[0][jcc_test[ln_num]][QSA_Data[0]] );

					       sgl_answers[0] =  LDF[0][jcc_test[ln_num]][QSA_Data[1]];
						   sgl_answers[1] =  LDF[0][jcc_test[ln_num]][QSA_Data[2]];
						   sgl_answers[2] =  LDF[0][jcc_test[ln_num]][QSA_Data[3]];
				
						
							if(LDF[0][jcc_test[ln_num]][QSA_Data[4]].length > 2)
								{
						   			sgl_answers[3] =  LDF[0][jcc_test[ln_num]][QSA_Data[4]];
								}							 
						
				
						QSA_Correct_Answer[ln_num] = ( LDF[0][jcc_test[ln_num]][QSA_Data[5]] );
						QSA_Correct_Feedback[ln_num] = ( LDF[0][jcc_test[ln_num]][QSA_Data[6]] );
						QSA_Incorrect_Feedback[ln_num] = ( LDF[0][jcc_test[ln_num]][QSA_Data[7]] );
						QSA_Top_Margin = ( LDF[0][jcc_test[ln_num]][QSA_Data[8]] );
						QSA_Background_Color = ( LDF[0][jcc_test[ln_num]][QSA_Data[9]] );	
						
//Component_Engine("<div class='pnl_wdth row'><img id='' style='margin:-10px; overflow:hidden; width: 100%;' src='../jbuild_libs/images/" + LDF[0][jcc_test[ln_num]] + ".png' height='100px' alt=''/></div>");			
				
				

//QSA_Creator = "<div class='col-lg-12 col-md-12 col-xs-12' style='background-color: white; height:50px; border-style: solid; border-color: #000000; border-radius: 8px;'></div>";	
	
		
QSA_Creator = "<div class='qOutline' id='sqn_" + ln_num + "' style='background-color: " + QSA_Background_Color + " '>";


QSA_Creator = QSA_Creator + "<form><div><qstn_text>" + QSA_Question + "</qstn_text></div><div class='qStyle'>";	
	
	
	for(var ans_create = 0; ans_create < sgl_answers.length; ans_create++)
			{
					
				if(ans_create === 0){a_div_name = ("aOne_" + ln_num);}
				if(ans_create === 1){a_div_name = ("aTwo_" + ln_num);}
				if(ans_create === 2){a_div_name = ("aThree_" + ln_num);}
				if(ans_create === 3){a_div_name = ("aFour_" + ln_num);}
				
				QSA_Creator = QSA_Creator + "<div id='" + a_div_name + "' class='qSpacing'><input style='cursor:pointer;' onclick='QSA_Check("+ln_num+");' type='radio' name='radio' id=' " + (ans_create + 1) + " '><label><answer_text>" + sgl_answers[ans_create] + "</answer_text></label></div>";
				
			}
	
	
	
	
QSA_Creator = QSA_Creator + "<div align='center'><div id='feedback_"+ln_num+"' style='display: none; margin-top: 25px; width:90%;'></div></div>";

QSA_Creator = QSA_Creator + "</div></form></div>";
				
Component_Engine(QSA_Creator);					

		
				
				break;

//QSA_Creator = QSA_Creator + "<div><img src='../../images/green_check.png' style='display:none;'><input type='radio' id='contactChoice1' name='cabinet' value='cabinet'><label for='contactChoice1'>Assemble a cabinet at them?</label></div>	";						
				
				
//╔════════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Single Question 3 to 4 choices End )>-------                                             ║
//╚════════════════════════════════════════════════════════════════════════════════════════════════════╝
				
				
//╔════════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Inforamtion Box Begin )>-------                                                          ║
//╚════════════════════════════════════════════════════════════════════════════════════════════════════╝
				
			case "Information_Box1":
			case "Information_Box2":
			case "Information_Box3":
			case "Information_Box4":
			case "Information_Box5":
			case "Information_Box6":
			case "Information_Box7":
			case "Information_Box8":
			case "Information_Box9":
			case "Information_Box10":
			
				Info_Box_Data = (Object.keys(LDF[0][jcc_test[ln_num]]));
//alert(Info_Box_Data); // ===  Info_Contents
/*				
Information_Box1:
		{
			"Info_Contents": "Text for info box"
		},
*/
//alert(LDF[0][jcc_test[ln_num]][Info_Box_Data[0]]);				
			Infobox_Creator = "<div>";	 //class='panel panel-default pnl_wdth row'>	
			Infobox_Creator = Infobox_Creator + "<div class='col-lg-12 col-md-12 col-xs-12' style='padding: 10px;'>";	
			Infobox_Creator = Infobox_Creator + "<div id='info_box'>";	
			Infobox_Creator = Infobox_Creator + "<div class='col-lg-1 col-md-1 col-xs-1'></div>";	
			Infobox_Creator = Infobox_Creator + "<div class='col-lg-10 col-md-10 col-xs-10' style='background-color: #ffffff; border-style: solid; border-color: #E9951C; border-width: medium; padding: 10px;'><img src='../../../jbuild_libs/images/information.png' height='20px' alt=''/><h2>"+ LDF[0][jcc_test[ln_num]][Info_Box_Data[0]] +"</h2></div>";
			Infobox_Creator = Infobox_Creator + "<div class='col-lg-1 col-md-1 col-xs-1'></div></div></div></div></div>";	

		Component_Engine(Infobox_Creator);		
				
			break;
				
				

				
//╔════════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Inforamtion Box End )>-------                                                            ║
//╚════════════════════════════════════════════════════════════════════════════════════════════════════╝				
				

				case "Video_Player_01":
				Video_Data = Object.keys(LDF[0][jcc_test[ln_num]]);

				
Video_Player = "<video style='margin-top: "+ LDF[0][jcc_test[ln_num]][Video_Data[3]] +"' width='"+ LDF[0][jcc_test[ln_num]][Video_Data[1]] +";' controls><source src='"+ LDF[0][jcc_test[ln_num]][Video_Data[0]] +"' id='vid_source' type='video/mp4'></video>";		
				

				
					Component_Engine(Video_Player);	

				break;				
				
				case "Timeline_01":
				case "Timeline_02":
				case "Timeline_03":
				case "Timeline_04":
				
						timeline_data = (Object.keys(LDF[0][jcc_test[ln_num]]));
				
							timeline_main_title = ( LDF[0][jcc_test[ln_num]][timeline_data[0]] );
							timeline_font_color = (LDF[0][jcc_test[ln_num]][timeline_data[1]]);
							timeline_main_title_color = ( LDF[0][jcc_test[ln_num]][timeline_data[2]] );
							timeline_background_color = ( LDF[0][jcc_test[ln_num]][timeline_data[3]] );
							timeline_margin = ( LDF[0][jcc_test[ln_num]][timeline_data[4]] );
							
									//box_Title = LDF[0][jcc_test[ln_num]][timeline_data[4]];
									//box_Contents = LDF[0][jcc_test[ln_num]][timeline_data[5]];
								
							var total_contents = LDF[0][jcc_test[ln_num]][timeline_data[5]];
								//alert(total_contents[0].box_Heading);
								//alert(total_contents[0].box_Contents);
		
				
				
			
timeline_creator = "<div class='timeline' style='background-color: " + timeline_background_color + "; margin-top: "+ timeline_margin +"'><div style='background-color: " + timeline_main_title_color + "; text-align: center; padding: 4px; z-index: 1; position: relative;'><h2 style='color:"+ timeline_font_color +"'>" + timeline_main_title + "</h2></div>";

				
			
		for(var t_line = 0; t_line < total_contents.length; t_line++)
			{
				switch(t_line % 2)
						{
							case 0:
					
		//timeline_creator = (timeline_creator + "<div class='timeline_container left'><div class='content'><h2>"+ total_contents[t_line].box_Heading +"</h2><p>"+ total_contents[t_line].box_Contents +"</p></div></div>");		
									
		timeline_creator = (timeline_creator + "<div class='timeline_container left'><div class='content'><h2>"+ total_contents[t_line].box_Heading +"</h2>");
								
						switch(total_contents[t_line].box_Contents.slice(-4))
							{
								case ".jpg":
										//alert("Image");
									timeline_creator = (timeline_creator +"<img src='../../images/" + total_contents[t_line].box_Contents + "' width='80%' height='auto' alt=''/>");
								break;

								case ".mp3":
										timeline_creator = (timeline_creator +"<audio controls style='width:80%; margin-top: 20px;'><source src='../../audio/" + total_contents[t_line].box_Contents + "' type='audio/mpeg'></audio>");
								break;

								case ".mp4":
										timeline_creator = (timeline_creator + "<video style='margin-top: 20px' width='100%;' controls><source src='"+ total_contents[t_line].box_Contents +"' id='vid_source' type='video/mp4'></video>");
								break;	

								default:
										timeline_creator = (timeline_creator + "<p>"+ total_contents[t_line].box_Contents +"</p>");
								break;
							}

				timeline_creator = (timeline_creator + "</div></div>");										
																	
							break;
																	
							case 1:
		//timeline_creator = (timeline_creator + "<div class='timeline_container right'><div class='content'><h2>"+ total_contents[t_line].box_Heading +"</h2><p>"+ total_contents[t_line].box_Contents +"</p></div><answer_text></answer_text></div>");
		timeline_creator = (timeline_creator + "<div class='timeline_container right'><div class='content'><h2>"+ total_contents[t_line].box_Heading +"</h2>");
								
						switch(total_contents[t_line].box_Contents.slice(-4))
							{
								case ".jpg":
										//alert("Image");
									timeline_creator = (timeline_creator +"<img src='../../images/" + total_contents[t_line].box_Contents + "' width='80%' height='auto' alt=''/>");
								break;

								case ".mp3":
										timeline_creator = (timeline_creator +"<audio controls style='width:80%; margin-top: 20px;'><source src='../../audio/" + total_contents[t_line].box_Contents + "' type='audio/mpeg'></audio>");
								break;

								case ".mp4":
										timeline_creator = (timeline_creator + "<video style='margin-top: 20px' width='100%;' controls><source src='"+ total_contents[t_line].box_Contents +"' id='vid_source' type='video/mp4'></video>");
								break;	

								default:
										timeline_creator = (timeline_creator + "<p>"+ total_contents[t_line].box_Contents +"</p>");
								break;
							}

				timeline_creator = (timeline_creator + "</div></div>");									
							break;	
						}									
			}
			

timeline_creator = (timeline_creator + "</div>");
				
Component_Engine(timeline_creator);				
			
					
				break;
				
				
				
				
				
				
				case "Speech_Bubbles1":
				case "Speech_Bubbles2":
				case "Speech_Bubbles3":
				case "Speech_Bubbles4":
				case "Speech_Bubbles5":
				case "Speech_Bubbles6":
				case "Speech_Bubbles7":
				case "Speech_Bubbles8":
				case "Speech_Bubbles9":
				case "Speech_Bubbles10":

						
						sBubble_data = (Object.keys(LDF[0][jcc_test[ln_num]]));
				
						cur_bub_comp = jcc_test[ln_num];
						//alert("sBubble_data: " + sBubble_data);
						//alert("sBubble_data.length: " + sBubble_data.length);
				
							talking_head_image = LDF[0][jcc_test[ln_num]][sBubble_data[0]];
							Start_Text_For_Bubble = LDF[0][jcc_test[ln_num]][sBubble_data[1]]; 
				
							bbl_margin = LDF[0][jcc_test[ln_num]][sBubble_data[2]]; 
				
	Bbl_Creator = ("<div id='spb_"+ ln_num +"' class='col-lg-12 col-md-12 col-xs-12 main_bubble' style='margin-top: "+ bbl_margin +"; margin-bottom: 40px;'> <div class='bubbles'><div class='balloons'>");
	
bbl_cur_id[ln_num] = ("spb_"+ ln_num);			
				
	Bbl_Creator = Bbl_Creator + "<div id='startBubble"+ ln_num +"' class='bLeft bubble' style='display:block;'><div class='bText'><p>" + Start_Text_For_Bubble + "</p></div></div>";				
					var bbl_txt_loop = (sBubble_data.length - 3);

							for(var bbNum = 0; bbNum < bbl_txt_loop; bbNum++)
								{
									//bubbleArray[bbNum] = LDF[0][jcc_test[ln_num]][sBubble_data[bbNum + 3]];
										sBubble_Text_Array[bbNum] = LDF[0][jcc_test[ln_num]][sBubble_data[bbNum + 3]];
									//alert(sBubble_Text_Array[bbNum]);
									
									switch(bbNum % 2)
												{
													case 0:
														
														bubbleArray[bbNum] = sBubble_Text_Array[bbNum]; 
														
														//alert("bubbleArray[bbNum]: " + bubbleArray[bbNum]);
														//("rt_" + bbNum + "_" + ln_num);
Bid_Num[bbNum] = ("bbl_" + bbNum + "_" + ln_num);
Bbl_Creator = Bbl_Creator + "<div id='" + Bid_Num[bbNum] +"' class='bRight bubble' style='display:none;'><div class='bText' ><p>" + bubbleArray[bbNum] + "</p></div></div>";										//alert("0");				
													break;
														
													case 1:
														bubbleArray[bbNum] = sBubble_Text_Array[bbNum];
														//alert("bubbleArray[bbNum]: " + bubbleArray[bbNum]);
														//("lt_" + bbNum + "_" + ln_num);
Bid_Num[bbNum] = ("bbl_" + bbNum + "_" + ln_num);
Bbl_Creator = Bbl_Creator + "<div id='" + Bid_Num[bbNum] +"' class='bLeft bubble' style='display:none;'><div class='bText'><p>" + bubbleArray[bbNum] + "</p></div></div>";										//alert("1");				
													break;	
														
												}
									//alert("bbNum: " + bbNum);
									//bbl_count
									
									bbl_count[ln_num] = bbNum;
								}
				
			//alert("sBubble_Text_Array.length: " + sBubble_Text_Array.length);
				
	//onclick='goNext(1,this);	
				
	//onclick='bub_Next("+ln_num+");'			
				
	Bbl_Creator = Bbl_Creator + "<div class='talkingheads'><img src='../../images/" + talking_head_image +"' alt=''></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+ln_num+"' style='display:none' onclick='bub_Back("+ln_num+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+ln_num+"' onclick='bub_Next("+ln_num+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div></div></div></div>";

				
	Component_Engine(Bbl_Creator);
	bubbleArray = [];			
	sBubble_Text_Array = [];				

				break;
				
//<div class='col-lg-12 col-md-12 col-xs-12' style='background-color: black'>

				case "Single_Heading_01":
				case "Single_Heading_02":
				case "Single_Heading_03":
				case "Single_Heading_04":
				case "Single_Heading_05":
				case "Single_Heading_06":
				case "Single_Heading_07":
				case "Single_Heading_08":
				case "Single_Heading_09":
				case "Single_Heading_10":
				
				var Heading_Data =  (Object.keys(LDF[0][jcc_test[ln_num]]));

				var Heading_Creator = "<div class='col-lg-12 col-md-12 col-xs-12' style='border-radius: "+ LDF[0][jcc_test[ln_num]][Heading_Data[10]] +";border-weight:"+ LDF[0][jcc_test[ln_num]][Heading_Data[8]] +" ;border-style:"+ LDF[0][jcc_test[ln_num]][Heading_Data[9]] +"; border-color:"+ LDF[0][jcc_test[ln_num]][Heading_Data[7]] +" ;background-color: "+ LDF[0][jcc_test[ln_num]][Heading_Data[6]] +" ;margin-top: "+ LDF[0][jcc_test[ln_num]][Heading_Data[2]] +"; text-align: "+ LDF[0][jcc_test[ln_num]][Heading_Data[1]] +"'>";
				
				Heading_Creator = Heading_Creator + "<p style='color: "+ LDF[0][jcc_test[ln_num]][Heading_Data[5]] +"; font-weight: "+ LDF[0][jcc_test[ln_num]][Heading_Data[4]] +"; font-size: "+ LDF[0][jcc_test[ln_num]][Heading_Data[3]] +";'>"+ LDF[0][jcc_test[ln_num]][Heading_Data[0]] +"</p>";
				
				Heading_Creator = Heading_Creator + "</div>";
				Component_Engine(Heading_Creator);
				break;
				
				case "List_01":
				case "List_02":
				case "List_03":
				case "List_04":
				case "List_05":
				case "List_06":
				case "List_07":
				case "List_08":
				case "List_09":
				case "List_10":
				
					var page_list_data = (Object.keys(LDF[0][jcc_test[ln_num]]));
					

var Page_List_Creator = "<p style='margin-top:"+ LDF[0][jcc_test[ln_num]][page_list_data[3]].top_margin +";text-align:"+ LDF[0][jcc_test[ln_num]][page_list_data[1]].align_text +"'>"+ LDF[0][jcc_test[ln_num]][page_list_data[0]].List_Heading +"</p><"+ LDF[0][jcc_test[ln_num]][page_list_data[2]].Type_of_List +" style='text-align:"+ LDF[0][jcc_test[ln_num]][page_list_data[1]].align_text +"'>";
				
							for(var pld = 4; pld < page_list_data.length; pld++)
								{
									Page_List_Creator = Page_List_Creator + "<li> "+ LDF[0][jcc_test[ln_num]][page_list_data[pld]].lstText +" </li>";
								}
				
Page_List_Creator = Page_List_Creator + "</"+ LDF[0][jcc_test[ln_num]][page_list_data[2]].Type_of_List +">";
			Component_Engine(Page_List_Creator);	
				
				break;
				
				case "Paragraph_01":
				case "Paragraph_02":
				case "Paragraph_03":
				case "Paragraph_04":
				case "Paragraph_05":
				case "Paragraph_06":
				case "Paragraph_07":
				case "Paragraph_08":
				case "Paragraph_09":
				case "Paragraph_10":
						
						var page_paragraph_data = (Object.keys(LDF[0][jcc_test[ln_num]]));
							//alert(LDF[0][jcc_test[ln_num]][page_paragraph_data[0]].align_text);
							//alert(LDF[0][jcc_test[ln_num]][page_paragraph_data[1]].top_margin_heading);
							//alert(LDF[0][jcc_test[ln_num]][page_paragraph_data[2]].Paragraph_Heading);
				
var Page_Paragraph_Creator = "<p style='margin-top:"+ LDF[0][jcc_test[ln_num]][page_paragraph_data[1]].top_margin_heading +";text-align:"+ LDF[0][jcc_test[ln_num]][page_paragraph_data[0]].align_text +"'>"+ LDF[0][jcc_test[ln_num]][page_paragraph_data[3]].Paragraph_Heading +"</p>";
						for(var ppd = 4; ppd < page_paragraph_data.length; ppd++)
							{
Page_Paragraph_Creator = Page_Paragraph_Creator + "<p style='text-align:"+ LDF[0][jcc_test[ln_num]][page_paragraph_data[0]].align_text +";margin-top:"+ LDF[0][jcc_test[ln_num]][page_paragraph_data[2]].paragraph_spacing +"'>"+ LDF[0][jcc_test[ln_num]][page_paragraph_data[ppd]].Paragraph +"</p>";				
							}
				
Component_Engine(Page_Paragraph_Creator);				
				break;
				
				
				case "image_w_text1":
				case "image_w_text2":
				case "image_w_text3":
				case "image_w_text4":
				case "image_w_text5":
				case "image_w_text6":
				case "image_w_text7":
				case "image_w_text8":
				case "image_w_text9":
				case "image_w_text10":
				
						//alert("image_w_text1: " + (Object.keys(LDF[0][jcc_test[ln_num]])));
				
						          image_w_text_data = (Object.keys(LDF[0][jcc_test[ln_num]])); 
				
											
		ImgTxt_creator = ("<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top: " + LDF[0][jcc_test[ln_num]][image_w_text_data[6]] + " ;text-align: center; background-color: " + LDF[0][jcc_test[ln_num]][image_w_text_data[7]] + "'>");
				
			switch(LDF[0][jcc_test[ln_num]][image_w_text_data[1]])	
				{
					//border-radius: 50%;	
					case "left":
				ImgTxt_creator = ImgTxt_creator + ("<div class='col-lg-6 col-md-6 col-xs-12' style='text-align: center;'><img style='border-radius:"+ LDF[0][jcc_test[ln_num]][image_w_text_data[8]] +"' src='../../images/" + LDF[0][jcc_test[ln_num]][image_w_text_data[0]] + "' width=' " + LDF[0][jcc_test[ln_num]][image_w_text_data[3]] + " ' height='auto' alt=''/></div>");
						
				ImgTxt_creator = ImgTxt_creator + ("<div class='col-lg-6 col-md-6 col-xs-12' style='text-align: center;'>" + LDF[0][jcc_test[ln_num]][image_w_text_data[4]] + "</div>");
						
					break;
						
					case "right":
				ImgTxt_creator = ImgTxt_creator + ("<div class='col-lg-6 col-md-6 col-xs-12' style='text-align: center;'>" + LDF[0][jcc_test[ln_num]][image_w_text_data[4]] + "</div>");						
						
				ImgTxt_creator = ImgTxt_creator + ("<div class='col-lg-6 col-md-6 col-xs-12' style='text-align: center;'><img style='border-radius:"+ LDF[0][jcc_test[ln_num]][image_w_text_data[8]] +"' src='../../images/" + LDF[0][jcc_test[ln_num]][image_w_text_data[0]] + "' width=' " + LDF[0][jcc_test[ln_num]][image_w_text_data[3]] + " ' height='auto' alt=''/></div>");
					break;

					case "top":
				ImgTxt_creator = ImgTxt_creator + ("<div class='col-lg-12 col-md-12 col-xs-12' style='text-align: center;'><img style='border-radius:"+ LDF[0][jcc_test[ln_num]][image_w_text_data[8]] +"' src='../../images/" + LDF[0][jcc_test[ln_num]][image_w_text_data[0]] + "' width=' " + LDF[0][jcc_test[ln_num]][image_w_text_data[3]] + " ' height='auto' alt=''/></div>");
						
				ImgTxt_creator = ImgTxt_creator + ("<div class='col-lg-12 col-md-12 col-xs-12' style='text-align: center;'>" + LDF[0][jcc_test[ln_num]][image_w_text_data[4]] + "</div>");						
					break;
						
					case "bottom":
						
				ImgTxt_creator = ImgTxt_creator + ("<div class='col-lg-12 col-md-12 col-xs-12' style='text-align: center;'>" + LDF[0][jcc_test[ln_num]][image_w_text_data[4]] + "</div>");	
						
				ImgTxt_creator = ImgTxt_creator + ("<div class='col-lg-12 col-md-12 col-xs-12' style='text-align: center;'><img style='border-radius:"+ LDF[0][jcc_test[ln_num]][image_w_text_data[8]] +"' src='../../images/" + LDF[0][jcc_test[ln_num]][image_w_text_data[0]] + "' width=' " + LDF[0][jcc_test[ln_num]][image_w_text_data[3]] + " ' height='auto' alt=''/></div>");	
					break;						
				}
						
		ImgTxt_creator = ImgTxt_creator + ("</div>");
				
		Component_Engine(ImgTxt_creator);		
				break;	
			/*	
				case "Single_Image_File1":
				case "Single_Image_File2":
				case "Single_Image_File3":
				case "Single_Image_File4":
				case "Single_Image_File5":
				case "Single_Image_File6":
				case "Single_Image_File7":
				case "Single_Image_File8":
				case "Single_Image_File9":
				case "Single_Image_File10":
				
						Component_Engine("<div class='pnl_wdth row'><img id='' style='margin:0px; width: 100%;' src='../jbuild_libs/images/" + LDF[0][jcc_test[ln_num]] + ".png' height='100px' alt=''/></div>");
				break;
			*/	
				
				case "divider_image1":
				case "divider_image2":
				case "divider_image3":
				case "divider_image4":
				case "divider_image5":
				case "divider_image6":
				case "divider_image7":
				case "divider_image8":
				case "divider_image9":
				case "divider_image10":
						// Component name from case, data file
	
						//alert("Divider: " + LDF[0][jcc_test[ln_num]]);
						//alert("divider_image1 " + LDF[0].top_margin);
						//margin-top: 20px
				//alert(jcc_test[ln_num]);
				
				//top_margin
					Component_Engine("<div class='pnl_wdth row' style='margin-top: "+ LDF[0].top_margin +"'><img id='' style='margin:-10px; overflow:hidden; width: 100%;' src='../../../jbuild_libs/images/" + LDF[0][jcc_test[ln_num]] + ".png' height='100px' alt=''/></div>");
						
						//Component_Engine("<div class='pnl_wdth row'><img id='jccDivider' style='margin:-10px; overflow:hidden; width: 100%;' src='../jbuild_libs/images/" + LDF[0][jcc_test[ln_num]] + ".png' height='100px' alt=''/></div>");	
						
				break;	
					
//------------------------------------------------------------------------------------------------------------------------------------------
// Column Accordion Begin					
//------------------------------------------------------------------------------------------------------------------------------------------				
	
				case "Single_Accordion1":
				case "Single_Accordion2":
				case "Single_Accordion3":
				case "Single_Accordion4":
				case "Single_Accordion5":
				case "Single_Accordion6":
				case "Single_Accordion7":
				case "Single_Accordion8":
				case "Single_Accordion9":
				case "Single_Accordion10":
						var SA_Data = Object.keys(LDF[0][jcc_test[ln_num]]);
						
						var sSelections = LDF[0][jcc_test[ln_num]][SA_Data[1]];
				
						var snglBld = [];
				
Single_Accordion_Creator = "<div class='panel-group col-lg-12 col-md-12 col-xs-12'><div class='panel panel-default'><div class='panel-heading'>";

Single_Accordion_Creator = Single_Accordion_Creator + "<h4 class='panel-title'><a data-toggle='collapse' href='#collapse"+ln_num+"'>"+ LDF[0][jcc_test[ln_num]][SA_Data[0]] +"</a></h4></div>"; 

Single_Accordion_Creator = Single_Accordion_Creator + "<div id='collapse"+ln_num+"' class='panel-collapse collapse'>";					
									
						for(var SAN = 0; SAN < sSelections.length; SAN++)
								{
									snglBld[SAN] = Object.keys(sSelections[SAN]);

										switch(String(Object.keys(sSelections[SAN])) )
											{
												case "video":
													
Single_Accordion_Creator = Single_Accordion_Creator + "<video style='margin-top: 20px' width='100%;' controls><source src='"+ sSelections[SAN][snglBld[SAN]] +"' id='vid_source' type='video/mp4'></video>";														
												break;
														
												case "audio":
													
Single_Accordion_Creator = Single_Accordion_Creator + "<audio controls style='width:80%; margin-top: 20px;'><source src='../../audio/" + sSelections[SAN][snglBld[SAN]] + "' type='audio/mpeg'></audio>";
															
												break;
												
												case "MAC_Image_File":	
												
Single_Accordion_Creator = Single_Accordion_Creator + "<img style='margin-top: 10px; width: auto;' src='../../images/" + sSelections[SAN][snglBld[SAN]] + "' height='100px' alt=''/></div>";								
													//alert("Image: " + sSelections[SAN][snglBld[SAN]]);
													
												break;	
													
												case "Info_Contents":
													

Single_Accordion_Creator = Single_Accordion_Creator + "<br><br><span class='fa fa-info-circle' style='outline: 5px solid orange; padding: 20px; display:inline-block'><h2>" + sSelections[SAN][snglBld[SAN]] +"</h2></span><br><br>";					
								
												break;
												
												case "Paragraph_for_Single_Accordion":
													//alert(sSelections[SAN][snglBld[SAN]][0].Paragraph_align_single);
												var pfsa_Text_Array = [];	
													for(var pfsa = 1; pfsa < sSelections[SAN][snglBld[SAN]].length; pfsa++)
														{
															pfsa_Text_Array[pfsa] = (sSelections[SAN][snglBld[SAN]][pfsa].Paragraph_txt_Single);
															Single_Accordion_Creator = Single_Accordion_Creator + "<h2 style='padding: 10px; text-align: "+ sSelections[SAN][snglBld[SAN]][0].Paragraph_align_single +"'>"+ pfsa_Text_Array[pfsa] +"</h2>";
														}
												break;	
/*													
												case "Paragraph_txt_Single":
												//case "Paragraph_txt2":
												//case "Paragraph_txt3":
												//case "Paragraph_txt4":
												//case "Paragraph_txt5":	
										//alert(String(Object.keys(sSelections[SAN])));			
													
													
Single_Accordion_Creator = Single_Accordion_Creator + "<h2>"+ sSelections[SAN][snglBld[SAN]] +"</h2>";														
												break;
*/													
												case "List_text":
												//alert(sSelections[SAN][snglBld[SAN]][0].List_Heading);
							//alert(sSelections[SAN][snglBld[SAN]][1].align_text);					
													//alert(sSelections[SAN][snglBld[SAN]].length);
Single_Accordion_Creator = Single_Accordion_Creator + "<"+ sSelections[SAN][snglBld[SAN]][2].Type_of_List +"><h4 style='text-align: "+ sSelections[SAN][snglBld[SAN]][1].align_text +"'>"+ sSelections[SAN][snglBld[SAN]][0].List_Heading +"</h4>";													
						var List_Text_Array = [];
								for(var lstTxt=3; lstTxt < sSelections[SAN][snglBld[SAN]].length; lstTxt++)
										{
											List_Text_Array[lstTxt] = (sSelections[SAN][snglBld[SAN]][lstTxt].lstText);
											Single_Accordion_Creator = Single_Accordion_Creator + "<li style='text-align: "+ sSelections[SAN][snglBld[SAN]][1].align_text +";'>"+ List_Text_Array[lstTxt] +"</li>";
										}

Single_Accordion_Creator = Single_Accordion_Creator + "</"+ sSelections[SAN][snglBld[SAN]][2].Type_of_List +">";
//Component_Engine(Single_Accordion_Creator);														
												break;	

												case "Heading_Accordion":
				
Single_Accordion_Creator = Single_Accordion_Creator + "<p style='color: "+ sSelections[SAN][snglBld[SAN]][5].color +"; font-weight: "+ sSelections[SAN][snglBld[SAN]][4].style +"; font-size: "+ sSelections[SAN][snglBld[SAN]][3].size +"; border-radius: "+ sSelections[SAN][snglBld[SAN]][10].border_radius +";border-weight:"+ sSelections[SAN][snglBld[SAN]][8].border_weight +" ;border-style:"+ sSelections[SAN][snglBld[SAN]][9].border_style +"; border-color:"+ sSelections[SAN][snglBld[SAN]][7].border_color +" ;background-color: "+ sSelections[SAN][snglBld[SAN]][6].background_color +" ;margin-top: "+ sSelections[SAN][snglBld[SAN]][2].top_margin +"; text-align: "+ sSelections[SAN][snglBld[SAN]][1].alignment +"'>"+ sSelections[SAN][snglBld[SAN]][0].sngl_Heading +"</p>";

												break;	
													
											}

								}
			
				
				
Single_Accordion_Creator = Single_Accordion_Creator + "</div>";					
Single_Accordion_Creator = Single_Accordion_Creator + "</div></div></div>";				
			
Component_Engine(Single_Accordion_Creator);									
				
			
				break;

				case "Multi_Accordion1":
				case "Multi_Accordion2":
				case "Multi_Accordion3":
				case "Multi_Accordion4":
				case "Multi_Accordion5":

var MA_Data = Object.keys(LDF[0][jcc_test[ln_num]]);
				
Multi_Selection_Accordion = "<div class='panel-group' id='m_accordion'>";	

		
				for(var MAC = 0; MAC < MA_Data.length; MAC++)
					{
						switch(MAC % 2)
							{
								case 0:

Multi_Selection_Accordion = Multi_Selection_Accordion + "<div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'><a data-toggle='collapse' data-parent='#m_accordion' href='#m_collapse" + MAC + "'>"+ LDF[0][jcc_test[ln_num]][MA_Data[MAC]] +"</a></h4></div>";

											mc_num = MAC;
								break;
								
								case 1:
								  var macc_contents = LDF[0][jcc_test[ln_num]][MA_Data[MAC]];
									
									//alert("macc_contents: " + macc_contents);
								  for(var msec = 0; msec < LDF[0][jcc_test[ln_num]][MA_Data[MAC]].length; msec++)
										{
//alert(LDF[0][jcc_test[ln_num]][MA_Data[MAC]].length);
//alert("msec: " + msec + " : " + macc_contents[msec][Object.keys(macc_contents[msec])]);										
											
Accordion_Contents_Creator( String(Object.keys(macc_contents[msec])),"Multi_Selection_Accordion", macc_contents[msec][Object.keys(macc_contents[msec])]);											

Multi_Selection_Accordion = Multi_Selection_Accordion + "<div id='m_collapse"+ mc_num +"' class='panel-collapse collapse'><div class='panel-body'>"+ mlty_contents +"</div></div></div>";												
	
										}

								break;
							}
					}

Multi_Selection_Accordion = Multi_Selection_Accordion + "</div>";		
Component_Engine(Multi_Selection_Accordion);						
				break;
				
				
				
				
				
				case "Column_Accordion1":
				case "Column_Accordion2":
				case "Column_Accordion3":
				case "Column_Accordion4":
				case "Column_Accordion5":
				case "Column_Accordion6":
				case "Column_Accordion7":
				case "Column_Accordion8":
				case "Column_Accordion9":
				case "Column_Accordion10":
					//alert("LDF[0][jcc_test["+ln_num +"]] " + LDF[0][jcc_test[ln_num]]);
						
					//cur_ln_num = ln_num;
					  acLbl_Data = Object.keys(LDF[0][jcc_test[ln_num]]);
				
				
				
				
				//alert(LDF[0][jcc_test[ln_num]][acLbl_Data[0]]); //Accordion Label
				//alert(LDF[0][jcc_test[ln_num]][acLbl_Data[1]]); //Top Div
				//alert(LDF[0][jcc_test[ln_num]][acLbl_Data[2]]); //Bottom Div
				
					 var acc_contents = LDF[0][jcc_test[ln_num]][acLbl_Data[3]];
					
//alert(acLbl_Data[3]);

					
				
						//alert(acc_contents.length);
						//alert(acc_contents[0].acc_content);
						//alert(acc_contents[0].side);
				
				
				//Column_Accordion_Creator = Column_Accordion_Creator + "<div>This is some text</>";
				
				
				//Column_Accordion_Creator = Column_Accordion_Creator + "<div id='saccd_"+ ln_num +"' class='col-lg-12 col-md-12 col-xs-12'></div>";
				

				 // Column_Accordion_Creator = "<div class='panel-group'>";
				//  Column_Accordion_Creator = Column_Accordion_Creator + "<div class='panel panel-default'>";
				 // Column_Accordion_Creator = Column_Accordion_Creator + "<div class='panel-heading'>";
Column_Accordion_Creator = "<div class='panel-group col-lg-12 col-md-12 col-xs-12'><div style='background-color: #777777;' class='panel panel-default'><div class='panel-heading'>";

Column_Accordion_Creator = Column_Accordion_Creator + "<h4 class='panel-title'><a data-toggle='collapse' href='#collapse"+ln_num+"'>"+ LDF[0][jcc_test[ln_num]][acLbl_Data[0]] +"</a></h4></div>"; 

Column_Accordion_Creator = Column_Accordion_Creator + "<div id='collapse"+ln_num+"' class='panel-collapse collapse'>";
// The line below is for how many panels and their content
				
//alert(acc_contents.length);
				
//var jcbld = (Object.keys(acc_contents[0]));	
				
	//alert(jcbld[0]);
				
		//alert(jcbld[0].jcbld[0]);		
				
//var jcbld = (Object.keys(acc_contents[3]));	
				
var jcbld = [];				
var com_elm_array = [];
var acc1_comp;
				//alert(jcbld[0]);			
Column_Accordion_Creator = Column_Accordion_Creator + "<div style='background-color: #ffffff' class='col-lg-12 col-md-12 col-xs-12'>";					
for(var sacc = 0; sacc < acc_contents.length; sacc++)
	{			
//-------------------------------------------------------------------------------------------------				
			jcbld[sacc] = Object.keys(acc_contents[sacc]);
			
			//com_elm_array[sacc] = (jcbld[sacc][0]);
			com_elm_array[sacc] = (jcbld[sacc]);
		
			//alert(jcbld[sacc][0]);		
		//alert(acc_contents[sacc][com_elm_array[sacc][0]]);
		
		
//$( '#feedback_' + qan.toString() ).addClass('Feedback_Incorrect');		
		

switch( jcbld[sacc][0] )
				{
					case "video":
						
			//alert(acc_contents[sacc][com_elm_array[sacc][1]]);			
						
			
							if(acc_contents[sacc][com_elm_array[sacc][1]] === "left")				
								{		
									//alert("left");
									acc1_comp = "<div class='col-lg-12 col-md-12 col-xs-12' style='width: auto; height: 80%; margin-top: 20px;'><video width='100%;' controls><source src='"+ acc_contents[sacc][com_elm_array[sacc][0]] +"' id='vid_source' type='video/mp4'></video></div>";

									Column_Accordion_Creator = Column_Accordion_Creator + "<div id='vid_left' class='col-lg-6 col-md-6 col-xs-12'>" + acc1_comp + "</div>";	
								}	


							if(acc_contents[sacc][com_elm_array[sacc][1]] === "right")
								{
									//alert("right");
									acc1_comp = "<div class='col-lg-12 col-md-12 col-xs-12' style='width: auto;  height: 80%; margin-top: 20px;'><video width='100%;' controls><source src='"+ acc_contents[sacc][com_elm_array[sacc][0]] +"' id='vid_source' type='video/mp4'></video></div>";

									Column_Accordion_Creator = Column_Accordion_Creator + "<div id='vid_right' class='col-lg-6 col-md-6 col-xs-12'>" + acc1_comp + "</div>";	
								}

						//class='panel-body'
					break;	

					case "divider":
						
									acc1_comp = "<div><img id='dvd_left' style='margin:-10px; z-index: 100px; overflow:hidden; width: 100%;' src='../jbuild_libs/images/" + acc_contents[sacc][com_elm_array[sacc][0]] + ".png' height='50px' alt=''/></div>";

									//acc1_comp = "<div><img id='dvd_right' style='margin:-10px; z-index: 100px; overflow:hidden; width: 100%;' src='../jbuild_libs/images/" + acc_contents[sacc][com_elm_array[sacc][0]] + ".png' height='50px' alt=''/></div>";						
						
					Column_Accordion_Creator = Column_Accordion_Creator + "<div class='col-lg-6 col-md-6 col-xs-12'>" + acc1_comp + "</div>";	
					break;
						
					case "Audio":
		//alert("Audio: " + acc_contents[sacc][com_elm_array[sacc][1]]);
						
						
//  position: absolute; bottom: 0; left: 0;						
						
									if(acc_contents[sacc][com_elm_array[sacc][1]] === "left")
										{
											acc1_comp = "<div style='background-color: #ffffff;' class='col-lg-12 col-md-12 col-xs-12 body_style'><audio controls style='width:80%; margin-top: 20px;  z-index: -1px'><source src='../../audio/" + acc_contents[sacc][com_elm_array[sacc][0]] + "' type='audio/mpeg'></audio></div>";

											Column_Accordion_Creator = Column_Accordion_Creator + "<div id='mp3_left' class='col-lg-6 col-md-6 col-xs-12 fixed-bottom'>" + acc1_comp + "</div>";	
										}	

									if(acc_contents[sacc][com_elm_array[sacc][1]] === "right") //height: 300px;
										{		
										   acc1_comp = "<div style='background-color: #ffffff;' class='col-lg-12 col-md-12 col-xs-12 body_style'><audio controls style='width:80%; margin-top: 20px;  z-index: -1px'><source src='../../audio/" + acc_contents[sacc][com_elm_array[sacc][0]] + "' type='audio/mpeg'></audio></div>";	

											Column_Accordion_Creator = Column_Accordion_Creator + "<div id='mp3_right' class='col-lg-6 col-md-6 col-xs-12 fixed-bottom'>" + acc1_comp + "</div>"; 
										}
						
						
					break;
						
					case "Info_Contents":

					break;
				
						
				}
		
		
		
		
/*		
					{"video":"http://ry6g4c.cloud.influxis.com:8081/ManagedContent/sri111_M1L1V1B_h264_main_l31_768k_288p_aac_96k.mp4", "side":"left"},
					{"divider_image":"bowl", "side":"left"},
					{"Audio_Player":"file.mp3", "side":"left"},
					{"Audio_Player":"test.mp3", "side":"left"},
				//-------------------------------------------------------------------
					{"Info_Contents":"Text for the Column info box 1", "side":"right"},
					{"Info_Contents":"Text for the Column info box 2", "side":"right"},		
*/	

		

		
		
		//Column_Accordion_Creator = Column_Accordion_Creator + "<div class='panel-body'>" + acc_contents[sacc].acc_content + "</div>";
		

		
		
//					Video_Creator = "<div id='vid_clip' class='col-lg-12 col-md-12 col-xs-12' style='width: auto; margin-top: 10px;'><video width='100%;' controls><source src='' id='vid_source' type='video/mp4'></video></div>";		
		
//-------------------------------------------------------------------------------------------------					
	}
				
Column_Accordion_Creator = Column_Accordion_Creator + "</div>";					
Column_Accordion_Creator = Column_Accordion_Creator + "</div></div></div>";				
				
				
Component_Engine(Column_Accordion_Creator);				
				
		
				

				break;
//------------------------------------------------------------------------------------------------------------------------------------------
// Column Accordion	End						
//------------------------------------------------------------------------------------------------------------------------------------------				
				
				case "video_1":
				
					Video_Creator = "<div id='vid_clip' class='col-lg-12 col-md-12 col-xs-12' style='width: auto; margin-top: 10px;'><video width='100%;' controls><source src='' id='vid_source' type='video/mp4'></video></div>";
				
					Component_Engine(Video_Creator);	
				break;
				
				
				
				
				
				
						
				}
			}
}


//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Speech Bubble Buttons Begin )>-------                                                 ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝	
var bid_Count;
var direction = 1;

function bub_Next(bb_cur)
{

if((document.getElementById("bub_prev_buton" + bb_cur).style.display) === "none")
		{
			bid_Count = 0;
		}
	
switch(bid_Count)

	{
			
		case bbl_count[bb_cur]:
				document.getElementById("bbl_" + (bid_Count - 1) + "_" + bb_cur).style.display = "none";
				document.getElementById("bbl_" + bid_Count + "_" + bb_cur).style.display = "block";
				document.getElementById("bub_next_button" + bb_cur).innerText = "Replay";
				
				//alert("bid_Count: " + bid_Count + " : bb_cur: " + bb_cur + " : bbl_count[bb_cur]: " + bbl_count[bb_cur]);
					bid_Count = (-1);
		break;
		
		case -1:
				document.getElementById("startBubble" + bb_cur).style.display = "block";
				document.getElementById("bbl_" + bbl_count[bb_cur] + "_" + bb_cur).style.display = "none";
				document.getElementById("bub_next_button" + bb_cur).innerText = "Start";
				document.getElementById("bub_prev_buton" + bb_cur).style.display = "none";
					bid_Count = 0;
		break;	
			
		case 0:
				document.getElementById("startBubble" + bb_cur).style.display = "none";
				document.getElementById("bub_prev_buton" + bb_cur).style.display = "block";
				document.getElementById("bub_next_button" + bb_cur).innerText = "Next";
				document.getElementById("bbl_" + bid_Count + "_" + bb_cur).style.display = "block";
					bid_Count = (bid_Count + 1);
		break;
			
		default:
				document.getElementById("bbl_" + (bid_Count - 1) + "_" + bb_cur).style.display = "none";	
				document.getElementById("bbl_" + bid_Count + "_" + bb_cur).style.display = "block";
					bid_Count = (bid_Count + 1);
				
		break;
	}

}


function bub_Back(bb_cur)
{
			switch(bid_Count)
			{
					
				case 1:
						bid_Count = 0;
						document.getElementById("startBubble" + bb_cur).style.display = "block";
						document.getElementById("bbl_" + bid_Count + "_" + bb_cur).style.display = "none";
						document.getElementById("bub_next_button" + bb_cur).innerText = "Start";
						document.getElementById("bub_prev_buton" + bb_cur).style.display = "none";
				break;	
					
				default:
						bid_Count = (bid_Count - 1);
						document.getElementById("bbl_" + bid_Count + "_" + bb_cur).style.display = "none";
						bid_Count = (bid_Count - 1);
						document.getElementById("bbl_" + bid_Count + "_" + bb_cur).style.display = "block";
						bid_Count = (bid_Count + 1);
				break;
					
				case (-1):
						document.getElementById("bbl_" + (bbl_count[bb_cur]) + "_" + bb_cur).style.display = "none";
						
							bid_Count = (bbl_count[bb_cur] - 1);		
					
						document.getElementById("bbl_" + bid_Count + "_" + bb_cur).style.display = "block";
							bid_Count = (bid_Count + 1);
				break;
					
					
			}

}


//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Speech Bubble Buttons End )>-------                                                   ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝	



//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Multiple Answer begin )>-------                                                       ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝


function MSub_on(ccbx)
{
	document.getElementById("mtl_sub_button" + ccbx).disabled = false;
	
	$( '#mtl_sub_button' + ccbx.toString()).removeClass('disabled');
	$( '#mtl_sub_button' + ccbx.toString()).addClass('active');

}


var Check_Test_Array = [];
function QMA_Check(qma_a) // 2 4 6

{

//if(document.getElementById(QMA_Checkbox_Array[qma_a][qma_ck]).checked === false)	
	
// button id='mtl_sub_button"+ln_num+"'

//document.getElementById("mtl_sub_button" + qma_a).disabled = false;	
	
Incorrect_answer_count = 0;

for(var qma_ck = 0; qma_ck < QMA_Checkbox_Array[qma_a].length; qma_ck++)
		{
			if(document.getElementById(QMA_Checkbox_Array[qma_a][qma_ck]).checked === true && QMA_Correct_Answer_Array[qma_a][qma_ck] === "true")	
				{
					$('#Q_' + qma_ck.toString() + "_" + qma_a.toString()).addClass('sqCorrect');
				}

			if(document.getElementById(QMA_Checkbox_Array[qma_a][qma_ck]).checked === true && QMA_Correct_Answer_Array[qma_a][qma_ck] === "false")	
				{
					$('#Q_' + qma_ck.toString() + "_" + qma_a.toString()).addClass('sqIncorrect');
					
					Incorrect_answer_count = (Incorrect_answer_count + 1);
					
					
				}			

			if(document.getElementById(QMA_Checkbox_Array[qma_a][qma_ck]).checked === false && QMA_Correct_Answer_Array[qma_a][qma_ck] === "true")	
				{
					$('#Q_' + qma_ck.toString() + "_" + qma_a.toString()).addClass('sqCorrect');
					Incorrect_answer_count = (Incorrect_answer_count + 1);
				}
			
			QMA_IC_Array[qma_a] = Incorrect_answer_count;
		}
	

	
	if(QMA_IC_Array[qma_a] > 0)
	//alert("Number of incorrect answers on question " + qma_a + " was " + QMA_IC_Array[qma_a]);
		{
							$('#mFeedback_' + qma_a.toString()).addClass('Feedback_Incorrect');
							document.getElementById("mFeedback_" + qma_a.toString()).innerText = QMA_Incorrect_Feedback_Array[qma_a];
		}
			else
		{
							$('#mFeedback_' + qma_a.toString()).addClass('Feedback_Correct');
							document.getElementById("mFeedback_" + qma_a.toString()).innerText = QMA_Correct_Feedback_Array[qma_a];		
		}

	document.getElementById("mtl_sub_button" + qma_a).disabled = true;
	
	$( '#mtl_sub_button' + qma_a.toString()).addClass('disabled');
	$( '#mtl_sub_button' + qma_a.toString()).removeClass('active');

}
//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Multiple Answer end )>-------                                                         ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝	




//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Single Answer 4 or 3 choice question begin )>-------                                  ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝	

function QSA_Check(qan) //,cid
{
		var divid;
		//var stdt_answer = Number(event.target.id);
		var correct_single_answer = Number(QSA_Correct_Answer[qan]);
		QSA_Key_Array = [];
		QSA_Feedback_Array = [];

		QSA_Key_Array[1] = '#aOne_' + qan.toString();
		QSA_Key_Array[2] = '#aTwo_' + qan.toString();
		QSA_Key_Array[3] = '#aThree_' + qan.toString();
		QSA_Key_Array[4] = '#aFour_' + qan.toString();	
		//alert("QSA_Feedback_Array[0]: " + QSA_Feedback_Array[1]);
	
		//QSA_Feedback_Array[0] = '#feedback_' + qan.toString();
	
	//alert("QSA_Correct_Feedback[" + qan + "]" + QSA_Correct_Feedback[qan]);
	//alert("QSA_Incorrect_Feedback[" + qan + "]" + QSA_Incorrect_Feedback[qan]);
	
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
//║ -------<( Single Answer 4 or 3 choice question end )>-------                                    ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝

function Accordion_Contents_Creator(acc,ctrName,ctrData)
{
	switch(acc)
		{
			case "video":
mlty_contents = "<video style='margin-top: 20px' width='100%;' controls><source src='"+ ctrData +"' id='vid_source' type='video/mp4'></video>";			
			break;
				
			case "audio":
mlty_contents = "<audio controls style='width:80%; margin-top: 20px;  z-index: -1px'><source src='../../audio/" + ctrData + "' type='audio/mpeg'></audio>";				break;
				
			case "Paragraph_setup":

				var new_Para_txt;
				
					new_Para_txt = "<h2 style='text-align:"+ ctrData[0].Paragraph_align +"'>"+ ctrData[1].Paragraph_txt +"</h2>";
									
						for(var mpar = 1; mpar < ctrData.length; mpar++)
							{
								if(mpar === 1)
									{
								new_Para_txt = "<h2 style='text-align:"+ ctrData[0].Paragraph_align +"'>"+ ctrData[1].Paragraph_txt +"</h2>";
									}
								else
									{
								new_Para_txt = new_Para_txt + "<h2 style='text-align:"+ ctrData[0].Paragraph_align +"'>"+ ctrData[mpar].Paragraph_txt +"</h2>";		
										
									}
							}
	
				mlty_contents = new_Para_txt;
				
			break;
				
			case "List_text":
				var new_List_Text;
				
	
					new_List_Text = "<h2 style='text-align:"+ ctrData[1].align_text +"'>"+ ctrData[0].List_Heading +"</h2><"+ ctrData[2].Type_of_List +">";
						for(var lst_txt = 3; lst_txt < ctrData.length; lst_txt++)
							{
								new_List_Text = new_List_Text + "<li style='text-align:"+ ctrData[1].align_text +"'>" + ctrData[lst_txt].lstText + "</li>";
								//alert(ctrData[lst_txt].lstText);								
							}
					new_List_Text = new_List_Text + "</"+ ctrData[2].Type_of_List +">";
mlty_contents = new_List_Text;				
			break;
				
			case "MAC_Image_File":
				var New_Single_Image;
				New_Single_Image = "<img style='margin-top: 10px; width: auto;' src='../../images/" + ctrData + "' height='100px' alt=''/></div>";
				
				mlty_contents = New_Single_Image;
			break;	
		}
}


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