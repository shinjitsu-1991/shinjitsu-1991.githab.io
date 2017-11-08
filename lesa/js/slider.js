function slider() {
  var currSlide = 0;
  var slides = document.querySelector('.header-slider').children;
  var slidesCount = slides.length;

  function animate() {
    slides[currSlide].classList.remove('active');
    currSlide = currSlide + 1 > slidesCount - 1 ? 0 : currSlide + 1;
    slides[currSlide].classList.add('active');
  }

  setInterval(animate, 10000);
}

slider();