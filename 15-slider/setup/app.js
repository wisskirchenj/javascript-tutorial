const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const slides = document.querySelectorAll(".slide");

document.addEventListener('DOMContentLoaded', () => {
  prevBtn.style.display = 'none';
});

slides.forEach((slide, i) => {
  slide.style.left = `${i * 100}%`;
});
const slideCount = slides.length;
let currentSlide = 1;

nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);

function slideNext() {
  prevBtn.style.display = '';
  if (++currentSlide === slideCount) {
    nextBtn.style.display = 'none';
  }
  translateScreen();
}

function slidePrev() {
  nextBtn.style.display = '';
  if (--currentSlide === 1) {
    prevBtn.style.display = 'none';
  }
  translateScreen();
}

function translateScreen() {
  let transform = 100 * (currentSlide - 1);
  slides.forEach(item => item.style.transform = `translateX(-${transform}%)`);
}
