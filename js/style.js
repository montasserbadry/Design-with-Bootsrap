// Controle of height of sliderbar
$(function(){
    " use strict";
    var winH = $(window).height(),
       upperH = $(".upper-bar").innerHeight(),
       navH = $(".navbar").innerHeight();
       $(".slider , .carousel-item ").height(winH - (upperH + navH));
// feature work li transation
       $('.feature-work ul li').on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        // control of opacity imgs
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md').css('opacity',1);
        } else {
            $('.shuffle-imgs .col-md').css('opacity','.08');
          $($(this).data('class')).parent().css('opacity', 1);
 
 }
        });
})
