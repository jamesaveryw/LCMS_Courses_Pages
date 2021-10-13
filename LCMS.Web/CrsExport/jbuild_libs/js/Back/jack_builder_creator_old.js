//Updated March 8th 2019Paragraphs_New

var toc_list;
var toc_filename_Array = [];
var toc_fly_icon;
var moduleFolder;
var contScroll;
var np_num;
var flscrollHeight;
var lesson_title_text;
var mod_lsn = [];
var term_head;
var term_def;
var header_image;
var header_alt;

var jcc;

var toc_flyout_fn_array = [];

var toc_whole;
var toc_cur_module;
var jcc_Comp_Creator;
var jcc_TOC_Creator;
var jcc_TOC_Flyout_Menu;
var jcc_toc_fly_num = 0;
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
var Key_Term_Modal_Maker;

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

var timeline_heading;
var timeline_body;

var Q_count;
var QA_num = null;
var QC_Multi_Array = [];
var remediation_Paragraph;
var qComp_sub_Array = [];
var Question_Type_Array = [];
var Question_Total_Array = [];
var QC_Multi_Array_TF = [[],[]];
var chClass;
var MC_Answer_Array = [];
var tf_new_array = [];
var q_feedback_qNum_Array = [[],[]];
var q_feedback_user_Array = [[],[]];
var q_feedback_array = [];
var Q_Recall = [];
var Q_Choice = [];
var Q_Square = [];
var Q_IF_feedback = [];
var Q_Block = [[],[]];
var Q_Block_IC = [[],[]];

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

var column_text_color;
var flip_card_Array = [[],[]];
var flip_card_multiple = [];
var flip_data;
var flip_card_data;
var flip_new_Array = [];
var asset_info;
var gtMain = [];
var flip_card_sMaker = [];
var jb_flp_mkr = [];
var flip_switch;


var swiffy_data;

//-------<(  Added by Jack on 03_08_2019  )>-------
var pdf_logo;
var pdf_file_name;
var pdf_file_array = [];
//-------<(  Added by Jack on 03_08_2019  )>-------

var tbl_row_dec = [];
var tbl_row_col = [];
var tbl_column_dec = [];
var tbl_column_col = [];
var tbl_border_array = [];
var tbl_data_border_array = [];

var tbl_rc_border_array = [];

var tbl_whole_row_array = [];
var tbl_single_cell_array = [];
var tbl_single_row_data = [];
var row_col_check;
var tbl_heading_align;	
var New_Border_Code = [];
var New_Data_Border_Code = [];
var New_Cell_Color = [];
var New_Text_Font_Array = [];
var New_Text_Font = [];
var New_Text_Alignment = [];
var New_Font_Array = [];
var TFS_array = [];
var Row_Data_Color = [];
var Row_Data_Font = [];
var Row_Data_Border = [];
var Row_Data_Height_Array = [];

var Alt_Tag_Image_Data = [];
var Alt_Tag_Carousel_Data = [];

var ADA_check_Array = [];
var ADA_checked_Array = [];
var ADA_String;
var aCa = 0;

var pdf_inline_call;
var source_Array = [];

var cur_swiffy_name = [];

var bCurrentMod;
var bCurrentLsn;
var bCurrentPag;


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//-------<( Component Engine Code Begin )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*
if(courseType === "shortcourseA")
{
for(var q_ct = 0; q_ct < Q_count; q_ct++)
{

pgQueArray[q_ct] = {
page_nm: np_num,
question: q_ct,
//answer: 0,
answer: allPgQue[np_num][q_ct].answer,
choice: allPgQue[np_num][q_ct].choice,
module_number: 1,
}
}

}
console.log(allPgQue);
}
*/



function Component_Engine(ceData)
{

pgQueArray = [];	

if(typeof courseType !== "undefined")
	{

	if(courseType.indexOf("shortcourseA") !== -1 && courseType.indexOf("demo") === -1)
		{
			for(var q_ct = 0; q_ct < Q_count; q_ct++)
				{

					pgQueArray[q_ct] = 	{
											page_nm: np_num,
											question: q_ct,
											//answer: 0,
											answer: allPgQue[np_num][q_ct].answer,  // add var
											//choice: 0,
											choice: allPgQue[np_num][q_ct].choice, // add var
											module_number: 1,
										}	
				}

		}
	
	}


	if(ADA_check_Array.length > 0)
		{
			
			for(var adalngth = 0; adalngth < ADA_check_Array.length ;adalngth++)
				{
					if(typeof ADA_check_Array[adalngth] !== "undefined")
						{
								var Anum = aCa + 1;
								ADA_checked_Array[aCa] = [Anum] + ": " + ADA_check_Array[adalngth] + "\n";
								aCa = (aCa + 1);


						}
					
				}
							
			ADA_String = ADA_checked_Array.toString().replace(/,/g,"");
			
			if(typeof courseType === "undefined")
				{
					alert(ADA_String);

				}
			
		
		}
	

	jcc_Comp_Creator = $("<div style='height:0px'></div>");

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
//-------<( Previous and Next buttons )>-------	
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
if(typeof np_num === "undefined")
	{

		$(jcc_Comp_Creator).append("<div>" + ceData + "</div>");
		$(jcc_Comp_Creator).append("</div>");
	}
	
if(typeof np_num !== "undefined")
	{

if(np_num === 1) // This is for Development Mode.
	{

		gtMain[0] = Number(mod_lsn[0] - 1);
		gtMain[1] = Number(mod_lsn[1]);
	
	 	$(jcc_Comp_Creator).append("<div id='Prev_Lesson' class='col-lg-12 col-md-12 col-xs-12 prev_lesson' onClick='javascript:view_lesson("+gtMain[0]+","+gtMain[1]+",\"TC\")' style='width:100%;margin-bottom: 10px;'><l3 id='pr_label'>&#9650 &#160 Table of Contents</l3></div>"); 
	}

if(np_num !== 1) // This is for portal Mode.
	{
		//alert("np_num !== 1");
		$(jcc_Comp_Creator).append("<div id='Prev_Lesson' class='col-lg-12 col-md-12 col-xs-12 prev_lesson' onClick='javascript:prev_lesson()' style='width:100%;margin-bottom: 10px;'><l3 id='pr_label'>&#9650 &#160"+toc_flyout_fn_array[np_num -1]+"</l3></div>"); //9668
	}
	
	$(jcc_Comp_Creator).append("<div id='Hero_Image_File' class='col-lg-12 col-md-12 col-xs-12 panel-group' style='width:100%;margin-top: 10px; '>");	
	$(jcc_Comp_Creator).append("<div>" + ceData + "</div>");
	$(jcc_Comp_Creator).append("</div>");

	if( (np_num + 1 ) !== ( toc_flyout_fn_array.length )  )
		{
			$(jcc_Comp_Creator).append("<div id='Next_Lesson' class='col-lg-12 col-md-12 col-xs-12 next_lesson' onClick='javascript:next_lesson()' style='width:100%;margin-bottom: 50px;'><l3 id='nx_label'>"+toc_flyout_fn_array[np_num + 1]+"&#160 &#9660</l3></div>"); //9658	
		}
		
}		
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-	
//-------<( Previous and Next buttons )>-------	
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-		
	
$(jcc_Comp_Creator).append("<div class='col-lg-12 col-md-12 col-xs-12 panel-group' style='display: block; margin-bottom:20px;'></div>");	
	

	$("#JcComponents").append(jcc_Comp_Creator);
	
	document.getElementById("JcComponents").scrollTop = 100;
	

	
	jcc_Comp_Creator = "";

	for(var flpr = 0; flpr < flip_card_Array.length; flpr++)
		{
		
			if(typeof flip_card_Array[flpr] === "object")
				{
					if(flip_card_Array[flpr].length > 0)
						{
							//alert("flip_card_Array: " + flip_card_Array[flpr]);
								for(var idb = 0; idb < flip_card_Array[flpr].length; idb++)
									{
										//alert(flip_card_Array[flpr][idb]);
										
										Setup_flip_id( flip_card_Array[flpr][idb] );
	
									}
						}
				}
	
		}

	
	
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//********************************KEY TERMS***************************************

function showKeyterm(e){
var kt_mod;	
// term_head;
// term_def;	
	
    var lastFocus = e.target;

	////flip_switch = 1;
	
    if(!document.getElementById("keytermsdiv")){
        var searchTerm = lastFocus.innerHTML.toLowerCase();
    
        for(var i = 0; i < glossary_settings.glossary_setup.length; i++){
            if (searchTerm === glossary_settings.glossary_setup[i].term.toLowerCase()){
                
				term_head = glossary_settings.glossary_setup[i].term;
				term_def = glossary_settings.glossary_setup[i].definition;
				
			
				
				
		Key_Term_Modal(term_head,term_def);		
				

                break;
            }
        }

		
    }    
    
    $("#keytermsparent").on("blur click keyup", function(e){
        //console.log(e.type);
        if(e.type === "click" || e.type === "blur"){
            closeAndRefocus();
        }else if (e.type === "keyup" && e.key === "Escape"|| e.type === "keyup" && e.which === 27){//Escape key
            closeAndRefocus();
        }
    });
    function closeAndRefocus(){
        lastFocus.focus();
        $("#keytermsdiv").remove();
        $("#keytermsparent").css("display","none");
		
		////flip_switch = 0;
    }
}


	$( ".sourceLine" ).click(function(e){
			//alert("sourceLine clicked = " + e);
		alert("jcc: " + jcc);
		
		
		//showSourceline(e);
		//showKeyterm
	});
	
	
	

	$( ".keyterm" ).click(function(e){
		showKeyterm(e);

	});

	$(document).keydown(function(e) {
		if(e.which === 13){//Enter
			showKeyterm(e);
		}
	});		
	

	function Setup_flip_id(sfi)
	{

		
		
			$(document).ready(function(){ //document or this
				$("#" + sfi).flip({
					axis: 'y',
					trigger: 'manual'
				});

			});

	}




	

	
	for(var qstst = 0; qstst < Q_Square.length; qstst++)
		{
			if(typeof Q_Square[qstst] != "undefined")
				{
					Q_Block[np_num] = Q_Square[qstst];
					Q_Block_IC[np_num] = Q_IF_feedback[qstst];

					$(Q_Block[np_num].toString()).addClass('ma_CorrectNS');
					document.getElementById(Q_Block_IC[np_num]).style.display = "block";

				}
	
		}

	Q_Square = [];
	Q_IF_feedback = [];
	
	//alert(document.getElementById("lrm_window").offsetWidth);
}


function showSourceline(e)
{
	alert(e);
	
	//Source_Info
	//Source_File
	
	
	//alert(e.target);
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//-------<( Component Engine Code End )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function TOC_Engine(toc_mod,toc_lsn)
{
	//alert( TOC[toc_mod][toc_lsn][0].Hero_Image; );
	//alert( TOC[toc_mod - 1][toc_lsn - 1][tc_con].lesson_name );
	
//  cRpage -> This is for the page number: Page x of x	
	
	//QA_num = "undefined";
	
	QA_num = null;
	
	document.getElementById("pg_header").style.display = "none";
	$("#lessonContent").empty();
	$("#JcComponents").empty();

	
	$("#flyout_scroll").empty();
	
	jcc_TOC_Creator = $("<div align='center' class='col-lg-12 col-md-12 col-xs-12 panel-group body_style' style='overflow-y: auto; overflow-x: none'>"); 	

							lesson_title_text = TOC[toc_mod - 1][toc_lsn - 1][0].TOC_Main_Title;
	
							$(jcc_TOC_Creator).append("<div><h1 style='color:#000000'>"+lesson_title_text+"</h1></div>");
	
	
							//$(jcc_TOC_Creator).append("");
							var toc_hi = moduleFolder + "images/" +	TOC[toc_mod - 1][toc_lsn - 1][0].TOC_Main_Page_Hero_Image;		
										
							$(jcc_TOC_Creator).append("<div><img alt='' src=' "+toc_hi+"' style='width:100%'></div>"); 
	
							$(jcc_TOC_Creator).append("<p style='text-align:justify; color:#000000; padding:20px;'>"+TOC[toc_mod - 1][toc_lsn - 1][0].TOC_Main_Page_Text+"</p>");
	
							mod_lsn[0] = (toc_mod);
							mod_lsn[1] = (toc_lsn);
	
	

toc_flyout_fn_array = [];	
TOC_File_Order_Array = [];	
	
	
	
	
var sprint_check;	
	for(var tc_con = 1; tc_con < TOC[toc_mod - 1][toc_lsn - 1].length; tc_con++)
		{
			//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    		//****************Added 2019-03-08 (Brian)****************************************
    		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
			if(courseType.indexOf("demo") === -1){
				if (bPageViews[toc_mod - 1][toc_lsn-1][tc_con-1] === 1){
					sprint_check = "chk_comp.png";
				}else{
					sprint_check = "chk_incomp.png";
				}
			}else{
				sprint_check = "chk_incomp.png";
			}
			//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    		//****************Added 2019-03-08 (Brian)****************************************
    		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
			
							//sprint_check = "chk_incomp.png";
	$(jcc_TOC_Creator).append("<div class='quest_char'><button class='toc_main_buttons' onclick='javascript:Page_Selection("+tc_con+",0)'><span style='text-align: left'>"+TOC[toc_mod - 1][toc_lsn - 1][tc_con].lesson_name+"</span><img id='toc_main_img_"+tc_con+"' src='jbuild_libs/images/"+sprint_check+"' alt='' style='width:20px; float: right'></button></div>");

			//-------<(  For Sprint display only )>-------//
		

		
				//Hero_Image
								toc_flyout_fn_array[tc_con] = TOC[toc_mod - 1][toc_lsn - 1][tc_con].lesson_name;	
			
								   TOC_File_Order_Array[tc_con] = TOC[toc_mod - 1][toc_lsn - 1][tc_con].Page_File_Name;

		} 

	

	$(jcc_TOC_Creator).append("</div>");

	

	
	$(jcc_TOC_Creator).append("<div id='Next_Lesson' class='col-lg-12 col-md-12 col-xs-12 next_lesson' onclick='javascript:Page_Selection(1,0)' style='width:100%;margin-bottom: 50px;'><l3 id='nx_label'>"+toc_flyout_fn_array[1]+"&#160 &#9660</l3></div>");	
	

	
	
	//document.getElementById("pg_header").style.display = "block";
	document.getElementById("lessonContent").style.display = "block";
	document.getElementById("portalContents").style.display = "none";
	//document.getElementById("flyout_scroll")

	$("#lessonContent").append(jcc_TOC_Creator);

	
	$("#lessonContent").scrollTop(0);
	

	
	

	$("#Toc_flyout").empty();
	$("#toc_fMenu").empty();
	$("#flyout_scroll").empty();
	
	jcc_TOC_Flyout_Menu = null;
	

	
	var flscrollTop = document.getElementById("pg_header").offsetHeight + 100;
	var flscrollBtm = document.getElementById("indexFooter").offsetTop;
	flscrollHeight = flscrollBtm - flscrollTop;	

	/*
	  	display: inline-block;
  		vertical-align: middle 20
	*/

	jcc_TOC_Flyout_Menu = $("<div style='height:"+flscrollHeight+"px; margin-top:100px;' id='toc_fMenu' class='overlay'>"); //panel-group body-style  height:70%  
	$(jcc_TOC_Flyout_Menu).append("<div id='flyout_scroll' style='overflow: hidden; overflow-y: auto;'>");
	$(jcc_TOC_Flyout_Menu).append("<div class='overlay-content'>"); //style='overflow-y: scroll'

	$(jcc_TOC_Flyout_Menu).append(" <button class='toc_fly_buttons' onClick='javascript:toc_back_to_main()'><span style='text-align: left;'>Table of Contents</span></button>"); //<img id='toc_fly_img_"+tocsd+"' src='jbuild_libs/images/"+sprint_check+"' alt='' style='width:20px; float: right'>		
	
	//onClick='javascript:view_lesson("+gtMain[0]+","+gtMain[1]+",\"TC\")'
	
	
	for(var tocsd = 1; tocsd < TOC_File_Order_Array.length; tocsd++)
				{
			//-------<(  For Sprint display only )>-------//
			//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    		//****************Modified 2019-03-08 (Brian)*************************************
    		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-

							if(courseType.indexOf("demo") === -1){
								if (bPageViews[toc_mod - 1][toc_lsn-1][tocsd-1] === 1){
									sprint_check = "chk_comp.png";
								}else{
									sprint_check = "chk_incomp.png";
								}
							}else{
								sprint_check = "chk_incomp.png";
							}
			//-------<(  For Sprint display only )>-------//	display:inline-block;	float: right;  style='text-align: left'; display: inline-block;
			//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
    		//****************Modified 2019-03-08 (Brian)*************************************
    		//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-;
	
	$(jcc_TOC_Flyout_Menu).append(" <button class='toc_fly_buttons' onclick='javascript:Page_Selection("+tocsd+",1)'><span style='display:inline-block; max-width:20ch'>"+toc_flyout_fn_array[tocsd]+"</span><span><img id='toc_fly_img_"+tocsd+"' src='jbuild_libs/images/"+sprint_check+"' alt='' style='width:20px; float: right; vertical-align: middle'></span></button>");		//<span style="color:darkolivegreen;font-weight:bold">dark green</span>		

				}

	
	$(jcc_TOC_Flyout_Menu).append("</div>");
	$(jcc_TOC_Flyout_Menu).append("</div>");
	$(jcc_TOC_Flyout_Menu).append("</div>");
	
	$("#Toc_flyout").append(jcc_TOC_Flyout_Menu);
	

}


function toc_back_to_main()
{
	bShowBookmark = false; // Added 20190628 - BRIAN											 
	//alert("Number(mod_lsn[0] - 1): " + Number(mod_lsn[0] - 1) + " | Number(mod_lsn[1]): " + Number(mod_lsn[1]) );

	//view_lesson(gtMain[0],gtMain[1],"TC")
	//-------<(  Fixed by Jack on 03/06/2019  )>-------
	view_lesson(Number(mod_lsn[0] - 1),Number(mod_lsn[1]),"TC")
		toc_fly_icon.classList.remove("fa-close");
		toc_fly_icon.classList.add("fa-bars");
		jcc_toc_fly_num = 0;
}




function toc_slide()
{
//alert("tocs: " + tocs);
//bar_close
	
//document.getElementById("bar_close").style.display = "none";

toc_fly_icon = document.getElementById("bar_close");

	
	switch(jcc_toc_fly_num)
		{
		
			case 0:

				jcc_toc_fly_num = 1;
				if(screen.width <= 450)
					{
						document.getElementById("toc_fMenu").style.width = "100%";
						toc_fly_icon.classList.remove("fa-bars");
						toc_fly_icon.classList.add("fa-close");
					}
				
				else
					{
						 document.getElementById("toc_fMenu").style.width = "250px";
						toc_fly_icon.classList.remove("fa-bars");
						toc_fly_icon.classList.add("fa-close");						
					}

			break;
				
			case 1:
				jcc_toc_fly_num = 0;
				 document.getElementById("toc_fMenu").style.width = "0%";
						
						toc_fly_icon.classList.remove("fa-close");
						toc_fly_icon.classList.add("fa-bars");
			
			break;				
		}
	
}


function TOC_Generator()
{
	//alert("TOC_File_Order_Array: " + TOC_File_Order_Array);
	//alert("toc_flyout_fn_array: " + toc_flyout_fn_array);
}

function info_box_event(ibe)
{
	//$('#myModal_'+ ibe).modal('show');
	
	document.getElementById("myModal_"+ ibe).style.display = "block";
	document.getElementById("myModal_"+ ibe).style.marginTop = "30px";
}

function close_Info_modal(ibx)
{

	document.getElementById("myModal_" + ibx).style.display = "none";	
}
				
				



function Key_Term_Modal(ktrm,kdef)
{
	
	document.getElementById("jb_header_text").innerHTML = ktrm;
	document.getElementById("jb_modal_main_text").innerHTML = kdef;
	document.getElementById("keyModal").style.display = "block";

	document.getElementById("keyModal").style.marginTop = "80px"; // edited on 20190618 - BRIAN
}

function close_keyterm() {
  document.getElementById("keyModal").style.display = "none";
  document.getElementById("jb_header_text").innerHTML = "";
  document.getElementById("jb_modal_main_text").innerHTML = "";	


document.getElementById('flip_10').style.pointerEvents = 'auto';	

flip_switch = 0;
	
}


function Source_Line_Modal(lnSource)
{
	//sourceModal
	document.getElementById("source_text").innerHTML = lnSource;
	document.getElementById("sourceModal").style.display = "block";	
}


function Lesson_Data_File(LDF)
{
Q_count = 0;
		jcc_test = Object.keys(LDF[0]); // Lesson_Data_File main Keys:
		hrData = Object.keys(LDF[0][jcc_test[0]]); // Page_Setup

	
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
												//C:\JBuilder_Creator\LOMA_302\Modules\Mod_01\images
											case "Assets_folder":
												//../../../jbuild_libs/css/hioc.css
												//img_loc = "images/";
												//alert(typeof moduleFolder);
												
												if(typeof moduleFolder !== "undefined")
													{
														img_loc = moduleFolder.slice(0, -5) + "images/";
														audio_loc = moduleFolder.slice(0, -5) + "audio/";
														pdf_loc = moduleFolder.slice(0, -5) + "pdf/";
													}
												if(typeof moduleFolder === "undefined")
													{
														img_loc = "images/";
														audio_loc = "audio/";
														pdf_loc = "pdf/";
													}
												
												//str = str.slice(0, -1);
												//alert("From Page setup moduleFolder: " + moduleFolder);
												//alert(portalSetup.Course_Folder);
												//img_loc = "LOMA_302/Modules/Mod_01/images/";
												//audio_loc = "audio/";
												//pdf_loc = "pdf/";
											break;												
											case "Lesson_Header_Color":
												document.getElementById("pg_header").style.backgroundColor = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
											case "Lesson_Title_Color":
												document.getElementById("Page_Title").style.color = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
												
											case "Lesson_Title_Text":
												
												//alert("typeof toc_list: " + typeof toc_list);
												//document.getElementById("Page_Title").innerHTML = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
												/*
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
												*/
											break;
										/*		
											case "Page_Title":
												document.getElementById("Lesson_Page_title").innerHTML = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
										*/		
											case "Progress_Bar_Color":
												document.getElementById("prg_Bar").style.backgroundColor = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
											case "Progress_Bar_Height":
												document.getElementById("prg_Bar").style.height = (LDF[0][jcc_test[ln_num]][hrData[pps]]);
											break;
												
											case "heroSize":
												Hero_Image_Size = ((LDF[0][jcc_test[ln_num]][hrData[pps]]));
												
												//alert("Boom!: " + LDF[0][jcc_test[ln_num]][hrData[pps + 2]]);
												//alert(pps);
												//hImage_alt
												
												//hImage
												
												//alert()
												
												if(LDF[0][jcc_test[ln_num]][hrData[pps + 1]].length > 0)
																{
																	header_image = LDF[0][jcc_test[ln_num]][hrData[pps + 1]];
																	header_alt = LDF[0][jcc_test[ln_num]][hrData[pps + 2]];
																	
																	//alert("header_alt: " + header_alt);
																		  
//Component_Engine("<img alt='"+LDF[0][jcc_test[ln_num]][hrData[pps + 2]]+"' src='"+img_loc+"" + LDF[0][jcc_test[ln_num]][hrData[pps + 1]] + "' alt='' style='width: " + Hero_Image_Size + "; height: " + Hero_Image_Size + "'>");			
																}
												
											break;	
											/*
											case "hImage":
												//alert( ((LDF[0][jcc_test[ln_num]][hrData[pps]])) );
												
												if(LDF[0][jcc_test[ln_num]][hrData[pps]].length > 0)
													{
														header_image = LDF[0][jcc_test[ln_num]][hrData[pps + 1]];
													}
												
												
											break;													
											*/	
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
	
				
	if(typeof header_image === "undefined")
		{
			Jcc_Comp_Maker = "<div id='jack_builder' class='col-lg-12 col-md-12 col-xs-12'></div>";	
		}
			
			
	if(typeof header_image !== "undefined")
		{

		Jcc_Comp_Maker = "<div style='width:100%;margin-top: 10px; margin-bottom: 10px'><img alt='"+header_alt+"' src='"+img_loc+"" + header_image + "' alt='' style='width: " + Hero_Image_Size + "; height: " + Hero_Image_Size + "'></div>";	
			
		//header_image = "undefined";
			
	//$(jcc_Comp_Creator).append("<div style='width:100%;margin-top: 10px;'><img alt='' src='"+img_loc+"" + header_image + "' alt='' style='width: " + Hero_Image_Size + "; height: " + Hero_Image_Size + "'></div>");
		}
		
						var SA_Data = Object.keys(LDF[0][jcc_test[ln_num]]);

						var sSelections = [];
							
						
						///////var snglBld = [];

					
						for(jcc = 0; jcc < SA_Data.length; jcc++)
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

										
											
											
//--------------------------------------------------											
//-------<(  Jcc_Table Code Begin  )>-------
//--------------------------------------------------
case "JB_Table":

//--------------------------------------------------											
//-------<(  Jcc_Table Code Begin  )>-------
//--------------------------------------------------
	case "JB_Table":
										
		new_jcc_tbl_id = "table_" + jcc;						
		var new_jcc_tbl_whole = sSelections[jcc][snglBld[jcc]];									

		var dev_width = ((window.innerWidth > 0) ? window.innerWidth : screen.width);									
											
//width:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Width+"
		
		//alert(dev_width);									
											
											
		var cp_tb_width	= new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Width;	
		var cp_tb_calc;
		var cp_tb_left;									
											
		if(cp_tb_width.slice(0,-1) < 100)
			{
				if(dev_width >= 768)
					{
						cp_tb_calc = (100 - cp_tb_width.slice(0,-1));
						cp_tb_left = (cp_tb_calc / 2) + "%";	

					}
				
				else
					
					{
						cp_tb_width = "100%";
						cp_tb_left = "0%";
					}
			}
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' align='center' style='margin-top:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Top_Margin+"; width:"+cp_tb_width+" ; margin-left:"+cp_tb_left+" ; padding:10px; overflow: auto; max-height:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Max_Height+";'>";	
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<table class='col-lg-12 col-md-12 col-xs-12' id='table_new"+jcc+"' style='width:100%;  border-collapse: collapse; padding:10px; text-align:center'>"; 
//width:"+new_jcc_tbl_whole[2].Whole_Table_Settings[0].Table_Width+"	margin-left:"+jb_new_left+"%;										
//width:"+jb_tbl_width+"; margin-left:"+jb_new_left+"%; margin-right:"+jb_new_left+"%;											

//alert(new_jcc_tbl_whole[0].Row_Heading_Color);											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";											
		for(var tbl_head = 0; tbl_head < new_jcc_tbl_whole[0].Col_Heading.length; tbl_head++)
			{
				
//=========================================================================================================
//-------<(  Cell border for headings )>-------				
//=========================================================================================================				
				if(typeof new_jcc_tbl_whole[0].Col_Heading[tbl_head].Border !== "undefined")
					{
						//var Border_Information = new_jcc_tbl_whole[0].Col_Heading[tbl_head].Border
						//alert(new_jcc_tbl_whole[0].Col_Heading[tbl_head].Border);
						
						var BI_array = new_jcc_tbl_whole[0].Col_Heading[tbl_head].Border.split(',');
					
						switch(BI_array[0])
							{
								//// none, block, left, top, right, bottom, LT, TR, LR, LB, BR, TB, LTR, LBR, TLB, TRB	
								case "LT":
								case "TR":
								case "LR":
								case "LB":									
								case "BR":
								case "TB":
									
									if(BI_array[0] === "LT")
										{
											tbl_border_array[0] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											tbl_border_array[1] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";

											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[2] = "border-right: 1px solid black;";
													tbl_border_array[3] = "border-bottom: 1px solid black;";
												}
											
											
										}

									if(BI_array[0] === "TR")
										{
											tbl_border_array[0] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											tbl_border_array[1] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";

											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[2] = "border-left: 1px solid black;";
													tbl_border_array[3] = "border-bottom: 1px solid black;";
												}
											
																					
										}

									if(BI_array[0] === "LR")
										{
											tbl_border_array[0] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											tbl_border_array[1] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";

											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[2] = "border-top: 1px solid black;";
													tbl_border_array[3] = "border-bottom: 1px solid black;";													
												}
											
									
										}

									if(BI_array[0] === "LB")
										{
											tbl_border_array[0] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											tbl_border_array[1] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";

											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[2] = "border-right: 1px solid black;";
													tbl_border_array[3] = "border-top: 1px solid black;";	
												}
											
								
										}

									if(BI_array[0] === "BR")
										{
											tbl_border_array[0] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											tbl_border_array[1] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											
											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[2] = "border-top: 1px solid black;";
													tbl_border_array[3] = "border-left: 1px solid black;";	
												}
									
										}

									if(BI_array[0] === "TB")
										{
											tbl_border_array[0] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											tbl_border_array[1] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											
											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[2] = "border-left: 1px solid black;";
													tbl_border_array[3] = "border-right: 1px solid black;";	
												}
									
										}	
									
		New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];
									
									break;
									
								case "LTR":
								case "LBR":
								case "TLB":	
								case "TRB":	
		//header_line_fix = "border-top: 1px solid black; border-bottom: 1px solid black; border-right: 1px solid black;"
									
									//"Border":"LTR,4px,solid,#5f25a0"
									
									//alert(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge);
									
									
									if(BI_array[0] === "LTR")  // "Border":"LTR,#5f25a0,4px"
											{
												tbl_border_array[0] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[1] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[2] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												
												if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
													{
														tbl_border_array[3] = "border-bottom: 1px solid black;";
													}
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];			
								
								//alert(New_Border_Code);				
												
											}

										if(BI_array[0] === "LBR")
											{
												tbl_border_array[0] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[1] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[2] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												
												if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
													{
														tbl_border_array[3] = "border-top: 1px solid black;";
													}
												

								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
											}
										if(BI_array[0] === "TLB")
											{
												tbl_border_array[0] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[1] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[2] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												
														if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
															{
																tbl_border_array[3] = "border-right: 1px solid black;";
															}


												
												
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
											}
										
										if(BI_array[0] === "TRB")
											{
												tbl_border_array[0] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[1] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												tbl_border_array[2] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
												
												if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
													{
														tbl_border_array[3] = "border-left: 1px solid black;";
													}
												
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
											}
									
									
								New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];	
									//alert(new_jcc_tbl_whole[0].Col_Heading[tbl_head].Border.length);
									
									
									
								break;
									
								case "block":
								case "left":
								case "top":	
								case "bottom":
								case "right":
									
									if(BI_array[0] === "block")
										{
											New_Border_Code[tbl_head] = "border:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
										}
									
									if(BI_array[0] === "left")
										{
											tbl_border_array[0] = "border-left:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											
											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
														tbl_border_array[1] = "border-top: 1px solid black;";
														tbl_border_array[2] = "border-right: 1px solid black;";
														tbl_border_array[3] = "border-bottom: 1px solid black;";
												}
											

							New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
										}
									
									if(BI_array[0] === "top")
										{
											tbl_border_array[0] = "border-top:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											
											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[1] = "border-left: 1px solid black;";
													tbl_border_array[2] = "border-right: 1px solid black;";
													tbl_border_array[3] = "border-bottom: 1px solid black;";
												}

							New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
										}
									
									if(BI_array[0] === "bottom")
										{
											tbl_border_array[0] = "border-bottom:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											
											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[1] = "border-top: 1px solid black;";
													tbl_border_array[2] = "border-right: 1px solid black;";
													tbl_border_array[3] = "border-left: 1px solid black;";													
												}
												

							New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
										}
									
									if(BI_array[0] === "right")
										{
											tbl_border_array[0] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											
											if(new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge !== "true")
												{
													tbl_border_array[1] = "border-top: 1px solid black;";
													tbl_border_array[2] = "border-left: 1px solid black;";
													tbl_border_array[3] = "border-bottom: 1px solid black;";													
												}
												

							New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
										}

								break;	
							}
					}
				
				
