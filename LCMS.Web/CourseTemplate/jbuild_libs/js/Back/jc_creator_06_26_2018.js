var img_loc;
var audio_loc;
var pdf_loc;
var pfd_Array = [[],[]];
var ac_pfd_Array = [[],[]];



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

var ac_sp_bbl_id = [[],[]];

var acc_setup_array = [];

var Info_Box_Array = [];

var Video_Array = [];
var Ac_Video_Array = [];

var timeline_start_array = [];
var single_question_array = [];
var multi_question_array = [[],[]]; //[];
var QMA_Checkbox_Array = [];
var tf_count_array = [[],[]]; //[];
var QMA_Correct_Feedback = [[],[]]; //[];
var QMA_Incorrect_Feedback = [[],[]]; //[];

var QSA_Correct_Answer = [[],[]];  //[[],[]];  [];
var QSA_Key_Array = [];
var QSA_Feedback_Array = [];
var QSA_Key_Array = [];
var QSA_Correct_Feedback = [[],[]];
var QSA_Incorrect_Feedback = [[],[]];

var chbx_array = [];
var tf_count = 0;
var tf_array = [];
var lst;

var jcc_data = [];




	

function Component_Engine(ceData)
{
	jcc_Comp_Creator = $("<div id='Hero_Image_File' class='col-lg-12 col-md-12 col-xs-12 panel-group' style='width:100%'>");
	
	
	$(jcc_Comp_Creator).append("<div>" + ceData + "</div>");
	
	
	$(jcc_Comp_Creator).append("</div>");
	$("#JcComponents").append(jcc_Comp_Creator);
	
	jcc_Comp_Creator = "";
}


function info_box_event(ibe)
{
//id='myModal_"+jcc+'
	$('#myModal_'+ ibe).modal('show');
	
}


function Transcripts(tran)
	{
		
		//alert(tran);
		
		window.open(pdf_loc + tran, '_blank');
		
		
		//<a href="#" onclick="window.open('MyPDF.pdf', '_blank', 'fullscreen=yes'); return false;">MyPDF</a>
	}


function Lesson_Data_File(LDF)
{

		jcc_test = Object.keys(LDF[0]); // Lesson_Data_File main Keys:
		hrData = Object.keys(LDF[0][jcc_test[0]]); // Page_Setup

	//alert(hrData);
	
	cmpData = Object.keys(LDF[0][jcc_test[1]]);

	
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
											case "Assets_folder":
												
												//alert( LDF[0][jcc_test[ln_num]][hrData[pps]] );
												img_loc = "images/";
												audio_loc = "audio/";
												pdf_loc = "pdf/";
											break;												
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
												
												//alert( LDF[0][jcc_test[ln_num]][hrData[pps + 1]] );
																
Component_Engine("<img src='"+img_loc+"" + LDF[0][jcc_test[ln_num]][hrData[pps + 1]] + "' alt='' style='width: " + Hero_Image_Size + "; height: " + Hero_Image_Size + "'>");																
														//img_loc
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
Jcc_Comp_Maker = "<div id='jack_builder' class='col-lg-12 col-md-12 col-xs-12'>";					
				
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
									case "Video_Files":
										
								Video_Array[0] = sSelections[jcc][snglBld[jcc]][0].Video;
								Video_Array[1] = sSelections[jcc][snglBld[jcc]][1].Transcript_File;
								Video_Array[2] = sSelections[jcc][snglBld[jcc]][2].Expert_View;
								Video_Array[3] = sSelections[jcc][snglBld[jcc]][3].top_margin;
								Video_Array[4] = sSelections[jcc][snglBld[jcc]][4].back_color;			
								//Video_Array[5] =  sSelections[jcc][snglBld[jcc]][5].border;	
											
								pfd_Array[jcc] = Video_Array[1];
											
											

											
								//margin-top:-20px; margin-right: 0px;

									switch(String(Video_Array[2]))
										{
											case "yes":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='video_container' style='background-color:"+Video_Array[4]+"; padding: 4px; margin-top: "+Video_Array[3]+";'><div><div><img class='expert_img_pos' style=' position: absolute; top:"+Video_Array[3]+"; right: 0px' src='../../../jbuild_libs/images/expert_video.png' width='20%' height='auto' alt=''/><video width='100%;' controls><source src='"+Video_Array[0]+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button type='button' class='btn btn-primary btn-sm' onclick='Transcripts(pfd_Array["+jcc+"]);'>Transcript</button></div></div></div>";

//alert(document.documentElement.scrollTop);
//var x = $("div").position();
//    alert("Top: " + x.top + " Left: " + x.left);	
												
											
												
											break;

											case "no":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color:"+Video_Array[4]+"; padding: 4px; margin-top: "+Video_Array[3]+";'><div><div><video width='100%;' controls><source src='"+Video_Array[0]+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button type='button' class='btn btn-primary btn-sm' onclick='Transcripts(pfd_Array["+jcc+"]);'>Transcript</button></div></div></div>";										
											break;
			
								
												
										}

											
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( Video code end )>-------											
//-------------------------------------------------------------------------------------------------------------
/*
				"background_color":"#ffffff",
				"Label_Font_Size":"h3",
				"Label_Text":"Flip Card For JackBuilder",
				"Bottom_Text":"Select image to flip to the other side",
				"Bottom_Text_Size":"h4",
				"top_margin":"0px",
				
				"Front_Image":"echo.jpg",
				"Back_Image":"test.jpg",
				
				"Front_Text":"",
				"Back_Text":"",
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "":
*/

											
/*
  See about placing the front or back image if no image present, but make transparent. That way the same size will be on both sides
  
  opacity: 0.0;
  
*/
//-------------------------------------------------------------------------------------------------------------	
//-------<( Flip Card code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Flip_Card":
var card_height = "auto";
											
											
		var jcc_car_data = sSelections[jcc].Flip_Card;
											
							//alert(jcc_car_data[0].Front_Text.length);
							//alert(jcc_car_data[0].Back_Text.length);
											
if((jcc_car_data[0].Back_Image.length === 0) && (jcc_car_data[0].Front_Image.length === 0) )											
						{
									

							var crd_hght = Number(Math.max(jcc_car_data[0].Front_Text.length,jcc_car_data[0].Back_Text.length));
							
							
							var crd_New_height = (Math.ceil(crd_hght / 40) * 27);
							
							    crd_New_height = crd_New_height.toString();
							//toString();
							
									card_height =  crd_New_height +"px";
						
						}
											
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='container col-lg-12 col-md-12 col-xs-12' style='margin-top: "+jcc_car_data[0].top_margin+"'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+jcc_car_data[0].Label_Font_Size+">"+jcc_car_data[0].Label_Text+"</"+jcc_car_data[0].Label_Font_Size+">";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='example'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='jc_flip_card"+jcc+"' class='card' style='text-align:left;width: 320px; height: "+card_height+"'>";

//╔══════════════════════════════════════════════════════════╗
//║ -------<( Flip Card Begin )>-------                      ║
//╚══════════════════════════════════════════════════════════╝
											
//-------<( Front Image Test )>-------												
//╔═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
	
//<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
/*											
<div class='card'>
      <div class='card-body'>
        <h5 class='card-title'>Special title treatment</h5>
        <p class='card-text'>With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>											
*/											
											
	switch(jcc_car_data[0].Front_Image.length)
		{
				
			case 0:
				
					if(jcc_car_data[0].Back_Image.length > 0)
						{
							jcc_car_data[0].Front_Image = jcc_car_data[0].Back_Image;
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='front alert alert-info'><img src='"+img_loc+"" + jcc_car_data[0].Front_Image + "' alt='' style='opacity: 0.0; width: 280px;'>";

							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='position: absolute; left:0; top: 5px; padding: 10px'><"+jcc_car_data[0].Front_Text_Size+" >"+jcc_car_data[0].Front_Text+"</"+jcc_car_data[0].Front_Text_Size+"></div>";			
							Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";							
						}
					if(jcc_car_data[0].Back_Image.length === 0)
						{
							

							
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='card front alert alert-info'>";
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='card-body'>";
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+jcc_car_data[0].Front_Text_Size+"><p class='card-text'>"+jcc_car_data[0].Front_Text+"</p></"+jcc_car_data[0].Front_Text_Size+">";
							Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
							Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
							

						}
				
				
			break;
				
			default:
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='front alert alert-info'><img src='"+img_loc+"" + jcc_car_data[0].Front_Image + "' alt='' style='width: 280px; height:auto'>";

				Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+jcc_car_data[0].Front_Text_Size+">"+jcc_car_data[0].Front_Text+"</"+jcc_car_data[0].Front_Text_Size+">";			
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
			break;	
				
				
		}
											
								
	
//╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
											
//-------<( Back Image Test )>-------											
//╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
	
											
	switch(jcc_car_data[0].Back_Image.length)
		{
				
			case 0:
				
					if(jcc_car_data[0].Front_Image.length > 0)
						{
							jcc_car_data[0].Back_Image = jcc_car_data[0].Front_Image;
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back well well-lg card'><img src='"+img_loc+"" + jcc_car_data[0].Back_Images + "' alt='' style='opacity: 0.0; width: 280px;'>";

							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='position: absolute; left:0; top: 5px; padding: 10px'><"+jcc_car_data[0].Back_Text_Size+">"+jcc_car_data[0].Back_Text+"</"+jcc_car_data[0].Back_Text_Size+"></div>";			
							Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";							
						}
					if(jcc_car_data[0].Front_Image.length === 0)
						{

							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back well well-lg card'>";
							
							 Jcc_Comp_Maker = Jcc_Comp_Maker + "<strong></strong><"+jcc_car_data[0].Back_Text_Size+">"+jcc_car_data[0].Back_Text+"</"+jcc_car_data[0].Back_Text_Size+">";
							
							Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
						}
				
				
			break;
				
			default:
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back well well-lg'><img src='"+img_loc+"" + jcc_car_data[0].Back_Image + "' alt='' style='width: 280px; height:auto'>";

				Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+jcc_car_data[0].Back_Text_Size+">"+jcc_car_data[0].Back_Text+"</"+jcc_car_data[0].Back_Text_Size+">";			
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
			break;	
				
				
		}											
											
/*											
if((jcc_car_data[0].Back_Image.length === 0) && (jcc_car_data[0].Front_Image.length > 0) )										
	{
		jcc_car_data[0].Back_Image = jcc_car_data[0].Front_Image;
		
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back well well-lg card'><img src='"+img_loc+"" + jcc_car_data[0].Front_Image + "' alt='' style='opacity: 0.0; width: 280px;'>";
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='position: absolute; left:0; top: 10px; padding: 10px'><"+jcc_car_data[0].Back_Text_Size+">"+jcc_car_data[0].Back_Text+"</"+jcc_car_data[0].Back_Text_Size+"></div>";
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
	}											
			else								
	{										
											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back well well-lg'><img src='"+img_loc+"" + jcc_car_data[0].Back_Image + "' alt='' style='width: 280px'>";	Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+jcc_car_data[0].Back_Text_Size+">"+jcc_car_data[0].Back_Text+"</"+jcc_car_data[0].Back_Text_Size+">";
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
	}
											
	if((jcc_car_data[0].Front_Image.length === 0) && (jcc_car_data[0].Back_Image.length === 0) )
		{
			//alert("No Back or Front image");
		}
*/		
     												
//╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<br>";											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+jcc_car_data[0].Bottom_Text_Size+">"+jcc_car_data[0].Bottom_Text+"</"+jcc_car_data[0].Bottom_Text_Size+">";											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
										
									break;		
										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Flip Card code end )>-------											
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
											
										//single_question_array[8] = 	sSelections[jcc][snglBld[jcc]][8].correct_feedback;
										//single_question_array[9] = 	sSelections[jcc][snglBld[jcc]][9].incorrect_feedback;
											
										QSA_Correct_Feedback[jcc] = sSelections[jcc][snglBld[jcc]][8].correct_feedback;
										QSA_Incorrect_Feedback[jcc] = sSelections[jcc][snglBld[jcc]][9].incorrect_feedback;
											
											
										single_question_array[10] = sSelections[jcc][snglBld[jcc]][10].top_margin;
										single_question_array[11] = sSelections[jcc][snglBld[jcc]][11].background_color;
											
