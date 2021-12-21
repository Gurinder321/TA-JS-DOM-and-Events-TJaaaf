let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector(".movies_list");
let allMovies = [
  {
    name: "Forest Gump",
    watched: false,
  },
  {
    name: "Inception",
    watched: false,
  },
];

input.addEventListener("keyup", (event) => {
  // Adding a movie
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    createMovieUI();
  }
});

function deleteMovie(event) {
  console.dir(event.target);
}

function createMovieUI() {
  rootElm.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add("styled-checkbox");
    input.type = "checkbox";
    input.id = "i";
    input.checked = movie.watched;
    let label = document.createElement("label");
    label.for = "i";
    label.innerText = movie.name;
    let span = document.createElement("span");
    span.innerText = "x";

    span.addEventListener("click", deleteMovie);

    li.append(input, label, span);

    rootElm.append(li);
  });
}

createMovieUI();
