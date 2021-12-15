let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector(".computer-icons");

let dataSet = [
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "paper",
    beats: "rock",
  },
];

let userSelected = {},
  computerSelected = {};

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function createUserLayout() {
  userRoot.innerHTML = "";
  dataSet.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = ` fa fa-hand-${icon.name}-o`;

    if (userSelected.name === icon.name) {
      li.classList.add("selected");
    }

    li.addEventListener("click", () => {
      userSelected = icon;

      computerSelected = dataSet[getRandomNumber()];
      createComputerLayout();
      createUserLayout();
      console.log(userSelected, computerSelected);
    });
    li.append(i);
    userRoot.append(li);
  });
}
createUserLayout();

function createComputerLayout() {
  userRoot.innerHTML = "";
  dataSet.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}-o`;

    if (userSelected.name === icon.name) {
      li.classList.add("selected");
    }

    li.append(i);

    computerRoot.append(li);
  });
}
createComputerLayout();
