function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomColor() {
  let hexCharacters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber(16);
    color = color + hexCharacters[randomNumber];
  }
  return color;
}

let parentBox = document.querySelector(".boxes");

// 1. Create 500 boxes
/*
<div class="box">
    <h3>102</h3>
</div>
*/
for (let i = 0; i < 500; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  let h3 = document.createElement("h3");
  let randomNo = getRandomNumber(500);
  h3.innerText = randomNo;

  div.append(h3);
  parentBox.append(div);
}
// 3. Change the background color of each box to a random color
let allBoxes = document.querySelectorAll(".box");
function handleMouseMove() {
  allBoxes.forEach((box) => {
    box.style.backgroundColor = generateRandomColor();
    // box.children[0].innerText = getRandomNumber(500);
    // box.querySelector("h3").innerText = getRandomNumber(500);
  });
}
// 4. Change random number
// 2. addEventListener of type mousemove
parentBox.addEventListener("mousemove", handleMouseMove);

/*
1. Generate random number
2. Generate random color
3. Create 500 boxes with random color & number
4. On parentBox, where listening to the mouse move to iterate over our code
*/
