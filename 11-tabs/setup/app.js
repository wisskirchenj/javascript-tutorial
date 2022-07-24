const buttons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".about-content");

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    btn.classList.add('active');
    buttons[(i + 1) % 3].classList.remove('active');
    buttons[(i + 2) % 3].classList.remove('active');
    //just as alternative:
    //document.querySelector(`.tab-btn:nth-child(${(i + 2) % 3 + 1})`).classList.remove('active');
    tabs[i % 3].classList.remove('content');
    tabs[(i + 1) % 3].classList.add('content');
    tabs[(i + 2) % 3].classList.add('content');
  });
});
