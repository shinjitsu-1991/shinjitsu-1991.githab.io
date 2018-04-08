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