//class='qOutline'	
					//"border_color":"",
					//"border_weight":"", // thin, medium thick, or pixel size "10px"
					//"border_style":"", // solid, dashed, dotted, double
					//"border_radius":"0px", // 0px = no radius	
											
					//sSelections[jcc][snglBld[jcc]][11].border_color
					//sSelections[jcc][snglBld[jcc]][11].border_weight
					//sSelections[jcc][snglBld[jcc]][11].border_style
					//sSelections[jcc][snglBld[jcc]][11].border_radius

											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='sqn_" + jcc + "' style='padding: 20px; margin-top:"+single_question_array[10]+";background-color: " + single_question_array[11] + "; border-color:"+sSelections[jcc][snglBld[jcc]][11].border_color+"; border-width:"+sSelections[jcc][snglBld[jcc]][11].border_weight+"; border-style:"+sSelections[jcc][snglBld[jcc]][11].border_style+"; border-radius:"+sSelections[jcc][snglBld[jcc]][11].border_radius+" '>";


Jcc_Comp_Maker = Jcc_Comp_Maker + "<form><div><qstn_text style='color:"+sSelections[jcc][snglBld[jcc]][11].text_color+"'><"+sSelections[jcc][snglBld[jcc]][11].question_size+">" + single_question_array[0] + "</"+sSelections[jcc][snglBld[jcc]][11].question_size+"></qstn_text></div><div class='qStyle'>";	



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
				
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</form>";							
                Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='" + a_div_name + "' class='qSpacing'><input style='cursor:pointer;' onclick='QSA_Check("+jcc+");' type='radio' name='radio' id=' " + (sqsa) + " '><label style='color:"+sSelections[jcc][snglBld[jcc]][11].text_color+"'><answer_text style='margin-left: 20px;'>" + single_question_array[sqsa] + "</answer_text></label></div>";
											
                //Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='" + a_div_name + "' class='qSpacing'><input style='cursor:pointer;' onclick='QSA_Check("+jcc+");' type='radio' name='radio' id=' " + (sqsa) + " '><label style='color:"+sSelections[jcc][snglBld[jcc]][11].text_color+"'><answer_text style='margin-left: 20px;'>" + single_question_array[sqsa] + "</answer_text></label></div>";											
										}
	
								}
												

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center'><div id='feedback_"+jcc+"' style='display: none; margin-top: 25px; width:90%;'></div></div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";											
											
//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
											
//single_question_array = [];											
		
									break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( Question Single Answer code end )>-------											
//-------------------------------------------------------------------------------------------------------------									

											
//QSA_Correct_Answer[jcc] = sSelections[jcc][snglBld[jcc]][7].correct_answer;											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Question Multiple Answer code begin )>-------											
//-------------------------------------------------------------------------------------------------------------	
									case "Question_Multiple_Answer":
											
											multi_question_array[0] = 	sSelections[jcc][snglBld[jcc]][0].question;
											//'alert(sSelections[jcc][snglBld[jcc]][0].question_size);
											QMA_Correct_Feedback[jcc] = sSelections[jcc][snglBld[jcc]][1].correct_feedback;
											QMA_Incorrect_Feedback[jcc] = sSelections[jcc][snglBld[jcc]][2].incorrect_feedback;
											//multi_question_array[1] = 	sSelections[jcc][snglBld[jcc]][1].correct_feedback;
											//multi_question_array[2] = 	sSelections[jcc][snglBld[jcc]][2].incorrect_feedback;
											
											multi_question_array[3] = 	sSelections[jcc][snglBld[jcc]][3].top_margin;
											multi_question_array[4] = 	sSelections[jcc][snglBld[jcc]][4].background_color;
		//class='qOutline'
/*											

sSelections[jcc][snglBld[jcc]][0].question_answer_text_color;
*/											
	Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div class='row'>";										
	Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div id='mqn_" + jcc + "' style='margin-top:"+ multi_question_array[3] +"; background-color: " + multi_question_array[4] + "; border-color:"+sSelections[jcc][snglBld[jcc]][4].border_color+"; border-width:"+sSelections[jcc][snglBld[jcc]][4].border_weight+"; border-style:"+sSelections[jcc][snglBld[jcc]][4].border_style+"; border-radius:"+sSelections[jcc][snglBld[jcc]][4].border_radius+" '>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding:4px;'><qstn_text style='color:"+sSelections[jcc][snglBld[jcc]][0].question_answer_text_color+"'><"+sSelections[jcc][snglBld[jcc]][0].question_size+">" + multi_question_array[0] + "</"+sSelections[jcc][snglBld[jcc]][0].question_size+"></qstn_text></div><div class='qStyle'>";						
/*											
	var chbx_array = [];
	var tf_count = 0;
	var tf_array = [];
*/	
	chbx_array = [];
	tf_count = 0;
	tf_array = [];	
	
	//tf_count_array = [];										
											for(var mqa = 5; mqa < sSelections[jcc][snglBld[jcc]].length; mqa++)
												{
													//alert(sSelections[jcc][snglBld[jcc]][mqa].q_answer);
													//alert(sSelections[jcc][snglBld[jcc]][mqa].true_false);
													
													if(mqa !== 5){tf_count = (tf_count + 1);}
														else
													{tf_count = tf_count = 0;}
													
													//tf_count_array[tf_count] = sSelections[jcc][snglBld[jcc]][mqa].true_false;
													
													//alert("tf_count: " + tf_count + " : " + tf_count_array[tf_count]);
													
													//tf_count_array[jcc] = sSelections[jcc][snglBld[jcc]][mqa].true_false;
													
							//style='margin-left: 20px;'						
													
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<form id='Q_" + tf_count + "_" + jcc +"' class='qSpacing'><input id='multiple_" + tf_count + "_" + jcc +"' style='cursor:pointer;' type='checkbox' name='multiple_" + tf_count +"' value='" + tf_count +'_' + jcc + "' onclick='MSub_on("+jcc+")'; /><span style='margin-left: 20px;'><label><answer_text style='color:"+sSelections[jcc][snglBld[jcc]][0].question_answer_text_color+"'> '" + sSelections[jcc][snglBld[jcc]][mqa].q_answer +"'</answer_text></label></span></form>";													
	
	tf_array.push(sSelections[jcc][snglBld[jcc]][mqa].true_false);												
	chbx_array.push("multiple_" + tf_count + "_" + jcc);	//mqa											
													
												}
											
	tf_count_array[jcc] = tf_array;										
	QMA_Checkbox_Array[jcc] = chbx_array;
											
	//tf_count_array[jcc]	= chbx_array;									
	//alert(QMA_Checkbox_Array[jcc]);
									
	//alert(QMA_Checkbox_Array[jcc]);
														
											
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center'> <button disabled id='mtl_sub_button"+jcc+"' onclick='QMA_Check("+jcc+");' class='btn btn-primary disabled bbl_btns' type='button'>Submit</button> </div>";											
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='mFeedback_" + jcc +"'></div>";											
    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";
    Jcc_Comp_Maker = Jcc_Comp_Maker +  "</div>";
											
											
									break;		
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Question Multiple Answer code end )>-------											
//-------------------------------------------------------------------------------------------------------------												

											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Carousel code begin )>-------											
