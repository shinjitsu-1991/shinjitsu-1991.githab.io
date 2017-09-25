var slide_left = document.getElementById('prev'),
    slide_right = document.getElementById('next'),
    total_block = document.getElementsByClassName('slider-wraper'),
    idx = 0;

slide_right.addEventListener('click', moveLeft);
function moveLeft(){
    slide_left.style.display = 'block';
    total_block[idx].style.display = 'none';
    total_block[++idx].style.display = 'flex';
    if (idx === total_block.length - 1) { 
      slide_right.style.display = 'none';
    }
}

slide_left.addEventListener('click', moveRight);
function moveRight(){
    slide_right.style.display = 'block';
    total_block[idx].style.display = 'none';
    total_block[--idx].style.display = 'flex';
    if (idx === 0) {
      slide_left.style.display = 'none';
    }
}
