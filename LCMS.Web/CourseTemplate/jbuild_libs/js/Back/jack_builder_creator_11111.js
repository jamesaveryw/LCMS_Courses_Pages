var toc_list;
var toc_filename_Array = [];
var toc_whole;
var toc_cur_module;
var jcc_Comp_Creator;
var jcc_TOC_Creator;
var jcc_test;
var hrData;
var cmpData;
var Hero_Image_Size;
var img_loc;
var audio_loc;
var pdf_loc;
var pfd_Array = [[],[]];
var ac_pfd_Array = [[],[]];
var Jcc_Comp_Maker;

var snglBld = [];

var Jcc_qText_Mover = [];
var Jcc_qImage_Mover =[];

var Course_Number_Val;
var Module_Number_Val;
var toc_names;
var Video_Array = [];
var Ac_Video_Array = [];
var im_rnbr;
var lst_car_Array = [];
var old_caro;
var Info_Box_Array = [];
var timeline_start_array = [];

var sBubble_Text_Array = [];
var Speech_Bub_Array = [];
var speech_number = [[],[]];											
var sp_bbl_id = [[],[]];											
var bbl_cur_id = [];
var ac_sp_bbl_id = [[],[]];

var List_Text_Num;
var List_Text_Array = [];	
var lst;

var TOC_File_Order_Array = [];


var QC_Multi_Array = [];
var remediation_Paragraph;
var qComp_sub_Array = [];
var Question_Type_Array = [];
var Question_Total_Array = [];
var QC_Multi_Array_TF = [[],[]];
var chClass;
var MC_Answer_Array = [];
var tf_new_array = [];

var acc_setup_array = [];
var jcc_data = [];
var csa_answer = [];

var elementExists;

var tbl_hd = [];
var tbl_id;
var tbl_head_color;
var tbl_top_data_color;
var tbl_even_color;
var tbl_odd_color;
var tbl_col_ol = [];
var tbl_row_ol = [];



function Component_Engine(ceData)
{
	jcc_Comp_Creator = $("<div id='Hero_Image_File' class='col-lg-12 col-md-12 col-xs-12 panel-group' style='width:100%'>");
	
	
	$(jcc_Comp_Creator).append("<div>" + ceData + "</div>");
	
	
	$(jcc_Comp_Creator).append("</div>");
	$("#JcComponents").append(jcc_Comp_Creator);
	
	jcc_Comp_Creator = "";
//alert(Question_Total_Array.length);
	for(var tqstn = 0; tqstn < Question_Total_Array.length; tqstn++)
		{
			
			//Question_Comp
			
			//alert(snglBld[tqstn]);
			
			
			if(snglBld[tqstn] === "Question_Comp")
				{
					
					if(typeof Question_Total_Array[tqstn] === 'undefined')
						{
									document.getElementById("qold_"+ tqstn).style.display = "block";
									document.getElementById("qnew_"+ tqstn).style.display = "none";				
									document.getElementById("qold_"+ tqstn).innerHTML = Jcc_qText_Mover[tqstn];		
						}

					switch(Question_Total_Array[tqstn])
						{
							case "left":
									document.getElementById("qold_"+ tqstn).style.display = "none";
									document.getElementById("qnew_"+ tqstn).style.display = "block";
									
									document.getElementById("qright_"+ tqstn).innerHTML = Jcc_qText_Mover[tqstn];
									document.getElementById("qleft_"+ tqstn).innerHTML = Jcc_qImage_Mover[tqstn];
									
								//Jcc_qImage_Mover[jcc]
							break;
								
							case "right":
									document.getElementById("qold_"+ tqstn).style.display = "none";
									document.getElementById("qnew_"+ tqstn).style.display = "block";									
									
									document.getElementById("qleft_"+ tqstn).innerHTML = Jcc_qText_Mover[tqstn];
									document.getElementById("qright_"+ tqstn).innerHTML = Jcc_qImage_Mover[tqstn];
								
								
							break;
								
							case "none":
									document.getElementById("qold_"+ tqstn).style.display = "block";
									document.getElementById("qnew_"+ tqstn).style.display = "none";				
									document.getElementById("qold_"+ tqstn).innerHTML = Jcc_qText_Mover[tqstn];	
							break;

						}

				}
			
			
			

			
			

	
		}
	
	

}



function TOC_Engine()
{
	//alert("TOC_Engine called"); ////toc_slide
	////var elementExists = document.getElementById("toc_slide");

	//alert(typeof toc_list);

	
	if(typeof toc_list === "undefined")
		{
			document.getElementById("toc_slide").style.display = "none";
		}
	
	
	
	elementExists = document.getElementById("toc_slide");
	//alert("tester: " + elementExists);
	
	if(elementExists !== null)
		{	

	jcc_TOC_Creator = $("<div><a href='javascript:void(0)' class='closebtn' onclick='closeToc()'>&times;</a>");

		for(var toc_lister = 0; toc_lister < toc_list.length; toc_lister++) 
			{
				//alert(toc_list[toc_lister].lesson_name);
				//toc_filename_Array
				//alert("toc_filename_Array[toc_lister]: " + toc_filename_Array[toc_lister]); // next_lesson
				
				//toc_filename_Array
				
				
				//"+toc_list[toc_lister].Page_File_Name+"
				
				//This one is being called right now.
				$(jcc_TOC_Creator).append("<a href='javascript:closeToc1_mobile()' onclick='lessonJump("+toc_lister+")' style='font-size: 14px; border-bottom: 1px solid #666666;'>"+ toc_list[toc_lister].lesson_name +"</a>");
				
				//$(jcc_TOC_Creator).append("<a href='javascript:closeToc1_mobile()' onclick='lessonJump("+toc_lister+")' style='font-size: 14px; border-bottom: 1px solid #666666;'>"+ toc_list[toc_lister].lesson_name +"</a>");
				
				
			}
	
			
		//alert("toc_order_Array.length: " + toc_order_Array.length);	
			
	//$(jcc_TOC_Creator).append("<a href='javascript:closeToc1_mobile()'>About</a>");
	//$(jcc_TOC_Creator).append("<a href='#'>Services</a>");
	//$(jcc_TOC_Creator).append("<a href='#'>Contact</a>");
	$(jcc_TOC_Creator).append("</div>");
	
		
	
	$("#tocNav").append(jcc_TOC_Creator);
	
	jcc_TOC_Creator = "";
			}
	
	
	/*  May need later
	if(elementExists === null)
		{

			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><ul id='buttons' class='list-unstyled main-menu' style='list-style-type:none; font-size:20px;'>";
			
			for(var toc_sheet = 0; toc_sheet < toc_list.length; toc_sheet++)
				{
					//alert( toc_list[toc_sheet].lesson_name );
					//alert( toc_list[toc_sheet].Order );
					//"+toc_list[toc_sheet].Order+"
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<li onclick='lessonJump("+toc_sheet+")'><l3>"+ toc_list[toc_sheet].lesson_name +"</l3></li>";
	
				}

			Jcc_Comp_Maker = Jcc_Comp_Maker + "</ul></div>";
			
			Component_Engine(Jcc_Comp_Maker);
	
		}
	*/
	
}




function info_box_event(ibe)
{
	$('#myModal_'+ ibe).modal('show');
	
}





function Table_of_Contents(TC_Info)
{
	toc_whole = ((TC_Info[0].Module_number));
	
	////alert(toc_whole.mod_num); // Works

	toc_cur_module = toc_whole.mod_num;
	
	//"mod_num":"LOMA_302_M3_L1",
	
	//alert(toc_cur_module.length);
	
	//alert("TOC Testing: " +  toc_cur_module.slice(0,toc_cur_module.indexOf("_M")).length );
	
	
	toc_list = (TC_Info[0].TOC);
/*
	for(var jcc_toc = 0; jcc_toc < toc_list.length; jcc_toc++)
		{
			//\\alert(toc_list[jcc_toc].lesson_name);
			//alert("toc_order: " + toc_list[jcc_toc].Order);
	
			TOC_File_Order_Array[jcc_toc] = toc_list[jcc_toc].Order;
		}
*/
	
}