//-------------------------------------------------------------------------------------------------------------											

									case "Carousel":
										var jcc_car_data = sSelections[jcc].Carousel;
										
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><div id='"+jcc + "_" +"jcCarousel' class='carousel slide' data-ride='false' data-interval='false' style='background-color:"+jcc_car_data[0].back_color+"'>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<ol class='carousel-indicators' style='bottom: -10px; margin-bottom:10px;'>"; //margin-bottom:10px;
			var car_count;								
				for(var jcc_car_ind = 1; jcc_car_ind < jcc_car_data.length; jcc_car_ind++)
							{
								if(jcc_car_ind === 1)
									{
										car_count = (jcc_car_ind - 1);
										Jcc_Comp_Maker = Jcc_Comp_Maker + "<li data-target='#"+jcc + "_" +"jcCarousel' data-slide-to='"+jcc + "_" + (Number(car_count))+"' class='active'></li>";
									}
										else
									{
										car_count = (jcc_car_ind - 1);
										Jcc_Comp_Maker = Jcc_Comp_Maker + "<li data-target='#"+jcc + "_" +"jcCarousel' data-slide-to='"+jcc + "_" + (Number(car_count))+"'></li>";
									}
				
							}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</ol>";
											
//========================
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='carousel-inner'>";
				for(var jcc_car = 1; jcc_car < jcc_car_data.length; jcc_car++)
							{
								if(jcc_car === 1)
									{
//=========================================================================================	
		
		if(jcc_car_data[jcc_car].Slide.Image.length < 1)
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='item active'>";
					
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='background-color:"+jcc_car_data[1].Slide.background_color+"; padding:"+jcc_car_data[1].Slide.Padding+"; text-align:"+jcc_car_data[0].Text_align+"; color:"+jcc_car_data[1].Slide.Text_Color+"; font-size:"+jcc_car_data[1].Slide.Text_Font_Size+"'>"+jcc_car_data[jcc_car].Slide.Text+"</p>";
				}
										
		if(jcc_car_data[jcc_car].Slide.Image.length > 1)  
				{
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='item active'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[1].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='"+jcc_car.toString()+"'>";
						if(jcc_car_data[jcc_car].Slide.Text.length > 1)
							{
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='background-color:"+jcc_car_data[1].Slide.background_color+"; padding:"+jcc_car_data[1].Slide.Padding+"; text-align:"+jcc_car_data[0].Text_align+"; color:"+jcc_car_data[1].Slide.Text_Color+"; font-size:"+jcc_car_data[1].Slide.Text_Font_Size+"'>"+jcc_car_data[jcc_car].Slide.Text+"</p>";
							}
					
				}		
										
				
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";						
//=========================================================================================	
									}
										else
									{
	if(jcc_car_data[jcc_car].Slide.Image.length < 1)
		{
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='item'>";

			Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='background-color:"+jcc_car_data[1].Slide.background_color+"; padding:"+jcc_car_data[1].Slide.Padding+"; text-align:"+jcc_car_data[0].Text_align+"; color:"+jcc_car_data[1].Slide.Text_Color+"; font-size:"+jcc_car_data[1].Slide.Text_Font_Size+"'>"+jcc_car_data[jcc_car].Slide.Text+"</p>";			
		}
if(jcc_car_data[jcc_car].Slide.Image.length > 1)  
				{
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='item'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[1].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='"+jcc_car.toString()+"'>";
						if(jcc_car_data[jcc_car].Slide.Text.length > 1)
							{
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='background-color:"+jcc_car_data[1].Slide.background_color+"; padding:"+jcc_car_data[1].Slide.Padding+"; text-align:"+jcc_car_data[0].Text_align+"; color:"+jcc_car_data[1].Slide.Text_Color+"; font-size:"+jcc_car_data[1].Slide.Text_Font_Size+"'>"+jcc_car_data[jcc_car].Slide.Text+"</p>";
							}
					
				}				

									}
							}
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<a class='carousel-control left' style='left: 0%' href='#"+jcc + "_" +"jcCarousel' data-slide='prev'><span class='glyphicon glyphicon-chevron-left'></span></a><a class='carousel-control right' href='#"+jcc + "_" +"jcCarousel' data-slide='next'><span class='glyphicon glyphicon-chevron-right'></span></a></div></div>";

									break;
										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Carousel code end )>-------											
//-------------------------------------------------------------------------------------------------------------												
											
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Divider code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Divider":
											
											
var flipper;		
	if(sSelections[jcc][snglBld[jcc]][3].flip === "false"){flipper = "0deg";}
	if(sSelections[jcc][snglBld[jcc]][3].flip === "true"){flipper = "180deg";}
										
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='pnl_wdth row' style='background-color: "+sSelections[jcc][snglBld[jcc]][4].back_color+"; margin-top: "+ sSelections[jcc][snglBld[jcc]][2].top_margin +"; height:"+ sSelections[jcc][snglBld[jcc]][1].height +";'>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color: "+sSelections[jcc][snglBld[jcc]][4].back_color+"; margin-top: "+ sSelections[jcc][snglBld[jcc]][2].top_margin +"; height:"+ sSelections[jcc][snglBld[jcc]][1].height +";'>";											
											
//alert(sSelections[jcc][snglBld[jcc]][0].divider_image.length);
if(sSelections[jcc][snglBld[jcc]][0].divider_image.length !== 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img id='' style='transform: rotate("+ flipper +"); margin:-10px; overflow:hidden; width: 100%;' src='../../../jbuild_libs/images/" + sSelections[jcc][snglBld[jcc]][0].divider_image + ".png' height='"+ sSelections[jcc][snglBld[jcc]][1].height +"' alt=''/>";		
	}
											
										
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
									
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( Divider code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Audio code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "audio":
											
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+";background-color:"+sSelections[jcc][snglBld[jcc]][4].background_color+";padding:"+sSelections[jcc][snglBld[jcc]][5].Padding+"'>";
							
						switch(sSelections[jcc][snglBld[jcc]][3].Lable_Position)
							{
								case "top":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><"+sSelections[jcc][snglBld[jcc]][2].Label_Font_Size+">"+sSelections[jcc][snglBld[jcc]][1].Label+"</"+sSelections[jcc][snglBld[jcc]][2].Label_Font_Size+"></div>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<audio controls style='width:80%; margin-top: 20px;'><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][0].Audio_File + "' type='audio/mpeg'></audio>";								
								break;
									
								case "bottom":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<audio controls style='width:80%; margin-top: 20px;'><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][0].Audio_File + "' type='audio/mpeg'></audio>";
									
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><"+sSelections[jcc][snglBld[jcc]][2].Label_Font_Size+">"+sSelections[jcc][snglBld[jcc]][1].Label+"</"+sSelections[jcc][snglBld[jcc]][2].Label_Font_Size+"></div>";									
								break;	
							}
							
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
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
											
										timeline_start_array[5] = sSelections[jcc][snglBld[jcc]][5];
										timeline_start_array[6] = sSelections[jcc][snglBld[jcc]][6];
										
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='timeline' style='z-index: 4; background-color: " + timeline_start_array[3] + "; margin-top: "+ timeline_start_array[4] +"'><span class='timeline_line' style='background-color:"+timeline_start_array[5].Vertical_Line_Color+"'> </span><div style='background-color: " + timeline_start_array[2] + "; text-align: center; padding: 4px; z-index: 1; position: relative;'><h2 style='color:"+ timeline_start_array[1] +"'>" + timeline_start_array[0] + "</h2></div>";											
											
		for(var tmln = 7; tmln < sSelections[jcc][snglBld[jcc]].length; tmln++)	
				{
														//alert(sSelections[jcc][snglBld[jcc]][tmln].box_Heading);
														//alert(sSelections[jcc][snglBld[jcc]][tmln].box_Contents);
				switch(tmln % 2)
						{
							case 0:
						
								
		Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div class='timeline_container left'><span class='timeline_circle_left' style='background-color:"+timeline_start_array[5].Circle_Color+";border: "+timeline_start_array[5].Circle_Weight+" solid "+timeline_start_array[5].Circle_Outline_Color+"'> </span><span class='left_arrow' style='border-color: transparent transparent transparent "+timeline_start_array[5].Info_Back+";'> </span><div class='content' style='background-color:"+timeline_start_array[5].Info_Back+"'><h3 style='text-align:"+timeline_start_array[6].Box_Heading_alignment+"; font-weight:"+timeline_start_array[6].Box_Heading_weight+"; font-style:"+timeline_start_array[6].Box_Heading_style+";text-decoration: "+timeline_start_array[6].Box_Heading_underline+";font-size:"+timeline_start_array[6].Box_Heading_Size+";'>"+ sSelections[jcc][snglBld[jcc]][tmln].box_Heading +"</h3>");
								
						switch(sSelections[jcc][snglBld[jcc]][tmln].box_Contents.slice(-4))
							{
								case ".jpg":
										//img_loc	
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/>");
								break;

								case ".png":
										//alert("Image");
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/>");
								break;									
									
								case ".mp3":

										Jcc_Comp_Maker = (Jcc_Comp_Maker +"<audio controls style='width:80%; margin-top: 20px;'><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' type='audio/mpeg'></audio>");
									
								break;

								case ".mp4":
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<video style='margin-top: 20px' width='100%;' controls><source src='"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"' id='vid_source' type='video/mp4'></video>");
								break;	

								default: 
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<"+timeline_start_array[6].box_Contents_font_size+">"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"</"+timeline_start_array[6].box_Contents_font_size+">");
								break;
							}

				Jcc_Comp_Maker = (Jcc_Comp_Maker + "</div></div>");										
																	
							break;
										//border-color: transparent white transparent transparent;							
							case 1:

		Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div class='timeline_container right'><span class='timeline_circle_right' style='background-color:"+timeline_start_array[5].Circle_Color+";border: "+timeline_start_array[5].Circle_Weight+" solid "+timeline_start_array[5].Circle_Outline_Color+"'> </span><span class='right_arrow' style='border-color: transparent  "+timeline_start_array[5].Info_Back+" transparent transparent;'> </span><div class='content' style='background-color:"+timeline_start_array[5].Info_Back+"'><h3 style='text-align:"+timeline_start_array[6].Box_Heading_alignment+"; font-weight:"+timeline_start_array[6].Box_Heading_weight+"; font-style:"+timeline_start_array[6].Box_Heading_style+";text-decoration: "+timeline_start_array[6].Box_Heading_underline+";font-size:"+timeline_start_array[6].Box_Heading_Size+";'>"+ sSelections[jcc][snglBld[jcc]][tmln].box_Heading +"</h3>");
								
						switch(sSelections[jcc][snglBld[jcc]][tmln].box_Contents.slice(-4))
							{
								case ".jpg":
										//alert("Image");
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/>");
								break;

								case ".png":
										//alert("Image");
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/>");
								break;									
									
								case ".mp3":
									//alert("audio_loc: " + audio_loc + "/" + sSelections[jcc][snglBld[jcc]]);
										Jcc_Comp_Maker = (Jcc_Comp_Maker +"<audio controls style='width:80%; margin-top: 20px;'><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' type='audio/mpeg'></audio>");
								break;

								case ".mp4":
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<video style='margin-top: 20px' width='100%;' controls><source src='"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"' id='vid_source' type='video/mp4'></video>");
								break;	

								default:
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<"+timeline_start_array[6].box_Contents_font_size+">"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"</"+timeline_start_array[6].box_Contents_font_size+">");
								break;
							}

				Jcc_Comp_Maker = (Jcc_Comp_Maker + "</div></div>");									
							break;	
						}					
				}
											

											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";										
									
			if(timeline_start_array[5].Info_Back !== "")
					{
						//alert(timeline_start_array[5].Info_Back);
						//new_row.className = "aClassName";
						
					}
				
											
			//style='border: medium solid "+timeline_start_array[5].Info_Back+"; '
								
			//$( '#feedback_' + qan.toString() ).addClass('Feedback_Incorrect');												
											
											
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
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='spb_"+ jcc +"' class='main_bubble' style='margin-top: "+ sBubble_Text_Array[2] +"; margin-bottom: 40px;'> <div class='bubbles'><div class='balloons'>";			


										
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
//alert(sp_bbl_id[jcc]);												
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
													
											

											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='talkingheads'><img src='"+img_loc+"" + sBubble_Text_Array[0] +"' alt=''></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div>"; //	
											
											
