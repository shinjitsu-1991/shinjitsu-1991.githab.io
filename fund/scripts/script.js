//авто-слайдер-1

$('#fader img:gt(0)').hide();
 
setInterval(function(){
 $('#fader :first-child')
 .fadeTo(1500, 0)
 .next('img')
 .fadeTo(1500, 1)
 .end()
 .appendTo('#fader');
}, 4600);

$('#fader2 img:gt(0)').hide();
 
setInterval(function(){
 $('#fader2 :first-child')
 .fadeTo(1900, 0)
 .next('img')
 .fadeTo(1900, 1)
 .end()
 .appendTo('#fader2');
}, 5000);

//кнопки "Типы фундамента"

$(".button-1").click(function(){
	$(".our-works").hide();
	$(".context-section").css({'display':'flex'});
	$("#item-1").css({'display':'flex'});
	$("#context-close-1").show();
	
});

$(".button-2").click(function(){
	$(".our-works").hide();
	$(".context-section").css({'display':'flex'});
	$("#context-close-2").show();
	$("#item-2").css({'display':'flex'});
});

$(".button-3").click(function(){
	$(".our-works").hide();
	$(".context-section").css({'display':'flex'});
	$("#context-close-3").show();
	$("#item-3").css({'display':'flex'});
});

//закрытие вкладки с описанием фундамента

$("#context-close-1").click(function(){
	$(".context-section").hide();
	$("#item-1").hide();
	$("#context-close-1").hide();
	$(".our-works").css({'display':'flex'});
});

$("#context-close-2").click(function(){
	$(".context-section").hide();
	$("#item-2").hide();
	$("#context-close-2").hide();
	$(".our-works").css({'display':'flex'});
});

$("#context-close-3").click(function(){
	$(".context-section").hide();
	$("#item-3").hide();
	$("#context-close-3").hide();
	$(".our-works").css({'display':'flex'});
});

//слайдеры для модальных блоков
//слайдер 1
$(function() {      
  var slider = $('.slider-1'),
    sliderContent = slider.html(),                      // Содержимое слайдера
    slideWidth = $('.slider-box-1').outerWidth(),         // Ширина слайдера
    slideCount = $('.slider-1 img').length,               // Количество слайдов
    prev = $('.slider-box-1 .prev-1'),                      // Кнопка "назад"
    next = $('.slider-box-1 .next-1'),                      // Кнопка "вперед"
    sliderInterval = 3300,                              // Интервал смены слайдов
    animateTime = 1000,                                 // Время смены слайдов
    course = 1,                                         // Направление движения слайдера (1 или -1)
    margin = - slideWidth;                              // Первоначальное смещение слайдов
 
  $('.slider-1 img:last').clone().prependTo('.slider-1');   // Копия последнего слайда помещается в начало.
  $('.slider-1 img').eq(1).clone().appendTo('.slider-1');   // Копия первого слайда помещается в конец.  
  $('.slider-1').css('margin-left', -slideWidth);         // Контейнер .slider сдвигается влево на ширину одного слайда.
 
  function nextSlide(){                                 // Запускается функция animation(), выполняющая смену слайдов.
    interval = window.setInterval(animate, sliderInterval);
  }
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     // Если слайдер дошел до конца
      slider.css({'marginLeft':-slideWidth});           // то блок .slider возвращается в начальное положение
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  // Если слайдер находится в начале и нажата кнопка "назад"
      slider.css({'marginLeft':-slideWidth*slideCount});// то блок .slider перемещается в конечное положение
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              // Если условия выше не сработали,
    margin = margin - slideWidth*(course);              // значение margin устанавливается для показа следующего слайда
    }
    slider.animate({'marginLeft':margin},animateTime);  // Блок .slider смещается влево на 1 слайд.
  }
 
  function sliderStop(){                                // Функция преостанавливающая работу слайдера      
    window.clearInterval(interval);
  }
 
  prev.click(function() {                               // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = -1;                                        // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
  });
  next.click(function() {                               // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = 1;                                         // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
  });
 
  slider.add(next).add(prev).hover(function() {         // Если курсор мыши в пределах слайдера
    sliderStop();                                       // Вызывается функция sliderStop() для приостановки работы слайдера
  }, nextSlide);                                        // Когда курсор уходит со слайдера, анимация возобновляется.
 
  nextSlide();                                          // Вызов функции nextSlide()
});

