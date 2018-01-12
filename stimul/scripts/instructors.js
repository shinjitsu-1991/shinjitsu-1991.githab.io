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

 //калькулятор

$('.calc-start').click(function(){
    $('.calculator-wrap').css({'display':'flex'});
});

$('#calc-close').click(function(){
    $('.calculator-wrap').css({'display':'none'});
});