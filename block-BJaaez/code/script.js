let inputText = document.querySelector("#text");
let root = document.querySelector("ul");

let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear");

let defaultSelected = "all";

let allTodos = localStorage.getItem("allTodos") ? JSON.parse(localStorage.getItem("allTodos")) : [];

function handleInput(event) {
  let value = event.target.value;
  if (event.keyCode === 13 && value !== "") {
    let todo = {
      name: value,
      isDone: false,
    };
    allTodos.push(todo);
    event.target.value = "";

    createUI(allTodos, root);
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  }
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  createUI(allTodos, root);
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
}

function handleToggle(event) {
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  createUI(allTodos, root);
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
}

function createUI(data, rootElm = root) {
  rootElm.innerHTML = "";
  data.forEach((todo, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");

    input.type = "checkbox";
    input.addEventListener("input", handleToggle);
    input.setAttribute("data-id", i);
    input.checked = todo.isDone;
    let p = document.createElement("p");
    p.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "❌";
    span.setAttribute("data-id", i);
    span.addEventListener("click", handleDelete);

    li.append(input, p, span);

    rootElm.append(li);
  });
}

createUI(allTodos, root);

all.classList.add("selected");

clear.addEventListener("click", () => {
  let notCompleted = allTodos.filter((todo) => !todo.isDone);
  allTodos = notCompleted;
  createUI(allTodos);

  localStorage.setItem("allTodos", JSON.stringify(allTodos));
});
inputText.addEventListener("keyup", handleInput);

// The all, active, completed, clear completed buttons don't work
// When "active" button is clicked, I want to show all the todo's that are not checked (not completed)

active.addEventListener("click", () => {
  let notCompleted = allTodos.filter((todo) => !todo.isDone);
  createUI(notCompleted);
});

// When "Completed" button is clicked, I want to show all the todo's that are checked (completed)

completed.addEventListener("click", () => {
  let completed = allTodos.filter((todo) => todo.isDone);
  createUI(completed);
});

// When "All" button is clicked, I want to show all the todo's. Completed and not completed

all.addEventListener("click", () => {
  createUI(allTodos);
});