//=========================================================================================================
//-------<(  Cell border for headings end )>-------				
//=========================================================================================================	
				
//=========================================================================================================
//-------<( Cell Color for Headings )>-------				
//=========================================================================================================					
				if(typeof new_jcc_tbl_whole[0].Col_Heading[tbl_head].Cell_Color !== "undefined")
					{
						New_Cell_Color[tbl_head] = new_jcc_tbl_whole[0].Col_Heading[tbl_head].Cell_Color;
						//alert(new_jcc_tbl_whole[0].Col_Heading[tbl_head].Cell_Color);
					}
				else
					{
						New_Cell_Color[tbl_head] = new_jcc_tbl_whole[0].Row_Heading_Color;	
					}
				
				
				//Row_Heading_Font_Whole
//=========================================================================================================
//-------<( Cell Color for Headings )>-------				
//=========================================================================================================					

/*				
var New_Text_Alignment = [];
var New_Font_Array = [];
*/				
				
//=========================================================================================================
//-------<( Text & Font for Headings )>-------				
//=========================================================================================================	
				
				if(typeof new_jcc_tbl_whole[0].Col_Heading[tbl_head].Txt_Font_Settings !== "undefined")
					{
						TFS_array = new_jcc_tbl_whole[0].Col_Heading[tbl_head].Txt_Font_Settings.split(',');
						
						New_Text_Font[0] = "text-align:" + TFS_array[0] + ";" ;
						New_Text_Font[1] = "color:" + TFS_array[1] + ";" ;
						New_Text_Font[2] = "font-weight:" + TFS_array[2] + ";" ;
						New_Text_Font[3] = "font-style:" + TFS_array[3] + ";" ;
						
						New_Text_Alignment[tbl_head] = New_Text_Font[0];
						New_Text_Font_Array[tbl_head] = New_Text_Font[1] + New_Text_Font[2] + New_Text_Font[3];
						
						New_Font_Array[tbl_head] = TFS_array[4];

					}
						else
					{
						var TFS_Global_Array = new_jcc_tbl_whole[0].Row_Heading_Font_Whole.split(',');
						
						New_Text_Font[0] = "text-align:" + TFS_Global_Array[0] + ";" ;
						New_Text_Font[1] = "color:" + TFS_Global_Array[1] + ";" ;
						New_Text_Font[2] = "font-weight:" + TFS_Global_Array[2] + ";" ;
						New_Text_Font[3] = "font-style:" + TFS_Global_Array[3] + ";" ;
						
						New_Text_Alignment[tbl_head] = New_Text_Font[0];
						New_Text_Font_Array[tbl_head] = New_Text_Font[1] + New_Text_Font[2] + New_Text_Font[3];
						
						New_Font_Array[tbl_head] = TFS_Global_Array[4];

					}
				

//=========================================================================================================
//-------<( Text & Font for Headings )>-------				
//=========================================================================================================	

//tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3]				
				
				
				//alert(typeof new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge);
				//if(typeof New_Border_Code[tbl_head] === "undefined")
					//{
				
				
				
						if(typeof new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge === "undefined")
								{
									//alert("new_jcc_tbl_whole[0].Col_Heading["+tbl_head+"].merge: " + new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge);
									New_Border_Code[tbl_head] = "border: 1px solid black";
								}
									else
								{
									New_Border_Code[tbl_head] = "border: 0px solid black";
								}
						/*
						if(typeof new_jcc_tbl_whole[0].Col_Heading[tbl_head].merge === "true");
								{
									
								}
						*/
							
					//} 
				
				
			
				
				
				if(typeof New_Text_Alignment[tbl_head] === "undefined")
					{
						New_Text_Alignment[tbl_head] = "text-align:left;"
					}
				
				if(typeof New_Font_Array[tbl_head] === "undefined")
					{
						New_Font_Array[tbl_head] = "jb7";
					}
				
				//alert("New_Font_Array[tbl_head]: " + New_Font_Array[tbl_head]);
				
			
				
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<th style='"+New_Text_Alignment[tbl_head]+" "+New_Border_Code[tbl_head]+" ; padding:10px; background-color:"+New_Cell_Color[tbl_head]+";height:"+new_jcc_tbl_whole[0].Row_Heading_Height+"'><"+New_Font_Array[tbl_head]+" style='"+New_Text_Font_Array[tbl_head]+"'>"+new_jcc_tbl_whole[0].Col_Heading[tbl_head].Heading+"</"+New_Font_Array[tbl_head]+"></th>";
				
				
			}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";

//New_Border_Code[tbl_head] = "";											
//	

//=========================================================================================================
//-------<( Data row code begin  )>-------				
//=========================================================================================================												
											
		for(var data_row_num = 0; data_row_num < new_jcc_tbl_whole[1].Row_Information.length; data_row_num++)
			{

				
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";
				for(var data_row_info = 0; data_row_info < new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data.length ;data_row_info++)
					{

					

//=========================================================================================================
//-------<(  Cell border for Data Row )>-------				
//=========================================================================================================				
			
			if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Border !== "undefined")
					{

						
						var DR_array = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Border.split(',');

	
						switch(DR_array[0])
							{
								//// none, block, left, top, right, bottom, LT, TR, LR, LB, BR, TB, LTR, LBR, TLB, TRB	
								case "LT":
								case "TR":
								case "LR":
								case "LB":									
								case "BR":
								case "TB":

									
									
									
									if(DR_array[0] === "LT")
										{
											//alert("test: " + new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge);
											
											tbl_rc_border_array[0] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											tbl_rc_border_array[1] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											
									if(new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "true")
											{
												tbl_rc_border_array[2] = "border-right: 1px solid black;";
												tbl_rc_border_array[3] = "border-bottom: 1px solid black;";	
											}										
										}									

									if(DR_array[0] === "TR")
										{
												tbl_rc_border_array[0] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[1] = "border-right:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";

									if(new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "true")
											{
												tbl_rc_border_array[2] = "border-left: 1px solid black;";
												tbl_rc_border_array[3] = "border-bottom: 1px solid black;";	
											}										
										}									
									
									if(DR_array[0] === "LR")
										{
											tbl_rc_border_array[0] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											tbl_rc_border_array[1] = "border-right:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";

									if(new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "true")
											{
												tbl_rc_border_array[2] = "border-top: 1px solid black;";
												tbl_rc_border_array[3] = "border-bottom: 1px solid black;";	
											}										
										}
									
									if(DR_array[0] === "LB")
										{
											tbl_rc_border_array[0] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											tbl_rc_border_array[1] = "border-botton:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";

									if(new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "true")
											{
												tbl_rc_border_array[2] = "border-right: 1px solid black;";
												tbl_rc_border_array[3] = "border-top: 1px solid black;";
											}										
										}	
									
									if(DR_array[0] === "BR")
										{
											tbl_rc_border_array[0] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											tbl_rc_border_array[1] = "border-right:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";

										if(new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "true")
											{
												tbl_rc_border_array[2] = "border-top: 1px solid black;";
												tbl_rc_border_array[3] = "border-tight: 1px solid black;";	
											}										
										}
									
									if(DR_array[0] === "TB")
										{
											tbl_rc_border_array[0] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											tbl_rc_border_array[1] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";

										if(new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].merge !== "true")
											{
												tbl_rc_border_array[2] = "border-right: 1px solid black;";
												tbl_rc_border_array[3] = "border-left: 1px solid black;";
											}										
										}									

		New_Data_Border_Code[data_row_num] = tbl_rc_border_array[0] + " " + tbl_rc_border_array[1] + " " + tbl_rc_border_array[2] + " " + tbl_rc_border_array[3];
					//alert("MORGAN! " + New_Data_Border_Code[data_row_num]);				
									
								break;
									
								case "LTR":
								case "LBR":
								case "TLB":
								case "TRB":
									if(DR_array[0] === "LTR")  // "Border":"LTR,#5f25a0,4px"
											{
												tbl_rc_border_array[0] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[1] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[2] = "border-right:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												

												tbl_bordetbl_rc_border_arrayr_array[3] = "border-bottom: 1px solid black;";
											
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];			
								
								//alert(New_Border_Code);				
												
											}

										if(DR_array[0] === "LBR")
											{
												tbl_rc_border_array[0] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[1] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[2] = "border-right:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												

												tbl_rc_border_array[3] = "border-top: 1px solid black;";
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
											}
										if(DR_array[0] === "TLB")
											{
												tbl_rc_border_array[0] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[1] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[2] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";


												tbl_rc_border_array[3] = "border-right: 1px solid black;";
											
												
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
											}
										
										if(DR_array[0] === "TRB")
											{
												tbl_rc_border_array[0] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[1] = "border-right:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												tbl_rc_border_array[2] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
												

												tbl_rc_border_array[3] = "border-left: 1px solid black;";
											
												
								//New_Border_Code[tbl_head] = tbl_border_array[0] + " " + tbl_border_array[1] + " " + tbl_border_array[2] + " " + tbl_border_array[3];				
											}
									
									
	New_Data_Border_Code[data_row_num] = tbl_rc_border_array[0] + " " + tbl_rc_border_array[1] + " " + tbl_rc_border_array[2] + " " + tbl_rc_border_array[3];	
								
								break;

								case "block":
								case "left":
								case "top":	
								case "bottom":
								case "right":
									
									if(DR_array[0] === "block")
										{
		New_Data_Border_Code[data_row_num] = "border:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
										}
									
									if(DR_array[0] === "left")
										{
											tbl_rc_border_array[0] = "border-left:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";


											tbl_rc_border_array[1] = "border-top: 1px solid black;";
											tbl_rc_border_array[2] = "border-right: 1px solid black;";
											tbl_rc_border_array[3] = "border-bottom: 1px solid black;";
										
		New_Data_Border_Code[data_row_num] = tbl_rc_border_array[0] + " " + tbl_rc_border_array[1] + " " + tbl_rc_border_array[2] + " " + tbl_rc_border_array[3];				
										}
									
									if(DR_array[0] === "top")
										{
											tbl_rc_border_array[0] = "border-top:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											
											
											tbl_rc_border_array[1] = "border-left: 1px solid black;";
											tbl_rc_border_array[2] = "border-right: 1px solid black;";
											tbl_rc_border_array[3] = "border-bottom: 1px solid black;";
											
		New_Data_Border_Code[data_row_num] = tbl_rc_border_array[0] + " " + tbl_rc_border_array[1] + " " + tbl_rc_border_array[2] + " " + tbl_rc_border_array[3];				
										}
									
									if(DR_array[0] === "bottom")
										{
											tbl_rc_border_array[0] = "border-bottom:" + DR_array[1] + " " + DR_array[2] + " " + DR_array[3] + ";";
											

											tbl_rc_border_array[1] = "border-top: 1px solid black;";
											tbl_rc_border_array[2] = "border-right: 1px solid black;";
											tbl_rc_border_array[3] = "border-left: 1px solid black;";
										
		New_Data_Border_Code[data_row_num] = tbl_rc_border_array[0] + " " + tbl_rc_border_array[1] + " " + tbl_rc_border_array[2] + " " + tbl_rc_border_array[3];				
										}
									
									if(BI_array[0] === "right")
										{
											tbl_rc_border_array[0] = "border-right:" + BI_array[1] + " " + BI_array[2] + " " + BI_array[3] + ";";
											

											tbl_rc_border_array[1] = "border-top: 1px solid black;";
											tbl_rc_border_array[2] = "border-left: 1px solid black;";
											tbl_rc_border_array[3] = "border-bottom: 1px solid black;";
											
		New_Data_Border_Code[data_row_num] = tbl_rc_border_array[0] + " " + tbl_rc_border_array[1] + " " + tbl_rc_border_array[2] + " " + tbl_rc_border_array[3];				
										}

								break;									
	
						}
						
				}
				
				
//=========================================================================================================
//-------<(  Cell border for Data Row )>-------				
//=========================================================================================================						
						
						
//===========================================================
//-------<( Data row color begin )>-------				
//===========================================================

					if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Height !== "undefined")	
						{
							Row_Data_Height_Array[data_row_num] = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Height;
							
						}
					
					/*	
					if(typeof Row_Data_Color[data_row_num] = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Height !== "undefined")
						{
							Row_Data_Height_Array[data_row_num] = Row_Data_Color[data_row_num] = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Height;
							alert(Row_Data_Height_Array[data_row_num]);
						}
					*/	
						
//Cell_Color	Border		Row_Data_Height	
				
//alert( new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Color ); 
				
//alert( new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Cell_Color );				

					if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Cell_Color !== "undefined")
						{
							Row_Data_Color[data_row_num] = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Cell_Color;
						}
							else
						{
							Row_Data_Color[data_row_num] = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Color
						}

//===========================================================
//-------<( Data row color end )>-------				
//===========================================================						
					
						
//===========================================================
//-------<( Data row border begin )>-------	Txt_Font_Settings			
//===========================================================							
						
						
//===========================================================
//-------<( Data row border end )>-------				
//===========================================================
						
//===========================================================
//-------<( Data row Font Settings begin )>-------				
//===========================================================	
						if(typeof new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Txt_Font_Settings !== "undefined")
							{
								TFS_array = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Txt_Font_Settings.split(',');
						
								//alert(TFS_array);
								
									New_Text_Font[0] = "text-align:" + TFS_array[0] + ";" ;
									New_Text_Font[1] = "color:" + TFS_array[1] + ";" ;
									New_Text_Font[2] = "font-weight:" + TFS_array[2] + ";" ;
									New_Text_Font[3] = "font-style:" + TFS_array[3] + ";" ;

									New_Text_Alignment[data_row_num] = New_Text_Font[0];
									New_Text_Font_Array[data_row_num] = New_Text_Font[1] + New_Text_Font[2] + New_Text_Font[3];

									New_Font_Array[data_row_num] = TFS_array[4];
								
								//alert("1: " + New_Text_Alignment[data_row_num]);
								
							}	
								else
							{
								//Row_Data_Font_Whole
								TFS_array = new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Font_Whole.split(',');
						
								//new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data_Font_Whole
								//alert(TFS_array);
								
									New_Text_Font[0] = "text-align:" + TFS_array[0] + ";" ;
									New_Text_Font[1] = "color:" + TFS_array[1] + ";" ;
									New_Text_Font[2] = "font-weight:" + TFS_array[2] + ";" ;
									New_Text_Font[3] = "font-style:" + TFS_array[3] + ";" ;

									New_Text_Alignment[data_row_num] = New_Text_Font[0];
									New_Text_Font_Array[data_row_num] = New_Text_Font[1] + New_Text_Font[2] + New_Text_Font[3];

									New_Font_Array[data_row_num] = TFS_array[4];
								
								//alert("2: " + New_Text_Alignment[data_row_num]);
							}
						
//===========================================================
//-------<( Data row Font Settings end )>-------				
//===========================================================
				
				if(typeof New_Data_Border_Code[data_row_num] === "undefined")
				//if(typeof New_Data_Border_Code[data_row_info] === "undefined")
					{

						//New_Data_Border_Code[data_row_num] = "border: 1px solid black"
					} 
						else
					{

					}

						Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='"+New_Text_Alignment[data_row_num]+" background-color:"+Row_Data_Color[data_row_num]+";height:"+Row_Data_Height_Array[data_row_num]+";"+New_Data_Border_Code[data_row_num]+"'><jb7 style='"+New_Text_Font_Array[data_row_num]+"'>"+new_jcc_tbl_whole[1].Row_Information[data_row_num].Row_Data[data_row_info].Data_Info+"</jb7></td>";

						New_Data_Border_Code[data_row_num] = "";
					}
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";	

			}

Jcc_Comp_Maker = Jcc_Comp_Maker + "</table>";										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
											
break;	
//--------------------------------------------------											
//-------<(  Jcc_Table Code End  )>-------
//--------------------------------------------------											
break;	
//--------------------------------------------------											
//-------<(  Jcc_Table Code End  )>-------
//--------------------------------------------------											
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Table_Builder original code begin )>-------	SA									
//-------------------------------------------------------------------------------------------------------------										
											
									case "Table_Builder":
											tbl_id = "table_" + jcc;
											var new_tbl	= sSelections[jcc][snglBld[jcc]]; 
											var total_rows = 0;
											var total_columns;
											
											/*
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
											*/
				
								if(typeof new_tbl[0].tbl_column_text_color !== "undefined")
									{
										column_text_color = new_tbl[0].tbl_column_text_color;
									}
								if(typeof new_tbl[0].tbl_column_text_color === "undefined")			
									{
										column_text_color = "#000000";	
									}													

											
											
										
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+new_tbl[0].top_margin+";border-style:"+new_tbl[0].Table_Border_Style+"; border-width: "+new_tbl[0].Table_Border_width+"; border-color:"+new_tbl[0].Table_Border_color+"; border-radius:"+new_tbl[0].Table_Border_radius+"; padding:"+new_tbl[0].Table_Border_padding+"; background-color:"+new_tbl[0].Table_Color+";'>";

											if(new_tbl[0].caption.length > 0)
												{

							
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
				
//alert(sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading_Background_Color);
//alert(sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading_Padding);																	
																	
										if(sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading_Background_Color !== "undefined")
												{
													
													tbl_head_color = sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading_Background_Color;
												}
																	
																	
																	
																	
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<table id='table_"+jcc+"' style='width:100%; border-collapse: collapse;'><thead style='background-color:"+tbl_head_color+"'><tr>";
															
																	
																	
							total_columns = sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading.length;										
																	
					for(var thd = 0; thd < sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading.length; thd++)
							{
														
																			
								if(typeof sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].colNumber === 'undefined')				{
																// Table_Heading_Padding Table_Heading_Alignment
									Jcc_Comp_Maker = Jcc_Comp_Maker + "<th style='text-align:"+new_tbl[1].Table_Heading_Alignment+"; padding:"+new_tbl[1].Table_Heading_Padding+";height:"+new_tbl[1].Table_Heading_Height+"'><"+new_tbl[0].tbl_column_font+">"+ sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].tbl_column +"</"+new_tbl[0].tbl_column_font+"></th>";	
																
																}
																			
																			
								if(typeof sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].colNumber !== 'undefined')				{
																
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<th style='padding:"+new_tbl[1].Table_Heading_Padding+";' colspan='"+sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].colNumber+"'>"+ sSelections[jcc][snglBld[jcc]][tbl_num].Table_Heading[thd].tbl_column +"</th>";	
																
																}
						


							}
																	
															Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr></thead>";		

	
																break;  //back_color
			
																
																default:
																	//alert("tbl_num: " + tbl_num);
																	//alert("new_tbl.length: " + new_tbl.length);
																	
																	
																	Jcc_Comp_Maker = Jcc_Comp_Maker + "<tr>";
																	for(var trw = 0; trw < sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data.length; trw++)
																		{
																			//alert("trw: " + trw);
																			if(tbl_num % 2 === 0)
																				{
															switch(tbl_num)
																{
																	case 2:
																		
																	//back_color
																		
																	//alert(sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].back_color);	
																		
																		
																	if(tbl_top_data_color !== "")
																		{
												
																			
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='background-color:"+tbl_top_data_color+"'>"+ sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].tbl_column +"</td>";

																			
																		}
																	if(tbl_top_data_color === "")
																		{
																			//alert(new_tbl[0].tbl_column_text_color);
																			//Row_Data_Align
																			
																			
																			Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='text-align:"+new_tbl[1].Row_Data_Align+" ; color:"+column_text_color+" ;background-color:"+tbl_even_color+"'><"+new_tbl[0].tbl_column_font+">"+ sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].tbl_column +"</"+new_tbl[0].tbl_column_font+"></td>";
																		}																		
																	break;
																		
																	default:
																		Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='text-align:"+new_tbl[1].Row_Data_Align+" ; color:"+column_text_color+"; background-color:"+tbl_even_color+"'><"+new_tbl[0].tbl_column_font+">"+ sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].tbl_column +"</"+new_tbl[0].tbl_column_font+"></td>";
																		
																	break;	
																		
																}
																								
																				}
																			
																			if(tbl_num % 2 === 1)
																				{
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<td style='text-align:"+new_tbl[1].Row_Data_Align+" ; color:"+column_text_color+"; background-color:"+tbl_odd_color+"'><"+new_tbl[0].tbl_column_font+">"+ sSelections[jcc][snglBld[jcc]][tbl_num].Row_Data[trw].tbl_column +"</"+new_tbl[0].tbl_column_font+"></td>";
																				}
																			
																			
																		}
																	Jcc_Comp_Maker = Jcc_Comp_Maker + "</tr>";
																			
																		
																		total_rows = (total_rows + 1);
																		
																break;
															}
														
													}
				
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</table>";
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='xtra_"+ jcc +"'></div>";
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
											
											//alert("total_columns: " + total_columns);
											//alert("total_rows: " + total_rows);
											

									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Table_Builder code end )>-------	SA									
//-------------------------------------------------------------------------------------------------------------									
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Video New code begin )>-------	SA									
//-------------------------------------------------------------------------------------------------------------											

									case "Video_Files_New":

