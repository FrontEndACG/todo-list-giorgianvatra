const inputText = document.querySelector("#todo-input");
let btn = document.querySelector("#add-btn");
const toDoList = document.querySelector("#todo-list");
const deleteBtn = document.querySelectorAll(".delete-btn");
inputText.addEventListener("input", activateBtn);
const pattern = /^\s*$/;
let counter = document.querySelector("h2");
let nr = 0;

function activateBtn(event) {
  if (event !== "") {
    btn.disabled = false;
  }
}

btn.addEventListener("click", function (event) {
  if (pattern.test(inputText.value)) {
    alert("Please enter a valid input");
    btn.disabled = true;
    return;
  }
  toDoList.innerHTML += `<li class="remove"><span>${inputText.value}</span><button class="delete-btn">Delete</button></li>`;
  inputText.value = "";
  btn.disabled = true;
  nr++;
  counter.innerText = `${nr}`;
});

toDoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const li = e.target.closest("li");
    toDoList.removeChild(li);
    nr--;
    counter.innerText = `${nr}`;
  }
});
