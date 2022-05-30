let counter = 0;
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');
const valueSpan = document.getElementById('value');

resetBtn.addEventListener('click', () => {
  counter = 0;
  setValue();
});

decreaseBtn.addEventListener('click', () => {
  counter--;
  setValue();
});

increaseBtn.addEventListener('click', () => {
  counter++;
  setValue();
});

function setValue() {
  valueSpan.textContent = counter;
  if (counter === 0) {
    valueSpan.style.color = 'var(--clr-grey-1)';
  } else if (counter > 0) {
    valueSpan.style.color = 'var(--clr-green-light)';
  } else {
    valueSpan.style.color = 'var(--clr-red-light)';
  }
}
