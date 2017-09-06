$(document).ready(function(){
    $('.corusel').slick({
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear'
    });
});
$(function(){
    $('#nav').slicknav({
        prependTo:	"header"
    });
});