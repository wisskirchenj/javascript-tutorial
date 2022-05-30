let counter = 0;
const valueSpan = document.querySelector('#value');

const buttons = document.querySelectorAll('.btn');
// returns a NodeList - see console.log (not exactly array !):
// console.log(buttons); <- uncomment to see

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const id = e.currentTarget.id;
    if (id === 'reset') {
      counter = 0;
    } else if (id === 'increase') {
      counter++;
    } else {
      counter--;
    }
    setValue();
  });
});

// see final-folder for solution with classList instead of id !

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