function Lesson_Data_File(LDF)
{

		jcc_test = Object.keys(LDF[0]); // Lesson_Data_File main Keys:
		hrData = Object.keys(LDF[0][jcc_test[0]]); // Page_Setup

	//alert(hrData);
	
	cmpData = Object.keys(LDF[0][jcc_test[1]]);

	
for(var ln_num = 0; ln_num < Object.keys(LDF[0]).length; ln_num++)
		{

	switch(jcc_test[ln_num])
		{
			case "Page_Setup":
						
						for(var pps = 0; pps < hrData.length; pps++)
								{

									switch(hrData[pps])
										{
											case "Assets_folder":

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
												
												//alert("typeof toc_list: " + typeof toc_list);
												document.getElementById("Page_Title").innerHTML = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
												if(typeof toc_list !== "undefined")
													{
														//alert("Ready for TOC");
														///////document.getElementById("Page_Title").innerHTML = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
														//document.getElementById("Page_Title").innerHTML = (toc_whole.mod_num);
													} 
														else
													{
														//alert("Not Ready for TOC");
														
													}
												
												/*
												elementExists = document.getElementById("toc_slide");
													
													if(elementExists === null)
														{
															
															document.getElementById("Page_Title").innerHTML = (toc_whole.mod_num);
														}
													
													if(elementExists !== null)
														{
															document.getElementById("Page_Title").innerHTML = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
														}	
												*/  	

												
												
											break;
											case "Page_Title":
												document.getElementById("Lesson_Page_title").innerHTML = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
												
											case "Progress_Bar_Color":
												document.getElementById("prg_Bar").style.backgroundColor = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
											case "Progress_Bar_Height":
												document.getElementById("prg_Bar").style.height = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
																
											case "heroSize":
												Hero_Image_Size = ((LDF[0][jcc_test[ln_num]][hrData[pps]]));
													
												if(LDF[0][jcc_test[ln_num]][hrData[pps + 1]].length > 0)
																{
Component_Engine("<img src='"+img_loc+"" + LDF[0][jcc_test[ln_num]][hrData[pps + 1]] + "' alt='' style='width: " + Hero_Image_Size + "; height: " + Hero_Image_Size + "'>");			
																}
												
											break;	
											
											case "page_color":
												document.getElementById("Page_Body").style.backgroundColor = LDF[0][jcc_test[ln_num]][hrData[pps]];
											break;
												
											case "Course_Number":
												Course_Number_Val = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
												
											case "Module_Number":
												Module_Number_Val = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;	
		
										}
								}	
						
				break;	
		
				
				case "JBuilder_Content":
	
Jcc_Comp_Maker = "<div id='jack_builder' class='col-lg-12 col-md-12 col-xs-12'>";					
				
						var SA_Data = Object.keys(LDF[0][jcc_test[ln_num]]);

						var sSelections = [];
							
						
						///////var snglBld = [];

					
						for(var jcc = 0; jcc < SA_Data.length; jcc++)
							{
								sSelections[jcc] = LDF[0][jcc_test[ln_num]][SA_Data[jcc]];
								snglBld[jcc] = String(Object.keys(LDF[0][jcc_test[ln_num]][SA_Data[jcc]]));
								
								switch(snglBld[jcc])
									{
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄												
//-------------------------------------------------------------------------------------------------------------	
//-------<( Code For Stand Alone Components begin )>-------										
//-------------------------------------------------------------------------------------------------------------												
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	

						case "Contents":
								//alert("toc_list.length: " + toc_list.length);
											
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:500px; background-color:gray'>";		
								
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<ul id='buttons' class='list-unstyled main-menu' style='list-style-type:none'>";
									
								//lesson_name			
									
									for(var ctns = 0; ctns < toc_list.length; ctns++)		
											{
												//alert(toc_list[ctns].Page_File_Name);
												toc_filename_Array[ctns] = toc_list[ctns].Page_File_Name;
												
												Jcc_Comp_Maker = Jcc_Comp_Maker + "<li onClick='javascript:Page_Selection("+ctns+")'>"+toc_list[ctns].lesson_name+"</li>";
												
											}
									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<li>1</li>";	
									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<li>2</li>";	
									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<li>3</li>";	
									//Jcc_Comp_Maker = Jcc_Comp_Maker + "<li>4</li>";	
											
								Jcc_Comp_Maker = Jcc_Comp_Maker + "</ul>";			
											
								Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";			
						break;					



//-------------------------------------------------------------------------------------------------------------	
//-------<( Table_Builder code begin )>-------	SA									
//-------------------------------------------------------------------------------------------------------------										
											
									case "Table_Builder":
											tbl_id = "table_" + jcc;
											var new_tbl	= sSelections[jcc][snglBld[jcc]]; 
											
											for(var tol = 0; tol < sSelections[jcc][snglBld[jcc]][0].Outlines.length; tol++)
												{
													
													switch( String(Object.keys(sSelections[jcc][snglBld[jcc]][0].Outlines[tol])) )
														{
																
															case "col_outline":
																tbl_col_ol = sSelections[jcc][snglBld[jcc]][0].Outlines[tol].col_outline;
															break;
																
															case "row_outline":
																tbl_row_ol = sSelections[jcc][snglBld[jcc]][0].Outlines[tol].row_outline;
															break;	
																
														}
	
													
												}

										
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+new_tbl[0].top_margin+";border-style:"+new_tbl[0].Table_Border_Style+"; border-width: "+new_tbl[0].Table_Border_width+"; border-color:"+new_tbl[0].Table_Border_color+"; border-radius:"+new_tbl[0].Table_Border_radius+"; padding:"+new_tbl[0].Table_Border_padding+"; background-color:"+new_tbl[0].Table_Color+";'>";
											//text-align:"+new_tbl[0].caption_alignment+"
											//alert(new_tbl[0].caption_alignment);
												if(new_tbl[0].caption.length > 0)
												{
			//<caption style="text-align: left;">caption</caption>
							
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<caption style='align:"+new_tbl[0].caption_alignment+";'><"+new_tbl[0].caption_font+" style='color:"+new_tbl[0].caption_color+";font-style:"+new_tbl[0].caption_style+";font-weight:"+new_tbl[0].caption_weight+"align:"+new_tbl[0].caption_alignment+"'>"+ new_tbl[0].caption +"</"+new_tbl[0].caption_font+"></caption>";
												}

											for(var tbl_num = 1; tbl_num < new_tbl.length; tbl_num++)
													{
														switch(tbl_num)
															{
																case 1: 
																	
												
												tbl_top_data_color = sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data_Top_Color;					
												tbl_even_color = sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data_Background_Color_Even;
												tbl_odd_color = sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data_Background_Color_Odd;
				
														
										if(sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading_Background_Color !== "")
												{
													
													tbl_head_color = sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading_Background_Color;
												}
																	
																	
																	
																	
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<table id='table_"+jcc+"' style='width:100%; border-collapse: collapse;'><thead style='background-color:"+tbl_head_color+"'><tr>";
															
																	
																	
																	
																	
																	for(var thd = 0; thd < sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading.length; thd++)
																		{
															
																			
															if(typeof sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].colNumber === 'undefined')				{
																//Table_Heading_Height
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<th style='height:"+new_tbl[1].Table_Heading_Height+"'>"+ sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].tbl_column +"</th>";	
																
																}
																			
																			
															if(typeof sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].colNumber !== 'undefined')				{
																
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<th colspan='"+sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].colNumber+"'>"+ sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].tbl_column +"</th>";	
																
																}
																			

																		}
																	
															Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr></thead>";		

	
																break;
			
																
																default:

																	Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";
																	for(var trw = 0; trw < sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data.length; trw++)
																		{
																			
																			if(tbl_num % 2 === 0)
																				{
															switch(tbl_num)
																{
																	case 2:
																	if(tbl_top_data_color !== "")
																		{
												
																			
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='background-color:"+tbl_top_data_color+"'>"+ sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].tbl_column +"</td>";
																			
																			
																			
																		}
																	if(tbl_top_data_color === "")
																		{
																			Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='background-color:"+tbl_even_color+"'>"+ sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].tbl_column +"</td>";
																		}																		
																	break;
																		
																	default:
																		Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='background-color:"+tbl_even_color+"'>"+ sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].tbl_column +"</td>";
																		
																	break;	
																		
																}
																								
																				}
																			
																			if(tbl_num % 2 === 1)
																				{
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='background-color:"+tbl_odd_color+"'>"+ sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].tbl_column +"</td>";
																				}
																			
																			
																		}
																	Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";		
																break;
															}
														
													}
				
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</table>";
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='xtra_"+ jcc +"'></div>";
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Table_Builder code begin )>-------	SA									
//-------------------------------------------------------------------------------------------------------------									
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Video New code begin )>-------	SA									
//-------------------------------------------------------------------------------------------------------------												
									case "Video_Files_New":
											
				var new_vid	= sSelections[jcc][snglBld[jcc]][0];

											
									
											
					switch(new_vid.Expert_View)
						{
							case "yes":
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='video_container' style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><img class='expert_img_pos' style=' position: absolute; top:"+new_vid.top_margin+"; right: 0px' src='../../../jbuild_libs/images/expert_video.png' width='20%' height='auto' alt=''/><video width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><img id='xprtv' style='position: absolute; top:"+new_vid.top_margin+"; right: 12px' src='../../../jbuild_libs/images/expert_video.png' alt=''>";								
								
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><video width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";// </div>								

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";								
							break;
								
							case "no":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><video width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";// </div>
							
							break;	
						}
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='trans_" + jcc +"' style='display: none; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";									
					for(var trn = 1; trn < sSelections[jcc][snglBld[jcc]].length; trn++)
						{
							if(new_vid.Person_underline === "u")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+"><u>"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</u></"+new_vid.Person_font+"></p>";										
								}

							if(new_vid.Person_underline === "")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</"+new_vid.Person_font+"></p>";										
								}							
				
							
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+new_vid.Transcript_Text_align+"; color:"+new_vid.Transcript_Text_color+"'><"+new_vid.Transcript_Text_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Transcript_Text +"</"+new_vid.Transcript_Text_font+"></p>";
						}						

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
											
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( Video New code end )>-------											
//-------------------------------------------------------------------------------------------------------------											

											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image 3 2 1 rows code begin SA )>-------											
//-------------------------------------------------------------------------------------------------------------											
									case "Image_Multi":
					var Image_Multi	= sSelections[jcc][snglBld[jcc]]; //[0]
								
		switch(Image_Multi[0].total_images)
			{
				case "1":
						im_rnbr = 12;
				break;
					
				case "2":
						im_rnbr = 6;
				break;
					
				case "3":
						im_rnbr = 4;
				break;					
			}
			
				if(Image_Multi[0].total_images === "" || Image_Multi[0].total_images > 3 || Image_Multi[0].total_images === "0")
					{
						alert("Bad Data!");
						break;
					}
								//alert(Image_Multi[0].top_margin);			
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+Image_Multi[0].top_margin+";height: 100%; background-color:"+Image_Multi[0].main_background_color+"; padding-bottom: 10px;'>";
		
	//For testing Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img src='"+img_loc+"" + Image_Multi[1].image_file + "' alt=''></div>";									
											
			for(var im_ttl = 1; im_ttl <= Image_Multi[0].total_images; im_ttl++)  //Image_Multi[im_ttl].image_border_width
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-"+im_rnbr+" col-md-"+im_rnbr+" col-xs-12'>";
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='width:"+Image_Multi[im_ttl].image_width+"; margin-top: "+Image_Multi[im_ttl].image_top_margin+"; border-style: "+Image_Multi[im_ttl].image_border_style+"; border-color: "+Image_Multi[im_ttl].image_border_color+"; border-width: "+Image_Multi[im_ttl].image_border_width+"; border-radius: "+Image_Multi[im_ttl].image_border_radius+"' src='"+img_loc+"" + Image_Multi[im_ttl].image_file + "' alt=''>";
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

				}
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
											
											
									break;	
										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image 3 2 1 rows code end )>-------											
//-------------------------------------------------------------------------------------------------------------																						
//-------------------------------------------------------------------------------------------------------------	
//-------<( Flip 3 2 1 rows code begin SA )>-------											
//-------------------------------------------------------------------------------------------------------------											
									case "Flip_Multi": //Flip_Multi
					var Flip_Multi_data	= sSelections[jcc].Flip_Multi;
						
		switch(Flip_Multi_data[0].total_flip_cards)
			{
				case "1":
						im_rnbr = 12;
				break;
					
				case "2":
						im_rnbr = 6;
				break;
					
				case "3":
						im_rnbr = 4;
				break;					
			}
	
if(Flip_Multi_data[0].total_flip_cards === "" || Flip_Multi_data[0].total_flip_cards > 3 || Flip_Multi_data[0].total_flip_cards === "0")
					{
						alert("Bad Data!");
						break;
					}
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+Flip_Multi_data[0].top_margin+"; background-color:"+Flip_Multi_data[0].main_background_color+";'>"; // padding-bottom: 20px; 
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
											
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+Flip_Multi_data[0].top_margin+";height: 100%; background-color:"+Flip_Multi_data[0].main_background_color+";'>"; // padding-bottom: 10px;
												
			for(var flp_ttl = 1; flp_ttl <= Flip_Multi_data[0].total_flip_cards; flp_ttl++)  //Image_Multi[im_ttl].image_border_width
				{
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-"+im_rnbr+" col-md-"+im_rnbr+" col-xs-12' style='background-color:"+Flip_Multi_data[flp_ttl].background_color+";'>";
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+Flip_Multi_data[flp_ttl].Label_Text_alignment+"; margin-top:"+Flip_Multi_data[flp_ttl].top_margin+"'><"+Flip_Multi_data[flp_ttl].Label_Font_Size+">"+Flip_Multi_data[flp_ttl].Label_Text+"</"+Flip_Multi_data[flp_ttl].Label_Font_Size+"></div>";
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<br>";
//-------------------------------------------------------------------------------------------------------------------------------------	
//-------<( Flip card code begin )>-------
//-------------------------------------------------------------------------------------------------------------------------------------						

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='flip' style='height:"+Flip_Multi_data[0].flip_box_height+"'>";	//flip card start
					
//-------------------------------------------------------------------------------------------------------------------------------------					
// front card begin
//-------------------------------------------------------------------------------------------------------------------------------------					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='frnt_"+jcc+"_"+flp_ttl+"' class='front alert alert-info flip_container card' style='cursor:pointer;width:100%;'>";
	
					if(Flip_Multi_data[flp_ttl].Front_Image.length > 0)
						{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:10px;'><img style='border-radius:"+Flip_Multi_data[flp_ttl].Front_Image_Radius+"; width: "+Flip_Multi_data[flp_ttl].Front_Image_width+"' src='"+img_loc+"" + Flip_Multi_data[flp_ttl].Front_Image + "' alt='' />";							
						}
					else
						{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:10px;'>";							
						}
					

					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+Flip_Multi_data[flp_ttl].Front_Text_alignment+"'><"+Flip_Multi_data[flp_ttl].Front_Text_Size+">"+Flip_Multi_data[flp_ttl].Front_Text+"</"+Flip_Multi_data[flp_ttl].Front_Text_Size+"></p></div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; 
//----------------------------------------------------------------------------------------------------------------------------------
// front card end						
//----------------------------------------------------------------------------------------------------------------------------------	
				
					
//----------------------------------------------------------------------------------------------------------------------------------					
// back card begin
//----------------------------------------------------------------------------------------------------------------------------------					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back card alert alert-info' style='width:100%; height:auto'>";

					
	if(Flip_Multi_data[flp_ttl].Back_Image.length > 0)				
					{
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:10px;'><img style='cursor:pointer;style='border-radius:"+Flip_Multi_data[flp_ttl].Front_Image_Radius+"; width: "+Flip_Multi_data[flp_ttl].Back_Image_width+"' src='"+img_loc+"" + Flip_Multi_data[flp_ttl].Back_Image + "' alt='' />";					
					}
			else
					{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:10px;'>";					
					}
					
					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+Flip_Multi_data[flp_ttl].Back_Text_alignment+"'><"+Flip_Multi_data[flp_ttl].Back_Text_Size+">"+Flip_Multi_data[flp_ttl].Back_Text+"</"+Flip_Multi_data[flp_ttl].Back_Text_Size+"></p></div>";											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; 
//----------------------------------------------------------------------------------------------------------------------------------
// back card end
//----------------------------------------------------------------------------------------------------------------------------------	
					
//----------------------------------------------------------------------------------------------------------------------------------
//-------<( Flip card code end )>-------			
//----------------------------------------------------------------------------------------------------------------------------------					
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
					
//-------<( Flip card code end )>-------

					Jcc_Comp_Maker = Jcc_Comp_Maker + "<br>";	
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+Flip_Multi_data[flp_ttl].Bottom_Text_alignment+";'><"+Flip_Multi_data[flp_ttl].Bottom_Text_Size+">"+Flip_Multi_data[flp_ttl].Bottom_Text+"</"+Flip_Multi_data[flp_ttl].Bottom_Text_Size+"></div>";	
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

				}
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
								
									break;	
										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Flip 3 2 1 rows code end )>-------											