//слайдер 2

$(function() {      
  var slider = $('.slider-2'),
    sliderContent = slider.html(),                      // Содержимое слайдера
    slideWidth = $('.slider-box-2').outerWidth(),         // Ширина слайдера
    slideCount = $('.slider-2 img').length,               // Количество слайдов
    prev = $('.slider-box-2 .prev-2'),                      // Кнопка "назад"
    next = $('.slider-box-2 .next-2'),                      // Кнопка "вперед"
    sliderInterval = 3300,                              // Интервал смены слайдов
    animateTime = 1000,                                 // Время смены слайдов
    course = 1,                                         // Направление движения слайдера (1 или -1)
    margin = - slideWidth;                              // Первоначальное смещение слайдов
 
  $('.slider-2 img:last').clone().prependTo('.slider-2');   // Копия последнего слайда помещается в начало.
  $('.slider-2 img').eq(1).clone().appendTo('.slider-2');   // Копия первого слайда помещается в конец.  
  $('.slider-2').css('margin-left', -slideWidth);         // Контейнер .slider сдвигается влево на ширину одного слайда.
 
  function nextSlide(){                                 // Запускается функция animation(), выполняющая смену слайдов.
    interval = window.setInterval(animate, sliderInterval);
  }
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     // Если слайдер дошел до конца
      slider.css({'marginLeft':-slideWidth});           // то блок .slider возвращается в начальное положение
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  // Если слайдер находится в начале и нажата кнопка "назад"
      slider.css({'marginLeft':-slideWidth*slideCount});// то блок .slider перемещается в конечное положение
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              // Если условия выше не сработали,
    margin = margin - slideWidth*(course);              // значение margin устанавливается для показа следующего слайда
    }
    slider.animate({'marginLeft':margin},animateTime);  // Блок .slider смещается влево на 1 слайд.
  }
 
  function sliderStop(){                                // Функция преостанавливающая работу слайдера      
    window.clearInterval(interval);
  }
 
  prev.click(function() {                               // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = -1;                                        // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
  });
  next.click(function() {                               // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = 1;                                         // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
  });
 
  slider.add(next).add(prev).hover(function() {         // Если курсор мыши в пределах слайдера
    sliderStop();                                       // Вызывается функция sliderStop() для приостановки работы слайдера
  }, nextSlide);                                        // Когда курсор уходит со слайдера, анимация возобновляется.
 
  nextSlide();                                          // Вызов функции nextSlide()
});

//слыйдер 3

$(function() {      
  var slider = $('.slider-3'),
    sliderContent = slider.html(),                      // Содержимое слайдера
    slideWidth = $('.slider-box-3').outerWidth(),         // Ширина слайдера
    slideCount = $('.slider-3 img').length,               // Количество слайдов
    prev = $('.slider-box-3 .prev-3'),                      // Кнопка "назад"
    next = $('.slider-box-3 .next-3'),                      // Кнопка "вперед"
    sliderInterval = 3300,                              // Интервал смены слайдов
    animateTime = 1000,                                 // Время смены слайдов
    course = 1,                                         // Направление движения слайдера (1 или -1)
    margin = - slideWidth;                              // Первоначальное смещение слайдов
 
  $('.slider-3 img:last').clone().prependTo('.slider-3');   // Копия последнего слайда помещается в начало.
  $('.slider-3 img').eq(1).clone().appendTo('.slider-3');   // Копия первого слайда помещается в конец.  
  $('.slider-3').css('margin-left', -slideWidth);         // Контейнер .slider сдвигается влево на ширину одного слайда.
 
  function nextSlide(){                                 // Запускается функция animation(), выполняющая смену слайдов.
    interval = window.setInterval(animate, sliderInterval);
  }
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     // Если слайдер дошел до конца
      slider.css({'marginLeft':-slideWidth});           // то блок .slider возвращается в начальное положение
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  // Если слайдер находится в начале и нажата кнопка "назад"
      slider.css({'marginLeft':-slideWidth*slideCount});// то блок .slider перемещается в конечное положение
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              // Если условия выше не сработали,
    margin = margin - slideWidth*(course);              // значение margin устанавливается для показа следующего слайда
    }
    slider.animate({'marginLeft':margin},animateTime);  // Блок .slider смещается влево на 1 слайд.
  }
 
  function sliderStop(){                                // Функция преостанавливающая работу слайдера      
    window.clearInterval(interval);
  }
 
  prev.click(function() {                               // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = -1;                                        // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
  });
  next.click(function() {                               // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = 1;                                         // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
  });
 
  slider.add(next).add(prev).hover(function() {         // Если курсор мыши в пределах слайдера
    sliderStop();                                       // Вызывается функция sliderStop() для приостановки работы слайдера
  }, nextSlide);                                        // Когда курсор уходит со слайдера, анимация возобновляется.
 
  nextSlide();                                          // Вызов функции nextSlide()
});