//speech_number[jcc] = Speech_Bub_Array;
///////Speech_Bub_Array = [];
											
//alert(speech_number[jcc][1]);
										
											
//alert("Check");
										
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div></div>";											
									break;		
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Speech Bubble code end )>-------											
//-------------------------------------------------------------------------------------------------------------									

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Accordion code begin )>-------											
//-------------------------------------------------------------------------------------------------------------
//░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░											
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄		
											
									case "Accordion":		
									
									var acc_Count = 0;
//style='margin-top: 200px;'
/*											
			{"Label_Alignment":"left","Label_Color":"#ffffff","Label_Background_Color":"#0070b0"},
			// Alignment: left, right. center, justify
			
			{"Dropdown_Background_Color":"#999999;"},// background color 											
*/											
	
				acc_setup_array[0] = sSelections[jcc][snglBld[jcc]][0].Label_Alignment;	
				acc_setup_array[1] = sSelections[jcc][snglBld[jcc]][0].Label_Color;
				acc_setup_array[2] = sSelections[jcc][snglBld[jcc]][0].Label_Background_Color;
				acc_setup_array[3] = sSelections[jcc][snglBld[jcc]][1].Dropdown_Background_Color;
											
				acc_setup_array[4] = sSelections[jcc][snglBld[jcc]][0].Tab_Radius;
											
						
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top: 20px;' class='panel-group' id='jb_accordion_" + jcc + "'>";
/*											
	<div class="comp_group" align="center" id="comp_container" style="width:90%; position:relative; top:20px"> 
<!--  Accordian begin  -->  
  		<div class="panel-group" id="MD_Accordian" style="display:block;">		
*/
											for(var accm = 2; accm < sSelections[jcc][snglBld[jcc]].length; accm++)
												{
													switch(accm % 2)
														{
															case 0:
																	//alert(sSelections[jcc][snglBld[jcc]][accm].Acc_Label);
															acc_Count = (acc_Count + 1);
															
																//alert(acc_Count);
//style="background-color:red; border-radius: 10px"																
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'><a data-toggle='collapse' data-parent='#jb_accordion_" + jcc +"' href='#m_collapse_" + jcc + "_" +  acc_Count + "'>"+ sSelections[jcc][snglBld[jcc]][accm].Acc_Label +"</a></h4></div>";	
																
//border-radius:"+acc_setup_array[4]+"																
// panel-default
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='panel'><div class='panel-heading' data-toggle='collapse' data-parent='#jb_accordion_" + jcc +"' data-target='#collapse"+jcc+"_"+acc_Count+"' style='background-color:"+acc_setup_array[2]+";border-radius:"+acc_setup_array[4]+"'><h4 class='panel-title' style='color:"+acc_setup_array[1]+";text-align:"+acc_setup_array[0]+"'><a data-toggle='collapse' data-parent='#jb_accordion_" + jcc +"' href='#collapse"+jcc+"_"+acc_Count+"'><para_head>"+sSelections[jcc][snglBld[jcc]][accm].Acc_Label+"</para_head></a></h4></div>";																	
																
															break;
															
															case 1:
														
var jb_Acc_Con;																
															
switch(String(Object.keys(sSelections[jcc][snglBld[jcc]][accm])))
		{
			case "Info_Box":
				
				jcc_data = sSelections[jcc][snglBld[jcc]][accm].Info_Box;
				
	
											
					var ac_new_icon = "../../../jbuild_libs/images/" + jcc_data[7].Icon;
				
 //color:"+Info_Box_Array[1]+"
				
jb_Acc_Con = "<br><br><span style='background-color:"+jcc_data[6].Background_Color+"; outline: "+jcc_data[4].Border_Thickness+" "+jcc_data[3].Border_Style+" "+jcc_data[2].Border_Color+"; padding: 20px; display:inline-block';>";

jb_Acc_Con = jb_Acc_Con + "<img style='text-align:left; display:"+jcc_data[8].Icon_On_Off+"; width: 20px ;height:auto' src='"+ac_new_icon+ "' alt=''/>";	
	//alert(jcc_data[1].Text_Color);
jb_Acc_Con = jb_Acc_Con + "<h3 style='color:"+jcc_data[1].Text_Color+"; text-align:"+jcc_data[5].Text_Alignment+"'>"+jcc_data[0].Info_Box_Text+"</h3></span><br><br>";				
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 	
				
				
			break;

			case "Video_Files":
								jcc_data = sSelections[jcc][snglBld[jcc]][accm].Video_Files;
				
								Ac_Video_Array[0] = jcc_data[0].Video;
								Ac_Video_Array[1] = jcc_data[1].Transcript_File;
								Ac_Video_Array[2] = jcc_data[2].Expert_View;
								Ac_Video_Array[3] = jcc_data[3].top_margin;
								Ac_Video_Array[4] = jcc_data[4].back_color;			
								//Video_Array[5] =  jcc_data[5].border;	
											
								ac_pfd_Array[jcc] = Ac_Video_Array[1];		
								
								//alert(Ac_Video_Array[0]);		
											
//border: medium; border-style: solid; border-color: #000000;
									switch(String(Ac_Video_Array[2]))
										{
											case "yes":
jb_Acc_Con = "<div style='background-color:"+Ac_Video_Array[4]+"; padding: 4px; margin-top: "+Ac_Video_Array[3]+";'><div><div><img style='margin-top:4px; margin-right: 20px; position: absolute; top:"+Ac_Video_Array[3]+"; right: 0px' src='../../../jbuild_libs/images/expert_video.png' width='20%' height='auto' alt=''/><video width='100%;' controls><source src='"+Ac_Video_Array[0]+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button type='button' class='btn btn-primary btn-sm' onclick='Transcripts(ac_pfd_Array["+jcc+"]);'>Transcript</button></div></div></div>";

											break;

											case "no":
jb_Acc_Con = "<div style='background-color:"+Ac_Video_Array[4]+"; padding: 4px; margin-top: "+Ac_Video_Array[3]+";'><div><div><video width='100%;' controls><source src='"+Ac_Video_Array[0]+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button type='button' class='btn btn-primary btn-sm' onclick='Transcripts(ac_pfd_Array["+jcc+"]);'>Transcript</button></div></div></div>";										
											break;	
										}
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='z-index: 1;background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
			break;	
				
				
				
				
			case "Image_File_Only":
jcc_data = sSelections[jcc][snglBld[jcc]][accm].Image_File_Only;
				
jb_Acc_Con = "<div style='background-color:"+jcc_data[3].background_color+";padding:"+jcc_data[4].padding+"'><img style='margin-top: "+jcc_data[2].top_margin+"; width: "+jcc_data[1].width+";height:auto' src='"+img_loc+"" + jcc_data[0].image_file + "' height='100px' alt=''/></div>";						
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
			break;

			case "audio":
				//alert("audio_loc: " + audio_loc + "/" + sSelections[jcc][snglBld[jcc]]);
			jcc_data = sSelections[jcc][snglBld[jcc]][accm].audio;	
			//alert(jcc_data[5].Padding);	
		
jb_Acc_Con = "<div style='margin-top:"+jcc_data[6].top_margin+";background-color:"+jcc_data[4].background_color+";padding:"+jcc_data[5].Padding+"'>";
							
						switch(jcc_data[3].Lable_Position)
							{
								case "top":
jb_Acc_Con = jb_Acc_Con + "<div><"+jcc_data[2].Label_Font_Size+">"+jcc_data[1].Label+"</"+jcc_data[2].Label_Font_Size+"></div>";
											
jb_Acc_Con = jb_Acc_Con + "<audio controls style='width:80%; margin-top: 20px;'><source src='"+audio_loc+"" + jcc_data[0].Audio_File + "' type='audio/mpeg'></audio>";								
								break;
									
								case "bottom":
jb_Acc_Con = jb_Acc_Con + "<audio controls style='width:80%; margin-top: 20px;'><source src='"+audio_loc+"" + jcc_data[0].Audio_File + "' type='audio/mpeg'></audio>";
									
jb_Acc_Con = jb_Acc_Con + "<div><"+jcc_data[2].Label_Font_Size+">"+jcc_data[1].Label+"</"+jcc_data[2].Label_Font_Size+"></div>";									
								break;	
							}
							
jb_Acc_Con = jb_Acc_Con + "</div>";	
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 
				
				
				
				
				
				
/*				
jb_Acc_Con = "<audio controls style='width:80%; margin-top: 20px;'><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][accm].audio + "' type='audio/mpeg'></audio>";
				
Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 
*/
				
				
				
			break;				
				
			case "Divider":

					var jc_Divider = [];
				
				
				jc_Divider = sSelections[jcc][snglBld[jcc]][accm].Divider;
				
				//alert(jc_Divider[0].divider_image);

			break;					
//------------------------------------------
			case "image_w_text":
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].image_w_text;
jb_Acc_Con = "<div style='margin-top: " + jcc_data[6].top_margin + "'>";											
jb_Acc_Con = jb_Acc_Con + "<div style='background-color: " + jcc_data[7].background_color + "'>";								
			
		switch(jcc_data[1].image_position)
			{
				case "top":
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''/></div>";		

					jb_Acc_Con = jb_Acc_Con + "<div style='color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'>" + jcc_data[3].image_text + "</div>";							
				break;
					
				case "bottom":
					jb_Acc_Con = jb_Acc_Con + "<div style='color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'>" + jcc_data[3].image_text + "</div>";	
					
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''/></div>";					
				break;
					
				case "left":
					jb_Acc_Con = jb_Acc_Con + "<div style='text-align:"+jcc_data[1].image_position+"'><table class='jc_table'><tr><td><img style='border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''/></td><td style='width:10px'></td><td style='color:"+jcc_data[4].image_text_color+"; text-align: "+ jcc_data[5].image_text_alignmnet +";'>"+jcc_data[3].image_text+"</td></tr></table></div>";					
				break;
					
				case "right":
					jb_Acc_Con = jb_Acc_Con + "<div style='text-align:"+jcc_data[1].image_position+"'><table class='jc_table'><tr><td style='color:"+jcc_data[4].image_text_color+"; text-align: "+ jcc_data[5].image_text_alignmnet +";'>"+jcc_data[3].image_text+"</td><td style='width:10px'></td><td><img style='border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''/></td></tr></table></div>";					
				break;				
			}
											

jb_Acc_Con = jb_Acc_Con + "<div>";

											
jb_Acc_Con = jb_Acc_Con + "</div>";											
									
											
jb_Acc_Con = jb_Acc_Con + "</div>";												
jb_Acc_Con = jb_Acc_Con + "</div>";												
											
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 									
											
				break;					
				
//------------------------------------------				
				
			case "Heading":
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].Heading;
			
jb_Acc_Con = "<p style='color: "+ jcc_data[5].color +"; font-weight: "+ jcc_data[4].style +"; font-size: "+ jcc_data[3].size +"; border-radius: "+ jcc_data[10].border_radius +";border-weight:"+ jcc_data[8].border_weight +" ;border-style:"+ jcc_data[9].border_style +"; border-color:"+ jcc_data[7].border_color +" ;background-color: "+ jcc_data[6].background_color +" ;margin-top: "+ jcc_data[2].top_margin +"; text-align: "+ jcc_data[1].alignment +"'>"+ jcc_data[0].sngl_Heading +"</p>";					
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 			
			break;
//===========================================================================================
				
				
			case "List_text":
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].List_text;