//-------------------------------------------------------------------------------------------------------------												
											
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( New Question Comp code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
						case "Question_Comp":
										
							var qComp = sSelections[jcc][snglBld[jcc]];
							tf_new_array = [];
							Question_Type_Array[jcc] = qComp[0].Question_type;	
					
				//alert("snglBld[jcc]: jcc= " + jcc + " : " + snglBld[jcc]);							
											
											
					if(snglBld[jcc] === "Question_Comp")
						{
							Question_Total_Array[jcc] = qComp[0].extra_image_placement;
						}
							
//-------< Start >
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='sqn_" + jcc + "' style='padding: 20px; margin-top:"+qComp[0].top_margin+";background-color: " + qComp[0].background_color + "; border-color:"+qComp[0].border_color+"; border-width:"+qComp[0].border_weight+"; border-style:"+qComp[0].border_style+"; border-radius:"+qComp[0].border_radius+" '>";
											
//-------< What do you think / Let's Review >
if(qComp[0].image.length > 0)
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img class='qstImg' src='../../../jbuild_libs/images/" + qComp[0].image + "' alt=''/><br><br></div>";
	}											
											
											
//-------< Paragraph Top Begin >
		for(var qPara = 0; qPara < qComp[1].paragraph_top_text.length; qPara++)
			{
				if(qComp[1].paragraph_top_text[qPara].paragraph_top.length !== 0)
					{
						//alert("No Zero");
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+qComp[2].qList[0].align_text+"'><jb1>"+qComp[1].paragraph_top_text[qPara].paragraph_top+"</jb1></div>";
						//qpara_text
						
						if( (qPara + 1)  !== qComp[1].paragraph_top_text.length)
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<br>";
							}
						
						
					}
			}											
//-------< Paragraph Top Begin >										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='qold_"+jcc+"' class='col-lg-12 col-md-12 col-xs-12' style='display: block; height: auto'></div>";
											
											
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='qnew_"+jcc+"' class='col-lg-12 col-md-12 col-xs-12' style='display: none; height: auto'>";

											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='qleft_"+jcc+"' class='col-lg-6 col-md-6 col-xs-12' style='height: auto'>";

	///Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+qComp[2].qList[0].align_text+"'><qstn_text>"+qComp[0].question+"</qstn_text></div><br>";										
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												

											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='qright_"+jcc+"' class='col-lg-6 col-md-6 col-xs-12' style='height: auto'>";
	
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>This is a test</div>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											

		//class='qtext'									
//////////////////////////////////////////////////////////////////////////////////////////////////////											
//////////////////////////////////////////////////////////////////////////////////////////////////////												
//-------<(  Question Begin  )>-------   qstn_text
Jcc_qText_Mover[jcc] = "<div style='text-align:"+qComp[2].qList[0].align_text+"'><jb1>"+qComp[0].question+"</jb1></div><br>";
//-------<(  Question End  )>-------
											
//-------<(  List Begin  )>-------											
if(qComp[2].qList[0].qList_on_off !== "off")											
	{
// class='col-lg-12 col-md-12 col-xs-12'
//<div>		
Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<"+ qComp[2].qList[0].Type_of_List +" type='"+qComp[2].qList[0].ol_type+"' style='list-style-type:"+qComp[2].qList[0].ul_type+"'>";

					for(var queList = 1; queList < qComp[2].qList.length; queList++)	
							{
									//qpara_text
Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1><li style='margin-left:40px; text-align: "+ qComp[2].qList[0].align_text +";'>"+ qComp[2].qList[queList].lstText +"</li></jb1>";							
							} 
								
Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</"+ qComp[2].qList[0].Type_of_List +">"; //</div>
	}
//-------<(  List End  )>-------											

//-------< Paragraph Bottom Begin >	
		for(var qParab = 0; qParab < qComp[3].paragraph_bottom_text.length; qParab++)
			{
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='col-lg-12 col-md-12 col-xs-12'>";
				if(qComp[3].paragraph_bottom_text[qParab].paragraph_bottom.length !== 0)											
				{
					Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div style='text-align:"+qComp[2].qList[0].align_text+"'><jb1>"+qComp[3].paragraph_bottom_text[qParab].paragraph_bottom+"</jb1></div>";
					//qpara_text
					if( (qParab + 1)  !== qComp[3].paragraph_bottom_text.length)
							{
								Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<br>";
							}
				}
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
			}											
//-------< Paragraph Bottom End >											
											
											
Jcc_qImage_Mover[jcc] = "<div><img class='qstImg' src='"+img_loc+"" + qComp[0].extra_image + "' alt=''/><br><br></div>";											
											

//////////////////////////////////////////////////////////////////////////////////////////////////////											
//////////////////////////////////////////////////////////////////////////////////////////////////////												
											
//-------< Qeustion Answers Begin >	
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:10px;'>";
//border-top: thin; border-top-color: #000000; border-top-style:solid; border-top-width: thin; 
										
for(var qAns = 0; qAns < qComp[4].question_answers.length; qAns++)
	{

		tf_new_array[qAns] = qComp[4].question_answers[qAns].true_false;

		Jcc_Comp_Maker = Jcc_Comp_Maker + "<form id='fbqs_"+jcc+"_an_"+qAns+"' class='qSpacing'>";
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<label class='container' style='font-weight: normal !important; text-align:"+qComp[2].qList[0].align_text+"'><jb1 id='qs_"+jcc+"_an_"+qAns+"' class='qtext'>"+qComp[4].question_answers[qAns].q_answer+"</jb1>";
	
Jcc_Comp_Maker = Jcc_Comp_Maker + "<input onclick='nQue("+qComp[0].Question_type+","+qComp[4].question_answers[qAns].true_false+","+jcc+","+qAns+");' type='checkbox' id='cbck_"+jcc+"_"+qAns+"'>";		//style='cursor:pointer;'

		if(qComp[0].Question_type === "1")
			{
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='cb_"+jcc+"_"+qAns+"' class='checkmark'></span>";
			}
		
		if(qComp[0].Question_type === "2")
			{
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='cb_"+jcc+"_"+qAns+"' class='checkmark_square'></span>";
			}

		Jcc_Comp_Maker = Jcc_Comp_Maker + "</label>";
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</form>";

	}											

											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
											
		MC_Answer_Array[jcc] = tf_new_array;	
								
		qComp_sub_Array[jcc] = tf_new_array;
		QC_Multi_Array_TF[jcc] = tf_new_array;											
//-------< Qeustion Answers End >												
								
//-------<>	
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='padding:10px; '>";

		remediation_Paragraph = "<div>";									
			if(typeof qComp[6] !== 'undefined')
				{
					for(var remed = 0; remed < qComp[6].remediation.length; remed++)
					{
						remediation_Paragraph = remediation_Paragraph + "<div><p>"+qComp[6].remediation[remed].remediation_feedback+"</p></div>";
					}
				}
		remediation_Paragraph = remediation_Paragraph + "</div>";											
											
//========================================================================================	
//-------< Correct answer / feedback											
//========================================================================================												
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='c_fb_"+jcc+"' style='display:none; padding:10px; text-align:"+qComp[0].feedback_align+"' class='ma_FB_Correct'><"+qComp[0].question_size+"><"+qComp[5].correct_incorrect_font_size+" style='color:#85be00; font-size: 18px; font-weight:bold; '>"+qComp[5].correct_feedback+"</"+qComp[5].correct_incorrect_font_size+"></"+qComp[0].question_size+">";
		
	if(typeof qComp[5].correct_remediation !== 'undefined')										
			{								
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><answer_text_sel>"+qComp[5].correct_remediation+"</answer_text_sel></div>";	
			}								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><p>"+qComp[5].Additional_feedback+"</p></div></div>";
//========================================================================================	
//-------< Correct answer / feedback											
//========================================================================================	
											
//========================================================================================	
//-------< Incorrect answer / feedback											
//========================================================================================											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='i_fb_"+jcc+"' style='display:none; padding:10px; text-align:"+qComp[0].feedback_align+"' class='ma_FB_Incorrect'><"+qComp[0].question_size+"><"+qComp[5].correct_incorrect_font_size+" style='color:#FF0004; font-size: 18px; font-weight:bold;'>"+qComp[5].incorrect_feedback+"</"+qComp[5].correct_incorrect_font_size+"></"+qComp[0].question_size+">";	
	if(typeof qComp[5].incorrect_remediation !== 'undefined')										
			{											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><answer_text_sel>"+qComp[5].incorrect_remediation+"</answer_text_sel></div>";									
			}								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><p>"+qComp[5].Additional_feedback+"</p></div></div>";											
//========================================================================================	
//-------< Incorrect answer / feedback											
//========================================================================================											
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
											
//-------<>	
//-------<>												
//-------<>												
//-------<>												
//-------<>												
//-------<>												

//-------< Submit Button Begin >												
if(qComp[0].Question_type !== "1")											
{
QC_Multi_Array[jcc] = qComp[4].question_answers.length;
//style='border-top: thin; border-top-color: #000000; border-top-style:solid; border-top-width: thin'
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><a style='margin-top:10px;' href='javascript:Question_Comp_Submit("+jcc+");' class='btn btn-primary disabled' id='sub_"+jcc+"'>Submit</a></div>";
}
//-------< Submit Button End >											
											
											
//-------< End >											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
						break;	
											
											
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( New Question Comp code begin )>-------											
//-------------------------------------------------------------------------------------------------------------		
											
											
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Carousel code begin )>-------											
//-------------------------------------------------------------------------------------------------------------											

									case "Carousel":
										var jcc_car_data = sSelections[jcc].Carousel;
								
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='carousel_margin'><div id='"+jcc + "_" +"jcCarousel' class='carousel slide' data-ride='false' data-interval='false' data-wrap='"+jcc_car_data[0].repeat+"' style='background-color:"+jcc_car_data[0].back_color+"; margin-top:"+jcc_car_data[0].top_margin+"'>";											
// Carousel indicators
if((jcc_car_data[0].repeat !== "true") && (jcc_car_data[0].repeat !== "false") )											
{
	old_caro = "true";
}
											
