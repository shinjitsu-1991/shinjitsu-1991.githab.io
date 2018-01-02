  var mySwiper2 = new Swiper ('.instructors-content .swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.instructors-buttons .swiper-button-next',
      prevEl: '.instructors-buttons .swiper-button-prev',
    }
  })
  var swip = new Swiper ('.swip', {
    loop: true,
    navigation: {
      nextEl: '.instructors-buttons .swiper-button-next',
      prevEl: '.instructors-buttons .swiper-button-prev',
    }
  })

//instructors-adaptive слайдер

  var instrAdaptiv = new Swiper ('.conteiner-adaptive', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    spaceBetween: 120,

    navigation: {
      nextEl: '.instr-adaptiv-but-next',
      prevEl: '.instr-adaptiv-but-prev',
    }
  })

$('.open-link-popup').magnificPopup({

type:'inline'

});



lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

//аккордион
  $(document).ready(function(){
  	$('.popular-questions-accordion').not(':first').hide();
  	$('.popular-questions-accordion>span').click(function(){
  		var findContent=$(this).next('.accordion-content');
  		var close=$(this).closest('.popular-questions-accordion');
  		if (findContent.is(':visible')) {
  			findContent.slideUp(500);
  			$(this).removeClass('active');
        $('.popular-questions-accordion>span').removeClass('active');
  		}
  		else{
  			close.find('.accordion-content').slideUp(500);
  			findContent.slideDown(500);
        $('.popular-questions-accordion>span').removeClass('active');
  			$(this).addClass('active');   		
  		}
  	});
  });

  //слайдер банера head-content

var actionNextButton = document.getElementById('next');
var actionPreviousButton = document.getElementById('prev');
var slider = document.getElementById('head-content');

var images = [
  'img/main-header-bg.png',
  'img/main-header-bg-2.png',
  'img/main-header-bg-3.png'
];
var num = 0;

actionNextButton.onclick = function() {
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.style.backgroundImage ='url('+images[num]+')';
};

actionPreviousButton.onclick = function() {
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.style.backgroundImage ='url('+images[num]+')';
};

//quote слайдер

var swiperQuote = new Swiper('.quote-wrapper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    }
    });

 //выпадающее меню в адаптивной версии

 $('#burger-adaptiv').click(function(){
    $('#burger-adaptiv').hide(100);
    $('#close-burger-adaptiv').show(100);
    $('.drop-menu').show(500);
    $('.button-block').hide(100);
    $('.head-content-main>.content').css({'visibility':'hidden'});
 });

 $('#close-burger-adaptiv').click(function(){
    $('#close-burger-adaptiv').hide(100);
    $('#burger-adaptiv').show(200);
    $('.drop-menu').hide(300);
    $('.button-block').show(100);
    $('.head-content-main>.content').css({'visibility':'visible'});
 });


    	