var new_vid	= sSelections[jcc][snglBld[jcc]][0];

					//Expert_View_Alt						
					//alert(new_vid.Expert_View_Alt);				
											
					switch(new_vid.Expert_View)
						{
							case "yes":
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='video_container' style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><img class='expert_img_pos' style=' position: absolute; top:"+new_vid.top_margin+"; right: 0px' src='../../../jbuild_libs/images/expert_video.png' width='20%' height='auto' alt=''/><video width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";
								
//-------<( Added to check for portal or development )>-------
					if(typeof moduleFolder !== "undefined")
						{
							//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><img id='xprtv' style='position: absolute; top:"+new_vid.top_margin+"; right: 12px' src='jbuild_libs/images/expert_video.png' alt='"+new_vid.Expert_View_Alt+"'>";
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";							
						}
					
					if(typeof moduleFolder === "undefined")
						{
							//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><img id='xprtv' style='position: absolute; top:"+new_vid.top_margin+"; right: 12px' src='../../../jbuild_libs/images/expert_video.png' alt='"+new_vid.Expert_View_Alt+"'>";
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";								
						}								
//-------<( Added to check for portal or development )>-------								
								
								
							//jb_car_acc_wd  jb_mx_wd
								
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div class=\"bExpertVid\"><video class='jb_car_acc_wd' width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";// </div>								

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";								
							break;
								
							case "no": //jb_mx_wd
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><video class='jb_car_acc_wd' width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";// </div>
							
							break;	
						}
										//jb_mx_wd	
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_car_acc_wd' id='trans_" + jcc +"' style='display: none; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";									
					for(var trn = 1; trn < sSelections[jcc][snglBld[jcc]].length; trn++)
						{
							if(new_vid.Person_underline === "u")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+"><u>"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</u></"+new_vid.Person_font+"></p>";										
								}

							if(new_vid.Person_underline === "")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</"+new_vid.Person_font+"></p>";										
								}							
				
							
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_vid.Transcript_Text_align+"; color:"+new_vid.Transcript_Text_color+"'><"+new_vid.Transcript_Text_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Transcript_Text +"</"+new_vid.Transcript_Text_font+"></p>";
						}						

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	

//=============================================================================================================
//=============================================================================================================											

// My Original
/*											
				var new_vid	= sSelections[jcc][snglBld[jcc]][0];

					//Expert_View_Alt						
					//alert(new_vid.Expert_View_Alt);				
											
					switch(new_vid.Expert_View)
						{
							case "yes":
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='video_container' style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><img class='expert_img_pos' style=' position: absolute; top:"+new_vid.top_margin+"; right: 0px' src='../../../jbuild_libs/images/expert_video.png' width='20%' height='auto' alt=''/><video width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";
								
//-------<( Added to check for portal or development )>-------
					if(typeof moduleFolder !== "undefined")
						{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><img id='xprtv' style='position: absolute; top:"+new_vid.top_margin+"; right: 12px' src='jbuild_libs/images/expert_video.png' alt='"+new_vid.Expert_View_Alt+"'>";								
						}
					
					if(typeof moduleFolder === "undefined")
						{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'><img id='xprtv' style='position: absolute; top:"+new_vid.top_margin+"; right: 12px' src='../../../jbuild_libs/images/expert_video.png' alt='"+new_vid.Expert_View_Alt+"'>";								
						}								
//-------<( Added to check for portal or development )>-------								
								
								
							
								
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><video class='jb_mx_wd' width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";// </div>								

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";								
							break;
								
							case "no": //jb_mx_wd
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div><video class='jb_mx_wd' width='100%;' controls><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+jcc+");'>Open Transcript</button></div></div></div>";// </div>
							
							break;	
						}
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='trans_" + jcc +"' style='display: none; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";									
					for(var trn = 1; trn < sSelections[jcc][snglBld[jcc]].length; trn++)
						{
							if(new_vid.Person_underline === "u")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+"><u>"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</u></"+new_vid.Person_font+"></p>";										
								}

							if(new_vid.Person_underline === "")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Person +"</"+new_vid.Person_font+"></p>";										
								}							
				
							
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_char_para' style='text-align:"+new_vid.Transcript_Text_align+"; color:"+new_vid.Transcript_Text_color+"'><"+new_vid.Transcript_Text_font+">"+ sSelections[jcc][snglBld[jcc]][trn].Transcript_Text +"</"+new_vid.Transcript_Text_font+"></p>";
						}						

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	

//=============================================================================================================	
*/
									break;
									
//-------------------------------------------------------------------------------------------------------------	
//-------<( Video New code end )>-------											
//-------------------------------------------------------------------------------------------------------------											


case "Inline_Source_File":
											
		//alert("Inline_Source_File called");									
										
var source_new	= sSelections[jcc][snglBld[jcc]];
								
											
	for(var sfa = 0; sfa < source_new.length; sfa++)
		{
			source_Array[sfa] = source_new[sfa].Source_Info;//[sfa];
			//alert("source_Array[sfa]: " + source_Array[sfa]);
		}
											
											
//source_Array											
											
											
break;												
											
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
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+Image_Multi[0].top_margin+";height: 100%; background-color:"+Image_Multi[0].main_background_color+"; padding-bottom: 10px;'>";
		
									
			for(var im_ttl = 1; im_ttl <= Image_Multi[0].total_images; im_ttl++)  
				{
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-"+im_rnbr+" col-md-"+im_rnbr+" col-xs-12'>";
					
			
		if(typeof Image_Multi[im_ttl].image_file_tag === "undefined")
			{
				ADA_check_Array[jcc] = "Image_Multi needs the Alt tag fields added."
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='width:"+Image_Multi[im_ttl].image_width+"; margin-top: "+Image_Multi[im_ttl].image_top_margin+"; border-style: "+Image_Multi[im_ttl].image_border_style+"; border-color: "+Image_Multi[im_ttl].image_border_color+"; border-width: "+Image_Multi[im_ttl].image_border_width+"; border-radius: "+Image_Multi[im_ttl].image_border_radius+"' src='"+img_loc+"" + Image_Multi[im_ttl].image_file + "' alt=''>"; 					
			}
					
					
		if(typeof Image_Multi[im_ttl].image_file_tag !== "undefined")			
					{
			if(Image_Multi[im_ttl].image_file_tag.length <= 125)
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='width:"+Image_Multi[im_ttl].image_width+"; margin-top: "+Image_Multi[im_ttl].image_top_margin+"; border-style: "+Image_Multi[im_ttl].image_border_style+"; border-color: "+Image_Multi[im_ttl].image_border_color+"; border-width: "+Image_Multi[im_ttl].image_border_width+"; border-radius: "+Image_Multi[im_ttl].image_border_radius+"' src='"+img_loc+"" + Image_Multi[im_ttl].image_file + "' alt='"+Image_Multi[im_ttl].image_file_tag+"'>"; //role='button'						
				}
					
					
			if(Image_Multi[im_ttl].image_file_tag.length > 125)
				{

					
					Alt_Tag_Image_Data[im_ttl] = Image_Multi[im_ttl].image_file_tag;

					Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='width:"+Image_Multi[im_ttl].image_width+"; margin-top: "+Image_Multi[im_ttl].image_top_margin+"; border-style: "+Image_Multi[im_ttl].image_border_style+"; border-color: "+Image_Multi[im_ttl].image_border_color+"; border-width: "+Image_Multi[im_ttl].image_border_width+"; border-radius: "+Image_Multi[im_ttl].image_border_radius+"' src='"+img_loc+"" + Image_Multi[im_ttl].image_file + "' alt='Select image for more information' role='button' onclick='alt_tag_lib("+im_ttl+")'>"; 
					
					
				}
					
						}
					
					
					
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";


				}
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
											
											
									break;	
										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image 3 2 1 rows code end )>-------											
//-------------------------------------------------------------------------------------------------------------												//
											
										case "JB_LRM":
											
											var J_Merge	= sSelections[jcc][snglBld[jcc]]; //[0]
											//background_color
											

											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";// Begin
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='lrm_window' style='background-color:"+J_Merge[0].background_color+"; height:500px;'>"; //lrm_window begin
											
											
							/*				
								  width: 800px;
								  height: 350px;
								  position: relative;
							*/	
											

								
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='image_one'><img id='lrm_01' alt='' src='"+img_loc+"" + J_Merge[0].left_image + "'></div>";
											
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='image_two'><img id='lrm_02' alt='' src='"+img_loc+"" + J_Merge[0].right_image + "'></div>";
											
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='image_three'><img id='lrm_03' alt='' src='"+img_loc+"" + J_Merge[0].center_image + "'></div>";

											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // lrm_window end
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // End
											
											
											
				
											//LRM_setup();
										break;	
											
											
											
											
											
//	 <div id="swiffycontainer" style="width: 100%; height: 100%;"></div>
										case "JB_Swiffy":
											//alert("Swiffy Called");
											var swiffy_data = sSelections[jcc][snglBld[jcc]];
											
											
						
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:"+swiffy_data[0].top_margin+"; background-color:"+swiffy_data[0].background_color+"; padding-bottom: 10px;height:"+swiffy_data[0].height+"; width:"+swiffy_data[0].width+"'>";					
						
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='swiffycontainer_"+jcc+"' style='width: 100%; height: 100%;'></div>";
    											
	cur_swiffy_name[jcc] = swiffy_data[0].swiffy_file;
											
		//alert("cur_swiffy_name: " + cur_swiffy_name);						
											
	//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div role='button' onclick='Swiffy_Play(swiffycontainer_"+jcc+")'></div>";
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
								
Jcc_Comp_Maker = Jcc_Comp_Maker +"<div align='center' style='margin-top:20px;'><button type='button' class='btn btn-primary btn-sm' onclick='Swiffy_Play("+jcc+");'>Play Animation</button></div>";	
											
						Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
											
										
											
										break;	
										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Flip_Multi_New code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
case "Flip_Multi_New": //Flip_Multi											
									flip_card_data = sSelections[jcc][snglBld[jcc]];	
		
										
							
	var cd_sides = [];									
											
	switch(flip_card_data.length)
		{
			case 3:
				
				cd_sides[1] = Object.keys(flip_card_data[1]);
				cd_sides[2] = Object.keys(flip_card_data[2]);
			

				populate_flip_cards(cd_sides[1],1);
				populate_flip_cards(cd_sides[2],2);
				
//background-color:"+flip_card_data[0].main_background_color+"			
//main_background_color	
/*				
				"card_01_front_color":"#009539",
				"card_01_back_color":"#bf0d3f",				
*/				

/////flip_new_Array[0] = 1;  commented out on May 28, 2019
//======================================================================= 
//-------<(  Front of Card Begin  )>-------				
//=======================================================================
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' align='center' style='margin-top:"+flip_card_data[0].top_margin+"'>";	//outerBody
				
//-------<( Width of cards mainly for computer or tablet view, scales down for phone )>-------	
		if(window.innerWidth <= 500)
			{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_1' class='card ' style='width:100%'>"; // phone view	outerBody			
			}
				else  
			{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_1' class='card  jb_char_para' >"; //	style='width:100%'	 outerBody
			}
//-------<( Width of cards mainly for computer or tablet view, scales down for phone )>-------				
				
					
							setup_flip_cards(jcc,1);	
				//card_6_1

				//alert("flip_card_sMaker: " + flip_card_sMaker.list);
				//alert("jcc:" + jcc);
				
				////alert("Current Data: " + Object.keys(flip_card_data[1]) );  // Workd, Now I just need to add the logic for turning
																			// the jcc_flip_snip off and on 
				

//role='button' onclick='alt_tag_lib("+jcc+")'				
				
////Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='flip_10' role='button' onclick='jcc_flip_snip("+jcc+",1,0)' class='front'>";	//jcc_flip_snip("jcc",1,0)				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='flip_10' onclick='javascript:jcc_flip_snip("+jcc+",1,0)' class='front'>";	//jcc_flip_snip("jcc",1,0)
				
//-----------------------------------------------------------------------------------				
			if(flip_card_data[0].card_01_front_color.length > 0)
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' align='"+flip_card_data[0].card_01_front_align+"' style='background-color:"+flip_card_data[0].card_01_front_color+"'>";					
				}
					else
				{		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' align='"+flip_card_data[0].card_01_front_align+"' style='background-color:"+flip_card_data[0].main_background_color+"'>";
				}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";

			if(flip_card_data[0].card_01_front_title.length != 0)
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title' style='color:"+flip_card_data[0].card_01_title_text_front_color+"'>"+flip_card_data[0].card_01_front_title+"</h4>";
				}

				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='align-text:left; overflow-y: scroll; background-color:"+flip_card_data[0].card_01_front_scroll_area_color+" ;height:"+flip_card_data[0].flip_box_height+"'>";
				
				
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[1];
//-----------------------------------------------------------------------------------							
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";		
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				

//=======================================================================
//-------<(  Front of Card End  )>-------				
//=======================================================================				

//=======================================================================
//-------<(  Back of Card Begin  )>-------				
//=======================================================================
				
				
////alert("Current Data: " + Object.keys(flip_card_data[2]) );				
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='flip_11' onclick='javascript:jcc_flip_snip("+jcc+",1,1)' class='back'>";
//------------------------------------------------------------				
			if(flip_card_data[0].card_01_back_color.length > 0)
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' align='"+flip_card_data[0].card_01_back_align+"' style='background-color:"+flip_card_data[0].card_01_back_color+"'>";					
				}
					else
				{		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' align='"+flip_card_data[0].card_01_back_align+"' style='background-color:"+flip_card_data[0].main_background_color+"'>";
				}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
				if(flip_card_data[0].card_01_back_title.length != 0)
					{
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title'>Modal Back</h4>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title' style='color:"+flip_card_data[0].card_01_title_text_back_color+"'>"+flip_card_data[0].card_01_back_title+"</h4>";						
					}
//------------------------------------------------------------	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll; background-color:"+flip_card_data[0].card_01_back_scroll_area_color+" ; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[2];				
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";					

//=======================================================================
//-------<(  Back of Card End  )>-------				
//=======================================================================				
				

			break;
				
			case 5:

				//alert("Five Baby Yeah!");
				
				
				cd_sides[1] = Object.keys(flip_card_data[1]);
				cd_sides[2] = Object.keys(flip_card_data[2]);
				cd_sides[3] = Object.keys(flip_card_data[3]);
				cd_sides[4] = Object.keys(flip_card_data[4]);			

				populate_flip_cards(cd_sides[1],1);
				populate_flip_cards(cd_sides[2],2);
				populate_flip_cards(cd_sides[3],3);
				populate_flip_cards(cd_sides[4],4);
				
//=======================================================================
//-------<(  Front of Card Begin  )>-------				
//=======================================================================
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' align='center' style='margin-top:"+flip_card_data[0].top_margin+"'>";	//outerBody

			if(window.innerWidth <= 500)
					{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-top:20px;'>";
					}
				else
					{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12'>";
					}				
				
				
//-------<( Width of cards mainly for computer or tablet view, scales down for phone )>-------	
		if(window.innerWidth <= 500)
			{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_1' class='card' style='width:100%'>"; //card_"+jcc+"_1	 outerBody			
			}
				else
			{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_1' class='card jb_char_para' >"; //card_"+jcc+"_1	outerBody	style='width:100%'	
			}
//-------<( Width of cards mainly for computer or tablet view, scales down for phone )>-------					
				
							setup_flip_cards(jcc,1);	
				//card_6_1
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='javascript:jcc_flip_snip("+jcc+",1,0)' class='front'>";

//--------------------------------------------------------------------				
				
			if(flip_card_data[0].card_01_front_color.length > 0) //flip_card_data[0].card_01_front_align
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' align='"+flip_card_data[0].card_01_front_align+"' style='background-color:"+flip_card_data[0].card_01_front_color+"'>";					
				}
					else
				{		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' align='"+flip_card_data[0].card_01_front_align+"' style='background-color:"+flip_card_data[0].main_background_color+"'>";
				}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";

			if(flip_card_data[0].card_01_front_title.length != 0)
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title' style='color:"+flip_card_data[0].card_01_title_text_front_color+"'>"+flip_card_data[0].card_01_front_title+"</h4>";
				}// align='right'

				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll;background-color:"+flip_card_data[0].card_01_front_scroll_area_color+" ; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[1];
//--------------------------------------------------------------------				
/*				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title'>Modal Front</h4>";	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
			
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[1];
*/							
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";		
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				

//=======================================================================
//-------<(  Front of Card End  )>-------				
//=======================================================================				

//=======================================================================
//-------<(  Back of Card Begin  )>-------				
//=======================================================================
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='javascript:jcc_flip_snip("+jcc+",1,1)' class='back'>";
				
//----------------------------------
			if(flip_card_data[0].card_01_back_color.length > 0)
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' align='"+flip_card_data[0].card_01_back_align+"' style='background-color:"+flip_card_data[0].card_01_back_color+"'>";					
				}
					else
				{		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' align='"+flip_card_data[0].card_01_back_align+"' style='background-color:"+flip_card_data[0].main_background_color+"'>";
				}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";

			if(flip_card_data[0].card_01_back_title.length != 0)
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title' style='color:"+flip_card_data[0].card_01_title_text_back_color+"'>"+flip_card_data[0].card_01_back_title+"</h4>";
				}

				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll;background-color:"+flip_card_data[0].card_01_back_scroll_area_color+" ; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[2];
//----------------------------------				
/*				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title'>Modal Back</h4>";	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[2];				
*/				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";					

//=======================================================================
//-------<(  Back of Card End  )>-------				
//=======================================================================				
//---------------------<(  Between the two cards  )>---------------------
//=======================================================================
//-------<(  Front of Card Begin  )>-------				
//=======================================================================
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' align='center'>";	//outerBody
			if(window.innerWidth <= 500)
					{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-top:20px;'>";
					}
				else
					{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12'>";
					}
				
//-------<( Width of cards mainly for computer or tablet view, scales down for phone )>-------	
			
		if(window.innerWidth <= 500)
			{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_2' class='card' style='width:100%'>"; //card_"+jcc+"_1 outerBody			
			}
				else
			{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_2' class='card jb_char_para'>"; //card_"+jcc+"_1  outerBody	style='width:100%'			
			}
//-------<( Width of cards mainly for computer or tablet view, scales down for phone )>-------					
				
				
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_2' class='card outerBody'>"; //card_"+jcc+"_1					
							setup_flip_cards(jcc,2);	
				//card_6_1
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='javascript:jcc_flip_snip("+jcc+",2,0)' class='front'>";	//jcc_flip_snip("jcc",1,0)
//----------------------------------
			if(flip_card_data[0].card_02_front_color.length > 0)
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' align='"+flip_card_data[0].card_02_front_align+"' style='background-color:"+flip_card_data[0].card_02_front_color+"'>";					
				}
					else
				{		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' align='"+flip_card_data[0].card_02_front_align+"' style='background-color:"+flip_card_data[0].main_background_color+"'>";
				}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";

			if(flip_card_data[0].card_02_front_title.length != 0)
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title' style='color:"+flip_card_data[0].card_02_title_text_front_color+"'>"+flip_card_data[0].card_02_front_title+"</h4>";
				}

				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll;background-color:"+flip_card_data[0].card_02_front_scroll_area_color+" ; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[3];
//----------------------------------				
/*				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title'>Modal Front</h4>";	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[3];
*/							
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";		
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				

//=======================================================================
//-------<(  Front of Card End  )>-------				
//=======================================================================				

//=======================================================================
//-------<(  Back of Card Begin  )>-------				
//=======================================================================
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='javascript:jcc_flip_snip("+jcc+",2,1)' class='back'>";
//------------------------------------------------------
			if(flip_card_data[0].card_02_back_color.length > 0)
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' align='"+flip_card_data[0].card_02_back_align+"' style='background-color:"+flip_card_data[0].card_02_back_color+"'>";					
				}
					else
				{		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' align='"+flip_card_data[0].card_02_back_align+"' style='background-color:"+flip_card_data[0].main_background_color+"'>";
				}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";

			if(flip_card_data[0].card_02_back_title.length != 0)
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title' style='color:"+flip_card_data[0].card_02_title_text_back_color+"'>"+flip_card_data[0].card_02_back_title+"</h4>";
				}

				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll;background-color:"+flip_card_data[0].card_02_back_scroll_area_color+" ; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[4];				
//------------------------------------------------------				
/*				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title'>Modal Back</h4>";	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[4];				
*/				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div></div></div>";					

//=======================================================================
//-------<(  Back of Card End  )>-------				
//=======================================================================					
				
			break;	
				
			case 7:
//alert("Seven Baby Yeah!");
				cd_sides[1] = Object.keys(flip_card_data[1]);
				cd_sides[2] = Object.keys(flip_card_data[2]);
				cd_sides[3] = Object.keys(flip_card_data[3]);
				cd_sides[4] = Object.keys(flip_card_data[4]);
				cd_sides[5] = Object.keys(flip_card_data[5]);
				cd_sides[6] = Object.keys(flip_card_data[6]);				

				populate_flip_cards(cd_sides[1],1);
				populate_flip_cards(cd_sides[2],2);
				populate_flip_cards(cd_sides[3],3);
				populate_flip_cards(cd_sides[4],4);
				populate_flip_cards(cd_sides[5],5);
				populate_flip_cards(cd_sides[6],6);					

//=======================================================================
//-------<(  Front of Card Begin  )>-------				
//======================================================================= outerBody_three
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' align='center' style='margin-top:"+flip_card_data[0].top_margin+"'>";	//outerBody
			if(window.innerWidth <= 500)
					{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-4 col-md-4 col-xs-12' style='margin-top:20px;'>";
					}
				else
					{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-4 col-md-4 col-xs-12'>";
					}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_1' class='card' style='width:100%'>"; //card_"+jcc+"_1 outerBody
				
							setup_flip_cards(jcc,1);	
				//card_6_1
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='javascript:jcc_flip_snip("+jcc+",1,0)' class='front'>";	//jcc_flip_snip("jcc",1,0)	

/*			
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_1' class='card' style='width:100%'>"; //card_"+jcc+"_1	 outerBody			
			}
				else
			{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_1' class='card jb_char_para' >"; //card_"+jcc+"_1	outerBody	style='width:100%'
*/				
				
//----------------------------------
			if(flip_card_data[0].card_01_front_color.length > 0)
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].card_01_front_color+"'>";					
				}
					else
				{		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
				}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";

			if(flip_card_data[0].card_01_front_title.length != 0)
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title' style='color:"+flip_card_data[0].card_01_title_text_front_color+"'>"+flip_card_data[0].card_01_front_title+"</h4>";
				}

				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll;background-color:"+flip_card_data[0].card_01_front_scroll_area_color+" ; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[1];
//----------------------------------				
				
/*				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title'>Modal Front</h4>";	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[1];
*/							
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";		
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				

//=======================================================================
//-------<(  Front of Card End  )>-------				
//=======================================================================				

//=======================================================================
//-------<(  Back of Card Begin  )>-------				
//=======================================================================
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='javascript:jcc_flip_snip("+jcc+",1,1)' class='back'>";	

//----------------------------------
			if(flip_card_data[0].card_01_back_color.length > 0)
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].card_01_back_color+"'>";					
				}
					else
				{		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
				}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";

			if(flip_card_data[0].card_01_back_title.length != 0)
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title' style='color:"+flip_card_data[0].card_01_title_text_back_color+"'>"+flip_card_data[0].card_01_back_title+"</h4>";
				}

				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll;background-color:"+flip_card_data[0].card_01_back_scroll_area_color+" ; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[2];
//----------------------------------				
				
/*				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title'>Modal Back</h4>";	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[2];				
*/				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";					

//=======================================================================
//-------<(  Back of Card End  )>-------				
//=======================================================================				
//---------------------<(  Between the two cards  )>---------------------
//======================================================================= outerBody_three
//-------<(  Front of Card Begin  )>-------				
//=======================================================================
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' align='center'>";	//outerBody
			if(window.innerWidth <= 500)
					{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-4 col-md-4 col-xs-12' style='margin-top:20px;'>";
					}
				else
					{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-4 col-md-4 col-xs-12'>";
					}
			
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_2' class='card' style='width:100%'>"; //card_"+jcc+"_1 outerBody
			
							setup_flip_cards(jcc,2);	
				//card_6_1
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='javascript:jcc_flip_snip("+jcc+",2,0)' class='front'>";	//jcc_flip_snip("jcc",1,0)

//----------------------------------
			if(flip_card_data[0].card_02_front_color.length > 0)
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].card_02_front_color+"'>";					
				}
					else
				{		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
				}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";

			if(flip_card_data[0].card_02_front_title.length != 0)
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title' style='color:"+flip_card_data[0].card_02_title_text_front_color+"'>"+flip_card_data[0].card_02_front_title+"</h4>";
				}

				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll;background-color:"+flip_card_data[0].card_02_front_scroll_area_color+" ; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[3];
//----------------------------------				
				
/*				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title'>Modal Front</h4>";	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[3];
*/							
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";		
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				

//=======================================================================
//-------<(  Front of Card End  )>-------				
//=======================================================================				

//=======================================================================
//-------<(  Back of Card Begin  )>-------				
//=======================================================================
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='javascript:jcc_flip_snip("+jcc+",2,1)' class='back'>";	

//----------------------------------
			if(flip_card_data[0].card_02_back_color.length > 0)
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].card_02_back_color+"'>";					
				}
					else
				{		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
				}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";

			if(flip_card_data[0].card_02_back_title.length != 0)
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title' style='color:"+flip_card_data[0].card_02_title_text_back_color+"'>"+flip_card_data[0].card_02_back_title+"</h4>";
				}

				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll;background-color:"+flip_card_data[0].card_02_back_scroll_area_color+" ; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[4];
//----------------------------------				
				
/*				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title'>Modal Back</h4>";	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[4];				
*/				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";					

//=======================================================================
//-------<(  Back of Card End  )>-------				
//=======================================================================			
//---------------------<(  Between the two cards  )>---------------------
//======================================================================= outerBody_three
//-------<(  Front of Card Begin  )>-------				
//=======================================================================
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' align='center'>";	//outerBody
		
			if(window.innerWidth <= 500)
					{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-4 col-md-4 col-xs-12' style='margin-top:20px;'>";
					}
				else
					{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-4 col-md-4 col-xs-12'>";
					}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_3' class='card' style='width:100%'>"; //card_"+jcc+"_1	outerBody				
							setup_flip_cards(jcc,3);	
				//card_6_1
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='javascript:jcc_flip_snip("+jcc+",3,0)' class='front'>";	//jcc_flip_snip("jcc",1,0)

