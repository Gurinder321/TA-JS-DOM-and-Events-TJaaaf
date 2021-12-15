let form = document.querySelector("form");

let userData = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let elements = event.target.elements;

  userData.name = elements.name.value;
  userData.email = elements.email.value;
  userData.choice = elements.choice.value;
  userData.color = elements.color.value;
  userData.movie = elements.movie.value;
  userData.book = elements.book.value;
  userData.terms = elements.terms.value;

  console.log(userData);
});