//контакты и форма отправки сообщений

$("#contact").click(function(){
	$(".contacts").css({'display':'flex'});
});

$(".contacts>.close").click(function(){
	$(".contacts").css({'display':'none'});
});

$("#message").click(function(){
	$(".message").css({'display':'flex'});
});

$(".message>.close").click(function(){
	$(".message").css({'display':'none'});
});

$(".contacts_message-menu").hover(function(){
	$(".contacts_message-menu").css({'opacity':'1'});
});

$("#contact").hover(function(){
	$(".contacts_message-menu").css({'opacity':'1'});
});

$("#message").hover(function(){
	$(".contacts_message-menu").css({'opacity':'1'});
});

$(".contacts_message-menu").mouseout(function(){
	$(".contacts_message-menu").css({'opacity':'0.5'});
});

//принцип работы-отображение текста

$('.specialy-item-1 .specialy-main-img').click(function(){
	$('.specialy-item-2').hide(600);
	$('.specialy-item-3').hide(600);
	$('.specialy-item-4').hide(600);
	$('.specialy-item-1 div').css({'display':'flex'});
	$('#specialy-close-1').show(600);
});

$('#specialy-close-1').click(function(){
	$('.specialy-item-1 div').hide(600);
	$('#specialy-close-1').hide(600);
	$('.specialy-item-2').css({'display':'flex'});
	$('.specialy-item-3').css({'display':'flex'});
	$('.specialy-item-4').css({'display':'flex'});
});

$('.specialy-item-2 .specialy-main-img').click(function(){
	$('.specialy-item-1').hide(600);
	$('.specialy-item-3').hide(600);
	$('.specialy-item-4').hide(600);
	$('.specialy-item-2 div').css({'display':'flex'});
	$('#specialy-close-2').show(600);
});

$('#specialy-close-2').click(function(){
	$('.specialy-item-2 div').hide(600);
	$('#specialy-close-2').hide(600);
	$('.specialy-item-1').css({'display':'flex'});
	$('.specialy-item-3').css({'display':'flex'});
	$('.specialy-item-4').css({'display':'flex'});
});

$('.specialy-item-3 .specialy-main-img').click(function(){
	$('.specialy-item-2').hide(600);
	$('.specialy-item-1').hide(600);
	$('.specialy-item-4').hide(600);
	$('.specialy-item-3 div').css({'display':'flex'});
	$('#specialy-close-3').show(600);
});

$('#specialy-close-3').click(function(){
	$('.specialy-item-3 div').hide(600);
	$('#specialy-close-3').hide(600);
	$('.specialy-item-2').css({'display':'flex'});
	$('.specialy-item-1').css({'display':'flex'});
	$('.specialy-item-4').css({'display':'flex'});
});

$('.specialy-item-4 .specialy-main-img').click(function(){
	$('.specialy-item-2').hide(600);
	$('.specialy-item-3').hide(600);
	$('.specialy-item-1').hide(600);
	$('.specialy-item-4 div').css({'display':'flex'});
	$('#specialy-close-4').show(600);
});

$('#specialy-close-4').click(function(){
	$('.specialy-item-4 div').hide(600);
	$('#specialy-close-4').hide(600);
	$('.specialy-item-2').css({'display':'flex'});
	$('.specialy-item-3').css({'display':'flex'});
	$('.specialy-item-1').css({'display':'flex'});
});

