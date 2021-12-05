// 0. Functions

// Random number function
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
console.log(generateRandomColor());

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
    box.querySelector("h3").innerText = getRandomNumber(500);
  });
}
// 4. Change random number
// 2. addEventListener of type mousemove
parentBox.addEventListener("mousemove", handleMouseMove);

/**
 
Change the background color and number
1.  Create an all boxes variable and selector all the 500 boxes
2. Create a handle mouse move function
2a. Inside that function, create a forEach method
2b. Set box background to generateRandomColor();
2c. set the h3 innertext to randomNumber


*/

/*
1. Generate random number
2. Generate random color
3. Create 500 boxes with random color & number
4. On parentBox, where listening to the mouse move to iterate over our code
*/

// Random color generator.
//  Create a function
//    then, variable that holds an array from 0-f
//    variable that has # infront of it named color
//    create a for loop for cycle through the array 6 times.
//    create randomNumber variable and store a random number 0-16
//    store the number is colors + the # symbol
//   return color
// Call it outside of the function to see if it works

/* 
Create 500 boxes
<div class="box">
  <h3>102</h3>
</div>

1. Select parent div using query Selector and store it in a variable (You'll need it in the end)
2. Create a for loop. .
2a. Create a div and also have a class name of box
2b. Create a h3 element and store it in a variable
2c. Create a random number from 0-500
2d. Store the random number as innerText h3
3. append h3 inside of div
4. append div inside parent div
*/