//----------------------------------
			if(flip_card_data[0].card_03_front_color.length > 0)
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].card_03_front_color+"'>";					
				}
					else
				{		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
				}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";

			if(flip_card_data[0].card_03_front_title.length != 0)
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title' style='color:"+flip_card_data[0].card_03_title_text_front_color+"'>"+flip_card_data[0].card_03_front_title+"</h4>";
				}

				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll;background-color:"+flip_card_data[0].card_03_front_scroll_area_color+" ; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[5];
//----------------------------------				
				
/*				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title'>Modal Front</h4>";	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[5];
*/				
							
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";		
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				

//=======================================================================
//-------<(  Front of Card End  )>-------				
//=======================================================================				

//=======================================================================
//-------<(  Back of Card Begin  )>-------				
//=======================================================================
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div onclick='javascript:jcc_flip_snip("+jcc+",3,1)' class='back'>";

//----------------------------------
			if(flip_card_data[0].card_03_back_color.length > 0)
				{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].card_03_back_color+"'>";					
				}
					else
				{		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
				}
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";

			if(flip_card_data[0].card_03_back_title.length != 0)
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title' style='color:"+flip_card_data[0].card_03_title_text_back_color+"'>"+flip_card_data[0].card_03_back_title+"</h4>";
				}

				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll;background-color:"+flip_card_data[0].card_03_back_scroll_area_color+" ; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[2];
//----------------------------------				
				
/*				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='mainBody' style='background-color:"+flip_card_data[0].main_background_color+"'>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<h4 class='modal-title'>Modal Back</h4>";	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='content' style='overflow-y: scroll; height:"+flip_card_data[0].flip_box_height+"'>";
				
				Jcc_Comp_Maker = Jcc_Comp_Maker + jb_flp_mkr[6];				
*/				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div></div></div></div>";					

//=======================================================================
//-------<(  Back of Card End  )>-------				
//=======================================================================
				
				
			break;				
		}
											
											
									
//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";											
											
											
//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
											
break;											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Flip_Multi_New code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
											
											
											
											
											
										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Flip New 3 2 1 rows code begin SA )>-------		1/29/2019									
//-------------------------------------------------------------------------------------------------------------												
									case "Flip_Multi": //Flip_Multi

									flip_data = sSelections[jcc][snglBld[jcc]];	

											var Flip_Multi_data	= sSelections[jcc].Flip_Multi;
							
											im_rnbr = Flip_Multi_data[0].total_flip_cards;
											//Jcc_Comp_Maker = Jcc_Comp_Maker + "";
											// 1 = 12, 2 = 6 , 3 = 4

											var current_column_count = (12 / im_rnbr); //align='center'
											

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>"; //style='background-color:"+Flip_Multi_data[0].main_background_color+"'
											
												for(var fm = 0; fm < im_rnbr; fm++)
														{
						//-----------------------------------------
						// -------<( Front of Card begin )>-------	
						//-----------------------------------------
											
										flip_card_multiple[fm] = ("card_"+jcc+"_"+(fm + 1));
							
			switch(current_column_count)
				{
	
					case 12:
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+(fm + 1)+"' class='col-lg-"+current_column_count+" col-md-"+current_column_count+" col-xs-12 mainBody' style='width:100%; background-color:"+Flip_Multi_data[fm + 1].background_color+"'>";  //crd_wd						
					break;
						
					case 6:
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+(fm + 1)+"' class='col-lg-"+current_column_count+" col-md-"+current_column_count+" col-xs-12 mainBody' style='width:50%; background-color:"+Flip_Multi_data[fm + 1].background_color+"'>";  //crd_wd						
					break;
						
					case 4:
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='card_"+jcc+"_"+(fm + 1)+"' class='col-lg-"+current_column_count+" col-md-"+current_column_count+" col-xs-12 mainBody crd_wd' style='background-color:"+Flip_Multi_data[fm + 1].background_color+"'>";  //crd_wd						
					break;	
				}
															
															
															


						//-----------------------------------------
						// -------<( Top Text )>-------	
						//-----------------------------------------
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><h4>"+Flip_Multi_data[fm + 1].Label_Text+"</h4></div>"; 
						//-----------------------------------------
						// -------<( Top Text )>-------	
						//-----------------------------------------															
															
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='front' onclick='javascript:Jcc_Flip("+jcc+","+(fm + 1)+",0)'>"; 
							
					if(Flip_Multi_data[fm + 1].Front_Image.length > 0)
							{
								if(typeof Flip_Multi_data[fm + 1].Front_Image_Alt_Tag === "undefined")
									{
										ADA_check_Array[jcc] = "Flip_Multi Front Image needs the Alt tag fields added."
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img class='card_img' alt='' src='"+img_loc+"" + Flip_Multi_data[fm + 1].Front_Image + "' style='width:"+Flip_Multi_data[fm + 1].Front_Image_width+"; background-color:"+Flip_Multi_data[fm + 1].background_color+"'>";											
									}
								if(typeof Flip_Multi_data[fm + 1].Front_Image_Alt_Tag !== "undefined")
									{
										if(Flip_Multi_data[fm + 1].Front_Image_Alt_Tag.length <= 125)
											{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img class='card_img' alt='"+Flip_Multi_data[fm + 1].Front_Image_Alt_Tag+"' src='"+img_loc+"" + Flip_Multi_data[fm + 1].Front_Image + "' style='width:"+Flip_Multi_data[fm + 1].Front_Image_width+"; background-color:"+Flip_Multi_data[fm + 1].background_color+"'>";													
											}
										
										if(Flip_Multi_data[fm + 1].Front_Image_Alt_Tag.length > 125)
											{
					//Alt_Tag_Image_Data[im_ttl] = Flip_Multi_data[fm + 1].Front_Image_Alt_Tag;
												
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img class='card_img' alt='' src='"+img_loc+"" + Flip_Multi_data[fm + 1].Front_Image + "' style='width:"+Flip_Multi_data[fm + 1].Front_Image_width+"; background-color:"+Flip_Multi_data[fm + 1].background_color+"'>";							
												
											}

									}	
							}
								
								if(Flip_Multi_data[fm + 1].Front_Text.length > 0)
										{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='card_text' style='width:80%; overflow-y: scroll;background-color:"+Flip_Multi_data[fm + 1].background_color+"'><h4>"+Flip_Multi_data[fm + 1].Front_Text+"</h4></div>"; //class='jb_crd_style'  
										}
														
								  Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";							
										
						//-----------------------------------------
						// -------<( Front of Card end )>-------	
						//-----------------------------------------
													
						//-----------------------------------------
						// -------<( Back of Card begin )>-------	
						//-----------------------------------------	
						//Jcc_Comp_Maker = Jcc_Comp_Maker + "";
															
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='back' onclick='javascript:Jcc_Flip("+jcc+","+(fm + 1)+",1)'>"; 

					if(Flip_Multi_data[fm + 1].Back_Image.length > 0)
							{
								if(typeof Flip_Multi_data[fm + 1].Back_Image_Alt_Tag === "undefined")
									{
										ADA_check_Array[jcc] = "Flip_Multi Back Image needs the Alt tag fields added."
									}
								if(typeof Flip_Multi_data[fm + 1].Back_Image_Alt_Tag !== "undefined")
									{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img class='card_img' alt='"+Flip_Multi_data[fm + 1].Back_Image_Alt_Tag+"' src='"+img_loc+"" + Flip_Multi_data[fm + 1].Back_Image + "' style='width:"+Flip_Multi_data[fm + 1].Back_Image_width+"; background-color:"+Flip_Multi_data[fm + 1].background_color+"'>";														}
							}
															
					if(Flip_Multi_data[fm + 1].Back_Text.length > 0)
						{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_crd_style' style='width:"+Flip_Multi_data[fm + 1].Front_Image_width+"; overflow-y: scroll'><"+Flip_Multi_data[fm + 1].Back_Text_Size+">"+Flip_Multi_data[fm + 1].Back_Text+"</"+Flip_Multi_data[fm + 1].Back_Text_Size+">";							
						}
															
														
							
															
							  //Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
 								Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";								
							Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; 
						//---------------------------------------
						// -------<( Bottom Text )>-------	
						//---------------------------------------						
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><h4>"+Flip_Multi_data[fm + 1].Bottom_Text+"</h4></div>";
						//---------------------------------------
						// -------<( Bottom Text )>-------	
						//---------------------------------------															
															
						Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
						//---------------------------------------
						// -------<( Back of Card end )>-------	
						//---------------------------------------
															
														
														}
		
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; 
									
											flip_card_Array[jcc] = flip_card_multiple;
											
											flip_card_multiple = [];
	
									break;		
																		
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( New Question Comp code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
						case "Question_Comp":
						
											
						Q_Recall = [];
						Q_Choice = [];
						//Q_Square = [];					
											
						if(typeof courseType !== "undefined")
							{

							if(courseType.indexOf("shortcourseA") !== -1)
								{
									
									if( allPgQue[np_num][Q_count].answer === 1)
										{

					Q_Recall[jcc] = ("cb_" + jcc + "_" + allPgQue[np_num][Q_count].choice);
					Q_Choice[jcc] = (allPgQue[np_num][Q_count].choice);						

											
										}
	
								}
								
							}
				
							Q_count = (Q_count + 1);
				
							if(Q_count === 1)
								{
									QA_num = null;
								}
											
						
											
							var qComp = sSelections[jcc][snglBld[jcc]];
							tf_new_array = [];
							Question_Type_Array[jcc] = qComp[0].Question_type;	
	
				if(typeof qComp[0].question_image === "undefined")
					{
						
						
						ADA_check_Array[jcc] = "Please update question number " + jcc + " to the new Question snippet"
					}
											
				if(typeof qComp[0].question_image !== "undefined")
					{
						//alert(qComp[0].question_image);
					}
											
											
					if(snglBld[jcc] === "Question_Comp")
						{
							Question_Total_Array[jcc] = qComp[0].extra_image_placement;

							
							if(QA_num === null)
								{
									QA_num = 0;

								}
									else
								{
									QA_num = (QA_num + 1);
								}

							
						}
										
							
//-------< Start > class='jb_column1'   Alter the border here

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='sqn_" + jcc + "' style='padding: 20px; margin-top:"+qComp[0].top_margin+";background-color: " + qComp[0].background_color + "; border-top-color:"+qComp[0].border_color+"; border-top-width:"+qComp[0].border_weight+"; border-top-style:"+qComp[0].border_style+"; border-bottom-color:"+qComp[0].border_color+"; border-bottom-width:"+qComp[0].border_weight+"; border-bottom-style:"+qComp[0].border_style+"; border-radius:"+qComp[0].border_radius+" '>";																		
//-------< What do you think / Let's Review >
if(qComp[0].image.length > 0)
	{
		//-------<( Added to check for portal or development )>-------
		if(typeof moduleFolder !== "undefined")
			{													//src='jbuild_libs/images/
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img class='qstImg' src='jbuild_libs/images/" + qComp[0].image + "' alt=''/><br><br></div>";
			}

		if(typeof moduleFolder === "undefined")
			{												//src='../../../jbuild_libs/images/
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><img class='qstImg' src='../../../jbuild_libs/images/" + qComp[0].image + "' alt='"+qComp[0].image_alt_text+"'/><br><br></div>";
			}
		//-------<( Added to check for portal or development )>-------		
	
	}											

										
//-------< Paragraph Top Begin >
		for(var qPara = 0; qPara < qComp[1].paragraph_top_text.length; qPara++)
			{
				if(qComp[1].paragraph_top_text[qPara].paragraph_top.length !== 0)
					{
						//alert("No Zero"); class='jb_column1'
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='quest_char' style='text-align:"+qComp[2].qList[0].align_text+"'> <jb1>"+qComp[1].paragraph_top_text[qPara].paragraph_top+"</jb1></div>";
						//qpara_text
						
						if( (qPara + 1)  !== qComp[1].paragraph_top_text.length)
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<br>";
							}
						
						
					}
			}											
//-------< Paragraph Top End >										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='qold_"+jcc+"' class='col-lg-12 col-md-12 col-xs-12' style='display: block; height: auto'></div>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='qnew_"+jcc+"' class='col-lg-12 col-md-12 col-xs-12' style='display: none; height: auto'>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='qleft_"+jcc+"' class='col-lg-6 col-md-6 col-xs-12' style='height: auto'>";
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='qright_"+jcc+"' class='col-lg-6 col-md-6 col-xs-12' style='height: auto'>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											

		//class='qtext'	 quest_char								
//////////////////////////////////////////////////////////////////////////////////////////////////////											
//////////////////////////////////////////////////////////////////////////////////////////////////////												
//-------<(  Question Begin  )>-------   qstn_text
											
////alert(": qComp[0].question_image_placement: " + qComp[0].question_image_placement);										
													
if(typeof qComp[0].question_image_placement === "undefined")
	{										
		
				Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
				
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+qComp[2].qList[0].align_text+"'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1>"+qComp[0].question+"</jb1>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
				
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";		
		
		
	/*
	Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
		
		Jcc_qText_Mover[jcc] = "<div class='quest_char' style='text-align:"+qComp[2].qList[0].align_text+"'><jb1>"+qComp[0].question+"</jb1></div><br>";
		
	Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
	*/
	}

											
											
if(typeof qComp[0].question_image_placement === "string")
	{

		if(qComp[0].question_image_placement === "none") 
			{										
				Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
				
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+qComp[2].qList[0].align_text+"'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1>"+qComp[0].question+"</jb1>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
				
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";

			}
		
		
		if(qComp[0].question_image_alt_tag.length === 0)
			{
				if(qComp[0].question_image_placement !== "none")
					{
						ADA_check_Array[jcc] = "Add Alt tag for question: \n" + qComp[0].question;
					}
				
				
			}
		
		if(qComp[0].question_image_placement === "top")
			{
				if(qComp[0].question_image_alt_tag.length <= 125)
					{
		
						Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<img class='questImage' src='"+img_loc+"" + qComp[0].question_image + "' alt='"+qComp[0].question_image_alt_tag+"'/>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+qComp[2].qList[0].align_text+"'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1>"+qComp[0].question+"</jb1>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						
					}
				
				if(qComp[0].question_image_alt_tag.length > 125)
					{
						Alt_Tag_Image_Data[jcc] = qComp[0].question_image_alt_tag;
						
						Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<img class='questImage' src='"+img_loc+"" + qComp[0].question_image + "' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+qComp[2].qList[0].align_text+"'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1>"+qComp[0].question+"</jb1>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						
				
					}

			}
		
		if(qComp[0].question_image_placement === "bottom")
			{
				if(qComp[0].question_image_alt_tag.length <= 125)
					{				
						
						Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
						

						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+qComp[2].qList[0].align_text+"'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1>"+qComp[0].question+"</jb1>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<img class='questImage' src='"+img_loc+"" + qComp[0].question_image + "' alt='"+qComp[0].question_image_alt_tag+"'/>";
						
						
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						

					}
				
				if(qComp[0].question_image_alt_tag.length > 125)
					{
						Alt_Tag_Image_Data[jcc] = qComp[0].question_image_alt_tag;
						
						
						Jcc_qText_Mover[jcc] = "<div class='col-lg-12 col-md-12 col-xs-12'>";
						

						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='margin-top: 20px; margin-bottom: 20px; text-align:"+qComp[2].qList[0].align_text+"'>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1>"+qComp[0].question+"</jb1>";
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
						
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<img class='questImage' src='"+img_loc+"" + qComp[0].question_image + "' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'>";
						
						
						Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";						
						
						
					}

			}			
	}
									

//-------<(  Question End  )>-------											
											
											
//-------<(  List Begin  )>-------	
											
											
if(qComp[2].qList[0].qList_on_off === "on")											
	{

Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<"+ qComp[2].qList[0].Type_of_List +" type='"+qComp[2].qList[0].ol_type+"' style='list-style-type:"+qComp[2].qList[0].ul_type+"'>";		
		
		var list_num = (qComp[2].qList.length);
		var list_text_alignment = qComp[2].qList[0].align_text;
			for(var queList = 1; queList < list_num; queList++)
				{
Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<jb1><li class='quest_char' style='margin-left:40px; text-align: "+ list_text_alignment +";'>"+ qComp[2].qList[queList].lstText +"</li></jb1>"; //</jb1>					
					
				}
		
Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</"+ qComp[2].qList[0].Type_of_List +">"; 
		

	}
											
											
											
//-------<(  List End  )>-------											

//-------< Paragraph Bottom Begin >	  quest_char  class='quest_char'
		for(var qParab = 0; qParab < qComp[3].paragraph_bottom_text.length; qParab++)
			{
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='col-lg-12 col-md-12 col-xs-12'>";
				if(qComp[3].paragraph_bottom_text[qParab].paragraph_bottom.length !== 0)											
				{
					Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<div class='quest_char' style='text-align:"+qComp[2].qList[0].align_text+"'><jb1>"+qComp[3].paragraph_bottom_text[qParab].paragraph_bottom+"</jb1></div>";
					//qpara_text
					if( (qParab + 1)  !== qComp[3].paragraph_bottom_text.length)
							{
								Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "<br>";
							}
				}
				Jcc_qText_Mover[jcc] = Jcc_qText_Mover[jcc] + "</div>";
			}											
//-------< Paragraph Bottom End >											
											
										
Jcc_Comp_Maker = Jcc_Comp_Maker + Jcc_qText_Mover[jcc];											
//////////////////////////////////////////////////////////////////////////////////////////////////////											
//////////////////////////////////////////////////////////////////////////////////////////////////////												
											
//-------< Question Answers Begin >	
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:10px;'>";
										

										
											
if(typeof Q_Recall[jcc] !== "undefined")
			{
											
					
			}
																
											
for(var qAns = 0; qAns < qComp[4].question_answers.length; qAns++)
	{
		
		
		q_feedback_array[qAns] = qComp[4].question_answers[qAns].q_feedback;
		
	
		if(typeof q_feedback_array[qAns] !== "undefined")
			{

				q_feedback_qNum_Array[jcc] = q_feedback_array;


			}
			

		tf_new_array[qAns] = qComp[4].question_answers[qAns].true_false;

		Jcc_Comp_Maker = Jcc_Comp_Maker + "<form id='fbqs_"+jcc+"_an_"+qAns+"' class='qSpacing jb_column1'>";
		
if(typeof Q_Recall[jcc] === "undefined")
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<label class='container' style='font-weight: normal !important; text-align:"+qComp[2].qList[0].align_text+"'><jb1 id='qs_"+jcc+"_an_"+qAns+"' class='qtext'>"+qComp[4].question_answers[qAns].q_answer+"</jb1>";		
	}

if(typeof Q_Recall[jcc] != "undefined")
					{

	
						
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<label class='container' style='font-weight: normal !important; text-align:"+qComp[2].qList[0].align_text+"'><jb1 id='qs_"+jcc+"_an_"+qAns+"' class='qtext'>"+qComp[4].question_answers[qAns].q_answer+"</jb1>";							
						
					}
		
		
Jcc_Comp_Maker = Jcc_Comp_Maker + "<input onclick='nQue("+qComp[0].Question_type+","+qComp[4].question_answers[qAns].true_false+","+jcc+","+qAns+","+QA_num+");' type='checkbox' id='cbck_"+jcc+"_"+qAns+"'>";		//style='cursor:pointer;'

		if(qComp[0].Question_type === "1")
			{
				
				if(typeof Q_Recall[jcc] === "undefined")
					{
						Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='cb_"+jcc+"_"+qAns+"' class='checkmark'></span>";
					}
				
				if(typeof Q_Recall[jcc] != "undefined")
					{

						
						if(Q_Choice[jcc] === qAns)
							{
								if(qComp[4].question_answers[qAns].true_false === "true")
									{
										for(var cf_count = 0; cf_count < qComp[4].question_answers.length;cf_count++);
										{
											Q_Square[jcc] = ("#qs_"+jcc+"_an_"+cf_count);
											
											Q_IF_feedback[jcc] = ( "c_fb_" + jcc );
										}

										Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='cb_"+jcc+"_"+qAns+"' class='c_checkmark'></span>";
		
										
									}
								
								if(qComp[4].question_answers[qAns].true_false === "false")
									{
	
										for(var f_count = 0; f_count < qComp[4].question_answers.length; f_count++)
											{
												//alert("quest: " + qComp[4].question_answers[f_count].true_false);
												if(qComp[4].question_answers[f_count].true_false === "true")
													{
														Q_Square[jcc] = ("#qs_"+jcc+"_an_"+f_count);
														
														
														
														Q_IF_feedback[jcc] = ( "i_fb_" + jcc );
														//alert("In Correct: " + Q_IF_feedback[jcc]);

													}
		
												
											}
										
										
										Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='cb_"+jcc+"_"+qAns+"' class='i_checkmark'></span>";
										
										
										
									}

								
							}
						
						if(Q_Choice[jcc] != qAns)
							{
								Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='cb_"+jcc+"_"+qAns+"' class='checkmark'></span>";
								
								if(qComp[4].question_answers[qAns].true_false === "true")
									{
										//alert("qs_"+jcc+"_an_"+qAns);
									}
								
								
							}

					}
	
			}
		
		if(qComp[0].Question_type === "2")
			{
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<span id='cb_"+jcc+"_"+qAns+"' class='checkmark_square'></span>";
			}

		Jcc_Comp_Maker = Jcc_Comp_Maker + "</label>";
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</form>";

	}
										
q_feedback_array = [];
											
//alert("q_feedback_qNum_Array["+jcc+"]: " + q_feedback_qNum_Array[jcc]);											
											
											
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
		remediation_Paragraph = remediation_Paragraph + "</div>";	// no opening div										
//========================================================================================	
//-------< Correct answer / feedback											
//========================================================================================												
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='c_fb_"+jcc+"' style='display:none; padding:10px; text-align:"+qComp[0].feedback_align+"' class='ma_FB_Correct'><"+qComp[0].question_size+"><"+qComp[5].correct_incorrect_font_size+" style='color:#85be00; font-size: 18px; font-weight:bold; '>"+qComp[5].correct_feedback+"</"+qComp[5].correct_incorrect_font_size+"></"+qComp[0].question_size+">";
											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='cor_idfeedback_"+jcc+"' style='font-size: 18px;'><p id='font-size: 18px;'></div>";									
											
		
	if(typeof qComp[5].correct_remediation !== 'undefined')										
			{								
				Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><answer_text_sel>"+qComp[5].correct_remediation+"</answer_text_sel></div>";	
			}
											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><"+qComp[5].Additional_font_size+">"+qComp[5].Additional_feedback+"</"+qComp[5].Additional_font_size+"></div></div>";
//========================================================================================	
//-------< Correct answer / feedback											
//========================================================================================	
											
//========================================================================================	
//-------< Incorrect answer / feedback											
//========================================================================================											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div  id='i_fb_"+jcc+"' style='display:none; padding:10px; text-align:"+qComp[0].feedback_align+"' class='ma_FB_Incorrect'><"+qComp[0].question_size+"><"+qComp[5].correct_incorrect_font_size+" style='color:#FF0004; font-size: 18px; font-weight:bold;'>"+qComp[5].incorrect_feedback+"</"+qComp[5].correct_incorrect_font_size+"></"+qComp[0].question_size+">";	
											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='inc_idfeedback_"+jcc+"' style='font-size: 18px;'><p id='font-size: 18px;'></div>";											
	if(typeof qComp[5].incorrect_remediation !== 'undefined')										
			{											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><answer_text_sel>"+qComp[5].incorrect_remediation+"</answer_text_sel></div>";									
			}								
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><"+qComp[5].Additional_font_size+">"+qComp[5].Additional_feedback+"</"+qComp[5].Additional_font_size+"></div></div>";											
//========================================================================================	
//-------< Incorrect answer / feedback											
//========================================================================================											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
											
											

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
//-------<( New Question Comp code end )>-------											
//-------------------------------------------------------------------------------------------------------------											
											
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Carousel code begin )>-------											
//-------------------------------------------------------------------------------------------------------------											

									case "Carousel":
										var jcc_car_data = sSelections[jcc].Carousel;
								
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='carousel_margin jb_car_acc_wd'><div id='"+jcc + "_" +"jcCarousel' class='carousel slide' data-ride='false' data-interval='false' data-wrap='"+jcc_car_data[0].repeat+"' style='background-color:"+jcc_car_data[0].back_color+"; margin-top:"+jcc_car_data[0].top_margin+"'>";	
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

if(typeof jcc_car_data[jcc_car].Slide.Image_tag === "undefined")
	{
		//alert("The ADA for the carousel needs to be added");
		ADA_check_Array[jcc] = "Alt tags for images inside the carousel needs to be added"

		
	}

					
//alert("jcc_car_data[jcc_car].Slide.Image.length: " + jcc_car_data[jcc_car].Slide.Image.length);			
					
