// ****** SELECT ITEMS **********
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

loadGroceryItems();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (groceryInput.value == "") {
    displayAlert("please enter value", true);
    return;
  }
  if (formBtn.textContent === "edit") {
    formBtn.textContent = "submit";
    items.splice(items
      .indexOf(itemInEdit.querySelector(".title")
        .textContent), 1, groceryInput.value);
    storeItems();
    itemInEdit.querySelector(".title").textContent = groceryInput.value;
    displayAlert("value changed");
  } else {
    addGroceryItem(groceryInput.value);
  }
  form.reset();
});

function storeItems() {
  localStorage.setItem('groceryItems', JSON.stringify(items));
}

// ****** EVENT LISTENERS **********
clearBtn.addEventListener('click', (event) => {
  groceryCont.querySelectorAll(".grocery-item")
    .forEach(item => item.remove());
  groceryCont.classList.remove("show-container");
  items.splice(0, items.length);
  storeItems();
  formBtn.textContent = "submit";
  displayAlert("empty List", true);
  form.reset();
});

function displayAlert(text, danger = false) {
  alert.textContent = text;
  alert.classList
    .add(danger ? "alert-danger" : "alert-success");
  setTimeout(() => {
    alert.textContent = "";
    alert.classList
      .remove(danger ? "alert-danger" : "alert-success");
  }, 1000);
}

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

function addGroceryItem(title) {
  items.push(title);
  storeItems();
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
  addClickListeners(groceryItem);
  return groceryItem;
}

function addClickListeners(groceryItem) {
  let deleteBtn = groceryItem.querySelector(".delete-btn");
  deleteBtn.addEventListener('click', event => {
    form.reset();
    formBtn.textContent = "submit";
    groceryItem.remove();
    items.splice(items
      .indexOf(groceryItem.querySelector(".title")
        .textContent), 1);
    storeItems();
    displayAlert("item removed", true);
    if (groceryCont.querySelectorAll(".grocery-item")
      .length == 0) {
      groceryCont.classList.remove("show-container");
    }
  });

  let editBtn = groceryItem.querySelector(".edit-btn");
  editBtn.addEventListener('click', event => {
    formBtn.textContent = 'edit';
    itemInEdit = groceryItem;
    groceryInput.value = groceryItem
      .querySelector(".title").textContent;
  });
}
