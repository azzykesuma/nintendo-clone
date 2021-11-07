// import Splide from '@splidejs/splide';

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// hamburger function

const hamburger = document.querySelector('.hamburger');
const aside = document.getElementById('aside');
const main = document.querySelector('main');
const sticky = document.querySelector('.sticky');
const body = document.querySelector('body');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  aside.classList.toggle('isOpen');
  if(aside.classList.contains('isOpen')){
    body.style.overflow = 'hidden';
    main.style.opacity = 0.5;
    sticky.style.display = 'none';
  } else {
    body.style.overflow = 'auto';
    main.style.opacity = 1;
    sticky.style.display = 'grid';
  }
});

// aside nav function
const hardwareNav = document.querySelector('.hardwareNav');
const gamesNav = document.querySelector('.gamesNav');
const game = document.getElementById('game');
const hardware = document.getElementById('hardware');
const gameCursorBar = document.getElementById('gameCursorBar');
const hardwareCursorBar = document.getElementById('hardwareCursorBar');

game.addEventListener('click', () => {
  gamesNav.classList.toggle('gamesNav__open');
  gameCursorBar.classList.toggle('gameCursorBar__open');
});

hardware.addEventListener('click', () => {
  hardwareNav.classList.toggle('hardwareNav__open');
  hardwareCursorBar.classList.toggle('hardwareCursorBar__open');
});

// lightbox
const modalImage = document.querySelector('.modalImage');
const gridWrap = document.querySelector('.gridWrap');
const images = gridWrap.querySelectorAll('img');
const close = document.getElementById('close-icon')

images.forEach(img => {
  img.addEventListener('click', () => {
    modalImage.classList.add('modalImage__open');

    if(modalImage.classList.contains('modalImage__open')){
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  });
});

close.addEventListener('click', () => {
  modalImage.classList.remove('modalImage__open')
})