if(jcc_car_data[jcc_car].Slide.Image.length > 0)
		{ 

		Alt_Tag_Carousel_Data[jcc_car] = jcc_car_data[jcc_car].Slide.Image_tag;
			
			if(typeof jcc_car_data[jcc_car].Slide.Image_tag === "undefined")
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt=''></div>";
					
					
				}
			
			
			if(typeof jcc_car_data[jcc_car].Slide.Image_tag !== "undefined")
				{
					if(jcc_car_data[jcc_car].Slide.Image_tag.length <= 125)
						{
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='"+jcc_car_data[jcc_car].Slide.Image_tag+"'></div>";							
						}
					
					if(jcc_car_data[jcc_car].Slide.Image_tag.length > 125)
						{
							
			Alt_Tag_Image_Data[jcc_car] = jcc_car_data[jcc_car].Slide.Image_tag;			
							
			Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc_car+")'></div>";
						}
					
					
					


				}					

						}
					
					
					//"Image_tag":"",
					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='width: 75%; background-color:"+jcc_car_data[1].Slide.background_color+"; padding:"+jcc_car_data[jcc_car].Slide.Padding+"; text-align:"+jcc_car_data[0].Text_align+"; color:"+jcc_car_data[1].Slide.Text_Color+";'><"+jcc_car_data[jcc_car].Slide.Text_Font_Size+">"+jcc_car_data[jcc_car].Slide.Text+"</"+jcc_car_data[jcc_car].Slide.Text_Font_Size+"></div>";			
					
				  Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
					
				}

			if(jcc_car > 1)
				{
					
			//if(jcc_car_data[jcc_car].Slide.Image.length !== 0)			
			//	{
				  Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding-left:"+jcc_car_data[jcc_car].Slide.Padding+";padding-right:"+jcc_car_data[jcc_car].Slide.Padding+"' class='item'>";
					
		Alt_Tag_Carousel_Data[jcc_car] = jcc_car_data[jcc_car].Slide.Image_tag;
//-------					
if(jcc_car_data[jcc_car].Slide.Image.length > 0)
		{ 					
//-------					
			if(typeof jcc_car_data[jcc_car].Slide.Image_tag === "undefined")
				{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt=''></div>";	
				}					
					
					
			if(typeof jcc_car_data[jcc_car].Slide.Image_tag !== "undefined")
				{
					if(jcc_car_data[jcc_car].Slide.Image_tag.length <= 125)
						{						
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='"+jcc_car_data[jcc_car].Slide.Image_tag+"'></div>";
						}	
					
					if(jcc_car_data[jcc_car].Slide.Image_tag.length > 125)
						{
							Alt_Tag_Image_Data[jcc_car] = jcc_car_data[jcc_car].Slide.Image_tag;
							
							Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+jcc_car_data[jcc_car].Slide.Image_Placement+"'><img style='margin-top:"+jcc_car_data[0].slide_top_margin+"; width:"+jcc_car_data[jcc_car].Slide.image_size+"' src='"+img_loc+""+jcc_car_data[jcc_car].Slide.Image+"' x alt='Select image for more information'  role='button' onclick='alt_tag_lib("+jcc_car+")'></div>";
						}						
				
				}					

//-------
		}			
//-------					
					

					
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='width: 75%; background-color:"+jcc_car_data[1].Slide.background_color+"; padding:"+jcc_car_data[jcc_car].Slide.Padding+"; text-align:"+jcc_car_data[0].Text_align+"; color:"+jcc_car_data[1].Slide.Text_Color+";'><"+jcc_car_data[jcc_car].Slide.Text_Font_Size+">"+jcc_car_data[jcc_car].Slide.Text+"</"+jcc_car_data[jcc_car].Slide.Text_Font_Size+"></div>";	
					
				  Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
				//}
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

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";											
//class='col-lg-12 col-md-12 col-xs-12'
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='background-color: "+sSelections[jcc][snglBld[jcc]][4].back_color+"; margin-top: "+ sSelections[jcc][snglBld[jcc]][2].top_margin +"; height:"+ sSelections[jcc][snglBld[jcc]][1].height +"; width:"+ sSelections[jcc][snglBld[jcc]][1].width +";'>";											
											
if(sSelections[jcc][snglBld[jcc]][0].divider_image.length !== 0)
	{
		
//-------<( Added to check for portal or development )>-------
if(typeof moduleFolder !== "undefined")
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img id='' style='transform: rotate("+ flipper +"); margin:-10px; overflow:hidden; width: 100%;' src='jbuild_libs/images/" + sSelections[jcc][snglBld[jcc]][0].divider_image + ".png' height='"+ sSelections[jcc][snglBld[jcc]][1].height + "width:"+ sSelections[jcc][snglBld[jcc]][1].width +"; ' alt=''/>";							
	}
					
if(typeof moduleFolder === "undefined")
	{
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img id='' style='transform: rotate("+ flipper +"); margin:-10px; overflow:hidden; width: 100%;' src='../../../jbuild_libs/images/" + sSelections[jcc][snglBld[jcc]][0].divider_image + ".png' height='"+ sSelections[jcc][snglBld[jcc]][1].height + "width:"+ sSelections[jcc][snglBld[jcc]][1].width +";' alt=''/>";							
	}
//-------<( Added to check for portal or development )>-------		
	
	}
											
									
if(sSelections[jcc][snglBld[jcc]][5].Line_Display === "true")
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:"+sSelections[jcc][snglBld[jcc]][5].top_margin+"; border-bottom: thick; border-bottom-color: "+sSelections[jcc][snglBld[jcc]][5].Line_Color+"; border-bottom-style: "+sSelections[jcc][snglBld[jcc]][5].Line_Style+";border-bottom-width: "+sSelections[jcc][snglBld[jcc]][5].Line_height+"'></div>";
		
	}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
									
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( Divider code end )>-------											
//-------------------------------------------------------------------------------------------------------------	

					case "Custom":						
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+sSelections[jcc][snglBld[jcc]][0].top_margin+";background-color:"+sSelections[jcc][snglBld[jcc]][1].background_color+";padding:"+sSelections[jcc][snglBld[jcc]][2].Padding+"'>";											

//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><jb1>"+sSelections[jcc][snglBld[jcc]][3].Label+"</jb1></div>";											
											
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
					break;						
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Audio code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "audio": // SA
											
								//alert(typeof sSelections[jcc][snglBld[jcc]][7]);
											
							if(typeof sSelections[jcc][snglBld[jcc]][7] === "undefined")				
								{
									
									ADA_check_Array[jcc] =  "Please update the Audio snippet in space number: " + jcc + " to Audio V2.0";
								}
								
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";			
									
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+sSelections[jcc][snglBld[jcc]][6].top_margin+";'>";
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='width:100%; background-color:"+sSelections[jcc][snglBld[jcc]][4].background_color+";padding:"+sSelections[jcc][snglBld[jcc]][5].Padding+"'>";
							
						switch(sSelections[jcc][snglBld[jcc]][3].Lable_Position)
							{
								case "top": //class='jb_car_acc_wd'
									
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><"+sSelections[jcc][snglBld[jcc]][2].Label_Font_Size+">"+sSelections[jcc][snglBld[jcc]][1].Label+"</"+sSelections[jcc][snglBld[jcc]][2].Label_Font_Size+"></div>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<audio controls style='width:80; margin-top: 20px;'><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][0].Audio_File + "' type='audio/mpeg'></audio>";

								break;
									
								case "bottom": //class='jb_car_acc_wd'
Jcc_Comp_Maker = Jcc_Comp_Maker + "<audio controls style='width:80%; margin-top: 20px;'><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][0].Audio_File + "' type='audio/mpeg'></audio>";
									
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><"+sSelections[jcc][snglBld[jcc]][2].Label_Font_Size+">"+sSelections[jcc][snglBld[jcc]][1].Label+"</"+sSelections[jcc][snglBld[jcc]][2].Label_Font_Size+"></div>";									
								break;	
							}
							
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
											
Jcc_Comp_Maker = Jcc_Comp_Maker +"<div align='center' style='margin-top:10px;'><button id='atbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='aTranscripts("+jcc+");'>Open Transcript</button></div>";					
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_mx_wd' id='audio_trans_" + jcc +"' style='display: none; margin-top:10px; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";
											
											
					for(var atrn = 8; atrn < sSelections[jcc][snglBld[jcc]].length; atrn++)
						{
	
							
					
							if(sSelections[jcc][snglBld[jcc]][atrn].per_underline === "u")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+sSelections[jcc][snglBld[jcc]][7].Person_align+";font-weight:"+sSelections[jcc][snglBld[jcc]][7].Person_font_weight+";color:"+sSelections[jcc][snglBld[jcc]][7].Person_text_color+"' class='jb_char_para'><"+sSelections[jcc][snglBld[jcc]][7].Person_font+"><u>"+ sSelections[jcc][snglBld[jcc]][atrn].Person +"</u></"+sSelections[jcc][snglBld[jcc]][7].Person_font+"></p>";										
								}

							if(sSelections[jcc][snglBld[jcc]][atrn].per_underline === "")
								{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+sSelections[jcc][snglBld[jcc]][7].Person_align+";font-weight:"+sSelections[jcc][snglBld[jcc]][7].Person_font_weight+";color:"+sSelections[jcc][snglBld[jcc]][7].Person_text_color+"' class='jb_char_para'><"+sSelections[jcc][snglBld[jcc]][7].Person_font+">"+sSelections[jcc][snglBld[jcc]][atrn].Person+"</"+sSelections[jcc][snglBld[jcc]][7].Person_font+"></p>";										
								}							
													
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+sSelections[jcc][snglBld[jcc]][7].Transcript_Text_align+";font-weight:"+sSelections[jcc][snglBld[jcc]][7].Transcript_Text_font_weight+";color:"+sSelections[jcc][snglBld[jcc]][7].Transcript_Text_color+";' class='jb_char_para'><"+sSelections[jcc][snglBld[jcc]][7].Transcript_Text_font+">"+ sSelections[jcc][snglBld[jcc]][atrn].Transcript_Text +"</"+sSelections[jcc][snglBld[jcc]][7].Transcript_Text_font+"></p>";					

						}						

Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";											
											
											
											
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
										
										//	if(typeof moduleFolder !== "undefined")	
										/*	
											var timeline_heading;
											var timeline_body;
										*/	
											
										if(typeof timeline_start_array[6].Box_heading_text_color !== "undefined")	
											{
												timeline_heading = timeline_start_array[6].Box_heading_text_color;
											}
												
										if(typeof timeline_start_array[6].Box_heading_text_color === "undefined")	
											{
												timeline_heading = "#000000";
											}
											
											
										if(typeof timeline_start_array[6].Box_Contents_text_color !== "undefined")	
											{
												timeline_body = timeline_start_array[6].Box_heading_text_color;
											}
												
										if(typeof timeline_start_array[6].Box_Contents_text_color === "undefined")	
											{
												timeline_body = "#000000";
											}											
											
											
//On 4/25/2019 changed the z-index from 4 to 0 so the Alt tag popup would work. timeline
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='z-index: 0; background-color: " + timeline_start_array[3] + "; margin-top: "+ timeline_start_array[4] +"'><span class='timeline_line' style='background-color:"+timeline_start_array[5].Vertical_Line_Color+"'> </span><div style='background-color: " + timeline_start_array[2] + "; text-align: "+sSelections[jcc][snglBld[jcc]][0].timeline_heading_alignment+"; padding: 10px; z-index: 1; position: relative;'><h2 style='color:"+ timeline_start_array[1] +";'>" + timeline_start_array[0] + "</h2></div>";											
//// /*											
		for(var tmln = 7; tmln < sSelections[jcc][snglBld[jcc]].length; tmln++)	
				{

				switch(tmln % 2)
						{
							case 0:
						
								
		Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div class='timeline_container left'><span class='timeline_circle_left' style='background-color:"+timeline_start_array[5].Circle_Color+";border: "+timeline_start_array[5].Circle_Weight+" solid "+timeline_start_array[5].Circle_Outline_Color+"'> </span><span class='left_arrow' style='border-color: transparent transparent transparent "+timeline_start_array[5].Info_Back+";'> </span><div class='content' style='background-color:"+timeline_start_array[5].Info_Back+"'><h3 style='text-align:"+timeline_start_array[6].Box_Heading_alignment+"; font-weight:"+timeline_start_array[6].Box_Heading_weight+"; font-style:"+timeline_start_array[6].Box_Heading_style+";text-decoration: "+timeline_start_array[6].Box_Heading_underline+";font-size:"+timeline_start_array[6].Box_Heading_Size+";color:"+timeline_heading+"'>"+ sSelections[jcc][snglBld[jcc]][tmln].box_Heading +"</h3>");
								
				
			//font color="red"
			//Jcc_Comp_Maker = (Jcc_Comp_Maker + "");					
			//	"Box_heading_text_color":"",
			//	"Box_Contents_text_color":"",					
								
							
						switch(sSelections[jcc][snglBld[jcc]][tmln].box_Contents.slice(-4))
							{
								case ".jpg":
									
									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt === "undefined")
										{
											ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/></div>");											
										}
									
									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt !== "undefined")
										{
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length <= 125)
												{
													if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length === 0)
														{
															ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
														}
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt+"'/></div>");													
												}
											
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length > 125)
												{
													Alt_Tag_Image_Data[tmln] = sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt;
													
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+tmln+")'></div>");													
													
												}											
										}
									
									
	

								break;

								case ".png":

									
									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt === "undefined")
										{
											ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
											
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/></div>");												
										}									
									
									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt !== "undefined")
										{
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length <= 125)
												{
													if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length === 0)
														{
															ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
														}
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt+"'/></div>");													
												}
											
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length > 125)
												{
													Alt_Tag_Image_Data[tmln] = sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt;
													//alt='Select image for more information' role='button' onclick='alt_tag_lib("+tmln+")'
													
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+tmln+")'></div>");													
												}
										}
									

								break;									
									
								case ".mp3":
				
										Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><audio controls><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' type='audio/mpeg'></audio></div>");
									
								break;

								case ".mp4":
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><video class='jb_mx_wd' style='margin-top: 20px' width='100%;' controls><source src='"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"' id='vid_source' type='video/mp4'></video></div>");
								break;	
											//;color:"+timeline_body+"   Box_Contents_text_color
								default: 
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div style='color:"+timeline_body+";text-align:"+timeline_start_array[6].box_Contents_alignment+"'><"+timeline_start_array[6].box_Contents_font_size+">"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"</"+timeline_start_array[6].box_Contents_font_size+"></div>");
								break;
							}

				Jcc_Comp_Maker = (Jcc_Comp_Maker + "</div></div>");										
																	
							break;
															
							case 1:

		Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div class='timeline_container right'><span class='timeline_circle_right' style='background-color:"+timeline_start_array[5].Circle_Color+";border: "+timeline_start_array[5].Circle_Weight+" solid "+timeline_start_array[5].Circle_Outline_Color+"'> </span><span class='right_arrow' style='border-color: transparent  "+timeline_start_array[5].Info_Back+" transparent transparent;'> </span><div class='content' style='background-color:"+timeline_start_array[5].Info_Back+"'><h3 style='text-align:"+timeline_start_array[6].Box_Heading_alignment+"; font-weight:"+timeline_start_array[6].Box_Heading_weight+"; font-style:"+timeline_start_array[6].Box_Heading_style+";text-decoration: "+timeline_start_array[6].Box_Heading_underline+";font-size:"+timeline_start_array[6].Box_Heading_Size+";color:"+timeline_heading+"'>"+ sSelections[jcc][snglBld[jcc]][tmln].box_Heading +"</h3>");
								
						switch(sSelections[jcc][snglBld[jcc]][tmln].box_Contents.slice(-4))
							{
								case ".jpg":

									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt === "undefined")
										{
											ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
											
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/></div>");												
										}
									
									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt !== "undefined")
										{
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length <= 125)
												{
													if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length === 0)
														{
															ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
														}
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt+"'/></div>");													
												}
											
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length > 125)
												{
													Alt_Tag_Image_Data[tmln] = sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt;
													
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+tmln+")'></div>");													
													
												}											
										}
								break;

								case ".png":

									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt === "undefined")
										{
											ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
											
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt=''/></div>");												
										}	
									
									if(typeof sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt !== "undefined")
										{
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length <= 125)
												{
													if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length === 0)
														{
															ADA_check_Array[tmln] = sSelections[jcc][snglBld[jcc]][tmln].box_Contents + " In the Timeline needs to have an Alt Tag";
														}
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt+"'/></div>");													
												}
											
											if(sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt.length > 125)
												{
													Alt_Tag_Image_Data[tmln] = sSelections[jcc][snglBld[jcc]][tmln].timeline_img_alt;
													//alt='Select image for more information' role='button' onclick='alt_tag_lib("+tmln+")'
													
									Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_Image_alignment+"'><img src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' width='80%' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+tmln+")'></div>");													
												}
										}
								break;									
									
								case ".mp3":
									//alert("audio_loc: " + audio_loc + "/" + sSelections[jcc][snglBld[jcc]]);
										Jcc_Comp_Maker = (Jcc_Comp_Maker +"<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><audio controls><source src='"+audio_loc+"" + sSelections[jcc][snglBld[jcc]][tmln].box_Contents + "' type='audio/mpeg'></audio></div>");
								break;

								case ".mp4":
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div style='text-align:"+timeline_start_array[6].box_Contents_alignment+"'><video class='jb_mx_wd' style='margin-top: 20px' width='100%;' controls><source src='"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"' id='vid_source' type='video/mp4'></video></div>");
								break;	

								default:
										Jcc_Comp_Maker = (Jcc_Comp_Maker + "<div style='color:"+timeline_body+";text-align:"+timeline_start_array[6].box_Contents_alignment+"'><"+timeline_start_array[6].box_Contents_font_size+">"+ sSelections[jcc][snglBld[jcc]][tmln].box_Contents +"</"+timeline_start_array[6].box_Contents_font_size+"></div>");
								break;
							}

				Jcc_Comp_Maker = (Jcc_Comp_Maker + "</div></div>");									
							break;	
						}					
				}
											
//// */
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
											
											
		/*							
			if(timeline_start_array[5].Info_Back !== "")
					{
						//alert(timeline_start_array[5].Info_Back);
						//new_row.className = "aClassName";
						
					}
		*/										
											
											
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Timeline code end )>-------											
//-------------------------------------------------------------------------------------------------------------												
//-------------------------------------------------------------------------------------------------------------	
//-------<( Speech Bubble code begin )>-------											
//-------------------------------------------------------------------------------------------------------------											
									case "Speech_Bubbles":

											var speech_atl = sSelections[jcc][snglBld[jcc]][0].talking_head_image_alt;
											sBubble_Text_Array[0] = sSelections[jcc][snglBld[jcc]][0].talking_head_image;
											sBubble_Text_Array[1] = sSelections[jcc][snglBld[jcc]][1].start_text;
											sBubble_Text_Array[2] = sSelections[jcc][snglBld[jcc]][2].top_margin;

		if(typeof speech_atl === "undefined")
			{
				ADA_check_Array[jcc] =  sBubble_Text_Array[0] + " Speech bubble needs the Alt tag fields added."
			}											
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='spb_"+ jcc +"' class='main_bubble col-lg-12 col-md-12 col-xs-12' style='margin-top: "+ sBubble_Text_Array[2] +"; margin-bottom: 40px;'> <div class='bubbles'><div class='balloons'>";			

											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='startBubble"+ jcc +"' class='bLeft bubble' style='display:block;'><div style='color:#000000' class='bText'><p>" + sBubble_Text_Array[1] + "</p></div></div>";												

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
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='" + sp_bbl_id[jcc] +"' class='bLeft bubble' style='display:none;'><div style='color:#000000' class='bText'><p>" + Speech_Bub_Array[sp_bl] + "</p></div></div>";											
												break;
												
												case 1:
												
									//alert(Speech_Bub_Array[sp_bl] + " : Case 1");			
												
sp_bbl_id[jcc] = jcc + "_bbl_" + sp_bl;	
//alert(sp_bbl_id[jcc]);												
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='" + sp_bbl_id[jcc] +"' class='bRight bubble' style='display:none;'><div style='color:#000000' class='bText'><p>" + Speech_Bub_Array[sp_bl] + "</p></div></div>";												
												break;
										}

								}
								
							//alert(Speech_Bub_Array.length);				
											
								Speech_Bub_Array = [];
		
											
											
									


									var bbl_cur_id = [];
											
									
							
		if(typeof speech_atl !== "undefined")
			{
				

				if(speech_atl.length <= 125)
					{
						if(speech_atl.length === 0)
							{
								ADA_check_Array[jcc] = "Speech bubble needs the Alt tag fields added."
							}
						
						
						
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='talkingheads'><img src='"+img_loc+"" + sBubble_Text_Array[0] +"' alt='"+speech_atl+"'></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div>"; //						
					}
				
				if(speech_atl.length > 125) // role='button' onclick='alt_tag_lib("+jcc+")'
					{
				Alt_Tag_Image_Data[jcc] = speech_atl;		
						
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='talkingheads'><img src='"+img_loc+"" + sBubble_Text_Array[0] +"' alt='Select image for more informtion' role='button' onclick='alt_tag_lib("+jcc+")'></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div>"; //						
					}				
			}
											
/*				
		if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
			{
				ADA_check_Array[jcc] =  sSelections[jcc][snglBld[jcc]][0].image_name + " needs the Alt tag fields added."
			}
	//-----------------		
			
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
								
							}
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
								
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;
								
							}
					}	
					
					
					jcc_data[0].talking_head_image_alt
*/											
	

										
											
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
											
		if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
			{
				ADA_check_Array[jcc] =  sSelections[jcc][snglBld[jcc]][0].image_name + " needs the Alt tag fields added."
			}	
		

		switch(sSelections[jcc][snglBld[jcc]][1].image_position)
			{
				case "top": //align='sSelections[jcc][snglBld[jcc]][0].image_aligmnent'
				//jb_column1
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
					{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][0].image_w_text_tag+"'></div>";								
							}
						
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
								
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;			
								
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt='Select image for more information.' role='button' onclick='alt_tag_lib("+jcc+")'></div>";								
							}
						
					}

					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_column1' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+"; color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">" + sSelections[jcc][snglBld[jcc]][3].image_text + "</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";							
				break;
					
				case "bottom": //align='sSelections[jcc][snglBld[jcc]][0].image_aligmnent'
					
		if(screen.width <= 540)
			{
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
					{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][0].image_w_text_tag+"'></div>";								
							}
						
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
								
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;			
								
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt='Select image for more information.' role='button' onclick='alt_tag_lib("+jcc+")'></div>";								
							}
						
					}
																	//jb_char_para
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_column1' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+"; color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">" + sSelections[jcc][snglBld[jcc]][3].image_text + "</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";								
			}
					
		if(screen.width > 540)			
			{														//jb_char_para
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_column1' style='font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+"; color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+";text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">" + sSelections[jcc][snglBld[jcc]][3].image_text + "</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";	
				
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
					{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][0].image_w_text_tag+"'></div>";								
							}
						
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;			
								
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt='Select image for more information.' role='button' onclick='alt_tag_lib("+jcc+")'></div>";								
							}
					}
			}	
				break; //  style='text-align:"+sSelections[jcc][snglBld[jcc]][1].image_aligmnent+"'
				
				
				case "left":
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>"; //class='col-lg-12 col-md-12 col-xs-12 jc_mi'
				
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
					{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''></div>";						
					}
					
					//class='jb_column1'
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][0].image_w_text_tag+"'></div>";							
							}
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;
								
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt='Select image for more information.' role='button' onclick='alt_tag_lib("+jcc+")'></div>";								
							}
					}					
					

																	//margin-top: 15%;         jb_column1
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12 jb_column1' style='line-height: 20px; margin-top: "+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+"; display: inline-block; font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+";color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+"; text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+sSelections[jcc][snglBld[jcc]][3].image_text+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";
					
					
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

				break;	

				
				case "right": 
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div>";//class='col-lg-12 col-md-12 col-xs-12 jc_mi'
					
					//role='button' onclick='alt_tag_lib("+im_ttl+")'
																	//margin-top: 15%;  image_text_top_margin
																								//jc_column1
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12 jb_column1' style='margin-top: "+sSelections[jcc][snglBld[jcc]][4].image_text_top_margin+"; font-style:"+sSelections[jcc][snglBld[jcc]][4].image_text_style+";font-variant:"+sSelections[jcc][snglBld[jcc]][4].image_text_variant+";font-weight:"+sSelections[jcc][snglBld[jcc]][4].image_text_weight+";color:"+sSelections[jcc][snglBld[jcc]][4].image_text_color+"; text-align: "+ sSelections[jcc][snglBld[jcc]][5].image_text_alignmnet +";'><"+sSelections[jcc][snglBld[jcc]][5].image_font_size+">"+sSelections[jcc][snglBld[jcc]][3].image_text+"</"+sSelections[jcc][snglBld[jcc]][5].image_font_size+"></div>";

				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag === "undefined")
					{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12 mbl_align'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt=''></div>";						
					}
					
				if(typeof sSelections[jcc][snglBld[jcc]][0].image_w_text_tag !== "undefined")
					{
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length <= 125)
							{
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12 mbl_align'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt='"+sSelections[jcc][snglBld[jcc]][0].image_w_text_tag+"'></div>";								
							}
						if(sSelections[jcc][snglBld[jcc]][0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = sSelections[jcc][snglBld[jcc]][0].image_w_text_tag;
								
					Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-6 col-md-6 col-xs-12 mbl_align'><img style='border-style:"+sSelections[jcc][snglBld[jcc]][0].border_style+"; border-width:"+sSelections[jcc][snglBld[jcc]][0].border_height+"; border-color:"+sSelections[jcc][snglBld[jcc]][0].border_color+"; border-radius:"+ sSelections[jcc][snglBld[jcc]][8].image_radius +"' src='"+img_loc+"" + sSelections[jcc][snglBld[jcc]][0].image_name + "' width=' " + sSelections[jcc][snglBld[jcc]][2].image_size + " ' height='auto' alt='Select image for more information.' role='button' onclick='alt_tag_lib("+jcc+")'></div>";									
							}
					}					
					
				
				
					Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";			

					
				break;
					
					
			}
			
				Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	//</div>							
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Image with text code end )>-------											
//-------------------------------------------------------------------------------------------------------------												

											
//-------------------------------------------------------------------------------------------------------------	
//-------<( List Text Paragraph code begin )>-------	SA										
//-------------------------------------------------------------------------------------------------------------

									
										case "List_text_paragraph": // SA


Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style=' background-color:"+sSelections[jcc][snglBld[jcc]][5].background_color+"; margin-top:" + sSelections[jcc][snglBld[jcc]][4].top_margin+";padding:20px ;'>";
																					//"+ sSelections[jcc][snglBld[jcc]][6].padding +"
										
//Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+ sSelections[jcc][snglBld[jcc]][3].Type_of_List +" type='"+sSelections[jcc][snglBld[jcc]][3].ol_type+"' style='list-style-type:"+sSelections[jcc][snglBld[jcc]][3].ul_type+"'>"; 											

											


											
//class='quest_char'											
										
											
//-------<(  Heading )>-------		          quest_char									
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_column1'><"+sSelections[jcc][snglBld[jcc]][0].heading_size+" style='border-bottom-style: "+sSelections[jcc][snglBld[jcc]][0].heading_underline+"; border-bottom-color:"+sSelections[jcc][snglBld[jcc]][0].heading_underline_color+" ;border-bottom-width: "+sSelections[jcc][snglBld[jcc]][0].heading_underline_height+"; color:"+sSelections[jcc][snglBld[jcc]][0].heading_color+"; font-style: "+sSelections[jcc][snglBld[jcc]][0].heading_style+"; text-align: "+ sSelections[jcc][snglBld[jcc]][0].heading_alignment +"'>"+ sSelections[jcc][snglBld[jcc]][0].List_Heading +"</"+sSelections[jcc][snglBld[jcc]][0].heading_size+"></div>";
//-------<(  Heading )>-------											
										
//-------<(  Paragraph Top )>-------

				for(var tpar = 0; tpar < sSelections[jcc][snglBld[jcc]][1].Top_Paragraphs.length; tpar++)
						{
							
							                  //quest_char
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_column1'><"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+"><p style='text-align: "+ sSelections[jcc][snglBld[jcc]][0].paragraph_alignment +"; color:"+sSelections[jcc][snglBld[jcc]][0].paragraph_top_text_color+"'>"+ sSelections[jcc][snglBld[jcc]][1].Top_Paragraphs[tpar].Paragraph_text +"</p></"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+"></div>";							
						}					
											
