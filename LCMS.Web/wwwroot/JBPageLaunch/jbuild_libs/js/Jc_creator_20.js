// @ts-nocheck
var jcc_Setup;
var jcc_page_data;
var Jcc_Content;
var c_data_length;
var Jcc_Component_File = [];
var c_div_maker;
var script;
var c_new_load = [];
var c_new_no_dup = [];
var c_timer_finished = 0;
var c_lesson_map = [];
var c_function_name;
var c_data_data_stream;
var c_Header_Setup;
var c_tab_index = 0;
var cur_index_tab_id;
var cur_iwt_img_id = [];
var iwt_cur_img;
var iwt_atl_text;
var cur_alt_text_index_tab_id;
var comp_ids = [];

var c_components_Array = [];
var acc_filtered;
var acc_instances_array = [
    [],
    []
];
//var acc_instances_array = [];

var acc_cur_num;
var acordion_snip_array = [];
var acc_placement_number = [];
var flipcard_snip_array = [];
//var flip_filtered;
var orig_Array = [];
var key_modal;
var closeButton = "Close";
var c_comp_Array = [];
var acc_menu_array = [];
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Heading vars )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

c_comp_Array = [];

function New_comp_test(nct) {

}
//id="Lesson_Page_title" Add in Look at later when testing 04/28/2021
function Lesson_Data_File(Jcc) {

    jcc_Setup = Object.keys(Jcc[0]);
    jcc_page_data = Object.keys(Jcc[0][jcc_Setup[0]]); // Page_Setup


    if (Jcc[0][jcc_Setup[0]].hImage.length > 4) {

        document.getElementById("Lesson_Page_title").innerHTML = Jcc[0][jcc_Setup[0]].hImage;

        c_Header_Setup = "<div class='col-lg-12 col-md-12 col-xs-12 Main_div_settings' style='width:100%;margin-top: 10px; margin-bottom: 10px'>";

        c_Header_Setup = c_Header_Setup + "<img alt='" + Jcc[0][jcc_Setup[0]].hImage_Alt_Tag_Text + "' src='images/" + Jcc[0][jcc_Setup[0]].hImage + "' style='width:" + Jcc[0][jcc_Setup[0]].heroSize + "; height:" + Jcc[0][jcc_Setup[0]].heroSize + ";'/>";

        c_Header_Setup = c_Header_Setup + "</div>";
    }

    document.getElementById("Lesson_Page_title").innerHTML = Jcc[0][jcc_Setup[0]].hImage;


    document.getElementById("pg_header").style.backgroundColor = Jcc[0][jcc_Setup[0]].Lesson_Header_Color;

    Jcc_Content = Object.keys(Jcc[0][jcc_Setup[1]]);


    for (var onum = 0; onum < Jcc_Content.length; onum++) {
        orig_Array[onum] = String(Object.keys(Jcc[0][jcc_Setup[1]][Jcc_Content[onum]]));

    }

    c_data_length = Jcc_Content.length;

    for (var lsn_scr = 0; lsn_scr < c_data_length; lsn_scr++) {
        Jcc_Component_File[lsn_scr] = Jcc[0][jcc_Setup[1]][Jcc_Content[lsn_scr]];

        c_components_Array[lsn_scr] = String(Object.keys(Jcc[0][jcc_Setup[1]][Jcc_Content[lsn_scr]]));

        acc_instances_array[lsn_scr] = "0";

        switch (c_components_Array[lsn_scr]) {
            case "Accordion":
                var acc_array = Jcc_Component_File[lsn_scr].Accordion;

                for (var acc_cnt = 2; acc_cnt < acc_array.length; acc_cnt++) {
                    if (acc_cnt % 2 === 1) {
                        acordion_snip_array[acordion_snip_array.length] = String(Object.keys(acc_array[acc_cnt]));
                    }
                }
                break;

            case "Flip_Multi_New":
                var flip_array = Jcc_Component_File[lsn_scr].Flip_Multi_New;
                for (var flp_count = 1; flp_count < flip_array.length; flp_count++) {
                    flipcard_snip_array[flipcard_snip_array.length] = String(Object.keys(flip_array[flp_count]));
                }
                break;

        }

    }

    for (var acc_inst = 0; acc_inst < acc_instances_array.length; acc_inst++) {

    }
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    //-------<(  Get snippets for the accordion )>-------
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    for (var acc_inject = 0; acc_inject < acordion_snip_array.length; acc_inject++) {
        if (typeof acordion_snip_array[acc_inject] !== "undefined") {
            c_components_Array.push(acordion_snip_array[acc_inject]);
        }


    }
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    //-------<(  Get snippets for the accordion )>------- 
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-                               

    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    //-------<(  Get snippets for the Flip Card )>-------
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    for (var flip_inject = 0; flip_inject < flipcard_snip_array.length; flip_inject++) {

        if (typeof flipcard_snip_array[flip_inject] !== "undefined") {
            //alert("flipcard_snip_array[flip_inject]: " + flipcard_snip_array[flip_inject]);
            c_components_Array.push(flipcard_snip_array[flip_inject]);
        }

    }

    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    //-------<(  Get snippets for the Flip Card )>------- 
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 


    var lesson_final_array = [];
    for (var lsnfnl = 0; lsnfnl < c_components_Array.length; lsnfnl++) {
        $.each(c_components_Array, function (i, el) {
            if ($.inArray(el, lesson_final_array) === -1) lesson_final_array.push(el);
        });

    }

    lesson_injection(lesson_final_array);
}


