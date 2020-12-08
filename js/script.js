const sliderButtons = document.querySelectorAll('.button__slider'),
  next = document.querySelector('.bi-arrow-right'),
  prev = document.querySelector('.bi-arrow-left'),
  blockItem = document.querySelector('.documents__item');



if (next || prev) {
  next.addEventListener('click', function () {
    next.classList.add('button__slider--color');
    prev.classList.remove('button__slider--color');
    blockItem.classList.remove('documents__item--left');
    blockItem.classList.remove('documents__item--right');
    blockItem.classList.add('documents__item--left');
  })

  prev.addEventListener('click', function () {
    prev.classList.add('button__slider--color');
    next.classList.remove('button__slider--color');
    blockItem.classList.remove('documents__item--left');
    blockItem.classList.add('documents__item--right');
  })
}

