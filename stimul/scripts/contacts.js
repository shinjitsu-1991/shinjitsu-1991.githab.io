//оплата онлайн форма

$('#payment').click(function(){
    $('.online-pay-form').css({'display':'flex'});
});

$('#online-close').click(function(){
    $('.online-pay-form').css({'display':'none'});
});

 //выпадающее меню в адаптивной версии

 $('#burger-adaptiv').click(function(){
    $('#burger-adaptiv').hide(100);
    $('#close-burger-adaptiv').show(100);
    $('.drop-menu').show(500);
    $('.head-baner__main').css({'height':'600px'});
    $('.head-baner__main').css({'visibility':'hidden'});
 });

 $('#close-burger-adaptiv').click(function(){
    $('#close-burger-adaptiv').hide(100);
    $('#burger-adaptiv').show(200);
    $('.drop-menu').hide(300);
    $('.head-baner__main').css({'height':'auto'});
    $('.head-baner__main').css({'visibility':'visible'});
 });

  //онлайн запись

$('.online-note').click(function(){
    $('.online-note-form').css({'display':'flex'});
});

$('.online-note-close').click(function(){
    $('.online-note-form').css({'display':'none'});
});


 //datapicker ini

 $( function() {
    $( "#form-note-date" ).datepicker();
    
  } );