$('#product_small_images').jcarousel({
    vertical: true,
    visible: 4,
    scroll: 1
});
$(document).ready(function () {
    go_comment_page(49485, 1);


});
if (!(typeof (outfits_count) == 'undefined') && outfits_count > 1) {
    $(".outfit_pre").show();
    $(".outfit_next").show();
}
function open_oufitdetail() {
    $(".outfits_all").hide();
    $(".rr_outfits_details").show();
}
function close_oufitdetail() {
    $(".rr_outfits_details").hide();
    $(".outfits_all").show();
}
function showsizejs() {
    $("#overlay-mask").show();
    $("#size_chart").show();
}
function hidesizejs() {
    $("#overlay-mask").hide();
    $("#size_chart").hide();
}
function videoOnblur(obj) {
    if (obj.value == '') {
        obj.value = 'Input your video link/url from YouTube';
    }
}
function videoOnfocus(obj) {
    if (obj.value == 'Input your video link/url from YouTube') {
        obj.value = '';
    }
}
function photoOnblur(obj) {
    if (obj.value == '') {
        obj.value = 'Please input your photo link/url';
    }
}
function photoOnfocus(obj) {
    if (obj.value == 'Please input your photo link/url') {
        obj.value = '';
    }
}
function close_showorder() {
    $("#overlay-mask").hide();
    $("#showphoto_container").hide();
}



function show_photo_video(type) {
    if (type == 1) {
        $("#upload_left_signin").show();
        $("#upload_left_noorder").hide();
        $("#upload_left").hide();
    } else if (type == 2) {
        $("#upload_left_signin").hide();
        $("#upload_left_noorder").show();
        $("#upload_left").hide();
    } else {
        $("#upload_left_signin").hide();
        $("#upload_left_noorder").hide();
        $("#upload_left").show();
    }
    $("#showorder_msg").html("");
    $("#overlay-mask").show();
    $("#showphoto_container").show();
}
function showphoto(type) {
    if (type == 1) {
        $("#upload_left_signin").show();
        $("#upload_left_noorder").hide();
        $("#upload_left").hide();
    } else if (type == 2) {
        $("#upload_left_signin").hide();
        $("#upload_left_noorder").show();
        $("#upload_left").hide();
    } else {
        $("#upload_left_signin").hide();
        $("#upload_left_noorder").hide();
        $("#upload_left").show();
    }
    $("#showorder_msg").html("");
    $("#show_title").html("show your photo");
    $("#show_des").html("To gain <strong>2</strong> points by uploading your order image, the credits will be funded to your account automatically.");
    $("#choose_information_photo").show();
    $("#choose_information_video").hide();
    $("#showphoto_requirement").show();
    $("#showvideo_requirement").hide();
    $("#overlay-mask").show();
    $("#showphoto_container").show();

    //	$("#overlay-mask").attr("onclick","hide_mask();");
    //alert("sdfs");
    //		var obj = document.getElementById("overlay-mask");
    //		if (window.attachEvent)
    //		{
    //			obj.attachEvent("onclick", hide_mask);
    //
    //		}
    //		else
    //		{
    //			obj.addEventListener("click", hide_mask, false);
    //
    //		}
}
function showvideo(type) {
    if (type == 1) {
        $("#upload_left_signin").show();
        $("#upload_left_noorder").hide();
        $("#upload_left").hide();
    } else if (type == 2) {
        $("#upload_left_signin").hide();
        $("#upload_left_noorder").show();
        $("#upload_left").hide();
    } else {
        $("#upload_left_signin").hide();
        $("#upload_left_noorder").hide();
        $("#upload_left").show();
    }
    $("#showorder_msg").html("");
    $("#show_title").html("show your video");
    $("#show_des").html("To gain <strong>4</strong> points by uploading your order video, the credits will be funded to your account automatically.");
    $("#choose_information_photo").hide();
    $("#choose_information_video").show();
    $("#showphoto_requirement").hide();
    $("#showvideo_requirement").show();
    $("#overlay-mask").show();
    $("#showphoto_container").show();
}
function quick_signin() {
    var email = $("#q_email").val();
    var passwd = $("#q_passwd").val();
    var id_product = '49485';
    if (!email) {
        $("#upload_left_signin_error").html("Invalid Email");
    } else if (!passwd) {
        $("#upload_left_signin_error").html("Invalid Password");
    } else {
        $.ajax({
            type: "POST",
            url: "/ajax_signin.php",
            data: {
                'signin': true,
                'email': email,
                'id_product': id_product,
                'passwd': passwd
            },
            dataType: "json",
            success: function (msg) {
                if (msg.flag == 1) {
                    if (msg.hasorder) {
                        $("#upload_left_signin").hide();
                        $("#upload_left_noorder").hide();
                        $("#upload_left").show();
                    } else {
                        $("#upload_left_signin").hide();
                        $("#upload_left_noorder").show();
                        $("#upload_left").hide();
                    }
                } else {
                    $("#upload_left_signin_error").html(msg.errors)
                    $("#upload_left_signin").show();
                    $("#upload_left_noorder").hide();
                    $("#upload_left").hide();
                }
            }
        });
    }
}
function checkUrl() {
    var url = $("#videourl").val();
    if (url == "Input your video link/url from YouTube") {
        url = "";
    }
    if (!url) {
        $("#showorder_msg").html("Invalid Youtube url.<br/>");
        return false;
    }
    var youtube_reg = /.youtube./;
    var video_reg = /[?|&]v=([^&]*)/;
    var youtube_res = youtube_reg.test(url);
    var video_res = video_reg.test(url);
    if (youtube_res && video_res) {
        return true;
    } else {
        $("#showorder_msg").html("Invalid Youtube url.<br/>");
        return false;
    }
}
function comment_open() {
    $('#review_container').show();
    $('#overlay-mask').show();
}
function comment_close() {
    $('#review_container').hide();
    $('#overlay-mask').hide();
}
function s_cxy_souse(is) {
    var str = "";
    for (var i = 0; i < 5; i++) {
        if (i <= is) $("#s_s_" + i).attr('class', 'selected');
        if (i > is) $("#s_s_" + i).attr('class', '');
    }
}