//-------<(  Paragraph Top )>-------
											
											
											


Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+ sSelections[jcc][snglBld[jcc]][3].Type_of_List +" type='"+sSelections[jcc][snglBld[jcc]][3].ol_type+"' style='list-style-type:"+sSelections[jcc][snglBld[jcc]][3].ul_type+"'>"; 											
//-------<(  List  )>-------											
List_Text_Num = (sSelections[jcc][snglBld[jcc]][8].list_items);	
	
					for(lst = 0; lst < List_Text_Num.length; lst++)
								{
									List_Text_Array[lst] = (List_Text_Num[lst].lstText);
											//quest_char							
Jcc_Comp_Maker = Jcc_Comp_Maker + "<li class='jb_column1' style='margin-left:40px; color:"+ sSelections[jcc][snglBld[jcc]][7].text_color +"; text-align: "+ sSelections[jcc][snglBld[jcc]][2].align_text +";'><"+sSelections[jcc][snglBld[jcc]][3].List_Text_Size+">"+ List_Text_Array[lst] +"</"+sSelections[jcc][snglBld[jcc]][3].List_Text_Size+"></li>";																	
												
								}
Jcc_Comp_Maker = Jcc_Comp_Maker + "</"+ sSelections[jcc][snglBld[jcc]][3].Type_of_List +">";											
//-------<(  List  )>-------




//-------<(  Paragraph Bottom )>-------											
for(var bpar = 0; bpar < sSelections[jcc][snglBld[jcc]][9].Bottom_paragraphs.length; bpar++)
						{
												//quest_char
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_column1'><"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+"><p style='font-size:"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+";text-align: "+ sSelections[jcc][snglBld[jcc]][0].paragraph_alignment +"; color:"+sSelections[jcc][snglBld[jcc]][0].paragraph_bot_text_color+"'>"+ sSelections[jcc][snglBld[jcc]][9].Bottom_paragraphs[bpar].Paragraph_text +"</p></"+sSelections[jcc][snglBld[jcc]][0].paragraph_text_size+"></div>";							
						}
											
//-------<(  Paragraph Bottom )>-------	
/*
										
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
*/	
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";		
									break;
//-------------------------------------------------------------------------------------------------------------	
//-------<( List Text Paragraph code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading code begin )>-------											
//-------------------------------------------------------------------------------------------------------------												
									case "Heading":	
	
//alert("test: " + sSelections[jcc][snglBld[jcc]] );										
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+sSelections[jcc][snglBld[jcc]][2].top_margin+";background-color: "+ sSelections[jcc][snglBld[jcc]][6].background_color +"; border-top-color:"+sSelections[jcc][snglBld[jcc]][7].border_color+"; border-top-width:"+sSelections[jcc][snglBld[jcc]][8].border_weight+"; border-top-style:"+sSelections[jcc][snglBld[jcc]][9].border_style+"; border-bottom-color:"+sSelections[jcc][snglBld[jcc]][7].border_color+"; border-bottom-width:"+sSelections[jcc][snglBld[jcc]][8].border_weight+"; border-bottom-style:"+sSelections[jcc][snglBld[jcc]][9].border_style+"'><"+sSelections[jcc][snglBld[jcc]][3].size+">";
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='color: "+ sSelections[jcc][snglBld[jcc]][5].color +"; font-weight: "+ sSelections[jcc][snglBld[jcc]][4].style +";text-align: "+ sSelections[jcc][snglBld[jcc]][1].alignment +"'>"+ sSelections[jcc][snglBld[jcc]][0].sngl_Heading +"</p></"+sSelections[jcc][snglBld[jcc]][3].size+"></div>";				
											
//Jcc_Comp_Maker = Jcc_Comp_Maker + "</"+sSelections[jcc][snglBld[jcc]][3].size+"></div>";											

										
									break;		
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading code end )>-------											
//-------------------------------------------------------------------------------------------------------------
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading_New code begin )>-------											
//-------------------------------------------------------------------------------------------------------------
	case "Heading_New":											


Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+sSelections[jcc][snglBld[jcc]][2].top_margin+";background-color: "+ sSelections[jcc][snglBld[jcc]][6].background_color +"; border-top-color:"+sSelections[jcc][snglBld[jcc]][7].top_line_color+"; border-top-width:"+sSelections[jcc][snglBld[jcc]][7].top_line_weight+"; border-top-style:"+sSelections[jcc][snglBld[jcc]][7].top_line_style+"; border-bottom-color:"+sSelections[jcc][snglBld[jcc]][9].bottom_line_color+"; border-bottom-width:"+sSelections[jcc][snglBld[jcc]][9].bottom_line_weight+"; border-bottom-style:"+sSelections[jcc][snglBld[jcc]][9].bottom_line_style+"'><"+sSelections[jcc][snglBld[jcc]][3].size+">";
	
//max-width: 90ch;											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='background-color:"+sSelections[jcc][snglBld[jcc]][8].border_background_color+"; margin-top:"+sSelections[jcc][snglBld[jcc]][8].border_top_margin+"; padding:"+sSelections[jcc][snglBld[jcc]][8].border_padding+"; border-radius:"+sSelections[jcc][snglBld[jcc]][8].border_inside_radius+"; border-color:"+sSelections[jcc][snglBld[jcc]][8].border_inside_color+"; border-width:"+sSelections[jcc][snglBld[jcc]][8].border_inside_weight+"; border-style:"+sSelections[jcc][snglBld[jcc]][8].border_inside_style+" ; width:"+sSelections[jcc][snglBld[jcc]][8].border_width+"; color: "+ sSelections[jcc][snglBld[jcc]][5].color +"; font-weight: "+ sSelections[jcc][snglBld[jcc]][4].style +";text-align: "+ sSelections[jcc][snglBld[jcc]][1].alignment +"'>"+ sSelections[jcc][snglBld[jcc]][0].sngl_Heading +"</p></"+sSelections[jcc][snglBld[jcc]][3].size+">";	//</div>
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</"+sSelections[jcc][snglBld[jcc]][3].size+"></div>";
										
	break;										
//-------------------------------------------------------------------------------------------------------------	
//-------<( Heading_New code end )>-------											
//-------------------------------------------------------------------------------------------------------------												
									
											
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph New code begin )>-------	SA	Old From Work									
//-------------------------------------------------------------------------------------------------------------	
											
											
					case "Paragraphs_New": // SA  img_loc = "images/";
								var paraSetup = sSelections[jcc][snglBld[jcc]][0];
											
											
									
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center'>";//
							
				if(paraSetup.background_image.length > 0)
					{
					
			
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraSetup.background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; border-top-color:"+paraSetup.border_color+"; border-top-width:"+paraSetup.border_weight+"; border-top-style:"+paraSetup.border_style+"; border-bottom-color:"+paraSetup.border_color+"; border-bottom-width:"+paraSetup.border_weight+"; border-bottom-style:"+paraSetup.border_style+"; border-radius:"+paraSetup.border_radius+"; margin-top:"+paraSetup.top_margin+";'>";							
					}
			
				if(paraSetup.background_image.length === 0)							
					{
						
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 0px 20px; background-color:"+paraSetup.background_color+"; border-top-color:"+paraSetup.border_color+"; border-top-width:"+paraSetup.border_weight+"; border-top-style:"+paraSetup.border_style+"; border-bottom-color:"+paraSetup.border_color+"; border-bottom-width:"+paraSetup.border_weight+"; border-bottom-style:"+paraSetup.border_style+"; border-radius:"+paraSetup.border_radius+"; margin-top:"+paraSetup.top_margin+";'>";						
						
			
	//Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 0px 20px; background-color:"+paraSetup.background_color+";border-color:"+paraSetup.border_color+"; border-width:"+paraSetup.border_weight+"; border-style:"+paraSetup.border_style+"; border-radius:"+paraSetup.border_radius+"; margin-top:"+paraSetup.top_margin+";'>";
						
					}
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding:"+paraSetup.Padding+";'><span style='text-align:"+paraSetup.heading_alignment+"; color:"+paraSetup.heading_color+"'>";
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+paraSetup.heading_font_size+" style='font-weight:"+paraSetup.heading_weight+";font-style:"+paraSetup.heading_style+";font-variant:"+paraSetup.heading_variant+"; text-transform:"+paraSetup.heading_transform+"'>"+paraSetup.heading+"</"+paraSetup.heading_font_size+">";
		
		//alert(sSelections[jcc][snglBld[jcc]][newpara].Paragraph_txt);
											
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
//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
//Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";												
					break;
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph New code end )>-------											
//-------------------------------------------------------------------------------------------------------------												

//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph_w_box code begin )>-------	SA	Old From Work									
//-------------------------------------------------------------------------------------------------------------	
	 										
					case "Paragraphs_w_box": // SA  img_loc = "images/";
						
test_box("SA");
/*								
								var paraSetup = sSelections[jcc][snglBld[jcc]];			
							
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center'>";// style='width:50%;'
	
											
											
				if(paraSetup[0].background_image.length > 0)
					{
					
						
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraSetup[0].background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";							
					}
			
				if(paraSetup[0].background_image.length === 0)							
					{
	
					
						
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 20px 20px; background-color:"+paraSetup[0].background_color+"; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";						
	
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center' style='width:80%; background-color:#ed8c01 ;border-style:solid; border-color:black; border-width: medium; border-radius:10px'>";	//padding:10px;					
			
					
					}
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding:"+paraSetup[0].Padding+";'><span style='text-align:"+paraSetup[0].heading_alignment+"; color:"+paraSetup.heading_color+"'>";
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+paraSetup[0].heading_font_size+" style='font-weight:"+paraSetup[0].heading_weight+";font-style:"+paraSetup[0].heading_style+";font-variant:"+paraSetup[0].heading_variant+"; text-transform:"+paraSetup[0].heading_transform+"'>"+paraSetup[0].heading+"</"+paraSetup[0].heading_font_size+">";
		

											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</span></div>";									
						

					for(var para_bx = 1; para_bx < paraSetup.length; para_bx++)
								{
									switch(paraSetup[0].columns)
										{
												
											case "1":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_column1' style='color:"+paraSetup[0].Paragraph_Font_color+"; text-align:"+paraSetup[0].Paragraph_align+";line-height:"+paraSetup[0].line_spacing+"'><"+paraSetup[0].Paragraph_Font_Size+">"+ paraSetup[para_bx].Paragraph_txt +"</"+paraSetup[0].Paragraph_Font_Size+"></p>";													
											break;
												
											case "2":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_column2' style='color:"+paraSetup[0].Paragraph_Font_color+"; text-align:"+paraSetup[0].Paragraph_align+";line-height:"+paraSetup[0].line_spacing+"'><"+paraSetup[0].Paragraph_Font_Size+">"+ paraSetup[para_bx].Paragraph_txt +"</"+paraSetup[0].Paragraph_Font_Size+"></p>";												
											break;	
												
												
												
										}


								}
											
											
											
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
*/

					break;
											
//-------------------------------------------------------------------------------------------------------------	
//-------<( Paragraph_w_box New code end )>-------											
//-------------------------------------------------------------------------------------------------------------											
											
											
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++																					

//-------------------------------------------------------------------------------------------------------------	
//-------<( PDF code begin )>-------											
//-------------------------------------------------------------------------------------------------------------													
										case "PDF_Box":
											
											var pdf_setup = sSelections[jcc][snglBld[jcc]][0];
											
											pdf_file_name = pdf_setup.Pdf_File;
											
											pdf_file_array[jcc] = sSelections[jcc][snglBld[jcc]][1].Pdf_File;
											
											
											
										
											
					if(typeof moduleFolder !== "undefined")
						{
							pdf_logo = "jbuild_libs/images/" + pdf_setup.Pdf_Icon;
						}
					
					if(typeof moduleFolder === "undefined")
						{
							pdf_logo = "../../../jbuild_libs/images/" + pdf_setup.Pdf_Icon; 
						}					
											
										Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";	


											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='display:inline-block; width:80%; background-color:"+sSelections[jcc][snglBld[jcc]][0].Background_Color+";outline: "+sSelections[jcc][snglBld[jcc]][0].Border_Thickness+" "+sSelections[jcc][snglBld[jcc]][0].Border_Style+" "+sSelections[jcc][snglBld[jcc]][0].Border_Color+"; padding:"+sSelections[jcc][snglBld[jcc]][0].Padding+"'>";
		
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div><p>"+sSelections[jcc][snglBld[jcc]][0].Pdf_Box_Text+"</p></div>";
											
											
										
											Jcc_Comp_Maker = Jcc_Comp_Maker + "<img src='"+pdf_logo+"' width='50px' height='50px' style='cursor: pointer;' alt='Adobe PDF icon' onclick='open_pdf_file("+jcc+")'>"; //pdf_setup.Pdf_File
											

											Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top:10px;'><p>"+sSelections[jcc][snglBld[jcc]][0].Pdf_Body_Text+"</p></div>";
			
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
											
											
											
											Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
											
										break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( PDF code end )>-------											
//-------------------------------------------------------------------------------------------------------------													
//-------<(  Added by Jack on 03_08_2019  )>-------
											
											
											
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
									
									Info_Box_Array[9] = sSelections[jcc][snglBld[jcc]][7].Icon_alt;		
									//Info_Box_Array[9] = sSelections[jcc][snglBld[jcc]][9].Icon_Position;
						
					if(typeof moduleFolder !== "undefined")
						{
							var new_icon = "jbuild_libs/images/" + Info_Box_Array[7];
						}
					
					if(typeof moduleFolder === "undefined")
						{
							var new_icon = "../../../jbuild_libs/images/" + Info_Box_Array[7];
						}						
						


Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";											
											
if(sSelections[jcc][snglBld[jcc]][9].selectable === "true")
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<br><br><span onclick='info_box_event("+jcc+");' style='cursor: pointer; background-color:"+Info_Box_Array[6]+"; outline: "+Info_Box_Array[4]+" "+Info_Box_Array[3]+" "+Info_Box_Array[2]+"; padding: 20px; display:inline-block';>";
	}
		else
			
	{
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<br><br><span style='background-color:"+Info_Box_Array[6]+"; outline: "+Info_Box_Array[4]+" "+Info_Box_Array[3]+" "+Info_Box_Array[2]+"; padding: 20px; display:inline-block';>";
	}
											
//<li><a href="#" data-toggle="modal" data-target="#testModal">Modal</a></li>											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<img style='text-align:left; display:"+Info_Box_Array[8]+"; width: 20px ;height:auto' src='"+new_icon+ "' alt='"+Info_Box_Array[9]+"'/><h3 style='color:"+Info_Box_Array[1]+";text-align:"+Info_Box_Array[5]+"'>" + Info_Box_Array[0] +"</h3></span><br><br>";

											
										
											
//-------<(  Modal Box )>-------										

											
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='myModal_"+jcc+"' class='jb_modal'>";	

//-------<>											
//Header
//-------<>
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-hdr-ftr' style='background-color:"+sSelections[jcc][snglBld[jcc]][9].Header_color+"'><p style='text-align:"+sSelections[jcc][snglBld[jcc]][9].title_text_alignment+" ;color:"+sSelections[jcc][snglBld[jcc]][9].title_text_color+"; font-size:"+sSelections[jcc][snglBld[jcc]][9].title_text_size+"'>"+sSelections[jcc][snglBld[jcc]][9].title_text+"</p></div>";											

//-------<>												
//Body
//-------<>
//overflow-y: scroll											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-content' style='overflow-y: scroll;background-color:"+sSelections[jcc][snglBld[jcc]][9].Body_color+"'>";
		for(var mdl = 10; mdl < sSelections[jcc][snglBld[jcc]].length; mdl++) // id='jb_inf0_modal_main_text'
			{											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p style='text-align:"+sSelections[jcc][snglBld[jcc]][9].body_text_alignment+";color:"+sSelections[jcc][snglBld[jcc]][9].body_text_color+";font-size:18px'><jb8>"+sSelections[jcc][snglBld[jcc]][mdl].body_text+"</jb8></p>";
			
		

			}								
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
											

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-hdr-ftr'><span class='jb_close' id='info_btn'><button onclick='javascript:close_Info_modal("+jcc+")'><jb1>Close</jb1></button></span></div>";												
											

//-------<>												
//Footer
//-------<>												

//-------<(  Modal Box )>-------											
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>";											
			
										
									break;	
//-------------------------------------------------------------------------------------------------------------	
//-------<( Info box code end )>-------											
//-------------------------------------------------------------------------------------------------------------	
											
											
											
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄												
//-------------------------------------------------------------------------------------------------------------	
//-------<( Code For Stand Alone Components End )>-------										
//-------------------------------------------------------------------------------------------------------------												
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	
											
// Accordion code goes here if this experiment does not work.
											
case "Accordion":

									var acc_Count = 0;
				
				var acc_ck = sSelections[jcc][snglBld[jcc]][0];

	
				acc_setup_array[0] = sSelections[jcc][snglBld[jcc]][0].Label_Alignment;	
				acc_setup_array[1] = sSelections[jcc][snglBld[jcc]][0].Label_Color;
				acc_setup_array[2] = sSelections[jcc][snglBld[jcc]][0].Label_Background_Color;
				acc_setup_array[3] = sSelections[jcc][snglBld[jcc]][1].Dropdown_Background_Color;
							
				acc_setup_array[4] = sSelections[jcc][snglBld[jcc]][0].Tab_Radius;

Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='margin-top: "+sSelections[jcc][snglBld[jcc]][0].top_margin+"; border-style:"+acc_ck.Border_Style+"; border-color:"+acc_ck.Border_Color+"; border-width:"+acc_ck.Border_Thickness+"; border-radius:"+acc_ck.Border_Radius+"; ' class='panel-group jb_car_acc_wd' id='jb_accordion_" + jcc + "'>";//jb_mx_wd

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

				
//-------<( Added to check for portal or development )>-------
if(typeof moduleFolder !== "undefined")
	{
		var ac_new_icon = "jbuild_libs/images/" + jcc_data[7].Icon;
		
	}
					
if(typeof moduleFolder === "undefined")
	{
		var ac_new_icon = "../../../jbuild_libs/images/" + jcc_data[7].Icon;					
	}
//-------<( Added to check for portal or development )>-------	
											

				
jb_Acc_Con = "<br><br><span style='background-color:"+jcc_data[6].Background_Color+"; outline: "+jcc_data[4].Border_Thickness+" "+jcc_data[3].Border_Style+" "+jcc_data[2].Border_Color+"; padding: 20px; display:inline-block';>";

jb_Acc_Con = jb_Acc_Con + "<img style='text-align:left; display:"+jcc_data[8].Icon_On_Off+"; width: 20px ;height:auto' src='"+ac_new_icon+ "' alt='"+jcc_data[7].Icon_alt+"'/>";	
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
		
					switch(jcc_data[0].Expert_View)
						{
							case "yes":
jb_Acc_Con = "<div style='background-color:"+jcc_data[0].back_color+"; padding: 4px; margin-top: "+jcc_data[0].top_margin+";'><div><div><video width='100%;' controls><source src='"+jcc_data[0].Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='f("+jcc+");'>Open Transcript</button></div></div></div>";// </div>

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
		jb_Acc_Con = jb_Acc_Con + "<p class='jb_char_para' style='text-align:"+jcc_data[0].Person_align+"; color: "+jcc_data[0].Person_text_color+"'><"+jcc_data[0].Person_font+"><u>"+ jcc_data[trn_ac].Person +"</u></"+jcc_data[0].Person_font+"></p>";										
								}

							if(jcc_data[0].Person_underline === "")
								{
		jb_Acc_Con = jb_Acc_Con + "<p class='jb_char_para' style='text-align:"+jcc_data[0].Person_align+"; color: "+jcc_data[0].Person_text_color+"'><"+jcc_data[0].Person_font+">"+ jcc_data[trn_ac].Person +"</"+jcc_data[0].Person_font+"></p>";										
								}							
				
							
		jb_Acc_Con = jb_Acc_Con + "<p class='jb_char_para' style='text-align:"+jcc_data[0].Transcript_Text_align+"; color:"+jcc_data[0].Transcript_Text_color+"'><"+jcc_data[0].Transcript_Text_font+">"+ jcc_data[trn_ac].Transcript_Text +"</"+jcc_data[0].Transcript_Text_font+"></p>";
						
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

//-------<( Added to check for portal or development )>-------
if(typeof moduleFolder !== "undefined")
	{
jb_Acc_Con = "<div style='background-color:"+Ac_Video_Array[4]+"; padding: 4px; margin-top: "+Ac_Video_Array[3]+";'><div><div><img style='margin-top:4px; margin-right: 20px; position: absolute; top:"+Ac_Video_Array[3]+"; right: 0px' src='jbuild_libs/images/expert_video.png' width='20%' height='auto' alt=''/><video width='100%;' controls><source src='"+Ac_Video_Array[0]+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button type='button' class='btn btn-primary btn-sm' onclick='Transcripts(ac_pfd_Array["+jcc+"]);'>Transcript</button></div></div></div>";							
	}
					
if(typeof moduleFolder === "undefined")
	{
jb_Acc_Con = "<div style='background-color:"+Ac_Video_Array[4]+"; padding: 4px; margin-top: "+Ac_Video_Array[3]+";'><div><div><img style='margin-top:4px; margin-right: 20px; position: absolute; top:"+Ac_Video_Array[3]+"; right: 0px' src='../../../jbuild_libs/images/expert_video.png' width='20%' height='auto' alt=''/><video width='100%;' controls><source src='"+Ac_Video_Array[0]+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button type='button' class='btn btn-primary btn-sm' onclick='Transcripts(ac_pfd_Array["+jcc+"]);'>Transcript</button></div></div></div>";							
	}
//-------<( Added to check for portal or development )>-------
	
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
//-------<>
			case "audio": // AC
				//alert("audio_loc: " + audio_loc + "/" + sSelections[jcc][snglBld[jcc]]);
			jcc_data = sSelections[jcc][snglBld[jcc]][accm].audio;	
			//alert(jcc_data[5].Padding);
				
							if(typeof jcc_data[7] === "undefined")				
								{
									
									ADA_check_Array[jcc] =  "Please update the Audio snippet in the Accordion in space number: " + jcc + " to Audio V2.0";
								}	
				
				
		
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
				


jb_Acc_Con = jb_Acc_Con +"<div align='center' style='margin-top:10px;'><button id='atbtn_" + jcc+"' type='button' class='btn btn-primary btn-sm' onclick='aTranscripts("+jcc+");'>Open Transcript</button></div>";					
											
