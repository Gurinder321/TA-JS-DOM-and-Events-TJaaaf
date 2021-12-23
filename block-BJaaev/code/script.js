<<<<<<< HEAD
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

function createUI(data, rootElm) {
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
  createUI(notCompleted);
});
inputText.addEventListener("keyup", handleInput);

// The all, active, completed, clear completed buttons don't work
=======
let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector(".todo_list");

let allToDo = [
  {
    name: "Learn React",
    finished: true,
  },
  {
    name: "Learn Dome",
    finished: false,
  },
  {
    name: "Learn React",
    finished: false,
  },
  {
    name: "Learn Dome",
    finished: false,
  },
];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    console.log(event.target.value);

    allToDo.push({
      name: event.target.value,
      finshed: false,
    });
    createTodoList();
  }
});

function deleteTodo(event) {
  let id = event.target.dataset.id;
  allToDo.splice(id, 1);
  createTodoList();
}

function handleChange(event) {
  console.log(event.target);
  let id = event.target.id;
  console.log(id);
}

function createTodoList() {
  //     <li>
  //     <input class="styled-checkox" id="1" type="checkbox">
  //     <label for="1">Checkbox</label>
  //     <span>x</span>
  //   </li>

  rootElm.innerHTML = "";

  allToDo.forEach((todo, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add("styled-checkox");
    input.type = "checkbox";
    input.id = "i";
    input.checked = todo.finished;

    input.addEventListener("change", handleChange);
    let label = document.createElement("label");
    label.for = "i";
    label.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "x";
    span.setAttribute("data-id", i);

    span.addEventListener("click", deleteTodo);

    li.append(input, label, span);
    rootElm.append(li);
  });
}
createTodoList();
>>>>>>> c2f137d028747582affe3085eb514854aa44e79a