if((jcc_car_data[0].repeat === "true") || (old_caro === "true")	)										
{											
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<ol class='carousel-indicators' style='bottom: -10px; margin-bottom:10px;'>"; //margin-bottom:10px;
			var car_count;								
				for(var jcc_car_ind = 1; jcc_car_ind < jcc_car_data.length; jcc_car_ind++)
							{
								if(jcc_car_ind === 1)
									{
										car_count = (jcc_car_ind - 1);  //  href='#"+jcc + "_" +"jcCarousel'
										
			                            Jcc_Comp_Maker = Jcc_Comp_Maker + "<li data-target='#"+jcc + "_" +"jcCarousel' data-slide-to='"+(Number(car_count))+"' class='active'></li>"; 
									}
										else
									{
										car_count = (jcc_car_ind - 1);
			                            Jcc_Comp_Maker = Jcc_Comp_Maker + "<li data-target='#"+jcc + "_" +"jcCarousel' data-slide-to='"+(Number(car_count)) +"'></li>";
									}
				
							}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</ol>";
}											
											
											
											
// Wrapper for carousel items -->


Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='carousel-inner'>";											

for(var jcc_car = 1; jcc_car < jcc_car_data.length; jcc_car++)
	{
			if(jcc_car === 1) // <img src="../Mod_01/images/boom.jpg" alt="First Slide">
				{
				  Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding-left:"+jcc_car_data[jcc_car].Slide.Padding+";padding-right:"+jcc_car_data[jcc_car].Slide.Padding+"' class='item active'>";

					if(jcc_car_data[jcc_car].Slide.Image.length > 0)
						{ // jcc_car_data[jcc_car].Slide.Image_Placement
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='"+jcc_car.toString()+"'></div>";
						}
					
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='width: 75%; background-color:"+jcc_car_data[1].Slide.background_color+"; padding:"+jcc_car_data[jcc_car].Slide.Padding+"; text-align:"+jcc_car_data[0].Text_align+"; color:"+jcc_car_data[1].Slide.Text_Color+";'><"+jcc_car_data[jcc_car].Slide.Text_Font_Size+">"+jcc_car_data[jcc_car].Slide.Text+"</"+jcc_car_data[jcc_car].Slide.Text_Font_Size+"></div>";			
					
				  Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
					
				}

			if(jcc_car > 1)
				{
				  Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding-left:"+jcc_car_data[jcc_car].Slide.Padding+";padding-right:"+jcc_car_data[jcc_car].Slide.Padding+"' class='item'>";

					if(jcc_car_data[jcc_car].Slide.Image.length > 0)
						{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='"+jcc_car.toString()+"'></div>";
						}

					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='width: 75%; background-color:"+jcc_car_data[1].Slide.background_color+"; padding:"+jcc_car_data[jcc_car].Slide.Padding+"; text-align:"+jcc_car_data[0].Text_align+"; color:"+jcc_car_data[1].Slide.Text_Color+";'><"+jcc_car_data[jcc_car].Slide.Text_Font_Size+">"+jcc_car_data[jcc_car].Slide.Text+"</"+jcc_car_data[jcc_car].Slide.Text_Font_Size+"></div>";	
					
				  Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
					
				}		
		
	}
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
											
										
//Carousel controls -->
Jcc_Comp_Maker = Jcc_Comp_Maker + "<a class='carousel-control left' style='left: 0%' href='#"+jcc + "_" +"jcCarousel' data-slide='prev'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<span class='glyphicon glyphicon-chevron-left'></span>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</a>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<a class='carousel-control right' href='#"+jcc + "_" +"jcCarousel' data-slide='next'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<span class='glyphicon glyphicon-chevron-right'></span>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</a>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
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
										

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background-color: "+sSelections[jcc][snglBld[jcc]][4].back_color+"; margin-top: "+ sSelections[jcc][snglBld[jcc]][2].top_margin +"; height:"+ sSelections[jcc][snglBld[jcc]][1].height +";'>";											
											
if(sSelections[jcc][snglBld[jcc]][0].divider_image.length !== 0)
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img id='' style='transform: rotate("+ flipper +"); margin:-10px; overflow:hidden; width: 100%;' src='../../../jbuild_libs/images/" + sSelections[jcc][snglBld[jcc]][0].divider_image + ".png' height='"+ sSelections[jcc][snglBld[jcc]][1].height +"' alt=''/>";		
	}
											
									
if(sSelections[jcc][snglBld[jcc]][5].Line_Display === "true")
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:"+sSelections[jcc][snglBld[jcc]][5].top_margin+"; border-bottom: thick; border-bottom-color: "+sSelections[jcc][snglBld[jcc]][5].Line_Color+"; border-bottom-style: "+sSelections[jcc][snglBld[jcc]][5].Line_Style+";border-bottom-width: "+sSelections[jcc][snglBld[jcc]][5].Line_height+"'></div>";
		
	}


Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
									
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( Divider code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Audio code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "audio": // SA
											
											
											
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
										//timeline_heading_alignment
										timeline_start_array[0] = sSelections[jcc][snglBld[jcc]][0].timeline_heading;
										timeline_start_array[1] = sSelections[jcc][snglBld[jcc]][1].timeline_font_heading_color;
										timeline_start_array[2] = sSelections[jcc][snglBld[jcc]][2].timeline_heading_b_color;
										timeline_start_array[3] = sSelections[jcc][snglBld[jcc]][3].timeline_background_color;
										timeline_start_array[4] = sSelections[jcc][snglBld[jcc]][4].top_margin;	
											
										timeline_start_array[5] = sSelections[jcc][snglBld[jcc]][5];
										timeline_start_array[6] = sSelections[jcc][snglBld[jcc]][6];
										
										//sSelections[jcc][snglBld[jcc]][0].timeline_heading_alignment;	
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='timeline col-lg-12 col-md-12 col-xs-12' style='z-index: 4; background-color: " + timeline_start_array[3] + "; margin-top: "+ timeline_start_array[4] +"'><span class='timeline_line' style='background-color:"+timeline_start_array[5].Vertical_Line_Color+"'> </span><div style='background-color: " + timeline_start_array[2] + "; text-align: "+sSelections[jcc][snglBld[jcc]][0].timeline_heading_alignment+"; padding: 10px; z-index: 1; position: relative;'><h2 style='color:"+ timeline_start_array[1] +";'>" + timeline_start_array[0] + "</h2></div>";											
											
		for(var tmln = 7; tmln < sSelections[jcc][snglBld[jcc]].length; tmln++)	
				{

				switch(tmln % 2)
						{
							case 0:
						
								
		Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div class='timeline_container left'><span class='timeline_circle_left' style='background-color:"+timeline_start_array[5].Circle_Color+";border: "+timeline_start_array[5].Circle_Weight+" solid "+timeline_start_array[5].Circle_Outline_Color+"'> </span><span class='left_arrow' style='border-color: transparent transparent transparent "+timeline_start_array[5].Info_Back+";'> </span><div class='content' style='background-color:"+timeline_start_array[5].Info_Back+"'><h3 style='text-align:"+timeline_start_array[6].Box_Heading_alignment+"; font-weight:"+timeline_start_array[6].Box_Heading_weight+"; font-style:"+timeline_start_array[6].Box_Heading_style+";text-decoration: "+timeline_start_array[6].Box_Heading_underline+";font-size:"+timeline_start_array[6].Box_Heading_Size+";'>"+ sSelections[jcc][snglBld[jcc]][tmln].box_Heading +"</h3>");
						
								
						switch(sSelections[jcc][snglBld[jcc]][tmln].box_Contents.slice(-4))
							{
								case ".jpg":
										//img_loc	
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/></div>");
								break;

								case ".png":
										//alert("Image");
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/></div>");
								break;									
									
								case ".mp3":
				
										Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><audio controls><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' type='audio/mpeg'></audio></div>");
									
								break;

								case ".mp4":
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><video style='margin-top: 20px' width='100%;' controls><source src='"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"' id='vid_source' type='video/mp4'></video></div>");
								break;	

								default: 
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><"+timeline_start_array[6].box_Contents_font_size+">"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"</"+timeline_start_array[6].box_Contents_font_size+"></div>");
								break;
							}

				Jcc_Comp_Maker = (Jcc_Comp_Maker + "</div></div>");										
																	
							break;
															
							case 1:

		Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div class='timeline_container right'><span class='timeline_circle_right' style='background-color:"+timeline_start_array[5].Circle_Color+";border: "+timeline_start_array[5].Circle_Weight+" solid "+timeline_start_array[5].Circle_Outline_Color+"'> </span><span class='right_arrow' style='border-color: transparent  "+timeline_start_array[5].Info_Back+" transparent transparent;'> </span><div class='content' style='background-color:"+timeline_start_array[5].Info_Back+"'><h3 style='text-align:"+timeline_start_array[6].Box_Heading_alignment+"; font-weight:"+timeline_start_array[6].Box_Heading_weight+"; font-style:"+timeline_start_array[6].Box_Heading_style+";text-decoration: "+timeline_start_array[6].Box_Heading_underline+";font-size:"+timeline_start_array[6].Box_Heading_Size+";'>"+ sSelections[jcc][snglBld[jcc]][tmln].box_Heading +"</h3>");
								
						switch(sSelections[jcc][snglBld[jcc]][tmln].box_Contents.slice(-4))
							{
								case ".jpg":
										//alert("Image");
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/></div>");
								break;

								case ".png":
										//alert("Image");
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/></div>");
								break;									
									
								case ".mp3":
									//alert("audio_loc: " + audio_loc + "/" + sSelections[jcc][snglBld[jcc]]);
										Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><audio controls><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' type='audio/mpeg'></audio></div>");
								break;

								case ".mp4":
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><video style='margin-top: 20px' width='100%;' controls><source src='"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"' id='vid_source' type='video/mp4'></video></div>");
								break;	

								default:
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><"+timeline_start_array[6].box_Contents_font_size+">"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"</"+timeline_start_array[6].box_Contents_font_size+"></div>");
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
												
											
											
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Timeline code end )>-------											
//-------------------------------------------------------------------------------------------------------------												
//-------------------------------------------------------------------------------------------------------------	
//-------<( Speech Bubble code begin )>-------											
//-------------------------------------------------------------------------------------------------------------											
									case "Speech_Bubbles":

										
											sBubble_Text_Array[0] = sSelections[jcc][snglBld[jcc]][0].talking_head_image;
											sBubble_Text_Array[1] = sSelections[jcc][snglBld[jcc]][1].start_text;
											sBubble_Text_Array[2] = sSelections[jcc][snglBld[jcc]][2].top_margin;											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='spb_"+ jcc +"' class='main_bubble col-lg-12 col-md-12 col-xs-12' style='margin-top: "+ sBubble_Text_Array[2] +"; margin-bottom: 40px;'> <div class='bubbles'><div class='balloons'>";			

											
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
												
									//alert(Speech_Bub_Array[sp_bl] + " : Case 1");			
												
sp_bbl_id[jcc] = jcc + "_bbl_" + sp_bl;	
//alert(sp_bbl_id[jcc]);												
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='" + sp_bbl_id[jcc] +"' class='bRight bubble' style='display:none;'><div class='bText'><p>" + Speech_Bub_Array[sp_bl] + "</p></div></div>";												
												break;
										}

								}
								
							//alert(Speech_Bub_Array.length);				
											
								Speech_Bub_Array = [];
		
											
											
									


									var bbl_cur_id = [];
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='talkingheads'><img src='"+img_loc+"" + sBubble_Text_Array[0] +"' alt=''></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div>"; //	

										
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div></div>";											
									break;		
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Speech Bubble code end )>-------											
//-------------------------------------------------------------------------------------------------------------									
	
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with Text code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "image_w_text": //SA

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top: " + sSelections[jcc][snglBld[jcc]][6].top_margin + "'>";											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color: " + sSelections[jcc][snglBld[jcc]][7].background_color + "'>";								
			//alert(sSelections[jcc][snglBld[jcc]][5].image_font_size);
		switch(sSelections[jcc][snglBld[jcc]][1].image_position)
			{
				case "top": //align='sSelections[jcc][snglBld[jcc]][0].image_aligmnent'
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''/></div>";		

					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+"; color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">" + sSelections[jcc][snglBld[jcc]][3].image_text + "</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";							
				break;
					
				case "bottom": //align='sSelections[jcc][snglBld[jcc]][0].image_aligmnent'
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+"; color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">" + sSelections[jcc][snglBld[jcc]][3].image_text + "</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";	
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''/></div>";					
				break; //  style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'
				
					// <img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' alt=''>
				case "left":
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12 jc_mi'>";
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''/></div>";
																	//margin-top: 15%; 
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-top: "+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+"; display: inline-block; font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+";color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+"; text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+sSelections[jcc][snglBld[jcc]][3].image_text+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";
					
					
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

				break;	

				
				case "right": 
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12 jc_mi'>";
					
					
																	//margin-top: 15%;  image_text_top_margin
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-top: "+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+"; font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+";color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+"; text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+sSelections[jcc][snglBld[jcc]][3].image_text+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''/></div>";					
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";			

					
				break;
					
					
			}
			
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";								
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with text code end )>-------											
//-------------------------------------------------------------------------------------------------------------												

											
//-------------------------------------------------------------------------------------------------------------	
//-------<( List Text Paragraph code begin )>-------	SA										
//-------------------------------------------------------------------------------------------------------------

									
										case "List_text_paragraph": // SA


Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding: "+ sSelections[jcc][snglBld[jcc]][6].padding +"; margin-top: " + sSelections[jcc][snglBld[jcc]][4].top_margin + "; background-color:"+sSelections[jcc][snglBld[jcc]][5].background_color+"'>"; // 1
											

//Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+ sSelections[jcc][snglBld[jcc]][3].Type_of_List +" type='"+sSelections[jcc][snglBld[jcc]][3].ol_type+"' style='list-style-type:"+sSelections[jcc][snglBld[jcc]][3].ul_type+"'>"; 
//-------<(  Heading )>-------											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+sSelections[jcc][snglBld[jcc]][0].heading_size+" style='border-bottom-style: "+sSelections[jcc][snglBld[jcc]][0].heading_underline+"; border-bottom-color:"+sSelections[jcc][snglBld[jcc]][0].heading_underline_color+" ;border-bottom-width: "+sSelections[jcc][snglBld[jcc]][0].heading_underline_height+"; color:"+sSelections[jcc][snglBld[jcc]][0].heading_color+"; font-style: "+sSelections[jcc][snglBld[jcc]][0].heading_style+"; text-align: "+ sSelections[jcc][snglBld[jcc]][0].heading_alignment +"'>"+ sSelections[jcc][snglBld[jcc]][0].List_Heading +"</"+sSelections[jcc][snglBld[jcc]][0].heading_size+">";
//-------<(  Heading )>-------											
											
//-------<(  Paragraph Top )>-------

				for(var tpar = 0; tpar < sSelections[jcc][snglBld[jcc]][1].Top_Paragraphs.length; tpar++)
						{
							//alert(sSelections[jcc][snglBld[jcc]][8].Bottom_paragraphs[bpar].Paragraph_text);
Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+"><p style='text-align: "+ sSelections[jcc][snglBld[jcc]][0].paragraph_alignment +"; color:"+sSelections[jcc][snglBld[jcc]][0].paragraph_top_text_color+"'>"+ sSelections[jcc][snglBld[jcc]][1].Top_Paragraphs[tpar].Paragraph_text +"</p></"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+">";							
						}					
											
//-------<(  Paragraph Top )>-------
Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+ sSelections[jcc][snglBld[jcc]][3].Type_of_List +" type='"+sSelections[jcc][snglBld[jcc]][3].ol_type+"' style='list-style-type:"+sSelections[jcc][snglBld[jcc]][3].ul_type+"'>"; 											
//-------<(  List  )>-------											
List_Text_Num = (sSelections[jcc][snglBld[jcc]][8].list_items);	
	
					for(lst = 0; lst < List_Text_Num.length; lst++)
								{
									List_Text_Array[lst] = (List_Text_Num[lst].lstText);
						//sSelections[jcc][snglBld[jcc]][3].List_Text_Size							
Jcc_Comp_Maker = Jcc_Comp_Maker + "<li style='margin-left:40px; color:"+ sSelections[jcc][snglBld[jcc]][7].text_color +"; text-align: "+ sSelections[jcc][snglBld[jcc]][2].align_text +";'><"+sSelections[jcc][snglBld[jcc]][3].List_Text_Size+">"+ List_Text_Array[lst] +"</"+sSelections[jcc][snglBld[jcc]][3].List_Text_Size+"></li>";																	
												
								}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</"+ sSelections[jcc][snglBld[jcc]][3].Type_of_List +">";											
//-------<(  List  )>-------
											
//-------<(  Paragraph Bottom )>-------											
for(var bpar = 0; bpar < sSelections[jcc][snglBld[jcc]][9].Bottom_paragraphs.length; bpar++)
						{

Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+"><p style='font-size:"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+";text-align: "+ sSelections[jcc][snglBld[jcc]][0].paragraph_alignment +"; color:"+sSelections[jcc][snglBld[jcc]][0].paragraph_bot_text_color+"'>"+ sSelections[jcc][snglBld[jcc]][9].Bottom_paragraphs[bpar].Paragraph_text +"</p></"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+">";							
						}
											
//-------<(  Paragraph Bottom )>-------	

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";		
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( List Text Paragraph code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Heading":	
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+sSelections[jcc][snglBld[jcc]][2].top_margin+";'><"+sSelections[jcc][snglBld[jcc]][3].size+"><p style='color: "+ sSelections[jcc][snglBld[jcc]][5].color +"; font-weight: "+ sSelections[jcc][snglBld[jcc]][4].style +"; border-radius: "+ sSelections[jcc][snglBld[jcc]][10].border_radius +";border-weight:"+ sSelections[jcc][snglBld[jcc]][8].border_weight +" ;border-style:"+ sSelections[jcc][snglBld[jcc]][9].border_style +"; border-color:"+ sSelections[jcc][snglBld[jcc]][7].border_color +" ;background-color: "+ sSelections[jcc][snglBld[jcc]][6].background_color +" ;margin-top: "+ sSelections[jcc][snglBld[jcc]][2].top_margin +"; text-align: "+ sSelections[jcc][snglBld[jcc]][1].alignment +"'>"+ sSelections[jcc][snglBld[jcc]][0].sngl_Heading +"</p></"+sSelections[jcc][snglBld[jcc]][3].size+"></div>";											

											
											
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading code end )>-------											
//-------------------------------------------------------------------------------------------------------------	

//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph New code begin )>-------	SA										
//-------------------------------------------------------------------------------------------------------------					
					case "Paragraphs_New": // SA  img_loc = "images/";
								var paraSetup = sSelections[jcc][snglBld[jcc]][0];	
								
				if(paraSetup.background_image.length > 0)
					{
						
					//alert(paraSetup.background_image.length);
		//alert("paraSetup.background_image: " + paraSetup.background_image);				
						
	//background-color:"+paraSetup.background_color+"					
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraSetup.background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; border-color:"+paraSetup.border_color+"; border-width:"+paraSetup.border_weight+"; border-style:"+paraSetup.border_style+"; border-radius:"+paraSetup.border_radius+"; margin-top:"+paraSetup.top_margin+";'>";							
					}
			
				if(paraSetup.background_image.length === 0)							
					{
			
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 0px 20px; background-color:"+paraSetup.background_color+";border-color:"+paraSetup.border_color+"; border-width:"+paraSetup.border_weight+"; border-style:"+paraSetup.border_style+"; border-radius:"+paraSetup.border_radius+"; margin-top:"+paraSetup.top_margin+";'>";					
					}
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding:"+paraSetup.Padding+";'><span style='text-align:"+paraSetup.heading_alignment+"; color:"+paraSetup.heading_color+"'>";
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+paraSetup.heading_font_size+" style='font-weight:"+paraSetup.heading_weight+";font-style:"+paraSetup.heading_style+";font-variant:"+paraSetup.heading_variant+"; text-transform:"+paraSetup.heading_transform+"'>"+paraSetup.heading+"</"+paraSetup.heading_font_size+">";
		
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</span></div>";									
						
		for(var newpara = 1; newpara < sSelections[jcc][snglBld[jcc]].length; newpara++)
												{
														
						switch(paraSetup.columns)
							{
								case "1":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_column1' style='color:"+paraSetup.Paragraph_Font_color+"; text-align:"+paraSetup.Paragraph_align+";line-height:"+paraSetup.line_spacing+"'><"+paraSetup.Paragraph_Font_Size+">"+ sSelections[jcc][snglBld[jcc]][newpara].Paragraph_txt +"</"+paraSetup.Paragraph_Font_Size+"></p>";									
								break;	
									
								case "2":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_column2' style='color:"+paraSetup.Paragraph_Font_color+"; text-align:"+paraSetup.Paragraph_align+";line-height:"+paraSetup.line_spacing+"'><"+paraSetup.Paragraph_Font_Size+">"+ sSelections[jcc][snglBld[jcc]][newpara].Paragraph_txt +"</"+paraSetup.Paragraph_Font_Size+"></p>";									
								break;	
							}
				
												}

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
					break;
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph New code end )>-------											
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


Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";											
											
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
//-------<>											
//Header
//-------<>												
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='modal-header' style='background-color:"+sSelections[jcc][snglBld[jcc]][9].Header_color+"'>";
	//Jcc_Comp_Maker = Jcc_Comp_Maker + "<button type='button' class='close' data-dismiss='modal'>&times;</button>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='modal-title' style='text-align:"+sSelections[jcc][snglBld[jcc]][9].title_text_alignment+" ;color:"+sSelections[jcc][snglBld[jcc]][9].title_text_color+"; font-size:"+sSelections[jcc][snglBld[jcc]][9].title_text_size+"'>"+sSelections[jcc][snglBld[jcc]][9].title_text+"</p>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
//-------<>												
//Body
//-------<>
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='modal-body' style='background-color:"+sSelections[jcc][snglBld[jcc]][9].Body_color+"'>";
		for(var mdl = 10; mdl < sSelections[jcc][snglBld[jcc]].length; mdl++)
			{
				//alert(sSelections[jcc][snglBld[jcc]][mdl].body_text);
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+sSelections[jcc][snglBld[jcc]][9].body_text_alignment+";color:"+sSelections[jcc][snglBld[jcc]][9].body_text_color+";font-size:"+sSelections[jcc][snglBld[jcc]][9].body_text_size+"'>"+sSelections[jcc][snglBld[jcc]][mdl].body_text+"</p>";				
				
			}

	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
//-------<>												
//Footer
//-------<>												
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='modal-footer' style='text-align:"+sSelections[jcc][snglBld[jcc]][9].Footer_alignment+";background-color:"+sSelections[jcc][snglBld[jcc]][9].Footer_color+"'>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	

	Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";
