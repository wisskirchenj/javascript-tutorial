const alert = document.querySelector(".alert");
const form = document.querySelector("form");
const groceryInput = document.querySelector("#grocery");
const groceryCont = document
  .querySelector(".grocery-container");
const clearBtn = document.querySelector(".clear-btn");
const formBtn = document.querySelector(".submit-btn");

const items = localStorage.getItem('groceryItems') ?
  JSON.parse(localStorage.getItem('groceryItems')) : [];
let itemInEdit = null;

// --- initial load from localStorage
loadGroceryItems();

function loadGroceryItems() {
  if (items.length == 0) {
    return;
  }
  items.map(createGroceryItem)
    .forEach((item) =>
      groceryCont.insertBefore(item, clearBtn)
    );
  groceryCont.classList.add("show-container");
}

function storeItems() {
  localStorage.setItem('groceryItems', JSON.stringify(items));
}

// form submit listener - Submit to add or Edit item
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (groceryInput.value == "") {
    displayAlert("please enter value", true);
    return;
  }
  if (formBtn.textContent === "edit") {
    handleEdit();
  } else {
    addGroceryItem(groceryInput.value);
  }
  resetFormAndStore();
});

// clear all listener
clearBtn.addEventListener('click', (event) => {
  groceryCont.querySelectorAll(".grocery-item")
    .forEach(item => item.remove());
  groceryCont.classList.remove("show-container");
  items.splice(0, items.length);
  displayAlert("empty List", true);
  resetFormAndStore();
});

// addItem functionality
function addGroceryItem(title) {
  items.push(title);
  groceryCont.classList.add("show-container");
  groceryCont.insertBefore(createGroceryItem(title), clearBtn);
  displayAlert("item added to the list");
}

function createGroceryItem(title) {
  let groceryItem = document.createElement("div");
  groceryItem.classList.add("grocery-item");
  groceryItem.innerHTML =
    `<div class="title">${title}</div>
      <div>
        <button type="button" class="edit-btn">
          <span class="fas fa-edit"></span>
        </button>
        <button type="button" class="delete-btn">
          <span class="fas fa-trash"></span>
        </button>
      </div>`;
  addDeleteListener(groceryItem);
  addEditListener(groceryItem);
  return groceryItem;
}

// delete handling
function addDeleteListener(groceryItem) {
  let deleteBtn = groceryItem.querySelector(".delete-btn");
  deleteBtn.addEventListener('click', event => {
    groceryItem.remove();
    items.splice(items.indexOf(groceryItem.querySelector(".title")
      .textContent), 1);
    resetFormAndStore();
    displayAlert("item removed", true);
    if (groceryCont.querySelectorAll(".grocery-item").length == 0) {
      groceryCont.classList.remove("show-container");
    }
  });
}

// edit funtionality
function addEditListener(groceryItem) {
  let editBtn = groceryItem.querySelector(".edit-btn");
  editBtn.addEventListener('click', event => {
    formBtn.textContent = 'edit';
    itemInEdit = groceryItem.querySelector(".title");
    groceryInput.value = itemInEdit.textContent;
  });
}

function handleEdit() {
  items.splice(items.indexOf(itemInEdit.textContent),
    1, groceryInput.value);
  itemInEdit.textContent = groceryInput.value;
  displayAlert("value changed");
}

function resetFormAndStore() {
  form.reset();
  formBtn.textContent = "submit";
  storeItems(); // to localStorage
}

function displayAlert(text, danger = false) {
  alert.textContent = text;
  alert.classList.add(danger ? "alert-danger" : "alert-success");
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(danger ? "alert-danger" : "alert-success");
  }, 1000);
}
