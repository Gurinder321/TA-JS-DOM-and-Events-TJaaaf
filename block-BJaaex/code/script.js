// Card data
const cardsArray = [
  {
    name: "Christmas Reindeer",
    img: "img/christmas-reindeer.png",
  },
  {
    name: "Christmas Tree",
    img: "img/christmas-tree.png",
  },
  {
    name: "Fireplace",
    img: "img/fireplace.png",
  },
  {
    name: "Gift",
    img: "img/gift.png",
  },
  {
    name: "Gingerbread",
    img: "img/gingerbread.png",
  },
  {
    name: "Mistletoe",
    img: "img/mistletoe.png",
  },
  {
    name: "Santa Claus",
    img: "img/santa-claus.png",
  },
  {
    name: "Sledge",
    img: "img/sledge.png",
  },
  {
    name: "Boy",
    img: "img/boy.png",
  },
  {
    name: "Hat",
    img: "img/hat.png",
  },
  {
    name: "Star",
    img: "img/star.png",
  },
  {
    name: "Penguin",
    img: "img/penguin.png",
  },
];

// Grab th div with an id of root
const game = document.getElementById("game");

// Create a section with a class of grid
const grid = document.createElement("section");
grid.setAttribute("class", "grid");

// Append the grid section to the game div
game.appendChild(grid);

// For each item in the cardsArray array...
cardsArray.forEach((item) => {
  // Create a div
  const card = document.createElement("div");

  // Apply a card class to that div
  card.classList.add("card");

  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.name = item.name;

  // Apply the background image of the div to the cardsArray image
  card.style.backgroundImage = `url(${item.img})`;

  // Append the div to the grid section
  grid.appendChild(card);
});

// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);

// For each item in the gameGrid array...
gameGrid.forEach((item) => {
  // ...
  const card = document.createElement("div");

  // Apply a card class to that div
  card.classList.add("card");

  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.name = item.name;

  let image = document.createElement("img");
  image.src = item.img;
  card.append(image);
  // Apply the background image of the div to the cardsArray image
  // card = `${item.img}`;

  // Append the div to the grid section
  grid.appendChild(card);
});