//-------<(  Modal Box )>-------											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
			
											
									break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( Info box code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
											
											
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄												
//-------------------------------------------------------------------------------------------------------------	
//-------<( Code For Stand Alone Components End )>-------										
//-------------------------------------------------------------------------------------------------------------												
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄												

											
											
//▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀
//-------------------------------------------------------------------------------------------------------------											
//-------<( Accordion code Begin )>-------
//-------------------------------------------------------------------------------------------------------------											
//▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄												
		
											
									case "Accordion":		
									
									var acc_Count = 0;
//style='margin-top: 200px;'
/*											
				"Border_Color":"#000000",
				"Border_Style":"solid", 			//solid, dashed, dotted, double, groove, inset, outset, ridge
				"Border_Thickness":"1px",        	// Default is 1px
				"Border_Radius":"10px",											
*/				
				var acc_ck = sSelections[jcc][snglBld[jcc]][0];
				//alert(acc_ck.Label_Font_Size);
	
				acc_setup_array[0] = sSelections[jcc][snglBld[jcc]][0].Label_Alignment;	
				acc_setup_array[1] = sSelections[jcc][snglBld[jcc]][0].Label_Color;
				acc_setup_array[2] = sSelections[jcc][snglBld[jcc]][0].Label_Background_Color;
				acc_setup_array[3] = sSelections[jcc][snglBld[jcc]][1].Dropdown_Background_Color;
					//alert(acc_setup_array[3]);							
				acc_setup_array[4] = sSelections[jcc][snglBld[jcc]][0].Tab_Radius;
											
				//alert(sSelections[jcc][snglBld[jcc]][0].top_margin);
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top: "+sSelections[jcc][snglBld[jcc]][0].top_margin+"; border-style:"+acc_ck.Border_Style+"; border-color:"+acc_ck.Border_Color+"; border-width:"+acc_ck.Border_Thickness+"; border-radius:"+acc_ck.Border_Radius+"; ' class='panel-group' id='jb_accordion_" + jcc + "'>";

											for(var accm = 2; accm < sSelections[jcc][snglBld[jcc]].length; accm++)
												{
													switch(accm % 2)
														{
															case 0:
																	
															acc_Count = (acc_Count + 1);

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='panel'><div class='panel-heading' data-toggle='collapse' data-parent='#jb_accordion_" + jcc +"' data-target='#collapse"+jcc+"_"+acc_Count+"' style='background-color:"+acc_setup_array[2]+";border-radius:"+acc_setup_array[4]+"'><"+acc_ck.Label_Font_Size+" class='panel-title' style='color:"+acc_setup_array[1]+";text-align:"+acc_setup_array[0]+"'><a data-toggle='collapse' data-parent='#jb_accordion_" + jcc +"' href='#collapse"+jcc+"_"+acc_Count+"'><para_head>"+sSelections[jcc][snglBld[jcc]][accm].Acc_Label+"</para_head></a></"+acc_ck.Label_Font_Size+"></div>";																	
																
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
				
//==============================================================================================================
//-------<( Video old code begin )>-------  ACC	
//==============================================================================================================				
			case "Video_Files_New":
				//var new_vid	= sSelections[jcc][snglBld[jcc]][0];
				jcc_data = sSelections[jcc][snglBld[jcc]][accm].Video_Files_New;
				//alert(jcc_data.length);

/*				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><img id='xprtv' style='position: absolute; top:"+new_vid.top_margin+"; right: 12px' src='../../../jbuild_libs/images/expert_video.png' alt=''>";								
								
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><video width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";// </div>								

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
*/
// Will need to update later				
					switch(jcc_data[0].Expert_View)
						{
							case "yes":
jb_Acc_Con = "<div style='background-color:"+jcc_data[0].back_color+"; padding: 4px; margin-top: "+jcc_data[0].top_margin+";'><div><div><video width='100%;' controls><source src='"+jcc_data[0].Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";// </div>
								
//jb_Acc_Con = "<div class='video_container' style='background-color:"+jcc_data[0].back_color+"; padding: 4px; margin-top: "+jcc_data[0].top_margin+";'><div><div><img class='expert_img_pos' style=' position: absolute; top:"+jcc_data[0].top_margin+"; right: 0px' src='../../../jbuild_libs/images/expert_video.png' width='20%' height='auto' alt=''/><video width='100%;' controls><source src='"+jcc_data[0].Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";

							break;
								
							case "no":
jb_Acc_Con = "<div style='background-color:"+jcc_data[0].back_color+"; padding: 4px; margin-top: "+jcc_data[0].top_margin+";'><div><div><video width='100%;' controls><source src='"+jcc_data[0].Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";// </div>
							
							break;	
						}
											
jb_Acc_Con = jb_Acc_Con + "<div id='trans_" + jcc +"' style='display: none; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";									
			for(var trn_ac = 1; trn_ac < jcc_data.length; trn_ac++)
						{
							
							if(jcc_data[0].Person_underline === "u")
								{
		jb_Acc_Con = jb_Acc_Con + "<p style='text-align:"+jcc_data[0].Person_align+"; color: "+jcc_data[0].Person_text_color+"'><"+jcc_data[0].Person_font+"><u>"+ jcc_data[trn_ac].Person +"</u></"+jcc_data[0].Person_font+"></p>";										
								}

							if(jcc_data[0].Person_underline === "")
								{
		jb_Acc_Con = jb_Acc_Con + "<p style='text-align:"+jcc_data[0].Person_align+"; color: "+jcc_data[0].Person_text_color+"'><"+jcc_data[0].Person_font+">"+ jcc_data[trn_ac].Person +"</"+jcc_data[0].Person_font+"></p>";										
								}							
				
							
		jb_Acc_Con = jb_Acc_Con + "<p style='text-align:"+jcc_data[0].Transcript_Text_align+"; color:"+jcc_data[0].Transcript_Text_color+"'><"+jcc_data[0].Transcript_Text_font+">"+ jcc_data[trn_ac].Transcript_Text +"</"+jcc_data[0].Transcript_Text_font+"></p>";
						
						}						

jb_Acc_Con = jb_Acc_Con + "</div>";	

	Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='z-index: 1;background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 	

			break;	
//==============================================================================================================
//-------<( Video old code end )>-------  ACC	
//==============================================================================================================				
				
				
//==============================================================================================================
//-------<( Video old code begin )>-------  ACC	
//==============================================================================================================				
			case "Video_Files":
								jcc_data = sSelections[jcc][snglBld[jcc]][accm].Video_Files;
				
								Ac_Video_Array[0] = jcc_data[0].Video;
								Ac_Video_Array[1] = jcc_data[1].Transcript_File;
								Ac_Video_Array[2] = jcc_data[2].Expert_View;
								Ac_Video_Array[3] = jcc_data[3].top_margin;
								Ac_Video_Array[4] = jcc_data[4].back_color;			
								//Video_Array[5] =  jcc_data[5].border;	
											
								ac_pfd_Array[jcc] = Ac_Video_Array[1];		

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
//==============================================================================================================
//-------<( Video old code end )>-------  ACC	
//==============================================================================================================				
				
				
				
			case "Image_File_Only":
jcc_data = sSelections[jcc][snglBld[jcc]][accm].Image_File_Only;
				
jb_Acc_Con = "<div style='background-color:"+jcc_data[3].background_color+";padding:"+jcc_data[4].padding+"'><img style='margin-top: "+jcc_data[2].top_margin+"; width: "+jcc_data[1].width+";height:auto' src='"+img_loc+"" + jcc_data[0].image_file + "' height='100px' alt=''/></div>";						
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
			break;

			case "audio": // AC
				//alert("audio_loc: " + audio_loc + "/" + sSelections[jcc][snglBld[jcc]]);
			jcc_data = sSelections[jcc][snglBld[jcc]][accm].audio;	
			//alert(jcc_data[5].Padding);	
		
jb_Acc_Con = "<div style='margin-top:"+jcc_data[6].top_margin+";background-color:"+jcc_data[4].background_color+";padding:"+jcc_data[5].Padding+"'>";
							
						switch(jcc_data[3].Lable_Position)
							{
								case "top":
jb_Acc_Con = jb_Acc_Con + "<div align='left'><"+jcc_data[2].Label_Font_Size+">"+jcc_data[1].Label+"</"+jcc_data[2].Label_Font_Size+"></div>";
											
jb_Acc_Con = jb_Acc_Con + "<audio controls style='width:300px; margin-top: 20px;'><source src='"+audio_loc+"" + jcc_data[0].Audio_File + "' type='audio/mpeg'></audio>";								
								break;
									
								case "bottom":
jb_Acc_Con = jb_Acc_Con + "<audio controls style='width:60%; margin-top: 20px;'><source src='"+audio_loc+"" + jcc_data[0].Audio_File + "' type='audio/mpeg'></audio>";
									
jb_Acc_Con = jb_Acc_Con + "<div><"+jcc_data[2].Label_Font_Size+">"+jcc_data[1].Label+"</"+jcc_data[2].Label_Font_Size+"></div>";									
								break;	
							}
							
jb_Acc_Con = jb_Acc_Con + "</div>";	
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 
				
				
			break;				
				
			case "Divider":

					var jc_Divider = [];
				
				
				jc_Divider = sSelections[jcc][snglBld[jcc]][accm].Divider;


			break;	
				
				
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with Text code begin )>------- AC											
//-------------------------------------------------------------------------------------------------------------												


			case "image_w_text": //AC
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].image_w_text;
jb_Acc_Con = "<div style='margin-top: " + jcc_data[6].top_margin + "'>";											
jb_Acc_Con = jb_Acc_Con + "<div style='background-color: " + jcc_data[7].background_color + "'>";								
			
		switch(jcc_data[1].image_position)
			{ // border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+";
				case "top": //jcc_data[5].image_font_size
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''/></div>";		

					jb_Acc_Con = jb_Acc_Con + "<div style='font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">" + jcc_data[3].image_text + "</"+jcc_data[5].image_font_size+"></div>";							
				break;
					
				case "bottom":
					jb_Acc_Con = jb_Acc_Con + "<div style='font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">" + jcc_data[3].image_text + "</"+jcc_data[5].image_font_size+"></div>";	
					
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''/></div>";					
				break;
					
				case "left":

					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12'>";
					
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''/></div>";
																	//margin-top: 15%; 
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-top: "+jcc_data[4].image_text_top_margin+"; display: inline-block; font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+"; text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">"+jcc_data[3].image_text+"</"+jcc_data[5].image_font_size+"></div>";
					
					
				
					jb_Acc_Con = jb_Acc_Con + "</div>";					
				break;
					
				case "right": 

					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12'>";
					
																//margin-top: 15%; 
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-top: "+jcc_data[4].image_text_top_margin+"; display: inline-block; font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+"; text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">"+jcc_data[3].image_text+"</"+jcc_data[5].image_font_size+"></div>";
					
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''/></div>";					
				
					jb_Acc_Con = jb_Acc_Con + "</div>";						
					
				break;				
			}
			
				
jb_Acc_Con = jb_Acc_Con + "<div>";

											
jb_Acc_Con = jb_Acc_Con + "</div>";											
									
											
jb_Acc_Con = jb_Acc_Con + "</div>";												
jb_Acc_Con = jb_Acc_Con + "</div>";												
											
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 									
											
				break;					
				
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with Text code end )>------- AC											
//-------------------------------------------------------------------------------------------------------------												

				
			case "Heading":
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].Heading;
			
jb_Acc_Con = "<p style='color: "+ jcc_data[5].color +"; font-weight: "+ jcc_data[4].style +"; font-size: "+ jcc_data[3].size +"; border-radius: "+ jcc_data[10].border_radius +";border-weight:"+ jcc_data[8].border_weight +" ;border-style:"+ jcc_data[9].border_style +"; border-color:"+ jcc_data[7].border_color +" ;background-color: "+ jcc_data[6].background_color +" ;margin-top: "+ jcc_data[2].top_margin +"; text-align: "+ jcc_data[1].alignment +"'>"+ jcc_data[0].sngl_Heading +"</p>";					
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 			
			break;

//=========================================================================================================	
//=========================================================================================================	
			case "List_text": // Old
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].List_text;

//=========================================================================================================				
			
jb_Acc_Con = "<div style='padding: "+ jcc_data[5].padding +"; margin-top: " + jcc_data[3].top_margin + "; background-color:"+jcc_data[4].background_color+"'>";											
				
jb_Acc_Con = jb_Acc_Con + "<"+ jcc_data[2].Type_of_List +">";

//-------<(  Heading )>-------											
jb_Acc_Con = jb_Acc_Con + "<p style='border-bottom-style: "+jcc_data[0].heading_underline+"; border-bottom-color:"+jcc_data[0].heading_underline_color+" ;border-bottom-width: "+jcc_data[0].heading_underline_height+"; font-size:"+jcc_data[0].heading_size+"; color:"+jcc_data[0].heading_color+"; font-weight: "+jcc_data[0].heading_style+"; text-align: "+ jcc_data[0].heading_alignment +"'>"+ jcc_data[0].List_Heading +"</p>";
//-------<(  Heading )>-------					

