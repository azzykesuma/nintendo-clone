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
const heroData = document.querySelector('.heroData');


function openlightBox() {
  modalImage.classList.add('modalImage__open');

  if(modalImage.classList.contains('modalImage__open')) {
    sticky.style.display = 'none';
    heroData.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
}

function closeLightBox() {
  modalImage.classList.remove('modalImage__open');
  sticky.style.display = 'grid';
  heroData.style.backgroundColor = 'rgba(0,0,0,0)';
}

let modalIndex = 1;
showModal(modalIndex);

function changeSlide(n) {
  showModal(modalIndex += n);
  console.log(modalIndex)
}

function toSlide(n) {
  showModal(modalIndex = n);
  console.log(modalIndex)
}

function showModal(n) {
  const slide = document.getElementsByClassName('slides-images');
 
  if(n > slide.length) {
    modalIndex = 1;
  };

  if (n < 1) {
    modalIndex = slide.length;
  }

  for(let i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }

  slide[modalIndex - 1].style.display = 'block';
  document.querySelector('.modalNumber').innerHTML = ` ${modalIndex} / 6`
}

// footer functions
const mobileFooterWrap = document.querySelector('.mobileFooterWrap');


mobileFooterWrap.addEventListener('click', (e) => {
  const target = e.target.id;
  const games_footer = document.getElementById('games_footer');
  const explore = document.getElementById('explore__more')
  const support = document.getElementById('support');
  const buy = document.getElementById('where__buy');
  const precaution = document.getElementById('health_safety_precaution');
  const arrowIcon = document.querySelectorAll('.arrowIcon');
  console.log(arrowIcon)

  if(target === games_footer.id) {
    const children = document.getElementById('games_footer').nextElementSibling;
    children.classList.toggle('openFooterNav')
    
    if(children.classList.contains('openFooterNav')) {
      arrowIcon[0].classList.toggle('arrowIcon__open');
    } else {
      arrowIcon[0].classList.toggle('arrowIcon__open');
    }
  } else if (target === explore.id) {
    const children = document.getElementById('explore__more').nextElementSibling;
    children.classList.toggle('openFooterNav')

    if(children.classList.contains('openFooterNav')) {
      arrowIcon[1].classList.toggle('arrowIcon__open');
    } else {
      arrowIcon[1].classList.toggle('arrowIcon__open');
    }
  } else if (target === support.id) {
    const children = document.getElementById('support').nextElementSibling;
    children.classList.toggle('openFooterNav')
    
    if(children.classList.contains('openFooterNav')) {
      arrowIcon[2].classList.toggle('arrowIcon__open');
    } else {
      arrowIcon[2].classList.toggle('arrowIcon__open');
    }
  } else if (target === buy.id) {
    const children = document.getElementById('where__buy').nextElementSibling;
    children.classList.toggle('openFooterNav')

    if(children.classList.contains('openFooterNav')) {
      arrowIcon[3].classList.toggle('arrowIcon__open');
    } else {
      arrowIcon[3].classList.toggle('arrowIcon__open');
    }  
  } else if (target === precaution.id) {
    const children = document.getElementById('health_safety_precaution').nextElementSibling;
    children.classList.toggle('openFooterNav')

    if(children.classList.contains('openFooterNav')) {
      arrowIcon[4].classList.toggle('arrowIcon__open');
    } else {
      arrowIcon[4].classList.toggle('arrowIcon__open');
    }
  }

})


