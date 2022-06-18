const expandBtns = document.querySelectorAll('.question-btn.plus-icon');
const collapseBtns = document.querySelectorAll('.question-btn.minus-icon');


expandBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.add('show-text');
  });
});

collapseBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.remove('show-text');
  });
});