//-------<(  Paragraph )>-------
jb_Acc_Con = jb_Acc_Con + "<p style='font-size:"+jcc_data[0].paragraph_text_size+";text-align: "+ jcc_data[0].paragraph_alignment +"'>"+ jcc_data[0].Paragraph_text +"</p>";
//-------<(  Paragraph )>-------					
							for(lst = 7; lst < jcc_data.length; lst++)
								{
				
									List_Text_Array[lst] = (jcc_data[lst].lstText);
jb_Acc_Con = jb_Acc_Con + "<li style='margin-left:40px; font-size:"+jcc_data[2].List_Text_Size+"; color:"+ jcc_data[6].text_color +"; text-align: "+ jcc_data[1].align_text +";'>"+ List_Text_Array[lst] +"</li>";
									
										
								}
											
jb_Acc_Con = jb_Acc_Con + "</"+ jcc_data[2].Type_of_List +">";											
											//alert( sSelections[jcc][snglBld[jcc]][0].List_Heading );
jb_Acc_Con = jb_Acc_Con + "</div>";					

Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 			

			break;
//=========================================================================================================				
//=========================================================================================================	
				
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image 3 2 1 rows code begin AC )>-------											
//-------------------------------------------------------------------------------------------------------------											
									case "Image_Multi":
				
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].Image_Multi;
				
					//var Image_Multi	= sSelections[jcc][snglBld[jcc]]; //[0]
							
		switch(jcc_data[0].total_images)
			{
				case "1":
						im_rnbr = 12;
				break;
					
				case "2":
						im_rnbr = 6;
				break;
					
				case "3":
						im_rnbr = 4;
				break;					
			}
	
				if(jcc_data[0].total_images === "" || jcc_data[0].total_images > 3 || jcc_data[0].total_images === "0")
					{
						//alert("Bad Data!");
						break;
					}
					
jb_Acc_Con = "<div class='col-lg-12 col-md-12 col-xs-12' style='margn-top:"+jcc_data[0].top_margin+";height: 100%; background-color:"+jcc_data[0].main_background_color+"; padding-bottom: 10px;'>";												
			for(var im_ttl_ac = 1; im_ttl_ac <= jcc_data[0].total_images; im_ttl_ac++)  //Image_Multi[im_ttl].image_border_width
				{
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-"+im_rnbr+" col-md-"+im_rnbr+" col-xs-12'>";
					jb_Acc_Con = jb_Acc_Con + "<img style='width:"+jcc_data[im_ttl_ac].image_width+"; margin-top: "+jcc_data[im_ttl_ac].image_top_margin+"; border-style: "+jcc_data[im_ttl_ac].image_border_style+"; border-color: "+jcc_data[im_ttl_ac].image_border_color+"; border-width: "+jcc_data[im_ttl_ac].image_border_width+"; border-radius: "+jcc_data[im_ttl_ac].image_border_radius+"' src='"+img_loc+"" + jcc_data[im_ttl_ac].image_file + "' alt=''>";
					jb_Acc_Con = jb_Acc_Con + "</div>";

				}
											
jb_Acc_Con = jb_Acc_Con + "</div>";	
				
				
											
Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 											
									break;	
										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image 3 2 1 rows code end )>-------											
//-------------------------------------------------------------------------------------------------------------				
				
				
//=========================================================================================================					
//=========================================================================================================					
			case "List_text_paragraph": // AC
					jcc_data = sSelections[jcc][snglBld[jcc]][accm].List_text_paragraph;
				
				
jb_Acc_Con = "<div class='col-lg-12 col-md-12 col-xs-12'>";
				
jb_Acc_Con = jb_Acc_Con + "<div style='padding: "+ jcc_data[6].padding +"; margin-top: " + jcc_data[4].top_margin + "; background-color:"+jcc_data[5].background_color+"'>";											
				

				
//-------<(  Heading )>-------	jcc_data[0].paragraph_text_size										
jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].heading_size+" style='border-bottom-style: "+jcc_data[0].heading_underline+"; border-bottom-color:"+jcc_data[0].heading_underline_color+" ;border-bottom-width: "+jcc_data[0].heading_underline_height+"; color:"+jcc_data[0].heading_color+"; font-style: "+jcc_data[0].heading_style+"; text-align: "+ jcc_data[0].heading_alignment +"'>"+ jcc_data[0].List_Heading +"</"+jcc_data[0].heading_size+">";
//-------<(  Heading )>-------					

//-------<(  Paragraph Top )>-------				
for(var atp = 0; atp < jcc_data[1].Top_Paragraphs.length; atp++)
	{
		
		jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].paragraph_text_size+"><p style='text-align: "+ jcc_data[0].paragraph_alignment +"; color:"+jcc_data[0].paragraph_top_text_color+"'>"+ jcc_data[1].Top_Paragraphs[atp].Paragraph_text +"</p></"+jcc_data[0].paragraph_text_size+">";	
		
	}
//-------<(  Paragraph Top )>-------

jb_Acc_Con = jb_Acc_Con + "<"+ jcc_data[3].Type_of_List +" type='"+jcc_data[3].ol_type+"' style='list-style-type:"+jcc_data[3].ul_type+"'>";				
//-------<(  List )>-------	jcc_data[3].List_Text_Size		
				List_Text_Num = (jcc_data[8].list_items);
							for(lst = 0; lst < List_Text_Num.length; lst++)
								{

									List_Text_Array[lst] = (jcc_data[lst].lstText);
jb_Acc_Con = jb_Acc_Con + "<li style='margin-left:40px; color:"+ jcc_data[7].text_color +"; text-align: "+ jcc_data[2].align_text +";'><"+jcc_data[3].List_Text_Size+">"+ List_Text_Num[lst].lstText +"</"+jcc_data[3].List_Text_Size+"></li>";
			
								}

jb_Acc_Con = jb_Acc_Con + "</"+ jcc_data[3].Type_of_List +">";					
				
//-------<(  List )>-------
				
//-------<(  Paragraph Bottom )>-------				
for(var abp = 0; abp < jcc_data[9].Bottom_paragraphs.length; abp++)
	{
jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].paragraph_text_size+"><p style='text-align: "+ jcc_data[0].paragraph_alignment +"; color:"+jcc_data[0].paragraph_bot_text_color+"'>"+ jcc_data[9].Bottom_paragraphs[abp].Paragraph_text +"</p></"+jcc_data[0].paragraph_text_size+">";		
	}
//-------<(  Paragraph Bottom )>-------					

				
										
											//alert( sSelections[jcc][snglBld[jcc]][0].List_Heading );
jb_Acc_Con = jb_Acc_Con + "</div>";					

Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 			
				
				
jb_Acc_Con = jb_Acc_Con + "</div>";				
			break;
				
//==============================================================================================================
// -------<(  Paragraphs_New Begin for Accordion )>-------				
//==============================================================================================================				
			case "Paragraphs_New": // AC
					case "Paragraphs_New": // SA  img_loc = "images/";

				
							jcc_data = sSelections[jcc][snglBld[jcc]][accm].Paragraphs_New;

				var paraData = (jcc_data[0]);

				if(paraData.background_image.length > 0)
					{
	jb_Acc_Con = "<div	style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraData.background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; background-color:"+paraData.background_color+";border-color:"+paraData.border_color+"; border-width:"+paraData.border_weight+"; border-style:"+paraData.border_style+"; border-radius:"+paraData.border_radius+"'>";							
					}
				
				if(paraData.background_image.length === 0)							
					{
							
	jb_Acc_Con = "<div style='padding: 0px 20px; background-color:"+paraData.background_color+";border-color:"+paraData.border_color+"; border-width:"+paraData.border_weight+"; border-style:"+paraData.border_style+"; border-radius:"+paraData.border_radius+"'>";					
					}
						
											
											
		jb_Acc_Con = jb_Acc_Con + "<div style='margin-top:"+paraData.top_margin+"; padding:"+paraData.Padding+";'><span style='text-align:"+paraData.heading_alignmet+"; color:"+paraData.heading_color+"'>";
										
		jb_Acc_Con = jb_Acc_Con + "<"+paraData.heading_font_size+" style='font-weight:"+paraData.heading_weight+";font-style:"+paraData.heading_style+";font-variant:"+paraData.heading_variant+"; text-transform:"+paraData.heading_transform+"'>"+paraData.heading+"</"+paraData.heading_font_size+">";
		
			//jcc_data							
		jb_Acc_Con = jb_Acc_Con + "</span>";									
					
		for(var newACpara = 1; newACpara < jcc_data.length; newACpara++)
												{
												
						switch(paraData.columns)
							{
								case "1":
jb_Acc_Con = jb_Acc_Con + "<p class='jb_column1' style='color:"+jcc_data[0].Paragraph_Font_color+"; text-align:"+paraData.Paragraph_align+";line-height:"+paraData.line_spacing+"'><"+paraData.Paragraph_Font_Size+">"+ jcc_data[newACpara].Paragraph_txt +"</"+paraData.Paragraph_Font_Size+"></p>";									
								break;	
									
								case "2":
jb_Acc_Con = jb_Acc_Con + "<p class='jb_column2' style='color:"+jcc_data[0].Paragraph_Font_color+"; text-align:"+paraData.Paragraph_align+";line-height:"+paraData.line_spacing+"'><"+paraData.Paragraph_Font_Size+">"+ jcc_data[newACpara].Paragraph_txt +"</"+paraData.Paragraph_Font_Size+"></p>";									
								break;	
							}
				
												}
											
		jb_Acc_Con = jb_Acc_Con + "</div></div>";	

	Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
					break;					
	
			
//==============================================================================================================
// -------<(  Paragraphs_New End for Accordion )>-------				
//==============================================================================================================				
				
				
//===========================================================================================
			case "Paragraphs": // AC
				
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
					
						
					}
jb_Acc_Con = jb_Acc_Con + "</div>";	
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 		
		
			break;
				
//==============================================================================================================
// -------<(  Speech_Bubbles Begin for Accordion )>-------				
//==============================================================================================================
			case "Speech_Bubbles":
									jcc_data = sSelections[jcc][snglBld[jcc]][accm].Speech_Bubbles;
				
jb_Acc_Con = "<div id='spb_"+ jcc +"' class='main_bubble' style='margin-top: "+ jcc_data[2].top_margin +"; margin-bottom: 40px;'> <div class='bubbles'><div class='balloons'>";			

			
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
//▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀─▀
//-------------------------------------------------------------------------------------------------------------											
//-------<( Accordion code End )>-------
//-------------------------------------------------------------------------------------------------------------											
//▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄─▄													
											
											
											
									}		
							}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
		
			
Component_Engine(Jcc_Comp_Maker);

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
//-------<(  Test to see if the TOC json is loaded begin )>-------				
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-					

			
				
