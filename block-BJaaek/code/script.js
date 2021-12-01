// First Box
let box1 = document.querySelector(".first");

// Second Box
let box2 = document.querySelector(".second");

// Colors Array
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

box1.addEventListener("click", function () {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  box1.style.background = randomColor;
});

box2.addEventListener("mousemove", function () {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  box2.style.background = randomColor;
});
