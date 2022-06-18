const expandBtns = document.querySelectorAll('.question-btn.plus-icon');
const collapseBtns = document.querySelectorAll('.question-btn.minus-icon');
const questions = document.querySelectorAll('.question');

expandBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    removeAllShowTexts();
    question.classList.add('show-text');
  });
});

// other way: add event listener inside question loop
// -> see final app.js

collapseBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    removeAllShowTexts();
  });
});

function removeAllShowTexts() {
  questions.forEach((question) => {
    question.classList.remove('show-text');
  });
}
