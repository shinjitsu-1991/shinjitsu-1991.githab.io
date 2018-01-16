//калькулятор

$('.calc-start').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#calc',

    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 320) {
          this.st.focus = false;
        } else {
          this.st.focus = '#calc';
        }
      }
    }
  });
//оплата онлайн форма

$('.payment').click(function(){
    $('.online-pay-form').css({'display':'flex'});
});

$('.online-close').click(function(){
    $('.online-pay-form').css({'display':'none'});
});

//выпадающее меню в адаптивной версии

 $('#burger-adaptiv').click(function(){
    $('#burger-adaptiv').hide(100);
    $('#close-burger-adaptiv').show(100);
    $('.drop-menu').show(500);
    $('.head-baner>span').css({'visibility':'hidden'});
    $('.head-baner').css({'height':'900px'});
 });

 $('#close-burger-adaptiv').click(function(){
    $('#close-burger-adaptiv').hide(100);
    $('#burger-adaptiv').show(200);
    $('.drop-menu').hide(300);
    $('.head-baner>span').css({'visibility':'visible'});
    $('.head-baner').css({'height':'auto'});
 });

 //rangeSlider

$("#range").ionRangeSlider({
    min: 0,
    max: 60,
    type: 'single',
    grid: true,
    force_edges: true,
    grid_margin:true,
    grid_num: 10
});