function pre(num) {
    $("#outfits_" + now_show_outfit_num).hide();
    if (num == 1) {
        if (now_show_outfit_num > 1) { now_show_outfit_num--; } else { now_show_outfit_num = outfits_count; }
    } else {
        if (now_show_outfit_num < outfits_count) { now_show_outfit_num++; } else { now_show_outfit_num = 1; }
    }
    $("#outfits_" + now_show_outfit_num).show();
}
function change(num) {

    if (num == 1) {
        $("#show_des").html("To gain <strong>2</strong> points by uploading your order image, the credits will be funded to your account automatically.");
        $("#choose_information_photo").show();
        $("#choose_information_video").hide();
        $("#showphoto_requirement").show();
        $("#showvideo_requirement").hide();
    }
    else {
        $("#show_des").html("To gain <strong>2</strong> points by uploading your order image, the credits will be funded to your account automatically.");
        $("#choose_information_photo").hide();
        $("#choose_information_video").show();
        $("#showphoto_requirement").hide();
        $("#showvideo_requirement").show();
    }
}
function chang_hot(num) {
    $(".hottags").hide();
    $(".hottag_num").removeClass("hottag_mouseover");
    $(".hottag_num").removeClass("hottag_mouseout");
    $(".hottag_num").addClass("hottag_mouseout");
    $("#num_" + num).removeClass("hottag_mouseout");
    $("#num_" + num).addClass("hottag_mouseover");
    $("#" + num).show();
}
function hide_mask() {
    //alert("232");
    $("#overlay-mask").hide();
    $(".hidemask").hide();
    //$("#overlay-mask").removeAttr("onclick");
}