jb_Acc_Con = jb_Acc_Con + "<div id='audio_trans_" + jcc +"' style='display: none; margin-top:10px; border: medium; border-style: solid; border-color: #000000;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px;'>";				
									
					for(var atrn = 8; atrn < jcc_data.length; atrn++)
						{

							if(jcc_data[atrn].per_underline === "u")
								{
		jb_Acc_Con = jb_Acc_Con + "<p style='text-align:"+jcc_data[7].Person_align+";font-weight:"+jcc_data[7].Person_font_weight+";color:"+jcc_data[7].Person_text_color+"' class='jb_char_para'><"+jcc_data[7].Person_font+"><u>"+ jcc_data[atrn].Person +"</u></"+jcc_data[7].Person_font+"></p>";										
								}

							if(jcc_data[atrn].per_underline === "")
								{
		jb_Acc_Con = jb_Acc_Con + "<p style='text-align:"+jcc_data[7].Person_align+";font-weight:"+jcc_data[7].Person_font_weight+";color:"+jcc_data[7].Person_text_color+"' class='jb_char_para'><"+jcc_data[7].Person_font+">"+jcc_data[atrn].Person+"</"+jcc_data[7].Person_font+"></p>";										
								}							
													
		jb_Acc_Con = jb_Acc_Con + "<p style='text-align:"+jcc_data[7].Transcript_Text_align+";font-weight:"+jcc_data[7].Transcript_Text_font_weight+";color:"+jcc_data[7].Transcript_Text_color+";' class='jb_char_para'><"+jcc_data[7].Transcript_Text_font+">"+ jcc_data[atrn].Transcript_Text +"</"+jcc_data[7].Transcript_Text_font+"></p>";					

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

		if(typeof jcc_data[0].image_w_text_tag === "undefined")
			{
				ADA_check_Array[jcc] =  jcc_data[0].image_name + " needs the Alt tag fields added in the Accordion."
			}				
				
		switch(jcc_data[1].image_position)
			{ // border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+";
				case "top": //jcc_data[5].image_font_size
				
				if(typeof jcc_data[0].image_w_text_tag === "undefined")
					{
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof jcc_data[0].image_w_text_tag !== "undefined")
					{
						if(jcc_data[0].image_w_text_tag.length <= 125)
							{
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'></div>";										
							}
						if(jcc_data[0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = jcc_data[0].image_w_text_tag;
								
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>";									
							}
					}					
					


					jb_Acc_Con = jb_Acc_Con + "<div class='jb_char_para' style='font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">" + jcc_data[3].image_text + "</"+jcc_data[5].image_font_size+"></div>";							
				break;
					
				case "bottom":
				
if(screen.width <= 540)
	{
				if(typeof jcc_data[0].image_w_text_tag === "undefined")
					{
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof jcc_data[0].image_w_text_tag !== "undefined")
					{
						if(jcc_data[0].image_w_text_tag.length <= 125)
							{
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'></div>";										
							}
						if(jcc_data[0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = jcc_data[0].image_w_text_tag;
								
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>";									
							}
					}					
					


					jb_Acc_Con = jb_Acc_Con + "<div class='jb_char_para' style='font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">" + jcc_data[3].image_text + "</"+jcc_data[5].image_font_size+"></div>";							
				break;		
	}
					
if(screen.width > 540)
	{
					jb_Acc_Con = jb_Acc_Con + "<div class='jb_char_para' style='font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+";text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">" + jcc_data[3].image_text + "</"+jcc_data[5].image_font_size+"></div>";	
					
				if(typeof jcc_data[0].image_w_text_tag === "undefined")
					{
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''/></div>";							
					}
					
				if(typeof jcc_data[0].image_w_text_tag !== "undefined")
					{
						if(jcc_data[0].image_w_text_tag.length <= 125)
							{
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'/></div>";										
							}
						if(jcc_data[0].image_w_text_tag.length > 125)
							{
								
					Alt_Tag_Image_Data[jcc] = jcc_data[0].image_w_text_tag;
								
					jb_Acc_Con = jb_Acc_Con + "<div><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>";									
								
							}
					}		
	}					

					
			
				break;
					
				case "left":

					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12'>";
					
				if(typeof jcc_data[0].image_w_text_tag === "undefined")
					{
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof jcc_data[0].image_w_text_tag !== "undefined")
					{
						if(jcc_data[0].image_w_text_tag.length <= 125)
							{
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'></div>";								
							}
						if(jcc_data[0].image_w_text_tag.length > 125)
							{
								
					Alt_Tag_Image_Data[jcc] = jcc_data[0].image_w_text_tag;
								
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>";									
								
							}
					}					

					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-top: "+jcc_data[4].image_text_top_margin+"; display: inline-block; font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+"; text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">"+jcc_data[3].image_text+"</"+jcc_data[5].image_font_size+"></div>";
					
					
				
					jb_Acc_Con = jb_Acc_Con + "</div>";					
				break;
					
				case "right": 

					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12'>";
					
																//margin-top: 15%; 
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12' style='margin-top: "+jcc_data[4].image_text_top_margin+"; display: inline-block; font-style:"+jcc_data[4].image_text_style+";font-variant:"+jcc_data[4].image_text_variant+";font-weight:"+jcc_data[4].image_text_weight+";color:"+jcc_data[4].image_text_color+"; text-align: "+ jcc_data[5].image_text_alignmnet +";'><"+jcc_data[5].image_font_size+">"+jcc_data[3].image_text+"</"+jcc_data[5].image_font_size+"></div>";
					
				
				if(typeof jcc_data[0].image_w_text_tag === "undefined")
					{
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof jcc_data[0].image_w_text_tag !== "undefined")
					{
						if(jcc_data[0].image_w_text_tag.length <= 125)
							{
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='"+jcc_data[0].image_w_text_tag+"'></div>";									
							}
						if(jcc_data[0].image_w_text_tag.length > 125)
							{
								
					Alt_Tag_Image_Data[jcc] = jcc_data[0].image_w_text_tag;
								
					jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-6 col-md-6 col-xs-12'><img style='border-style:"+jcc_data[0].border_style+"; border-width:"+jcc_data[0].border_height+"; border-color:"+jcc_data[0].border_color+"; border-radius:"+ jcc_data[8].image_radius +"' src='"+img_loc+"" + jcc_data[0].image_name + "' width=' " + jcc_data[2].image_size + " ' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>";									
								
							}
					}					
					
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
				
				
			case "Heading_New": // AC
				    jcc_data = sSelections[jcc][snglBld[jcc]][accm].Heading_New;

jb_Acc_Con = "<div class='col-lg-12 col-md-12 col-xs-12' style='width:100%; margin-top:"+jcc_data[2].top_margin+";background-color: "+ jcc_data[6].background_color +"; border-top-color:"+jcc_data[7].top_line_color+"; border-top-width:"+jcc_data[7].top_line_weight+"; border-top-style:"+jcc_data[7].top_line_style+"; border-bottom-color:"+jcc_data[9].bottom_line_color+"; border-bottom-width:"+jcc_data[9].bottom_line_weight+"; border-bottom-style:"+jcc_data[9].bottom_line_style+"'><"+jcc_data[3].size+">";
	
										
											
jb_Acc_Con = jb_Acc_Con + "<p style='background-color:"+jcc_data[8].border_background_color+"; margin-top:"+jcc_data[8].border_top_margin+"; padding:"+jcc_data[8].border_padding+"; border-radius:"+jcc_data[8].border_inside_radius+"; border-color:"+jcc_data[8].border_inside_color+"; border-width:"+jcc_data[8].border_inside_weight+"; border-style:"+jcc_data[8].border_inside_style+" ; width:"+jcc_data[8].border_width+"; color: "+ jcc_data[5].color +"; font-weight: "+ jcc_data[4].style +";text-align: "+ jcc_data[1].alignment +"'>"+ jcc_data[0].sngl_Heading +"</p></"+jcc_data[3].size+"></div>";	
											

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
					
					
					
				if(typeof jcc_data[im_ttl_ac].image_file_tag !== "undefined")	
					{
					
					if(jcc_data[im_ttl_ac].image_file_tag.length <= 125)
						{
							jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-"+im_rnbr+" col-md-"+im_rnbr+" col-xs-12'>";
							jb_Acc_Con = jb_Acc_Con + "<img style='width:"+jcc_data[im_ttl_ac].image_width+"; margin-top: "+jcc_data[im_ttl_ac].image_top_margin+"; border-style: "+jcc_data[im_ttl_ac].image_border_style+"; border-color: "+jcc_data[im_ttl_ac].image_border_color+"; border-width: "+jcc_data[im_ttl_ac].image_border_width+"; border-radius: "+jcc_data[im_ttl_ac].image_border_radius+"' src='"+img_loc+"" + jcc_data[im_ttl_ac].image_file + "' alt='"+jcc_data[im_ttl_ac].image_file_tag+"'>"; 
							jb_Acc_Con = jb_Acc_Con + "</div>";
						}
					
					if(jcc_data[im_ttl_ac].image_file_tag.length > 125)
						{
							jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-"+im_rnbr+" col-md-"+im_rnbr+" col-xs-12'>";
							jb_Acc_Con = jb_Acc_Con + "<img style='width:"+jcc_data[im_ttl_ac].image_width+"; margin-top: "+jcc_data[im_ttl_ac].image_top_margin+"; border-style: "+jcc_data[im_ttl_ac].image_border_style+"; border-color: "+jcc_data[im_ttl_ac].image_border_color+"; border-width: "+jcc_data[im_ttl_ac].image_border_width+"; border-radius: "+jcc_data[im_ttl_ac].image_border_radius+"' src='"+img_loc+"" + jcc_data[im_ttl_ac].image_file + "' alt='Select image for more information' role='button' onclick='alt_tag_lib("+im_ttl+")'>"; 
							jb_Acc_Con = jb_Acc_Con + "</div>";
							
							Alt_Tag_Image_Data[im_ttl] = jcc_data[im_ttl_ac].image_file_tag;
							
						}
					
					}

					
					if(typeof jcc_data[im_ttl_ac].image_file_tag === "undefined")
					
						{
							ADA_check_Array[jcc] = "Image_Multi in the Accordion needs the Alt tag fields added."
							
							
							jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-"+im_rnbr+" col-md-"+im_rnbr+" col-xs-12'>";
							jb_Acc_Con = jb_Acc_Con + "<img style='width:"+jcc_data[im_ttl_ac].image_width+"; margin-top: "+jcc_data[im_ttl_ac].image_top_margin+"; border-style: "+jcc_data[im_ttl_ac].image_border_style+"; border-color: "+jcc_data[im_ttl_ac].image_border_color+"; border-width: "+jcc_data[im_ttl_ac].image_border_width+"; border-radius: "+jcc_data[im_ttl_ac].image_border_radius+"' src='"+img_loc+"" + jcc_data[im_ttl_ac].image_file + "' alt=''>"; 
							jb_Acc_Con = jb_Acc_Con + "</div>";
							
						}
					

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
jb_Acc_Con = jb_Acc_Con + "<"+jcc_data[0].heading_size+" style='border-bottom-style: "+jcc_data[0].heading_underline+"; border-bottom-color:"+jcc_data[0].heading_underline_color+" ;border-bottom-width: "+jcc_data[0].heading_underline_height+"; color:"+jcc_data[0].heading_color+"; font-weight: "+jcc_data[0].heading_style+"; text-align: "+ jcc_data[0].heading_alignment +"'>"+ jcc_data[0].List_Heading +"</"+jcc_data[0].heading_size+">";
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
					//case "Paragraphs_New": // SA  img_loc = "images/";  commented out on June 12, 2019

				
							jcc_data = sSelections[jcc][snglBld[jcc]][accm].Paragraphs_New;

				var paraData = (jcc_data[0]);

															   
	
				if(paraData.background_image.length > 0)
					{
	jb_Acc_Con = "<div	style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraData.background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; background-color:"+paraData.background_color+";border-top-color:"+paraData.border_color+"; border-top-width:"+paraData.border_weight+"; border-top-style:"+paraData.border_style+"; border-bottom-color:"+paraData.border_color+"; border-bottom-width:"+paraData.border_weight+"; border-bottom-style:"+paraData.border_style+"; border-radius:"+paraData.border_radius+"'>";							
					}
				
				if(paraData.background_image.length === 0)							
					{
							
	jb_Acc_Con = "<div style='padding: 0px 20px; background-color:"+paraData.background_color+";border-top-color:"+paraData.border_color+"; border-top-width:"+paraData.border_weight+"; border-top-style:"+paraData.border_style+"; border-bottom-color:"+paraData.border_color+"; border-bottom-width:"+paraData.border_weight+"; border-bottom-style:"+paraData.border_style+"; border-radius:"+paraData.border_radius+"'>";					
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
	
			case "Paragraphs_w_box": // AC
				test_box("AC");
				     
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

			case "Speech_Bubbles": //AC
									jcc_data = sSelections[jcc][snglBld[jcc]][accm].Speech_Bubbles;
				

				
		if(typeof jcc_data[0].talking_head_image_alt === "undefined")
			{
				ADA_check_Array[jcc] =  jcc_data[0].talking_head_image + " Speech Bubble in Accordion needs the Alt tag fields added."
			}				
				
jb_Acc_Con = "<div id='spb_"+ jcc +"' class='main_bubble' style='margin-top: "+ jcc_data[2].top_margin +"; margin-bottom: 40px;'> <div class='bubbles'><div class='balloons'>";			

			
jb_Acc_Con = jb_Acc_Con + "<div id='startBubble"+ jcc +"' class='bLeft bubble' style='display:block;'><div style='color:#000000' class='bText'><p>" + jcc_data[1].start_text + "</p></div></div>";												

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
												
jb_Acc_Con = jb_Acc_Con + "<div id='" + ac_sp_bbl_id[jcc] +"' class='bLeft bubble' style='display:none;'><div style='color:#000000' class='bText'><p>" + Speech_Bub_Array[ac_sp_bl] + "</p></div></div>";											
												break;
												
												case 1:
ac_sp_bbl_id[jcc] = jcc + "_bbl_" + ac_sp_bl;												
jb_Acc_Con = jb_Acc_Con + "<div id='" + ac_sp_bbl_id[jcc] +"' class='bRight bubble' style='display:none;'><div style='color:#000000' class='bText'><p>" + Speech_Bub_Array[ac_sp_bl] + "</p></div></div>";												
												break;
										}

								}
											
								Speech_Bub_Array = [];
			
if(typeof jcc_data[0].talking_head_image_alt === "undefined")
	{
		
ADA_check_Array[jcc] = "Speech bubble in Accordion needs the Alt tag fields added."		
		
jb_Acc_Con = jb_Acc_Con + "<div class='talkingheads'><img src='"+img_loc+"" + jcc_data[0].talking_head_image +"' alt=''></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div>"; //		
	}

if(typeof jcc_data[0].talking_head_image_alt !== "undefined")
	{
		
		if(jcc_data[0].talking_head_image_alt.length <= 125)
			{
				if(jcc_data[0].talking_head_image_alt.length === 0)
					{
						ADA_check_Array[jcc] = "Speech bubble in Accordion needs the Alt tag fields added."	
					}
				
				
jb_Acc_Con = jb_Acc_Con + "<div class='talkingheads'><img src='"+img_loc+"" + jcc_data[0].talking_head_image +"' alt='"+jcc_data[0].talking_head_image_alt+"'></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div>"; //				
			}
		
		if(jcc_data[0].talking_head_image_alt.length > 125) // role='button' onclick='alt_tag_lib("+jcc+")'
			{
jb_Acc_Con = jb_Acc_Con + "<div class='talkingheads'><img src='"+img_loc+"" + jcc_data[0].talking_head_image +"' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>  <div align='center' class='col-lg-12 col-md-12 col-xs-12'><div align='left' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_prev_buton"+jcc+"' style='display:none' onclick='bub_Back("+jcc+");' class='btn-primary bbl_btns' type='button'>Back</button></div><div align='right' class='col-lg-6 col-md-6 col-xs-6'><button id='bub_next_button"+jcc+"' onclick='bub_Next("+jcc+");' class='btn-primary bbl_btns' type='button'>Start</button></div></div>"; //				
				
				Alt_Tag_Image_Data[jcc] = jcc_data[0].talking_head_image_alt;
			}		
	}
				
				
	
											
											
jb_Acc_Con = jb_Acc_Con + "</div></div></div>";					
				
				
				Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
			break;				
		}
																
	Jcc_Comp_Maker = Jcc_Comp_Maker +  "</div>";
														
																
															break;
														}
	
												}
											
var div_single = "</div>";
var div_count = "</div>";											

  for(var dvc = 1; dvc <= acc_Count; dvc++)
	{
								
	  if(dvc > 1)
	  {
		div_count += div_single;
	  }
	}
											
											
Jcc_Comp_Maker = Jcc_Comp_Maker + div_count;											
Jcc_Comp_Maker = Jcc_Comp_Maker +  "</div></div>";											
											
break;											
											
								
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄	
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

											
									}
								
//▀─▀─▀─▀─▀─▀────────────────────────────────────────────────────▀─▀─▀─▀─▀─▀							
//-------<( Functions for component creation begin )>-------
//▄─▄─▄─▄─▄─▄────────────────────────────────────────────────────▄─▄─▄─▄─▄─▄							

//==========================================================								
//-------<( Paragraphs with inside box )>-------
//==========================================================								
function test_box(comp_Type)
{
	switch(comp_Type)
		{
			case "SA":

	var paraSetup = sSelections[jcc][snglBld[jcc]];			
							
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center'>";// style='width:50%;'
	
											
											
				if(paraSetup[0].background_image.length > 0)
					{
					
						
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraSetup[0].background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";							
					}
			
				if(paraSetup[0].background_image.length === 0)							
					{
	
					
						
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 20px 20px; background-color:"+paraSetup[0].background_color+"; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";						
	
	Jcc_Comp_Maker = Jcc_Comp_Maker + "<div align='center' style='width:80%; background-color:#ed8c01 ;border-style:solid; border-color:black; border-width: medium; border-radius:10px'>";	//padding:10px;					
			
					
					}
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<div style='padding:"+paraSetup[0].Padding+";'><span style='text-align:"+paraSetup[0].heading_alignment+"; color:"+paraSetup.heading_color+"'>";
										
		Jcc_Comp_Maker = Jcc_Comp_Maker + "<"+paraSetup[0].heading_font_size+" style='font-weight:"+paraSetup[0].heading_weight+";font-style:"+paraSetup[0].heading_style+";font-variant:"+paraSetup[0].heading_variant+"; text-transform:"+paraSetup[0].heading_transform+"'>"+paraSetup[0].heading+"</"+paraSetup[0].heading_font_size+">";
		

											
		Jcc_Comp_Maker = Jcc_Comp_Maker + "</span></div>";									
						

					for(var para_bx = 1; para_bx < paraSetup.length; para_bx++)
								{
									switch(paraSetup[0].columns)
										{
												
											case "1": //line-height: 4.5;
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_column1' style='color:"+paraSetup[0].Paragraph_Font_color+"; text-align:"+paraSetup[0].Paragraph_align+";line-height:"+paraSetup[0].line_spacing+"'><"+paraSetup[0].Paragraph_Font_Size+">"+ paraSetup[para_bx].Paragraph_txt +"</"+paraSetup[0].Paragraph_Font_Size+"></p>";													
											break;
												
											case "2":
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p class='jb_column2' style='color:"+paraSetup[0].Paragraph_Font_color+"; text-align:"+paraSetup[0].Paragraph_align+";line-height:"+paraSetup[0].line_spacing+"'><"+paraSetup[0].Paragraph_Font_Size+">"+ paraSetup[para_bx].Paragraph_txt +"</"+paraSetup[0].Paragraph_Font_Size+"></p>";												
											break;	
		
										}
								}
									
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";											
										
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";				
			break;
				
			case "AC":
				alert("Paragraph for Accordion has been called");
				//jcc_data = sSelections[jcc][snglBld[jcc]][accm].Paragraphs_w_box;
	var paraSetup = sSelections[jcc][snglBld[jcc]];			
							
	jb_Acc_Con = jb_Acc_Con + "<div align='center'>";// style='width:50%;'
	
											
											
				if(paraSetup[0].background_image.length > 0)
					{
					
						
	jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12' style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraSetup[0].background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";							
					}
			
				if(paraSetup[0].background_image.length === 0)							
					{
	
					
						
	jb_Acc_Con = jb_Acc_Con + "<div class='col-lg-12 col-md-12 col-xs-12' style='height:auto; padding: 20px 20px; background-color:"+paraSetup[0].background_color+"; border-top-color:"+paraSetup[0].border_color+"; border-top-width:"+paraSetup[0].border_weight+"; border-top-style:"+paraSetup[0].border_style+"; border-bottom-color:"+paraSetup[0].border_color+"; border-bottom-width:"+paraSetup[0].border_weight+"; border-bottom-style:"+paraSetup[0].border_style+"; border-radius:"+paraSetup[0].border_radius+"; margin-top:"+paraSetup[0].top_margin+";'>";						
	
	jb_Acc_Con = jb_Acc_Con + "<div align='center' style='width:80%; background-color:#ed8c01 ;border-style:solid; border-color:black; border-width: medium; border-radius:10px'>";	//padding:10px;					
			
					
					}
										
		jb_Acc_Con = jb_Acc_Con + "<div style='padding:"+paraSetup[0].Padding+";'><span style='text-align:"+paraSetup[0].heading_alignment+"; color:"+paraSetup.heading_color+"'>";
										
		jb_Acc_Con = jb_Acc_Con + "<"+paraSetup[0].heading_font_size+" style='font-weight:"+paraSetup[0].heading_weight+";font-style:"+paraSetup[0].heading_style+";font-variant:"+paraSetup[0].heading_variant+"; text-transform:"+paraSetup[0].heading_transform+"'>"+paraSetup[0].heading+"</"+paraSetup[0].heading_font_size+">";
		

											
		jb_Acc_Con = jb_Acc_Con + "</span></div>";									
						

					for(var para_bx = 1; para_bx < paraSetup.length; para_bx++)
								{
									switch(paraSetup[0].columns)
										{
												
											case "1":
jb_Acc_Con = jb_Acc_Con + "<p class='jb_column1' style='color:"+paraSetup[0].Paragraph_Font_color+"; text-align:"+paraSetup[0].Paragraph_align+";line-height:"+paraSetup[0].line_spacing+"'><"+paraSetup[0].Paragraph_Font_Size+">"+ paraSetup[para_bx].Paragraph_txt +"</"+paraSetup[0].Paragraph_Font_Size+"></p>";													
											break;
												
											case "2":
jb_Acc_Con = jb_Acc_Con + "<p class='jb_column2' style='color:"+paraSetup[0].Paragraph_Font_color+"; text-align:"+paraSetup[0].Paragraph_align+";line-height:"+paraSetup[0].line_spacing+"'><"+paraSetup[0].Paragraph_Font_Size+">"+ paraSetup[para_bx].Paragraph_txt +"</"+paraSetup[0].Paragraph_Font_Size+"></p>";												
											break;	
		
										}
								}
									
jb_Acc_Con = jb_Acc_Con + "</div>";											
										
jb_Acc_Con = jb_Acc_Con + "</div>";	
				
Jcc_Comp_Maker = Jcc_Comp_Maker +  "<div style='background-color:"+acc_setup_array[3]+";' id='collapse"+jcc+"_"+acc_Count+"' class='panel-collapse collapse'><div class='panel-body'>"+ jb_Acc_Con +"</div></div>"; 				
				
			break;	
		}
	
	
	
}								

								
//============================================================================================================								
//-------<( Functions for component creation end )>-------
//============================================================================================================									
								
							}

//<li><a href="#" data-toggle="modal" data-target="#testModal">Modal</a></li>
				
// Key term modal setup begin
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='keyModal' class='jb_modal'>";
				
//<span class='keyterm'>				
ADA_check_Array[100] = "Make Sure the key terms have been updated with the new Key Term v2 snippet";				
//<!-- Modal content -->
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='jb_header_text' class='jb_modal-hdr-ftr' style='color:#000000;font-size:20px'></div>";				
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-content' style='overflow-y:auto'>";
				
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p id='jb_modal_main_text' style='color: #ffffff; text-align:left'></p>";
				
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-hdr-ftr'><span class='jb_close' id='kt_btn'><button onclick='javascript:close_keyterm()'><jb1>Close</jb1></button></span></div>";					
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";					
// Key term modal setup end

				
// Inline source modal
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='sourceModal' class='jb_modal'>";					
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-content' style='overflow-y:auto'>";	
Jcc_Comp_Maker = Jcc_Comp_Maker + "<p id='source_text' style='color: #ffffff; text-align:left'></p>";				
Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";	
				
Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-hdr-ftr'><span class='jb_close' id='kt_btn'><button onclick='javascript:close_source()'><jb1>Close</jb1></button></span></div>";	
				
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
function nQue(qtyp,cqtn,curComp,qest,curQnum)
{
	

//csa_answer = "";
//qtyp === kind of question	
//cqtn ===	answer
//curComp === component number	
//qest === answer number, 1 = 0 2 = 1
	
	
//alert()	

if(typeof courseType !== "undefined")
	{

	if(courseType.indexOf("shortcourseA") !== -1 && courseType.indexOf("demo") === -1)
		{

			pgQueArray[curQnum].answer = 1;
			pgQueArray[curQnum].page_nm = np_num;
			
			pgQueArray[curQnum].choice = qest;

			
			
			allPgQue[np_num] = pgQueArray;

			//Checking to make sure that the page should be marked complete for shortcourseA
			var bQuestionsReady = true;
				
			for (var bqCheck = 0; bqCheck < allPgQue[bCurrentPag + 1].length; bqCheck++){
				//change the value of bQuestionsReady if there's an answer property and it's still set to zero
				if(allPgQue[bCurrentPag + 1][bqCheck].hasOwnProperty("answer") && allPgQue[bCurrentPag + 1][bqCheck].answer === 0){
					bQuestionsReady = false;
					break;
				}
			}

			//console.log(bQuestionsReady);

			//Update bPageViews...
			//if(bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] === 0){
			if(bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] === 0 && bQuestionsReady === true){
				bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag] = 1;
				//bSetState();
			}

			//Update the flyout menu...
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

			//Send the info to the LRS...
			Question_Tracker(curQnum);
		}
	
	}
	
	

switch(qtyp)
	{
	case 1:
	
			//alert("case 1");
			
	if(cqtn === true)
		{
			//alert("qest " + qest + "\ncurComp " + curComp);
			
			//q_feedback
			
			chClass = ("#cb_" + curComp + "_" + qest);
			$(chClass.toString()).addClass('q_comp_correct');
			
			document.getElementById("i_fb_" + curComp).style.display = "none";
			document.getElementById("c_fb_" + curComp).style.display = "block";
			

			
			if(q_feedback_qNum_Array[curComp].length > 0 )

				{

					
					document.getElementById("cor_idfeedback_" + curComp).innerHTML = q_feedback_qNum_Array[curComp][qest];
					
					
					document.getElementById("cor_idfeedback_" + curComp).style.display = "block";
				}
			
	
		}	
	

	
	if(cqtn === false)
		{

			
			chClass = ("#cb_" + curComp + "_" + qest);
			$(chClass.toString()).addClass('q_comp_incorrect');

			
			for(var scans = 0; scans < MC_Answer_Array[curComp].length; scans++)
				{


					if( MC_Answer_Array[curComp][scans] === "true" )
						{

							var single_answer_fd;
							single_answer_fd = ("#qs_"+curComp+"_an_"+scans);
							$(single_answer_fd.toString()).addClass('ma_CorrectNS');
						
							
							
						}

				}			

			
			document.getElementById("c_fb_" + curComp).style.display = "none";
			document.getElementById("i_fb_" + curComp).style.display = "block";	
			
			if(q_feedback_qNum_Array[curComp].length > 0 )
				{
					
					document.getElementById("inc_idfeedback_" + curComp).innerHTML =  q_feedback_qNum_Array[curComp][qest];
					document.getElementById("inc_idfeedback_" + curComp).style.display = "block";
				}
				
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

									
											fb_pop = ("#qs_" +cqest+ "_an_" + two_test);
											$(fb_pop.toString()).addClass('ma_CorrectNS');		//ma_FB_Correct									

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

			
				if(bid_Count === (speech_number[bb_cur].length - 1))
						{
							document.getElementById("bub_next_button" + bb_cur).innerText = "Replay";
						}			
			
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



function aTranscripts(tran)
	{

		switch(document.getElementById("atbtn_" + tran).innerHTML)
			{
					case "Close Transcript":
							document.getElementById("audio_trans_" + tran).style.display = "none";
							document.getElementById("atbtn_" + tran).innerHTML = "Open Transcript";					
					break;
					
					case "Open Transcript":
							document.getElementById("audio_trans_" + tran).style.display = "block";
							document.getElementById("atbtn_" + tran).innerHTML = "Close Transcript";
					break;
			}

	}




function prev_lesson()
{
	
	Page_Selection(np_num - 1,1);

}

function next_lesson()
{

	
//if( np_num + 1 === (Number(toc_flyout_fn_array.length) - 1)  )
if( np_num + 1 === (Number(toc_flyout_fn_array.length) - 1) && courseType.indexOf("hioc") !== -1 )

	{
		//window.showEOLEOM(toc_mod,toc_lsn)
		//showEOLEOM(toc_mod,toc_lsn,"EOL");
		
		window.showEOLEOM(mod_lsn[0],mod_lsn[1],"EOL");
		
		//function showEOLEOM(module,lesson,type){
	
	}	
		else
	{		
		Page_Selection(np_num + 1,1);
	}
	
	
	
	
	
}

//-----<( Brians updates )>-------
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

			console.log("bPageViews["+bCurrentMod+"]["+bCurrentLsn+"]["+bCurrentPag+"] = " + bPageViews[bCurrentMod][bCurrentLsn][bCurrentPag]);

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
	if(courseType.indexOf("demo") !== -1){
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
	}
}
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
//****************Added 2019-06-14 (Brian)****************************************
//-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-



//╔══════════════════════════════════════════════════════════════════════════════════╗
//║ -------<( Page Selection Begin )>-------                                         ║
//╚══════════════════════════════════════════════════════════════════════════════════╝	

function Page_Selection(pgSel,loc){
	//
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
		
	//if(pgSel === (Number(toc_flyout_fn_array.length) - 1)){
	if(pgSel === (Number(toc_flyout_fn_array.length) - 1) && courseType.indexOf("hioc") !== -1 ){
		window.showEOLEOM(mod_lsn[0],mod_lsn[1],"EOL");
	}else{
		document.getElementById("Page_Title").innerHTML = lesson_title_text;

		if(courseType.indexOf("hioc") === -1){
			document.getElementById("cRpage").innerHTML = "Page " + pgSel + " of " + (toc_flyout_fn_array.length - 1);
		}else{
			document.getElementById("cRpage").innerHTML = "Module " + mod_lsn[0] + ", Lesson " + mod_lsn[1] + " || Page " + pgSel + " of " + (toc_flyout_fn_array.length - 1);
		}
		
	
		//cRpage
		//alert("moduleFolder: " + moduleFolder);

		////$("#JcComponents").empty();
		//document.getElementById("JcComponents").scrollTop.scrollTop = 0;
		document.getElementById("JcComponents").scrollTop = 0;
		document.getElementById("prg_Bar").style.width = 0;

		var myScript = document.createElement('script');

		////alert("myScript: " + myScript);

		var selected_page = moduleFolder + TOC_File_Order_Array[pgSel];
		console.log("selected_page: " + selected_page);
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

function fine()
{
	//document.getElementById("Prev_Lesson").style.display = "none";	
	//document.getElementById("Prev_Lesson").offsetHeight;
}


function Table_set()
{
	
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Text_Alignment_Single.length > 0)
					{
						tbl_single_row_data[0] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Text_Alignment_Single;
					}
										
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Text_Alignment_Single.length === 0)
					{
						tbl_single_row_data[0] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Text_Alignment;
					}
									
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Color.length > 0)
					{
						tbl_single_row_data[1] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Color;
					}
										
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Color.length === 0)
					{
						tbl_single_row_data[1] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Color
					}
			