function lesson_injection(fnl_scrpt) {

    for (var c_scr_call = 0; c_scr_call < fnl_scrpt.length; c_scr_call++) {

        script = document.createElement('script');
        script.setAttribute('src', '../../../jbuild_libs/js/comps/' + fnl_scrpt[c_scr_call] + '.js');
        script.setAttribute('type', 'text/javascript');
        document.getElementsByTagName('head')[0].appendChild(script);


        if (c_scr_call + 1 === fnl_scrpt.length) {

            setTimeout(c_delay, 500);

            function c_delay() {

                start_lesson_creation();

            }



        }


    }

}




function start_lesson_creation() {


    for (var comp_num = 0; comp_num < orig_Array.length; comp_num++) {

        c_data_data_stream = "";


        c_data_data_stream = Jcc_Component_File[comp_num][Object.keys(Jcc_Component_File[comp_num])];




        c_function_name = String(orig_Array[comp_num]);



        var c_comp_string = c_function_name;
        var c_comp_function = window[c_comp_string];
        acc_menu_array[comp_num] = c_data_data_stream[0].Comp_Name
        c_comp_function(c_data_data_stream, comp_num);

    }

}

function comp_Array_test() {
    if (c_comp_Array.length === Jcc_Content.length) {
        c_Lesson_Builder();
    }

}

function c_Lesson_Builder() {

    for (var comp_construct_count = 0; comp_construct_count < c_comp_Array.length; comp_construct_count++) {

        if (comp_construct_count === 0) {
            lsn_files = c_comp_Array[comp_construct_count];
        }

        if (comp_construct_count > 0) {
            lsn_files = lsn_files + c_comp_Array[comp_construct_count];
        }
    }

    if (comp_construct_count === c_comp_Array.length) {
        Jcc_Comp_Maker = "<div class='col-lg-12 col-md-12 col-xs-12 Main_div_settings'>";


        Jcc_Comp_Maker = Jcc_Comp_Maker + "<button class='sr-only' id='menubutton1' aria-haspopup='true' aria-controls='menu1'>Component Menu</button>";

        Jcc_Comp_Maker = Jcc_Comp_Maker + "<ul class='sr-only' id='menu1' role='menu' aria-labelledby='menubutton1' tabindex='-1' style='display: block; position: absolute; top: 28px; left: 0px;'>";

        for (var cmpm = 0; cmpm < c_data_length; cmpm++) {

            console.log("acc_menu_array[" + cmpm + "]: " + acc_menu_array[cmpm]);

            var curmnItm = (cmpm + 1)


            Jcc_Comp_Maker = Jcc_Comp_Maker + "<li role='button' aria-pressed='false' onclick='compjump(" + acc_menu_array[cmpm] + ")' role='menuitem' tabindex='-1'>Component " + curmnItm + " " + acc_menu_array[cmpm] + "</li>";
        }


        Jcc_Comp_Maker = Jcc_Comp_Maker + "</ul>";


        if (typeof c_Header_Setup !== "undefined") {
            Jcc_Comp_Maker = Jcc_Comp_Maker + c_Header_Setup;
        }
        keymodal()
        imageModal()

        //=======================================================
        //-------<(  Lesson Files  )>-------
        //=======================================================



        Jcc_Comp_Maker = Jcc_Comp_Maker + lsn_files;
        //=======================================================       
        //-------<(  Lesson Files  )>-------           
        //=======================================================

        Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"
        document.getElementById("JcComponents").innerHTML = Jcc_Comp_Maker;


    }
}


