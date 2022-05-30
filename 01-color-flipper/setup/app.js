const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',() => {
  let ran = Math.floor(Math.random() * colors.length);
  //color.innerText = 'Hallo'; <- slower
  color.textContent = colors[ran];
  document.body.style.backgroundColor = colors[ran];
});