//------------------------------------	 Data_Cell_Border_Color  Data_Cell_Border_Color
			
//-------<(  Border Color )>-------										
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Border_Color.length > 0)							
	 				{
						tbl_single_row_data[2] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Border_Color;
					}
										
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Border_Color.length === 0)							
	 				{
						tbl_single_row_data[2] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Outline_Color
					}
//-------<(  Border Color )>-------	
										
									
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Border_Weight.length > 0)							
	 				{
						tbl_single_row_data[3] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Border_Weight;
					}
										
			if(new_tbl_whole[1].Row_Column_Data[rData_count].Row_Data[tData].Data_Cell_Border_Weight.length === 0)							
	 				{
						tbl_single_row_data[3] = new_tbl_whole[1].Row_Column_Data[rData_count].Row_Outline_Weight
					}				
						
	
}


/*
function make_new_page()
	{
		var myScript = document.createElement('script');
		
		//LOMA_302/Modules/Mod_01/json/LOMA_302_M1_L1_P1.js
		//  LOMA_302_M1_L1_TC.js
	
		myScript.setAttribute('src', 'LOMA_302/Modules/Mod_01/json/LOMA_302_M1_L1_P2.js');
		
		//myScript.setAttribute('src', 'LOMA_302/Modules/Mod_01/json/LOMA_302_M1_L1_P1.js');
		
		//myScript.setAttribute('src', 'json/jcc_test.js');
		
		////document.head.appendChild(myScript);
		
		document.getElementById("lessonContent").appendChild(myScript);
		
		
	}
*/
//-------<(  Added by Jack on 03_08_2019  )>-------
function open_pdf_file(opf)
{
	
	window.open("pdf/" + pdf_file_array[opf], '_blank', 'fullscreen=yes'); return false;

}
//-------<(  Added by Jack on 03_08_2019  )>-------



function lessonJump(LJ)
{


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

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( New Code for the new flip card )-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//javascript:Jcc_New_Flip(jcc,flip_new_Array[0]+",0)'>";

function Jcc_New_Flip(curCard,curCard_num,cardNumber)
{
	//alert("curCard: " + curCard + " | cardNumber: " + cardNumber);
	
	
	
	switch(cardNumber)
		{
			case 0:
						alert("zero");
						//alert("#card_"+curCard+"_"+curCard_num);
						//$("#card_"+csnip+"_"+crd_num+"").flip(true);	
						//$("#card_"+curCard+"_"+curCard_num+"").flip(true);
						////$("#card_"+curCard+"_"+curCard_num).flip(true);
				
						//document.getElementById("card_"+curCard+"_"+curCard_num).style.display = "none";
			break;
				
			case 1:
						alert("one");
						//alert("#card_"+curCard+"_"+curCard_num);
						//$("#card_"+csnip+"_"+crd_num+"").flip(true);	
						////$("#card_"+curCard+"_"+curCard_num+"").flip(false);				
			break;	
		}
	
}

function setup_flip_cards(snip,snip_num)
{
	//alert("#card_" + snip + "_" + snip_num);
	
	$("#card_"+snip+"_"+snip_num).show();
	//#card
	$(document).ready(function(){
		$("#card_"+snip+"_"+snip_num).flip({
		  axis: 'y',
		  trigger: 'manual'
		});
	});

}

function jcc_flip_snip(flnum,flp_val,jcf)
	{
		
		//alert("jcc_flip_snip: " + flnum + ", " + flp_val + ", ");
		
	if(flip_switch !== 1)	
		{
		switch(jcf)
			{
				case 0:
					//alert(jcf + " Should be 0");
						$("#card_"+flnum+"_"+flp_val).flip(true);
				break;

				case 1:
					//alert(jcf + " Should be 1");
						$("#card_"+flnum+"_"+flp_val).flip(false);
				break;
			}
		}
}
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Code for the new flip card )-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function Jcc_Flip(csnip,crd_num,jf)
	{
		switch(jf)
			{
				case 0:
					$("#card_"+csnip+"_"+crd_num+"").flip(true);
				break;
					
				case 1:
					$("#card_"+csnip+"_"+crd_num+"").flip(false);
				break;	
			}
	}

function jb_src(jbsrc)
{
	
	document.getElementById("jb_modal_main_text").innerHTML = source_Array[jbsrc];
	document.getElementById("jb_modal_main_text").style.padding = "20px";
	document.getElementById("keyModal").style.display = "block";
	document.getElementById("keyModal").style.marginTop = "30px";
}

function Source_info(sfo)
{

}

function alt_tag_lib(altag)
{
	// Max number of characters is 125
	//alert("Disable the onclick");
	//document.getElementById("flip_10").onclick = false;
	//document.getElementById("flip_10").unselectable="on"
flip_switch = 1;	
//alert("Boom image");
	
	document.getElementById('flip_10').style.pointerEvents = 'none';

	Alt_Tag_Modal(Alt_Tag_Image_Data[altag])
}

function Alt_Tag_Modal(alt_mdl_text)
{
/*
	document.getElementById("jb_header_text").innerHTML = ktrm;
	document.getElementById("jb_modal_main_text").innerHTML = kdef;
	document.getElementById("keyModal").style.display = "block";
*/
	
	
	//document.getElementById("jb_header_text").innerHTML = ktrm;
	document.getElementById("jb_modal_main_text").innerHTML = alt_mdl_text;
	document.getElementById("keyModal").style.display = "block";
	
	//modal.style.display = "block";
	
	//$('#keyModal').modal('show');
	document.getElementById("keyModal").style.marginTop = "30px";
	

}

function close_alt_tag() {
  document.getElementById("keyModal").style.display = "none";
  //document.getElementById("jb_header_text").innerHTML = "";
  document.getElementById("jb_modal_main_text").innerHTML = "";	
	
}


function populate_flip_cards(snpt,crd_order)
{
	//populate_flip_cards(cdone,1);
	//alert("populate_flip_cards has been called");
	
	//alert("snpt: " + snpt);
	//alert("crd_order: " + crd_order);
	
	
	switch(String(snpt))
		{
			case "Heading":
					
				//alert("Heading crd_order: " + crd_order);

				flip_card_sMaker = flip_card_data[crd_order].Heading;
				
				//alert(flip_card_sMaker[1].alignment);
				
				//font-size: "+ flip_card_sMaker[3].size +"; 
				//size
				
					//alert("Heading: " + flip_card_sMaker); // ; text-align: "+ flip_card_sMaker[1].alignment +"
	// onclick='javascript:jcc_flip_snip(0)'
				jb_flp_mkr[crd_order] = "<div class='card_text_new' align='"+flip_card_sMaker[1].alignment+"'><p style='color: "+ flip_card_sMaker[5].color +"; font-weight: "+ flip_card_sMaker[4].style +"; border-radius: "+ flip_card_sMaker[10].border_radius +";border-weight:"+ flip_card_sMaker[8].border_weight +" ;border-style:"+ flip_card_sMaker[9].border_style +"; border-color:"+ flip_card_sMaker[7].border_color +" ;background-color: "+ flip_card_sMaker[6].background_color +" ;margin-top: "+ flip_card_sMaker[2].top_margin +"'><"+flip_card_sMaker[3].size+">"+ flip_card_sMaker[0].sngl_Heading +"</"+flip_card_sMaker[3].size+"></p></div>";					
			
				//flip_card_sMaker = "";
			break;
				
			case "List_text_paragraph":

				flip_card_sMaker = flip_card_data[crd_order].List_text_paragraph;
				
				jb_flp_mkr[crd_order] = "<div><p style='color:"+ flip_card_sMaker[5].background_color +"; width:100%;'>";
				//================================================================================================================
				
				//-------<(  Heading )>-------	jcc_data[0].paragraph_text_size	       jcc_flip_snip									
jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<"+flip_card_sMaker[0].heading_size+" style='border-bottom-style: "+flip_card_sMaker[0].heading_underline+"; border-bottom-color:"+flip_card_sMaker[0].heading_underline_color+" ;border-bottom-width: "+flip_card_sMaker[0].heading_underline_height+"; color:"+flip_card_sMaker[0].heading_color+"; font-style: "+flip_card_sMaker[0].heading_style+"; text-align: "+ flip_card_sMaker[0].heading_alignment +"'>"+ flip_card_sMaker[0].List_Heading +"</"+flip_card_sMaker[0].heading_size+">";
//-------<(  Heading )>-------					
				
				//================================================================================================================
				//jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "</p>";  align_text
			
//-------<(  Paragraph Top )>-------				
for(var atp = 0; atp < flip_card_sMaker[1].Top_Paragraphs.length; atp++)
	{
		
		jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<"+flip_card_sMaker[0].paragraph_text_size+"><p style='text-align: "+ flip_card_sMaker[0].paragraph_alignment +"; color:"+flip_card_sMaker[0].paragraph_top_text_color+"'>"+ flip_card_sMaker[1].Top_Paragraphs[atp].Paragraph_text +"</p></"+flip_card_sMaker[0].paragraph_text_size+">";	
		
	}
//-------<(  Paragraph Top )>------- //  style="list-style-position: inside; text-align: right;padding-right:30px; style='display: inline-block; background-color: #999999;'

if(flip_card_sMaker[3].Type_of_List.length !== 0)
	{
				
jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<"+ flip_card_sMaker[3].Type_of_List +" style='padding-left:0%;' type='"+flip_card_sMaker[3].ol_type+"' style='list-style-type:"+flip_card_sMaker[3].ul_type+"'>";				
//-------<(  List )>-------	jcc_data[3].List_Text_Size		
				List_Text_Num = (flip_card_sMaker[8].list_items);
							for(lst = 0; lst < List_Text_Num.length; lst++)
								{
									////text-align: "+ flip_card_sMaker[2].align_text +";
									//List_Text_Array[lst] = (flip_card_sMaker[lst].lstText);
jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<li style='margin-left:40px; color:"+ flip_card_sMaker[7].text_color +";'><"+flip_card_sMaker[3].List_Text_Size+">"+ List_Text_Num[lst].lstText +"</"+flip_card_sMaker[3].List_Text_Size+"></li>";
			
								}

jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "</"+ flip_card_sMaker[3].Type_of_List +">";					
	}
//-------<(  List )>-------
				
//-------<(  Paragraph Bottom )>-------				
for(var abp = 0; abp < flip_card_sMaker[9].Bottom_paragraphs.length; abp++)
	{
		
		jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<"+flip_card_sMaker[0].paragraph_text_size+"><p style='text-align: "+ flip_card_sMaker[0].paragraph_alignment +"; color:"+flip_card_sMaker[0].paragraph_bot_text_color+"'>"+ flip_card_sMaker[9].Bottom_paragraphs[abp].Paragraph_text +"</p></"+flip_card_sMaker[0].paragraph_text_size+">";		
	}
//-------<(  Paragraph Bottom )>-------					
				
jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "</div>";			
				
		
				
//-------------------------------------------------------------------------------------<>				
			break;
//jb_flp_mkr[crd_order]	
				
//Paragraph_align				
			case "Paragraphs_New":

				flip_card_sMaker = flip_card_data[crd_order].Paragraphs_New;
				
			if(flip_card_sMaker[0].background_image.length > 0)
					{
	jb_flp_mkr[crd_order] = "<div	style='background: linear-gradient(rgba(220, 220, 220, 0.8), rgba(220, 220, 220, 0.8)), rgba(220,220,220,0.8) url("+img_loc + paraData.background_image+"); width:100%; height: auto; background-position: center center; background-size: cover; padding: 0px 20px; background-color:"+paraData.background_color+";border-color:"+flip_card_sMaker[0].border_color+"; border-width:"+flip_card_sMaker[0].border_weight+"; border-style:"+flip_card_sMaker[0].border_style+"; border-radius:"+flip_card_sMaker[0].border_radius+"'>";							
					}
				
				if(flip_card_sMaker[0].background_image.length === 0)							
					{
							
	jb_flp_mkr[crd_order] = "<div style='padding: 0px 20px; background-color:"+flip_card_sMaker[0].background_color+";border-color:"+flip_card_sMaker[0].border_color+"; border-width:"+flip_card_sMaker[0].border_weight+"; border-style:"+flip_card_sMaker[0].border_style+"; border-radius:"+flip_card_sMaker[0].border_radius+"'>";					
					}
		//text-align:"+flip_card_sMaker[0].heading_alignmet+";				
											
		//	 align='"+flip_card_sMaker[0].heading_alignment+"'								
		jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<div align='"+flip_card_sMaker[0].heading_alignment+"' style='margin-top:"+flip_card_sMaker[0].top_margin+"; padding:"+flip_card_sMaker[0].Padding+";'><span style='color:"+flip_card_sMaker[0].heading_color+"'>";
										
		jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<"+flip_card_sMaker[0].heading_font_size+" style='font-weight:"+flip_card_sMaker[0].heading_weight+";font-style:"+flip_card_sMaker[0].heading_style+";font-variant:"+flip_card_sMaker[0].heading_variant+"; text-transform:"+flip_card_sMaker[0].heading_transform+"'>"+flip_card_sMaker[0].heading+"</"+flip_card_sMaker[0].heading_font_size+">";
		
			//jcc_data							
		jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "</span>";									
					
		for(var newACpara = 1; newACpara < flip_card_sMaker.length; newACpara++)
												{

												
						switch(flip_card_sMaker[0].columns)
							{
								case "1":
									
//; text-align:"+flip_card_sMaker[0].Paragraph_align+"									
jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<div align='"+flip_card_sMaker[0].Paragraph_align+"'><p class='jb_column1' style='color:"+flip_card_sMaker[0].Paragraph_Font_color+";line-height:"+flip_card_sMaker[0].line_spacing+"'><"+flip_card_sMaker[0].Paragraph_Font_Size+">"+ flip_card_sMaker[newACpara].Paragraph_txt +"</"+flip_card_sMaker[0].Paragraph_Font_Size+"></p></div>";									
								break;	
									
								case "2":
jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<div align='"+flip_card_sMaker[0].Paragraph_align+"'><p class='jb_column2' style='color:"+flip_card_sMaker[0].Paragraph_Font_color+"; text-align:"+flip_card_sMaker[0].Paragraph_align+";line-height:"+flip_card_sMaker[0].line_spacing+"'><"+flip_card_sMaker[0].Paragraph_Font_Size+">"+ flip_card_sMaker[newACpara].Paragraph_txt +"</"+flip_card_sMaker[0].Paragraph_Font_Size+"></p></div>";									
								break;	
							}
				
												}

				
jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "</div>";					
jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "</div>";				
			break;	
				
			case "image_w_text":
					//alert(flip_card_data[crd_order].image_w_text.length);
				
				flip_card_sMaker = flip_card_data[crd_order].image_w_text;
			
//jb_flp_mkr[crd_order] = "<div style='margin-top: " + flip_card_sMaker[6].top_margin + "'>";											
jb_flp_mkr[crd_order] = "<div style='background-color: " + flip_card_sMaker[7].background_color +"'>";

		if(flip_card_sMaker[0].image_w_text_tag.length === 0)
			{

				ADA_check_Array[jcc] =  flip_card_sMaker[0].image_name + " needs the Alt tag fields added in the Flip Card."
			}				
				
				
		switch(flip_card_sMaker[1].image_position)
			{ 
				case "top": 
				if(typeof flip_card_sMaker[0].image_w_text_tag !== "undefined")
					{
						if(flip_card_sMaker[0].image_w_text_tag.length <= 125)
							{
					jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<div align='"+flip_card_sMaker[1].image_aligmnent+"'><img style='border-style:"+flip_card_sMaker[0].border_style+"; border-width:"+flip_card_sMaker[0].border_height+"; border-color:"+flip_card_sMaker[0].border_color+"; border-radius:"+ flip_card_sMaker[8].image_radius +"' srf'"+img_loc+"" + flip_card_sMaker[0].image_name + "' width=' " + flip_card_sMaker[2].image_size + " ' height='auto' alt='"+flip_card_sMaker[0].image_w_text_tag+"'></div>";										
							}
						if(flip_card_sMaker[0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = flip_card_sMaker[0].image_w_text_tag;
						
							
					jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<div align='"+flip_card_sMaker[1].image_aligmnent+"'><img style='border-style:"+flip_card_sMaker[0].border_style+"; border-width:"+flip_card_sMaker[0].border_height+"; border-color:"+flip_card_sMaker[0].border_color+"; border-radius:"+ flip_card_sMaker[8].image_radius +"' src='"+img_loc+"" + flip_card_sMaker[0].image_name + "' width=' " + flip_card_sMaker[2].image_size + " ' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>";					
								
							}
					}					


					jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<div align='"+flip_card_sMaker[5].image_text_alignmnet+"' style='font-style:"+flip_card_sMaker[4].image_text_style+";font-variant:"+flip_card_sMaker[4].image_text_variant+";font-weight:"+flip_card_sMaker[4].image_text_weight+";color:"+flip_card_sMaker[4].image_text_color+"'><"+flip_card_sMaker[5].image_font_size+">" + flip_card_sMaker[3].image_text + "</"+flip_card_sMaker[5].image_font_size+"></div>";
					
				break;
					
				case "bottom":
					jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<div class='jb_char_para' style='font-style:"+flip_card_sMaker[4].image_text_style+";font-variant:"+flip_card_sMaker[4].image_text_variant+";font-weight:"+flip_card_sMaker[4].image_text_weight+";color:"+flip_card_sMaker[4].image_text_color+";text-align: "+ flip_card_sMaker[5].image_text_alignmnet +";'><"+flip_card_sMaker[5].image_font_size+">" + flip_card_sMaker[3].image_text + "</"+flip_card_sMaker[5].image_font_size+"></div>";						
					
				if(typeof flip_card_sMaker[0].image_w_text_tag === "undefined")
					{
					jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<div><img style='border-style:"+flip_card_sMaker[0].border_style+"; border-width:"+flip_card_sMaker[0].border_height+"; border-color:"+flip_card_sMaker[0].border_color+"; border-radius:"+ flip_card_sMaker[8].image_radius +"' src='"+img_loc+"" + flip_card_sMaker[0].image_name + "' width=' " + flip_card_sMaker[2].image_size + " ' height='auto' alt=''></div>";							
					}
					
				if(typeof flip_card_sMaker[0].image_w_text_tag !== "undefined")
					{
						if(flip_card_sMaker[0].image_w_text_tag.length <= 125)
							{
					jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<div align='"+flip_card_sMaker[1].image_aligmnent+"'><img style='border-style:"+flip_card_sMaker[0].border_style+"; border-width:"+flip_card_sMaker[0].border_height+"; border-color:"+flip_card_sMaker[0].border_color+"; border-radius:"+ flip_card_sMaker[8].image_radius +"' src='"+img_loc+"" + flip_card_sMaker[0].image_name + "' width=' " + flip_card_sMaker[2].image_size + " ' height='auto'alt='"+flip_card_sMaker[0].image_w_text_tag+"'></div>";										
							}
						if(flip_card_sMaker[0].image_w_text_tag.length > 125)
							{
					Alt_Tag_Image_Data[jcc] = flip_card_sMaker[0].image_w_text_tag;
								
					jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "<div align='"+flip_card_sMaker[1].image_aligmnent+"'><img style='border-style:"+flip_card_sMaker[0].border_style+"; border-width:"+flip_card_sMaker[0].border_height+"; border-color:"+flip_card_sMaker[0].border_color+"; border-radius:"+ flip_card_sMaker[8].image_radius +"' src='"+img_loc+"" + flip_card_sMaker[0].image_name + "' width=' " + flip_card_sMaker[2].image_size + " ' height='auto' alt='Select image for more information' role='button' onclick='alt_tag_lib("+jcc+")'></div>";									
							}
					}					

				break;
					
				case "left":
					
				break;
					
				case "right":
					
				break;	
					
					
			}
				
			
				
				
				

				
				//jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "</div>";
				jb_flp_mkr[crd_order] = jb_flp_mkr[crd_order] + "</div>";
//---------------------------------------------------------------------				
			break;	
			/*	
	
			
			
			case "JB_Table":
				
			break;
			*/
		}

}
/*
function Swiffy_Play(swiffy_id)
{
	//swiffycontainer_"+jcc+"
	
	alert("Swiffy_Play was just called = " + swiffy_id);  
	
	var stage = new swiffy.Stage(document.getElementById('swiffycontainer'),
       swiffyobject, {  });
      
      stage.start();
	  
}


function load_swiffy_js(swiffy_file_name)
{
        
	alert("swiffy_file_name: " + swiffy_file_name);
	var swf_js = document.createElement('script');
        swf_js.setAttribute("type","text/javascript");
        swf_js.setAttribute("src", +'"' + swiffy_file_name +'"');
	
}
*/

function LRM_setup()
{
	alert("LRM_setup was called");
						
						document.getElementById("lrm_window").style.backgroundColor = "blue";	
						document.getElementById("lrm_window").style.height = "400px";
						document.getElementById("lrm_window").style.width = "100%";
	
	//document.getElementById('id1').style.color = 'red'">
											//<div id ="lrm_window">
											
											/*
												#lrm_window {
												  width: 800px;
												  height: 350px;
												  position: relative;
												 background: yellow;
												}
											*/
}



function Swiffy_Play(swiffy_id)
	{
			//alert("Swiffy_Play was just called = " + "swiffycontainer_" + swiffy_id);
		
		//cur_swiffy_name[jcc]
		
		//alert("cur_swiffy_name[swiffy_id]: " + cur_swiffy_name[swiffy_id]);
		
// <script src="json/LOMA_302_M1_L1_P3.js"></script>		
		
	//<script src="swiffy/"+cur_swiffy_name[swiffy_id]+".js"></script>
		
		var swf_str = String(cur_swiffy_name[swiffy_id]);
		
		alert("swf_str: " + swf_str);
		
		/*
		var swf_str = String(cur_swiffy_name[swiffy_id]);
		
		//$.getScript( "swiffy/"+swf_str+".js");
		
		$.getScript("swiffy/Acquisition.js", function(internedStrings){
			 alert(internedStrings);
		});
		*/
		//load_swiffy_js(swf_str);
		

		
		//alert(swf_str);
		//$.getScript("swiffy/"+swf_str+".js");
		
		var cur_swiffy = String(("swiffycontainer_" + swiffy_id));
		//alert(cur_swiffy);
		
	var stage = new swiffy.Stage(document.getElementById(cur_swiffy),  //'swiffycontainer'
	/*							 
	<!-- corporations  Merger Acquisition Male_Female_Mortality_Curves_281 -->							 
	<script type="text/javascript" src="swiffy/Acquisition.js"></script> 

	<script src="json/LOMA_281_M1_L1_P1.js"></script>								 
	*/							 
	
   // var swiffy_file_name = document.createElement("script");
   // swiffy_file_name.type = "text/javascript";
   // swiffy_file_name.src = "Public/Scripts/"+swf_str+".js."; 
   // document.getElementsByTagName("head")[0].appendChild(swiffy_file_name);
   // return false;								 
	
					 
       //swiffyobject, {  }); 
	  swf_str, {  }); 							 
      
      stage.start();		

/*		
      var stage = new swiffy.Stage(document.getElementById('swiffycontainer'),
          Merger, {  }); // swiffyobject corporations Merger Acquisition Male_Female_Mortality_Curves_281
      
      stage.start();		
*/		
		

	
		
		
		
		
		/*
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
		*/	

	}



/*
function loadScript(url, callback){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}	
*/



/*
function Question_Recall()
{
		
						if(typeof courseType !== "undefined")
							{

							if(courseType === "shortcourseA")
								{
									//alert("Question number: " + allPgQue[np_num][Q_count].question);
									//alert("Answer: " + allPgQue[np_num][Q_count].answer);
									
									if( allPgQue[np_num][Q_count].answer === 1)
										{
											alert("Question number: " + allPgQue[np_num][Q_count].question + " Choice: " + allPgQue[np_num][Q_count].choice + " jcc: " + jcc);
										}
									
						
									//alert("jcc: " + jcc);
									
								}
								
							}
											
															
			
}
*/

function Question_Tracker(qNum){
//function nameMeWhateverMakesSense(responseNum, correctNum, qNum){
var pageNumber = np_num;
//console.log(pageNumber);

var theStatement = {
"type": "inlinequestion",
"verb": "answered",
"activity": "http://adlnet.gov/expapi/activities/question",
"module": bCurrentMod + 1,
"lesson": bCurrentLsn + 1,
"page": pageNumber,
"objectID": "M" + bCurrentMod + "L" + bCurrentLsn + "P" + pageNumber + "Q" + qNum,
//"studentResponse": responseNum,
//"correctResponse": correctNum
}

if(isXAPI){
//Send the Statement...
LRSSend(theStatement);
//Set the State...
bSetState();
}
}

