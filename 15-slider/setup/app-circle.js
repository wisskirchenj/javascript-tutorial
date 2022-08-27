const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, i) => {
  slide.style.left = `${i * 100}%`;
});
const slideCount = slides.length;
let currentSlide = 1;

nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);

function slideNext() {
  currentSlide = currentSlide % slideCount + 1;
  translateScreen();
}

function slidePrev() {
  currentSlide = (currentSlide + slideCount - 2) % slideCount + 1;
  translateScreen();
}

function translateScreen() {
  let transform = 100 * (currentSlide - 1);
  slides.forEach(item => item.style.transform = `translateX(-${transform}%)`);
}