//alert(jcc_data[2].List_Text_Size);													
//alert(jcc_data[2].Heading_Text_Size);					
				
				
jb_Acc_Con = "<div style='padding: "+ jcc_data[5].padding +"; margin-top: " + jcc_data[3].top_margin + "; background-color:"+jcc_data[4].background_color+"'>";											
				
				
jb_Acc_Con = jb_Acc_Con + "<"+ jcc_data[2].Type_of_List +"><"+jcc_data[2].Heading_Text_Size+" style='text-align: "+ jcc_data[1].align_text +"'>"+ jcc_data[0].List_Heading +"</"+jcc_data[2].Heading_Text_Size+">";	
											
							for(lst = 7; lst < jcc_data.length; lst++)
								{
				
									List_Text_Array[lst] = (jcc_data[lst].lstText);
													
jb_Acc_Con = jb_Acc_Con + "<li style='font-size:"+jcc_data[2].List_Text_Size+";color:"+ jcc_data[6].text_color +"; text-align: "+ jcc_data[1].align_text +";'>"+ List_Text_Array[lst] +"</li>";																	
													
											
								}
											
jb_Acc_Con = jb_Acc_Con + "</"+ jcc_data[2].Type_of_List +">";											
											//alert( sSelections[jcc][snglBld[jcc]][0].List_Heading );
jb_Acc_Con = jb_Acc_Con + "</div>";					

				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 			

			break;
//===========================================================================================
			case "Paragraphs":
				
//border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-weight:"+sSelections[jcc][snglBld[jcc]][0].border_weight+"; border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-radius:"+sSelections[jcc][snglBld[jcc]][0].border_radius+"				
				jcc_data = sSelections[jcc][snglBld[jcc]][accm].Paragraphs;
			
jb_Acc_Con = "<div style='margin-top:"+jcc_data[0].top_margin+" ;padding:"+jcc_data[0].Padding+"; background-color:"+jcc_data[0].background_color+";border-color:"+jcc_data[0].border_color+"; border-width:"+jcc_data[0].border_weight+"; border-style:"+jcc_data[0].border_style+"; border-radius:"+jcc_data[0].border_radius+"'>";
				
				for(var acc_para = 1; acc_para < jcc_data.length; acc_para++)
					{
						//alert(jcc_data[para].Paragraph_txt);
						if(acc_para === 1)
							{
								jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].Paragraph_Font_Size+" style='padding: 10px; text-align: "+ jcc_data[0].Paragraph_align +"'>"+ jcc_data[acc_para].Paragraph_txt +"</"+jcc_data[0].Paragraph_Font_Size+">";
							}
						else
							{
								jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].Paragraph_Font_Size+" style='padding: 10px; text-align: "+ jcc_data[0].Paragraph_align +"'>"+ jcc_data[acc_para].Paragraph_txt +"</"+jcc_data[0].Paragraph_Font_Size+">";
							}
//;border-color:"+sSelections[jcc][snglBld[jcc]][11].border_color+" border-weight:"+sSelections[jcc][snglBld[jcc]][11].border_weight+"; border-style:"+sSelections[jcc][snglBld[jcc]][11].border_style+"; border-radius:"+sSelections[jcc][snglBld[jcc]][11].border_radius+"						
						
					}
jb_Acc_Con = jb_Acc_Con + "</div>";	
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 		
		
			break;
				
			case "Question_Single_Answer":
				jcc_data = sSelections[jcc][snglBld[jcc]][accm].Question_Single_Answer;
				

				
