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