switch(typeof toc_list)
	{
		case "undefined":
			//alert("No TOC!");
			//document.getElementById("toc_slide").style.display = "none";
		break;
			
		default:
			TOC_Engine();
		break;	
	}
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
//-------<(  Test to see if the TOC json is loaded end )>-------				
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
				
				break;
		}
	}
}

                       
//qtyp = Type of question.
//cqtn = t/f   
//curComp = Currnet conp number
//qest = Number in array
function nQue(qtyp,cqtn,curComp,qest)
{
//csa_answer = "";
	
//alert("cqtn: " + cqtn + " ,curComp " + curComp + ",qest " + qest);	


	
switch(qtyp)
	{
	case 1:
	
	if(cqtn === true)
		{
			chClass = ("#cb_" + curComp + "_" + qest);
			$(chClass.toString()).addClass('q_comp_correct');
			
			document.getElementById("i_fb_" + curComp).style.display = "none";
			document.getElementById("c_fb_" + curComp).style.display = "block";
		}	
	
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<form id='fbqs_"+jcc+"_an_"+qAns+"' class='qSpacing'>";	
	
	if(cqtn === false)
		{
			//alert("csa_answer: " + csa_answer);
			
			chClass = ("#cb_" + curComp + "_" + qest);
			$(chClass.toString()).addClass('q_comp_incorrect');
			
			
			for(var scans = 0; scans < MC_Answer_Array[curComp].length; scans++)
				{

					//document.getElementById("cb_" + curComp + "_" + scans).style.cursor = "default";


					if( MC_Answer_Array[curComp][scans] === "true" )
						{
							//qs_3_an_0
							
							//qs_"+jcc+"_an_"+qAns+    qtext ma_CorrectNS
							
							
							//alert("qs_"+curComp+"_an_"+scans);
							
							//document.getElementById("qs_"+curComp+"_an_"+scans).className = "ma_CorrectNS";
							var single_answer_fd;
							single_answer_fd = ("#qs_"+curComp+"_an_"+scans);
							$(single_answer_fd.toString()).addClass('ma_CorrectNS');
						/*	
							var single_answer_fd;
							single_answer_fd = ("#fbqs_"+curComp+"_an_" + scans);
							$(single_answer_fd.toString()).addClass('ma_CorrectNS');
						*/	
							//this controls the single question outline
							////document.getElementById("fbqs_"+curComp+"_an_" + scans).className = "ma_FB_Correct";
/*							
$(chClass.toString()).removeClass('q_comp_mw');	//checkmark  ma_CorrectNS


fb_pop = ("#qs_" +cqest+ "_an_" + two_test);

$(fb_pop.toString()).addClass('ma_CorrectNS');		//ma_FB_Correct								
*/							
							
							
						}

				}			

			
			document.getElementById("c_fb_" + curComp).style.display = "none";
			document.getElementById("i_fb_" + curComp).style.display = "block";			
		}
	
	break;
	
	case 2:
			
			chClass = ("#cb_" + curComp + "_" + qest);
			$(chClass.toString()).addClass('q_comp_mw');
			
			
				$( '#sub_' + curComp.toString()).removeClass('disabled');
				$( '#sub_' + curComp.toString()).addClass('active');			
	
	break;
	}
}

function Question_Comp_Submit(cqest)
{
var cb_cmp_array = [];
var cb_chk_Array = [];	
var fb_pop;	
		for(var two_test = 0; two_test < QC_Multi_Array_TF[cqest].length; two_test++)	
			{
				cb_cmp_array[two_test] = ("cbck_" + cqest + "_" + two_test);
				cb_chk_Array[two_test] = (document.getElementById(cb_cmp_array[two_test]).checked.toString());

				if(cb_chk_Array[two_test] === "true")
					{
						switch(QC_Multi_Array_TF[cqest][two_test].toString())
							{
									
								case "true":
											chClass = ("#cb_" + cqest + "_" + two_test);
											$(chClass.toString()).removeClass('q_comp_mw');	//checkmark
											$(chClass.toString()).addClass('checkmark_correct_square');

								break;
									
								case "false":
											//chClass = ("#cb_" + cqest + "_" + two_test);
											//$(chClass.toString()).removeClass('q_comp_mw');	//checkmark
											//$(chClass.toString()).addClass('checkmark_wrong_square');
									
											
								break;	
									
							}
	
					}
				
				

				
				if(cb_chk_Array[two_test] === "false")
					{
						switch(QC_Multi_Array_TF[cqest][two_test].toString())
							{
								case "false":
									
								break;
									
								case "true":
											chClass = ("#cb_" + cqest + "_" + two_test);
											$(chClass.toString()).removeClass('q_comp_mw');	//checkmark  ma_CorrectNS
											
				// $(chClass.toString()).addClass('checkmark_correct_square'); // commented out so no check marks show for unselected answers
											
											//ma_FB_Correct
									
											fb_pop = ("#qs_" +cqest+ "_an_" + two_test);
											$(fb_pop.toString()).addClass('ma_CorrectNS');		//ma_FB_Correct									
									

											//$("qs_" +cqest+ "_an_" + two_test.toString()).addClass('ma_FB_Correct');
								break;	
							}
						
						
						
					}
				

			}		

	
	if(cb_chk_Array.toString() === QC_Multi_Array_TF[cqest].toString())
		{
				document.getElementById("i_fb_" + cqest).style.display = "none";
				document.getElementById("c_fb_" + cqest).style.display = "block";			
		}

	if(cb_chk_Array.toString() !== QC_Multi_Array_TF[cqest].toString())
		{
				document.getElementById("i_fb_" + cqest).style.display = "block";
				document.getElementById("c_fb_" + cqest).style.display = "none";			
		}
	
}
					 //len,	
function check_box_fb(cbfb,qfb)
{
	for(var cboxCk = 0; cboxCk < cbfb; cboxCk++)
		{
			chClass = ("#cb_" + qfb + "_" + cboxCk);
			//alert(chClass);
			
			$(chClass.toString()).removeClass('q_comp_mw');	
			$(chClass.toString()).addClass('q_comp_incorrect');
		}
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


	function Lesson_Selection(btnNum)
	{

		
		btnNum = (btnNum + 1);

		
		window.open(Course_Number_Val + "_M" + Module_Number_Val + "_L" + btnNum + ".html", "_self");

		
	}


//╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Speech Bubble Buttons Begin )>-------                                                 ║
//╚═════════════════════════════════════════════════════════════════════════════════════════════════╝	
var bid_Count = 0;
var direction = 1;

function bub_Next(bb_cur)
{
	
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
				document.getElementById("bub_prev_buton" + bb_cur).style.display = "block";			

			//alert(bid_Count + " : Start");
			//alert("Speech_Bub_Array.length: " + Speech_Bub_Array.length);
			//alert("bid_Count: " + bid_Count + " : (speech_number[bb_cur].length - 1): " + (speech_number[bb_cur].length - 1) );
			
				if(bid_Count === (speech_number[bb_cur].length - 1))
						{
							document.getElementById("bub_next_button" + bb_cur).innerText = "Replay";
						}			
			
		break;
			
		case "Next":
			//alert("Next");
			
			//alert("Speech_Bub_Array.length: next " + Speech_Bub_Array.length);
			
				document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "none";
				bid_Count = (bid_Count + 1);
				document.getElementById(bb_cur + "_bbl_" + bid_Count).style.display = "block";

			//alert("bid_Count: " + bid_Count + " : (speech_number[bb_cur].length - 1): " + (speech_number[bb_cur].length - 1) );
			
				if(bid_Count === (speech_number[bb_cur].length - 1))
						{
							document.getElementById("bub_next_button" + bb_cur).innerText = "Replay";
						}
		break;
			
		case "Replay":

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

$(function(){
    $(".flip").flip({
        trigger: 'click'
    });
});	




function Transcripts(tran)
	{

		switch(document.getElementById("tbtn_" + tran).innerHTML)
			{
					case "Close Transcript":
							document.getElementById("trans_" + tran).style.display = "none";
							document.getElementById("tbtn_" + tran).innerHTML = "Open Transcript";					
					break;
					
					case "Open Transcript":
							document.getElementById("trans_" + tran).style.display = "block";
							document.getElementById("tbtn_" + tran).innerHTML = "Close Transcript";
					break;
			}

	}



function next_lesson()
{
	
	var path = window.location.pathname;
	var page = path.split("/").pop();


////alert(toc_whole.mod_num.indexOf("Module"));	

	
if(page.indexOf("_LO") > 1)
	{
		var lrn_obj = page.slice(0,page.indexOf("_LO"));
		alert( page.slice(0,page.indexOf("_LO")) );
	}
	
if(page.indexOf("_P") > 1)
	{
		var strt_pg = ( page.slice(0,page.indexOf("_P") + 2) );
		
		var curt_pg = page.slice(page.indexOf("_P"),page.indexOf(".html"));

		var nxt_pg = Number(curt_pg.slice(2)); // will give the current page number 1 - 99	
		
		////var nxt_pg = Number(TOC_File_Order_Array[]);
		
		window.open(strt_pg + ( nxt_pg + 1) + ".html", "_self");
	}	
	
//TOC_File_Order_Array

	//window.open(Course_Number_Val + "_M" + Module_Number_Val + "_L" + btnNum + ".html", "_self");
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

function Page_Selection(pgSel)
{
	//alert("pgSel: " + toc_filename_Array[pgSel]);
	
	window.open(toc_filename_Array[pgSel], "_self");
	
	//Use an object
}




function lessonJump(LJ)
{

	var mlp = ( toc_filename_Array[LJ].slice(toc_filename_Array[LJ].slice(0,toc_filename_Array[LJ].indexOf("_M")).length)    );

	mlp = (mlp.slice(0, (mlp.length - 5)));

	var mlp1 = (mlp.slice(1,3));
	
	var mlp2 = (   mlp.slice( mlp.indexOf("_L") , 7     )); // mlp.indexOf("_L")      );	
	
	switch( mlp2.slice(mlp2.length - 1 ,mlp2.length) )
		{
			case "_":
						mlp2 = ( mlp2.slice(1,3)  );
						//alert(mlp2);
			break;
				
			default:
						mlp2 = ( mlp2.slice(1,4)  );
						//alert(mlp2);
			break;	
		}

	var mlp3 = ( mlp.slice( (5 + mlp2.length),mlp.length ) );
	

	if( (mlp3 === "TOC") || (mlp3 === "LO") || (mlp3 === "EOL") )
		{
			alert(mlp1.slice(1) + " , " + mlp2.slice(1) + " , " + mlp3);
		}
	else
		{
			alert(mlp1.slice(1) + " , " + mlp2.slice(1) + " , " + mlp3.slice(1));
		}

	


	
/*	
	var path = window.location.pathname;
	var page = path.split("/").pop();

	for(var lsnJmp = 0; lsnJmp < toc_list.length; lsnJmp++)
		{
			//alert("lsnJmp: " + lsnJmp);
			//alert(toc_whole.Order[lsnJmp]);
		}
	
	alert(LJ + " : " + nxjp);
*/	
	
/*
	var path = window.location.pathname;
	var page = path.split("/").pop();

	
////alert(toc_whole.mod_num.indexOf("Module"));	

	
if(page.indexOf("_LO") > 1)
	{
		var lrn_obj = page.slice(0,page.indexOf("_LO"));
		alert( page.slice(0,page.indexOf("_LO")) );
	}
	
if(page.indexOf("_P") > 1)
	{
		var strt_pg = ( page.slice(0,page.indexOf("_P") + 2) );
		
		var curt_pg = page.slice(page.indexOf("_P"),page.indexOf(".html"));

		var nxt_pg = Number(curt_pg.slice(2)); // will give the current page number 1 - 99	
		
		////var nxt_pg = Number(TOC_File_Order_Array[]);
		
		window.open(strt_pg + ( nxt_pg + 1) + ".html", "_self");
	}		
*/	
}


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openToc() {
	
	//alert("width: " + document.getElementById("Page_Body").offsetWidth);
	//document.getElementById("Page_Body").offsetWidth
	var cur_pg_width = document.getElementById("Page_Body").offsetWidth;
	
	if(cur_pg_width <= 1024)
		{
			//alert("Use Modal for mobile view");
			document.getElementById("tocNav").style.width = "250px";
		}
	
	if(cur_pg_width > 1024)
		{
			document.getElementById("tocNav").style.width = "250px";
			document.getElementById("Page_Body").style.marginLeft = "250px";			
		}

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeToc() {

					document.getElementById("tocNav").style.width = "0";
					document.getElementById("Page_Body").style.marginLeft = "0";

}

function closeToc1_mobile() {
	var cur_pg_width = document.getElementById("Page_Body").offsetWidth;
	
	if(cur_pg_width <= 1024)
		{
					document.getElementById("tocNav").style.width = "0";
					document.getElementById("Page_Body").style.marginLeft = "0";
		}
	
	if(cur_pg_width > 1024)
		{

		}
}