jb_Acc_Con = "<div class='qOutline' id='sqn_" + jcc + "' style='padding: 20px; margin-top:"+jcc_data[10].top_margin+";background-color: " + jcc_data[11].background_color + " ;border-color:"+jcc_data[11].border_color+" border-weight:"+jcc_data[11].border_weight+"; border-style:"+jcc_data[11].border_style+"; border-radius:"+jcc_data[11].border_radius+" '>";
//alert(jcc_data[11].question_size);
//jcc_data[11].question_size
jb_Acc_Con = jb_Acc_Con + "<form><div><qstn_text style='color:"+jcc_data[11].text_color+"'><"+jcc_data[11].question_size+">" + jcc_data[0].question + "</"+jcc_data[11].question_size+"></qstn_text></div><div class='qStyle'>";	

QSA_Correct_Answer[jcc] = jcc_data[7].correct_answer;
QSA_Correct_Feedback[jcc] = jcc_data[8].correct_feedback;
QSA_Incorrect_Feedback[jcc] = jcc_data[9].incorrect_feedback;
				
					var AC_Question_Num_Array = []; // [[],[]];
					var ac_div_name;
				
					AC_Question_Num_Array[1] = jcc_data[1].answer_01;
					AC_Question_Num_Array[2] = jcc_data[2].answer_02;
					AC_Question_Num_Array[3] = jcc_data[3].answer_03;
					AC_Question_Num_Array[4] = jcc_data[4].answer_04;
					AC_Question_Num_Array[5] = jcc_data[5].answer_05;
					AC_Question_Num_Array[6] = jcc_data[6].answer_06;
				
				
						for(var qsa_a = 1; qsa_a < 7; qsa_a++)
								{
									if(jcc_data[qsa_a] !== "")
										{
											//Question_Num_Array[sqsa] = single_question_array[sqsa];
											//alert(Question_Num_Array[sqsa]);
											if(qsa_a === 1){ac_div_name = ("aOne_" + jcc);}
											if(qsa_a === 2){ac_div_name = ("aTwo_" + jcc);}
											if(qsa_a === 3){ac_div_name = ("aThree_" + jcc);}
											if(qsa_a === 4){ac_div_name = ("aFour_" + jcc);}
											if(qsa_a === 5){ac_div_name = ("aFive_" + jcc);}
											if(qsa_a === 6){ac_div_name = ("aSix_" + jcc);}	
				
											var ac_answer = ("answer_0" + qsa_a);
											
										
											
											//alert("jcc_data[qsa_a]ac_answer);
											jb_Acc_Con = jb_Acc_Con + "</form>";							
                jb_Acc_Con = jb_Acc_Con + "<div id='" + ac_div_name + "' class='qSpacing'><input style='cursor:pointer;' onclick='QSA_Check("+jcc+");' type='radio' name='radio' id=' " + (qsa_a) + " '><label><answer_text style='margin-left: 20px; color:"+jcc_data[11].text_color+"'>" + AC_Question_Num_Array[qsa_a]+" </answer_text></label></div>";
										}
		//<label></label>
		// style='color:"+jcc_data[11].text_color+"'
								}

jb_Acc_Con = jb_Acc_Con + "<div align='center'><div id='feedback_"+jcc+"' style='display: none; margin-top: 25px; width:90%;'></div></div>";

jb_Acc_Con = jb_Acc_Con + "</div></div>";											
										
//jb_Acc_Con = jb_Acc_Con + "</div>";					

				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
				

			break;
				
			case "Question_Multiple_Answer":
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].Question_Multiple_Answer;
				//alert("acc_Count: " + acc_Count);
					QMA_Correct_Feedback[jcc] = jcc_data[1].correct_feedback;
					QMA_Incorrect_Feedback[jcc] = jcc_data[2].incorrect_feedback;
				
				//border-color:"+sSelections[jcc][snglBld[jcc]][4].border_color+"; border-width:"+sSelections[jcc][snglBld[jcc]][4].border_weight+"; border-style:"+sSelections[jcc][snglBld[jcc]][4].border_style+"; border-radius:"+sSelections[jcc][snglBld[jcc]][4].border_radius+"
	//class='qOutline'			
	jb_Acc_Con = "<div class='row'>";										
	jb_Acc_Con = jb_Acc_Con +  "<div id='mqn_" + jcc + "' style='margin-top:"+ jcc_data[3].top_margin +"; background-color: " + jcc_data[4].background_color + ";border-color:"+jcc_data[4].border_color+"; border-width:"+jcc_data[4].border_weight+"; border-style:"+jcc_data[4].border_style+"; border-radius:"+jcc_data[4].border_radius+" '>";
	jb_Acc_Con = jb_Acc_Con + "<div style='padding:4px;'><qstn_text style='color:"+jcc_data[0].question_answer_text_color+"'><"+jcc_data[0].question_size+">" + jcc_data[0].question + "</"+jcc_data[0].question_size+"></qstn_text></div><div class='qStyle'>";				
	
	chbx_array = [];
	tf_count = 0;
	tf_array = [];				

											for(var ac_mqa = 5; ac_mqa < jcc_data.length; ac_mqa++)
												{
													if(ac_mqa !== 5){tf_count = (tf_count + 1);}
														else
													{tf_count = tf_count = 0;}
													
	jb_Acc_Con = jb_Acc_Con + "<form id='Q_" + tf_count + "_" + jcc +"' class='qSpacing'><input id='multiple_" + tf_count + "_" + jcc +"' style='cursor:pointer;' type='checkbox' name='multiple_" + tf_count +"' value='" + tf_count +'_' + jcc + "' onclick='MSub_on("+jcc+")'; />'<span style='margin-left:20px'><label><answer_text style='color:"+jcc_data[0].question_answer_text_color+"'> '" + jcc_data[ac_mqa].q_answer +"'</answer_text></label></span></form>";												
	
	tf_array.push(jcc_data[ac_mqa].true_false);												
	chbx_array.push("multiple_" + tf_count + "_" + jcc);	//mqa											
	/*											*/	
												}
				
	tf_count_array[jcc] = tf_array;										
	QMA_Checkbox_Array[jcc] = chbx_array;
											
					
											
	jb_Acc_Con = jb_Acc_Con + "<div align='center'> <button disabled id='mtl_sub_button"+jcc+"' onclick='QMA_Check("+jcc+");' class='btn btn-primary disabled bbl_btns' type='button'>Submit</button> </div>";											
	jb_Acc_Con = jb_Acc_Con + "<div id='mFeedback_" + jcc +"'></div>";											
    jb_Acc_Con = jb_Acc_Con + "</div></div>";
    jb_Acc_Con = jb_Acc_Con +  "</div>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 			
				
			break;
/*				
			case "Timeline":
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].Timeline;
					//alert(jcc_data.length);
jb_Acc_Con = "<div class='timeline' style='background-color: " + jcc_data[3].timeline_background_color + "; margin-top: "+ jcc_data[4].top_margin +"'><div style='background-color: " + jcc_data[2].timeline_heading_b_color + "; text-align: center; padding: 4px; z-index: 1; position: relative;'><h2 style='color:"+ jcc_data[1].timeline_font_heading_color +"'>" + jcc_data[0].timeline_heading + "</h2></div>";					
//-=-=-=-=-=-=-=-=->
		for(var ac_tmln = 5; ac_tmln < jcc_data.length; ac_tmln++)	
				{
					//alert(jcc_data[ac_tmln].box_Heading);
					//alert(jcc_data[ac_tmln].box_Contents);
					
					
//==================================================================================================					
switch(ac_tmln % 2)
						{
							case 0:
									
		jb_Acc_Con = jb_Acc_Con + "<div class='timeline_container left'><div class='content'><h2>"+ jcc_data[ac_tmln].box_Heading +"</h2>";
								
						switch(jcc_data[ac_tmln].box_Contents.slice(-4))
							{
								case ".jpg":
										//alert("Image");
									jb_Acc_Con = jb_Acc_Con +"<img src='"+img_loc+"" + jcc_data[ac_tmln].box_Contents + "' width='80%' height='auto' alt=''/>";
								break;

								case ".png":
										//alert("Image");
									jb_Acc_Con = jb_Acc_Con +"<img src='"+img_loc+"" + jcc_data[ac_tmln].box_Contents + "' width='80%' height='auto' alt=''/>";
								break;									
									
								case ".mp3":
										jb_Acc_Con = jb_Acc_Con +"<audio controls style='width:80%; margin-top: 20px;'><source src='"+audio_loc+"" + jcc_data[ac_tmln].box_Contents + "' type='audio/mpeg'></audio>";
									
										//jb_Acc_Con = jb_Acc_Con +"<audio controls style='width:80%; margin-top: 20px;'><source src='../../audio/" + jcc_data[ac_tmln].box_Contents + "' type='audio/mpeg'></audio>";
								break;

								case ".mp4":
										jb_Acc_Con = jb_Acc_Con + "<video style='margin-top: 20px' width='100%;' controls><source src='"+ jcc_data[ac_tmln].box_Contents +"' id='vid_source' type='video/mp4'></video>";
								break;	

								default:
										jb_Acc_Con = jb_Acc_Con + "<p>"+ jcc_data[ac_tmln].box_Contents +"</p>";
								break;
							}

				jb_Acc_Con = jb_Acc_Con + "</div></div>";										
																	
							break;
																	
							case 1:

		jb_Acc_Con = jb_Acc_Con + "<div class='timeline_container right'><div class='content'><h2>"+jcc_data[ac_tmln].box_Heading +"</h2>";
								
						switch(jcc_data[ac_tmln].box_Contents.slice(-4))
							{
								case ".jpg":
										//alert("Image");
									jb_Acc_Con = jb_Acc_Con +"<img src='"+img_loc+"" + jcc_data[ac_tmln].box_Contents + "' width='80%' height='auto' alt=''/>";
								break;

								case ".png":
										//alert("Image");
									jb_Acc_Con = jb_Acc_Con +"<img src='"+img_loc+"" + jcc_data[ac_tmln].box_Contents + "' width='80%' height='auto' alt=''/>";
								break;									
									
								case ".mp3":
									//audio_loc
										jb_Acc_Con = jb_Acc_Con +"<audio controls style='width:80%; margin-top: 20px;'><source src='"+audio_loc+"" + jcc_data[ac_tmln].box_Contents + "' type='audio/mpeg'></audio>";	
										//jb_Acc_Con = jb_Acc_Con +"<audio controls style='width:80%; margin-top: 20px;'><source src='../../audio/" + jcc_data[ac_tmln].box_Contents + "' type='audio/mpeg'></audio>";
								break;

								case ".mp4":
										jb_Acc_Con = jb_Acc_Con + "<video style='margin-top: 20px' width='100%;' controls><source src='"+ jcc_data[ac_tmln].box_Contents +"' id='vid_source' type='video/mp4'></video>";
								break;	

								default:
										jb_Acc_Con = jb_Acc_Con + "<p>"+ jcc_data[ac_tmln].box_Contents +"</p>";
								break;
							}

				jb_Acc_Con = jb_Acc_Con + "</div></div>";									
							break;	
						}					
				}					
//==================================================================================================				
				
//-=-=-=-=-=-=-=-=->				
jb_Acc_Con = jb_Acc_Con + "</div>";	
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
			break;
*/
			case "Speech_Bubbles":
									jcc_data = sSelections[jcc][snglBld[jcc]][accm].Speech_Bubbles;
				