function c_mlf_test() {
    c_ModLessonFolder = (typeof p_modulelessonFolder);
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( info box modal open and close )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function c_info_box_event(ibe) {
    //$('#myModal_'+ ibe).modal('show');
    document.getElementById("c_info_Modal_" + ibe).style.display = "block";
    document.getElementById("c_info_Modal_" + ibe).style.marginTop = "80px";

}


function close_Info_modal(cim) {
    document.getElementById("c_info_Modal_" + cim).style.display = "none";
}
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( info box modal open and close )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function keymodal() {
    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='keyTermModal' class='c_jb_modal'>"; // 1 

    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='jb_header_text' class='c_jb_modal-hdr-ftr' style='color:#000000;font-size:20px'></div>"; //2			

    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal_width'>";


    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='alt_kt_width' id='jb_alt_modal' class='c_jb_modal-content' style='overflow-y:auto'>"; // 3


    Jcc_Comp_Maker = Jcc_Comp_Maker + "<textarea role='input' id='jb_modal_main_text' rows='4' cols='84' autofocus readonly></textarea>"
    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div></div>"; // 3

    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_hdr_ftr'>";
    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='jb_modal-hdr-ftr'><span class='jb_close' id='kt_btn'><button onclick='javascript:close_keyterm()' onfocusout='alt_jbfocusout(1)'><jb1>" + closeButton + "</jb1></button></span></div>";
    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>"; // 1

}

function show_keyterm() {
    $("#keyTermModal").css("display", "block"); //jb_alt_modal
    document.getElementById("jb_alt_modal").focus(); //jb_modal_main_text
}

function close_keyterm() {
    $("#keyTermModal").css("display", "none");

    if (typeof cur_alt_text_index_tab_id === "string") {
        document.getElementById(cur_alt_text_index_tab_id).focus();
    }

    if (typeof iwt_atl_text === "string") {
        document.getElementById(iwt_atl_text).focus();
    }


}

function alt_tag_text(attxt, ptb) {
    iwt_atl_text = ptb;

    document.getElementById("keyTermModal").style.display = "block";
    document.getElementById("jb_header_text").style.display = "none";
    document.getElementById("jb_modal_main_text").innerHTML = attxt;

    document.getElementById("jb_modal_main_text").focus();


}

function alt_jbfocusout(ajbtfo) {

    if (ajbtfo === 1) {
        document.getElementById("jb_modal_main_text").focus()
    }

}

function alt_jbfocus(jbtf) // probably do not need this
{
    //console.log("jbtf: " + jbtf)
}


function jbfocusout(jbtfo) {
    console.log("focus out: " + jbtfo);

    if (jbtfo === 4) {
        document.getElementById("imgJbscrl").focus()
    };
}

function jbfocus(jbtf) {

}

function jb_focusout(focus_comp, fc_type, jbtfo) {
    switch (focus_comp) {
        case "1":

            if (fc_type === "fc_img") {
                if (jbtfo === 4) {
                    document.getElementById("imgJbscrl").focus()
                };
            }
            if (fc_type === "fc_alt") {
                if (jbtfo === 1) {
                    document.getElementById("jb_modal_main_text").focus()
                }
            }
            break;

        case "MLTIMG":

            break;
    }
}



function alt_tag_image(cmp_num, ati_num, cmp_type) {
    //console.log("mi_alt_btn_" + cmp_num + "_" + ati_num);close_keyterm
    cur_alt_text_index_tab_id = "mi_alt_btn_" + cmp_num + "_" + ati_num;


    document.getElementById("keyTermModal").style.display = "block";

    document.getElementById("jb_header_text").style.display = "none";

    if (cmp_type === 1) {};
    if (cmp_type === 2) {
        document.getElementById("jb_modal_main_text").innerHTML = IWT_Alt_Tag_Mdl[cmp_num]
    };
    if (cmp_type === 3) {
        document.getElementById("jb_modal_main_text").innerHTML = alt_text_Large[cmp_num][ati_num]
    };
    if (cmp_type === 4) {
        document.getElementById("jb_modal_main_text").innerHTML = Q_Alt_Tag_Array[cmp_num]
    };
    document.getElementById("jb_modal_main_text").focus();




}





function imageModal() {

    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='imageModal' class='img_modal' style='margin-top:36px; overflow: hidden'>";

    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_hdr_ftr'><p id='jb_img_modal' style='color: #ffffff; text-align:left;'></p></div>";

    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='imgContainer' class='img_modal_content'>";
    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='sld_mimage'>";
    Jcc_Comp_Maker = Jcc_Comp_Maker + "<button aria-label='Scroll image' id='imgJbscrl' onfocus='jbfocus(5)'><img 'role'='button' id='mdl_image' style='width:90%; height:90%; background-color:black; margin-left:auto; margin-right:auto;' src='' x alt=''></button>";
    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";
    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div class='img_modal_hdr_ftr'>";

    Jcc_Comp_Maker = Jcc_Comp_Maker + "<div id='img_mdl_btns'>";

    Jcc_Comp_Maker = Jcc_Comp_Maker + "<button aria-label='Zoom in' id='img_zoom' class='btn' style='background-color:#0070b0;' onClick='javascript:mi_iwt_zi_image()' onfocus='jbfocus(1)' onfocusout='jbfocusout(1)'><img img src='../../../jbuild_libs/images/plus_icon.png'></button>";

    Jcc_Comp_Maker = Jcc_Comp_Maker + "<span class='zicon'></span><button aria-label='Zoom out' id='img_zoom_out' class='btn' style='background-color:#0070b0;' onClick='javascript:mi_iwt_zo_image()' onfocus='jbfocus(2)' onfocusout='jbfocusout(2)'><img img src='../../../jbuild_libs/images/minus_sign.png' ></button>";

    Jcc_Comp_Maker = Jcc_Comp_Maker + "<span class='zicon'></span><button aria-label='Fit image' id='img_fit' class='btn' style='background-color:#0070b0;' onClick='javascript:mi_iwt_fit_image()' onfocus='jbfocus(3)' onfocusout='jbfocusout(3)'><img img src='../../../jbuild_libs/images/resize_full.png' ></button>";

    Jcc_Comp_Maker = Jcc_Comp_Maker + "<span class='zicon'></span><span class='jb_close'><button id='image_Modal' onclick='javascript:close_image_modal()' onfocus='jbfocus(4)' onfocusout='jbfocusout(4)'><jb1>" + closeButton + "</jb1></button></span>"; //id='img_btn'

    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";

    Jcc_Comp_Maker = Jcc_Comp_Maker + "</div>";


}


function open_image_modal(oim, cur_id) {
    document.getElementById("mdl_image").src = oim;
    cur_index_tab_id = cur_id;


    iwt_cur_img = cur_iwt_img_id[cur_id];



    if (document.body.clientWidth <= 414) {
        document.getElementById("imgContainer").style.width = "384px";
        document.getElementById("imgContainer").style.height = "350px";
    } else {
        document.getElementById("imgContainer").style.width = "600px";
        document.getElementById("imgContainer").style.height = "350px";
    }

    document.getElementById("imageModal").style.display = "block";

    focusableElements = [document.getElementById("img_zoom"), document.getElementById("img_zoom_out"), document.getElementById("img_fit"), document.getElementById("image_Modal"), document.getElementById("mdl_image")];


    document.getElementById("img_zoom").focus();



    document.getElementById("mdl_image").style.objectFit = "contain";


    document.getElementById("imageModal").addEventListener("keypress", handler);


    function handler(e) {
        var key = window.event ? e.keyCode : e.which;


    }

    // attach handler to the keydown event of the document
    if (document.attachEvent) document.attachEvent('onkeydown', handler);
    else document.addEventListener('keydown', handler);


}

function getntype(ntp) {

}

function close_image_modal() {


    document.getElementById("imageModal").style.display = "none";


    if (typeof iwt_cur_img === "string") {
        document.getElementById(iwt_cur_img).focus()
    }


    if (typeof cur_index_tab_id === "string") {
        document.getElementById(cur_index_tab_id).focus()
    }






}

function mi_iwt_zi_image() {
    var mi_zoomer = document.getElementById("mdl_image").style.height.replace("%", "");

    document.getElementById("mdl_image").style.height = (Number(mi_zoomer) + 20) + "%";
    document.getElementById("mdl_image").style.width = (Number(mi_zoomer) + 20) + "%";


    if (document.body.clientWidth <= 414) {
        document.getElementById("imgContainer").style.width = "384px";
        document.getElementById("imgContainer").style.height = "350px";
    } else {
        document.getElementById("imgContainer").style.width = "600px";
        document.getElementById("imgContainer").style.height = "350px";
    }

}


function mi_iwt_fit_image() {

    document.getElementById("mdl_image").style.height = "90%";
    document.getElementById("mdl_image").style.width = "90%";
    document.getElementById("mdl_image").style.display = "block";
    if (document.body.clientWidth <= 414) {
        document.getElementById("imgContainer").style.width = "384px";
        document.getElementById("imgContainer").style.height = "350px";
    } else {
        document.getElementById("imgContainer").style.width = "600px";
        document.getElementById("imgContainer").style.height = "350px";
    }
}

function mi_iwt_zo_image() {

    var mi_zoomer = document.getElementById("mdl_image").style.height.replace("%", "");
    if (mi_zoomer >= 100) {
        document.getElementById("mdl_image").style.height = (Number(mi_zoomer) - 20) + "%";
        document.getElementById("mdl_image").style.width = (Number(mi_zoomer) - 20) + "%";
    }
    if (document.body.clientWidth <= 414) {
        document.getElementById("imgContainer").style.width = "384px";
        document.getElementById("imgContainer").style.height = "350px";
    } else {
        document.getElementById("imgContainer").style.width = "600px";
        document.getElementById("imgContainer").style.height = "350px";
    }
}

function compjump(cjump) {

}