// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector(".date").textContent = new Date().getFullYear();
});
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");


navToggle.addEventListener('click', () => {
  //linksContainer.classList.toggle("show-links");

  /* works but not nice
  let items = links.childElementCount;
  if (linksContainer.style.height.startsWith("0")) {
    linksContainer.style.height = (50 * items) + "px";
  } else {
    linksContainer.style.height = 0;
  } */
  let linksHeight = links.getBoundingClientRect().height;
  let containerHeight = linksContainer.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topBtn = document.querySelector(".top-link");
window.addEventListener('scroll', () => {
  const navHeight = navbar.getBoundingClientRect().height;
  const offset = window.pageYOffset;
  if (offset > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (offset > 200) {
    topBtn.classList.add("show-link");
  } else {
    topBtn.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
