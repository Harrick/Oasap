/* index.js */
$(document).ready(function () {

    $("#slider .h_slider").attr('style', 'display:block;');
    $("#slider").bxSlider({
        mode: 'fade',
        captions: true,
        infiniteLoop: true,
        controls: false,
        auto: true,
        pause: 8000
    });

});
function hidnewyeatalert() {
    $("#newyeatalert").attr('style', 'display:none');
}