jb_Acc_Con = "<div id='spb_"+ jcc +"' class='main_bubble' style='margin-top: "+ jcc_data[2].top_margin +"; margin-bottom: 40px;'> <div class='bubbles'><div class='balloons'>";			


										
//bbl_cur_id[ln_num] = ("spb_"+ jcc);			
//alert(bbl_cur_id[ln_num]);
											
jb_Acc_Con = jb_Acc_Con + "<div id='startBubble"+ jcc +"' class='bLeft bubble' style='display:block;'><div class='bText'><p>" + jcc_data[1].start_text + "</p></div></div>";												

							var ac_sp_bl = 0;				
							for(var ac_spb = 3; ac_spb < jcc_data.length; ac_spb++)
								{
									ac_sp_bl = (ac_sp_bl + 1);
									
									Speech_Bub_Array[ac_sp_bl] = jcc_data[ac_spb].bbl_txt;
									speech_number[jcc] = Speech_Bub_Array;

									switch(ac_sp_bl % 2)
										{
												case 0:
												

									//var bbl_cur_id = [];
ac_sp_bbl_id[jcc] = jcc + "_bbl_" + ac_sp_bl;
												
jb_Acc_Con = jb_Acc_Con + "<div id='" + ac_sp_bbl_id[jcc] +"' class='bLeft bubble' style='display:none;'><div class='bText'><p>" + Speech_Bub_Array[ac_sp_bl] + "</p></div></div>";											
												break;
												
												case 1:
ac_sp_bbl_id[jcc] = jcc + "_bbl_" + ac_sp_bl;												
jb_Acc_Con = jb_Acc_Con + "<div id='" + ac_sp_bbl_id[jcc] +"' class='bRight bubble' style='display:none;'><div class='bText'><p>" + Speech_Bub_Array[ac_sp_bl] + "</p></div></div>";												
												break;
										}

								}
											
								Speech_Bub_Array = [];


											
jb_Acc_Con = jb_Acc_Con + "<div class='talkingheads'><img src='"+img_loc+"" + jcc_data[0].talking_head_image +"' alt=''></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div>"; //	
											
											
//speech_number[jcc] = Speech_Bub_Array;
///////Speech_Bub_Array = [];
											
//alert(speech_number[jcc][1]);
										
											
//alert("Check");
										
											
jb_Acc_Con = jb_Acc_Con + "</div></div></div>";					
				
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
			break;				
		}
																
	Jcc_Comp_Maker = Jcc_Comp_Maker +  "</div>";
														
																
															break;
														}
	
												}
Jcc_Comp_Maker = Jcc_Comp_Maker +  "</div>";
									break;		
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Accordion code end )>-------											
//-------------------------------------------------------------------------------------------------------------
//░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░░▒▓▒░											
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄		
											
											
									case "jb_spacer":
							//alert(sSelections[jcc][snglBld[jcc]]);			
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background-color: red; height:"+ sSelections[jcc][snglBld[jcc]] +"'></div>";
									break;		
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with Text code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "image_w_text":

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top: " + sSelections[jcc][snglBld[jcc]][6].top_margin + "'>";											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color: " + sSelections[jcc][snglBld[jcc]][7].background_color + "'>";								
			
		switch(sSelections[jcc][snglBld[jcc]][1].image_position)
			{
				case "top":
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img style='border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''/></div>";		

					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'>" + sSelections[jcc][snglBld[jcc]][3].image_text + "</div>";							
				break;
					
				case "bottom":
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'>" + sSelections[jcc][snglBld[jcc]][3].image_text + "</div>";	
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img style='border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''/></div>";					
				break;
					
				case "left":
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_position+"'><table class='jc_table'><tr><td><img style='border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''/></td><td style='width:10px'></td><td style='color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+"; text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'>"+sSelections[jcc][snglBld[jcc]][3].image_text+"</td></tr></table></div>";					
				break;
					
				case "right":
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_position+"'><table class='jc_table'><tr><td style='color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+"; text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'>"+sSelections[jcc][snglBld[jcc]][3].image_text+"</td><td style='width:10px'></td><td><img style='border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''/></td></tr></table></div>";					
				break;				
			}
											

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
//------------------------------------------

//------------------------------------------											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
									
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
											
										
											
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
									//Heading_Text_Size		
											
											//alert(sSelections[jcc][snglBld[jcc]][2].Type_of_List);
											//alert(sSelections[jcc][snglBld[jcc]][2].Heading_Text_Size);
											
										//<li style='font-size:50px;' </li>	
											
											
											//alert(sSelections[jcc][snglBld[jcc]][2].List_Text_Size);
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding: "+ sSelections[jcc][snglBld[jcc]][5].padding +"; margin-top: " + sSelections[jcc][snglBld[jcc]][3].top_margin + "; background-color:"+sSelections[jcc][snglBld[jcc]][4].background_color+"'>";											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+ sSelections[jcc][snglBld[jcc]][2].Type_of_List +"><"+sSelections[jcc][snglBld[jcc]][2].Heading_Text_Size+" style='text-align: "+ sSelections[jcc][snglBld[jcc]][1].align_text +"'>"+ sSelections[jcc][snglBld[jcc]][0].List_Heading +"</"+sSelections[jcc][snglBld[jcc]][2].Heading_Text_Size+">";	
											
							for(lst = 7; lst < sSelections[jcc][snglBld[jcc]].length; lst++)
								{
													//String(Object.keys(LDF[0][jcc_test[ln_num]][SA_Data[jcc]]));
													//alert( String(Object.keys(sSelections[jcc][snglBld[jcc]][lst])) );
													
													//List_Array[lst] = String(Object.keys(sSelections[jcc][snglBld[jcc]][lst]));
													//alert(List_Array[lst]);
													//alert( sSelections[jcc][snglBld[jcc]][lst][List_Array[lst]] );
													
													
									List_Text_Array[lst] = (sSelections[jcc][snglBld[jcc]][lst].lstText);
									//alert(List_Text_Array[jcc]);
													
Jcc_Comp_Maker = Jcc_Comp_Maker + "<li style='font-size:"+sSelections[jcc][snglBld[jcc]][2].List_Text_Size+"; color:"+ sSelections[jcc][snglBld[jcc]][6].text_color +"; text-align: "+ sSelections[jcc][snglBld[jcc]][1].align_text +";'>"+ List_Text_Array[lst] +"</li>";																	
												
								}
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</"+ sSelections[jcc][snglBld[jcc]][2].Type_of_List +">";											
											//alert( sSelections[jcc][snglBld[jcc]][0].List_Heading );
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
											//alert("List Text finished");
											
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( List Text code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Heading":	
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+sSelections[jcc][snglBld[jcc]][3].size+"><p style='color: "+ sSelections[jcc][snglBld[jcc]][5].color +"; font-weight: "+ sSelections[jcc][snglBld[jcc]][4].style +"; border-radius: "+ sSelections[jcc][snglBld[jcc]][10].border_radius +";border-weight:"+ sSelections[jcc][snglBld[jcc]][8].border_weight +" ;border-style:"+ sSelections[jcc][snglBld[jcc]][9].border_style +"; border-color:"+ sSelections[jcc][snglBld[jcc]][7].border_color +" ;background-color: "+ sSelections[jcc][snglBld[jcc]][6].background_color +" ;margin-top: "+ sSelections[jcc][snglBld[jcc]][2].top_margin +"; text-align: "+ sSelections[jcc][snglBld[jcc]][1].alignment +"'>"+ sSelections[jcc][snglBld[jcc]][0].sngl_Heading +"</p></"+sSelections[jcc][snglBld[jcc]][3].size+">";											

											
											
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Paragraphs":		
											//alert(sSelections[jcc][snglBld[jcc]][0].Paragraph_align);
											//alert(sSelections[jcc][snglBld[jcc]][0].Paragraph_Font_Size);
											//alert(sSelections[jcc][snglBld[jcc]][0].Padding);
											//alert(sSelections[jcc][snglBld[jcc]][0].background_color);
											//alert(sSelections[jcc][snglBld[jcc]][0].top_margin);
/*											
					"border_color":"#000000",
					"border_weight":"", // thin, medium thick, or pixel size "10px"
					"border_style":"", // solid, dashed, dotted, double
					"border_radius":"", // 0px = no radius	
					
					sSelections[jcc][snglBld[jcc]][0].#######
*/
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:"+sSelections[jcc][snglBld[jcc]][0].top_margin+"; padding:"+sSelections[jcc][snglBld[jcc]][0].Padding+"; background-color:"+sSelections[jcc][snglBld[jcc]][0].background_color+";border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_weight+"; border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-radius:"+sSelections[jcc][snglBld[jcc]][0].border_radius+"'>";					
											for(var para = 1; para < sSelections[jcc][snglBld[jcc]].length; para++)
												{
													//alert(sSelections[jcc][snglBld[jcc]][para].Paragraph_txt);
Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+sSelections[jcc][snglBld[jcc]][0].Paragraph_Font_Size+" style='padding: 10px; text-align: "+ sSelections[jcc][snglBld[jcc]][0].Paragraph_align +"'>"+ sSelections[jcc][snglBld[jcc]][para].Paragraph_txt +"</"+sSelections[jcc][snglBld[jcc]][0].Paragraph_Font_Size+">";													
												}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph code end )>-------											
