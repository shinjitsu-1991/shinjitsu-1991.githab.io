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
    $('.head-baner>.content').css({'visibility':'hidden'});
    $('.head-baner').css({'height':'530px'});
 });

 $('#close-burger-adaptiv').click(function(){
    $('#close-burger-adaptiv').hide(100);
    $('#burger-adaptiv').show(200);
    $('.drop-menu').hide(300);
    $('.head-baner>.content').css({'visibility':'visible'});
    $('.head-baner').css({'height':'auto'});
 });

 //табы

 var tab;
var tabContent;

window.onload=function(){
    tabContent=document.getElementsByClassName('section');
    tab=document.getElementsByClassName('tab');
    
    hideContent(1);
}

function hideContent(a){
    for(var i=a;i<tabContent.length;i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('active-tab');
    }
}

document.getElementById('tabs').onclick=function(event){
    var target=event.target;
    if(target.className=='tab'){
        for(var i=0;i<tab.length;i++){
            if(target==tab[i]){
                showContent(i);
                break;
            }
        }
    }
}

function showContent(b){
    if(tabContent[b].classList.contains('hide')){
        hideContent(0);
        tab[b].classList.add('active-tab');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

 //онлайн запись

$('.online-note').click(function(){
    $('.online-note-form').css({'display':'flex'});
});

$('.online-note-close').click(function(){
    $('.online-note-form').css({'display':'none'});
});


 //datapicker ini

 $( function() {
    $( "#form-note-date" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
      
  } );

( function( factory ) {
  if ( typeof define === "function" && define.amd ) {

    define( [ "../widgets/datepicker" ], factory );
  } else {

    factory( jQuery.datepicker );
  }
}( function( datepicker ) {

datepicker.regional.ru = {
  closeText: "Закрыть",
  prevText: "&#x3C;Пред",
  nextText: "След&#x3E;",
  currentText: "Сегодня",
  monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
  "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
  monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
  "Июл","Авг","Сен","Окт","Ноя","Дек" ],
  dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
  dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
  dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
  weekHeader: "Нед",
  dateFormat: "dd.mm.yy",
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.ru );

return datepicker.regional.ru;

} ) );

$( "#datepicker" ).datepicker( $.datepicker.regional[ "ru" ] );

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