// global js
$(document).ready(function () {
    /* global banner opacity */
    /* top alert */
    if (document.cookie == '') {
        $("#oNo_Script").html('Your browser does not support Cookie temporarily, this will cause some function can\'t be used normally. In order to obtain a better experience, suggest you open the browser Cookie support.');
        $("#oNo_Script").css('display', 'block');
    }
    /* upfront */
    var upfront = document.createElement('SCRIPT');
    upfront.type = "text/javascript";
    upfront.async = true;
    upfront.src = document.location.protocol + "//upfront.thefind.com/scripts/main/utils-init-ajaxlib/upfront-badgeinit.js";
    upfront.text = "thefind.upfront.init('tf_upfront_badge', '84a74f2a5098fa04b1eaf67b4b95c5f0')";
    document.getElementsByTagName('HEAD')[0].appendChild(upfront);

    if (screen.width < 1024 || screen.height < 600) {
        $(".live_chat").attr('style', 'display:none;');
        $("#wibiyaToolbar").attr('style', 'display:none;');/* temp product wibi bar*/
        $("body").attr('style', 'background:url();');/* do not display background pic */
    }
    /**backtotop**/
    window.onscroll = function () {
        if (document.documentElement.scrollTop)
            var cur_position = document.documentElement.scrollTop;
        else if (document.body.scrollTop)
            var cur_position = document.body.scrollTop;
        else
            var cur_position = 0;
        if (cur_position > 800) {
            $("#tools_livechat").show('fast');
            $("#backtop").show('fast');
        } else {
            $("#tools_livechat").hide('fast');
            $("#backtop").hide('fast');
        }
    }
});

function mailOnblur(obj) {
    if (obj.value == '') {
        obj.value = 'Email Address';
    }
}
function mailOnfocus(obj) {
    if (obj.value == 'Email Address') {
        obj.value = '';
    }
}
function search_content(obj) {
    document.getElementById('search_query').value = obj;
    $("#searchform").submit();
}

function searchformsubmit() {

    if ($("#search_query").val() == "Search"
        || $("#search_query").val() == "" || $("#search_query").val() == "keywords") {
        $("#search_query").focus();
        return false;
    }
    window.location.href = '/fashion/' + $("#search_query").val().replace(new RegExp("[^a-z0-9_]+", 'gi'), "-").replace(new RegExp("^[-_]+|[-_]+$", 'g'), "").toLowerCase();
    return false;
}

// keywords onblur
function searchOnblur(obj) {
    if (obj.value == '') {
        obj.value = 'Search';
    }
}
// keywords onfocus
function searchOnfocus(obj) {
    if (obj.value == 'Search') {
        obj.value = '';
    }
    ;
}
function getRelated(index) {
    if (parseInt(index.length) < 4 || parseInt(index.length) > 50) {
        return false;
    }
    $.ajax({
        type: "POST",
        url: "/ajax_search_related.php",
        data: {
            'action': 'search_related',
            'key': index
        },
        dataType: "json",
        success: function (msg) {
            if (msg.flag == 1) {
                $("#search_related").html(msg._html);
                $("#search_related").show();
            }
        }
    });
}

function deleteShoppingBag(id_product, id_product_attribute) {
    $.ajax({
        type: "POST",
        url: "/ajax_shoppingbag.php",
        data: {
            'action': 'deleteShoppingBag',
            'id_product': id_product,
            'id_product_attribute': id_product_attribute,
            'position': 'newheader'
        },
        dataType: "json",
        success: function (msg) {
            $("#header_shoppingbag").html(msg._html);
        }
    });
}
function subscribeNormal(email) {
    if (email.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) == null) {
        $("#omega").html("<h2>FASHION'S LATEST, STRAIGHT TO YOUR INBOX.</h2><p>Make sure you're well connected by signing up to receive our email newsletters. All you need to do is fill out the details above and we'll send all that's extraordinary about Oasap.com straight to your inbox.</p>");
        $("#sub_msg").html("Invalid email address!");
        $("#sub_msg").removeClass("email_explain");
        $("#sub_msg").addClass("red");
        $("#sub_msg").addClass("borld");
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: "/mailsubscribe.php",
            data: {
                'action': 'subscribe',
                'email_address': email,
                'mail_category': 1
            },
            dataType: "html",
            success: function (msg) {
                if (msg == "success") {
                    $("#omega").html("<h2>THANKS FOR SUBSCRIBING TO OUR NEWSLETTER. </h2><p>Congratulations! You are now a subscriber to OASAP's newsletter! Stay tuned for our latest fashion news, new arrivals, special offers and more.</p>");
                    $("#sub_msg").html("");
                } else {
                    $("#omega").html("<h2>FASHION'S LATEST, STRAIGHT TO YOUR INBOX.</h2><p>Make sure you're well connected by signing up to receive our email newsletters. All you need to do is fill out the details above and we'll send all that's extraordinary about Oasap.com straight to your inbox.</p>");
                    $("#sub_msg").removeClass("email_explain");
                    $("#sub_msg").addClass("red");
                    $("#sub_msg").addClass("borld");
                    $("#sub_msg").html(msg);
                }
            }
        });
    }
}

function addToFavorite() {
    var a = "http://www.oasap.com/?s=bm";
    var b = "Oasap Women's Fashion Store";
    if (document.all) {
        window.external.AddFavorite(a, b);
    }
    else if (window.sidebar) {
        window.sidebar.addPanel(b, a, "");
    }
    else {
        $("#wrapper-bookmark").show('fast');
    }
    return false;
}

function hideAddBookmark() {
    $("#wrapper-bookmark").hide();
}

function go(id) {
    var posObj = $('#' + id).html();
    if (posObj) {
        var pos = $("#" + id).offset().top;
        $("html,body").animate({
            scrollTop: pos
        }, 1000);
    }
}

var idtab = 0;
timer = setInterval('changeheaderTab()', 5000);
function changeheaderTab() {
    idtab++;
    if (idtab > 1) idtab = 0;
    var tmpid = 0;
    if (idtab == 0) {
        tmpid = 1;
    }
    else {
        tmpid = idtab - 1;
    }
    $("#tab" + tmpid).hide('slow');
    $("#tab" + idtab).show("slow");


}

function hidnewyeatalert() {
    $("#newyeatalert").attr('style', 'display:none');
    $(".box").css('height', '110px');
    $.ajax({
        type: "POST",
        url: "/ajax_signin.php",
        data: {
            'closetop_mig': 1
        }
    });
}
function quickPay() {
    var bhtml = $("#paybutton").html();
    $("#paybutton").html("<img src='/themes/oasap2013/images/loading.gif' />");
    $.ajax({
        type: "POST",
        url: "/ajax_order.php",
        data: 'action=addorder&type=ExpressCheckout',
        dataType: "json",
        success:
        function (data) {
            if (data.flag == 2) {
                $("#paybutton").html(bhtml);
                alert(data.msg.replace(/&quot;/gi, '"'));
                //$("#error_msg").html("Friendly Reminder:  The remaining credit balance in your Oasap account is insufficient.")
                //$("#error_msg").show();
                //go("error_msg");
            } else {
                window.location.href = "/ecmodel/revieworder.php?id_cart=" + data.id_cart;
            }
        }
    });
}