//-------------------------------------------------------------------------------------------------------------									
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Info box code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												

										
									case "Info_Box":
		
									Info_Box_Array[0] = sSelections[jcc][snglBld[jcc]][0].Info_Box_Text;
									Info_Box_Array[1] = sSelections[jcc][snglBld[jcc]][1].Text_Color;		
									Info_Box_Array[2] = sSelections[jcc][snglBld[jcc]][2].Border_Color;
									Info_Box_Array[3] = sSelections[jcc][snglBld[jcc]][3].Border_Style;
									Info_Box_Array[4] = sSelections[jcc][snglBld[jcc]][4].Border_Thickness;
									Info_Box_Array[5] = sSelections[jcc][snglBld[jcc]][5].Text_Alignment;
									Info_Box_Array[6] = sSelections[jcc][snglBld[jcc]][6].Background_Color;
									Info_Box_Array[7] = sSelections[jcc][snglBld[jcc]][7].Icon;
									Info_Box_Array[8] = sSelections[jcc][snglBld[jcc]][8].Icon_On_Off;		
									//Info_Box_Array[9] = sSelections[jcc][snglBld[jcc]][9].Icon_Position;
						
											
					var new_icon = "../../../jbuild_libs/images/" + Info_Box_Array[7];
//onclick="location.href='#';" style="cursor: pointer;"											
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='info_box_event();' style='cursor: pointer;'>";											

						//alert(sSelections[jcc][snglBld[jcc]][9].selectable); //pop_up_text
											
if(sSelections[jcc][snglBld[jcc]][9].selectable === "true")
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<br><br><span onclick='info_box_event("+jcc+");' style='cursor: pointer; background-color:"+Info_Box_Array[6]+"; outline: "+Info_Box_Array[4]+" "+Info_Box_Array[3]+" "+Info_Box_Array[2]+"; padding: 20px; display:inline-block';>";
	}
		else
			
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<br><br><span style='background-color:"+Info_Box_Array[6]+"; outline: "+Info_Box_Array[4]+" "+Info_Box_Array[3]+" "+Info_Box_Array[2]+"; padding: 20px; display:inline-block';>";
	}
											
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='text-align:left; display:"+Info_Box_Array[8]+"; width: 20px ;height:auto' src='"+new_icon+ "' alt=''/><h3 style='color:"+Info_Box_Array[1]+";text-align:"+Info_Box_Array[5]+"'>" + Info_Box_Array[0] +"</h3></span><br><br>";
											
//-------<(  Modal Box )>-------										
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='modal fade' id='myModal_"+jcc+"' role='dialog'><div class='modal-dialog'>";
	//pop_up_title
	
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='modal-content'>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='modal-header' style='background-color:"+sSelections[jcc][snglBld[jcc]][9].Header_color+"'>";
	//Jcc_Comp_Maker = Jcc_Comp_Maker + "<button type='button' class='close' data-dismiss='modal'>&times;</button>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='modal-title' style='color:"+sSelections[jcc][snglBld[jcc]][9].title_text_color+"; font-size:"+sSelections[jcc][snglBld[jcc]][9].title_text_size+"'>"+sSelections[jcc][snglBld[jcc]][9].title_text+"</p>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='modal-body' style='background-color:"+sSelections[jcc][snglBld[jcc]][9].Body_color+"'>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='color:"+sSelections[jcc][snglBld[jcc]][9].body_text_color+";font-size:"+sSelections[jcc][snglBld[jcc]][9].body_text_size+"'>"+sSelections[jcc][snglBld[jcc]][9].body_text+"</p>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='modal-footer' style='background-color:"+sSelections[jcc][snglBld[jcc]][9].Footer_color+"'>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
	
	
	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";
//-------<(  Modal Box )>-------											
											
// sSelections[jcc][snglBld[jcc]][9].blank											
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<br><br><span class='fa fa-info-circle' style='background-color:"+Info_Box_Array[5]+"; outline: "+Info_Box_Array[3]+" "+Info_Box_Array[2]+" "+Info_Box_Array[1]+"; padding: 20px; display:inline-block';><h2>" + Info_Box_Array[0] +"</h2></span><br><br>";	
/*											
		//------------------------------------------------------------------------		

			"link":"",											
*/											
											
									break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( Info box code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image only code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Image_File_Only":
							
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top: "+sSelections[jcc][snglBld[jcc]][2].top_margin+"; background-color:"+sSelections[jcc][snglBld[jcc]][3].background_color+";padding:"+sSelections[jcc][snglBld[jcc]][4].padding+"'><img style='width: "+sSelections[jcc][snglBld[jcc]][1].width+";height:auto' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_file + "' height='100px' alt=''/></div>";
											
				
						//alert(sSelections[jcc][snglBld[jcc]][0].image_file);					
											
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
					
					//QMA_Feedback[jcc]
					
						$( '#feedback_' + qan.toString() ).addClass('Feedback_Correct');
						$('#sqn_' + qan.toString()).addClass('bluescrn');	
								
				}
	
			//alert("event.target.id: " + event.target.id + ": correct_single_answer: " + correct_single_answer);
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
//║ -------<( Multi Answer choice question begin )>-------                                          ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝


var Check_Test_Array = [];
function QMA_Check(qma_a) // 2 4 6
{

var Incorrect_answer_count = 0;	
		for(var qma_ck = 0; qma_ck < QMA_Checkbox_Array[qma_a].length; qma_ck++)
		{
		
			if(document.getElementById(QMA_Checkbox_Array[qma_a][qma_ck]).checked === true && tf_count_array[qma_a][qma_ck] === "true")	
				{
					$('#Q_' + qma_ck.toString() + "_" + qma_a.toString()).addClass('sqCorrect');
				}
		
			if(document.getElementById(QMA_Checkbox_Array[qma_a][qma_ck]).checked === true && tf_count_array[qma_a][qma_ck] === "false")	
				{
					$('#Q_' + qma_ck.toString() + "_" + qma_a.toString()).addClass('sqIncorrect');
					
					Incorrect_answer_count = (Incorrect_answer_count + 1);
					
					
				}			
			
			if(document.getElementById(QMA_Checkbox_Array[qma_a][qma_ck]).checked === false && tf_count_array[qma_a][qma_ck] === "true")	
				{
					$('#Q_' + qma_ck.toString() + "_" + qma_a.toString()).addClass('sqCorrectNS');
					Incorrect_answer_count = (Incorrect_answer_count + 1);
				}		
		
		}
	if(Incorrect_answer_count > 0)
			{
					$('#mFeedback_' + qma_a.toString()).addClass('Feedback_Incorrect');
					document.getElementById("mFeedback_" + qma_a.toString()).innerText = QMA_Incorrect_Feedback[qma_a];
			}
				else
			{
					$('#mFeedback_' + qma_a.toString()).addClass('Feedback_Correct');
					document.getElementById("mFeedback_" + qma_a.toString()).innerText = QMA_Correct_Feedback[qma_a];			
			}
		
	document.getElementById("mtl_sub_button" + qma_a).disabled = true;
	$( '#mtl_sub_button' + qma_a.toString()).addClass('disabled');
	$( '#mtl_sub_button' + qma_a.toString()).removeClass('active');	

}



function MSub_on(ccbx)
{
	document.getElementById("mtl_sub_button" + ccbx).disabled = false;
	
	$( '#mtl_sub_button' + ccbx.toString()).removeClass('disabled');
	$( '#mtl_sub_button' + ccbx.toString()).addClass('active');

}

//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Multi Answer choice question end )>-------                                            ║
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
			//alert("Start: " + "bb_cur: " + bb_cur);
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
			//alert("Next");
				document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "none";
				bid_Count = (bid_Count + 1);
				document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "block";

				if(bid_Count === (speech_number[bb_cur].length - 1))
						{
							document.getElementById("bub_next_button" + bb_cur).innerText = "Replay";
						}
		break;
			
		case "Replay":
			//alert("Replay");
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