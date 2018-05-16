var a=($(window).height()-($('header').height())-($('footer').height()));
$('.main-content').height(a);



var swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
    });

$(document).ready(function(){

    $('.prev-page .logo').css({opacity:1});
    $('.prev-page .logo').animate({opacity:0},2000);
    $('.prev-page .logo').animate({opacity:1},2000);
    setTimeout(arguments.callee, 4500);
    setTimeout(function () {
        $('.prev-page .menu #item-1').fadeIn(100);
    },4000);
    setTimeout(function () {
        $('.prev-page .menu #item-2').fadeIn(100);
    },4400);
    setTimeout(function () {
        $('.prev-page .menu #item-3').fadeIn(100);
    },4800);
    setTimeout(function () {
        $('.prev-page .menu #item-4').fadeIn(100);
    },5200);

});
$('.menu-item .attr').css({opacity:0});
$('.menu-item').mouseenter(function(){
    $(this).children('.attr').animate({opacity:1},500);
});
$('.menu-item').mouseleave(function(){
    $(this).children('.attr').animate({opacity:0},300);
});