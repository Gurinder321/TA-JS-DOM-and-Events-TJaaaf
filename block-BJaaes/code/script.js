let form = document.querySelector("form");

let userInfo = {};

let errorMessage = {};

function displayError(name) {
  console.dir(form.elements[name]);
}

function handleSubmit(event) {
  event.preventDefault();
  let elements = event.target.elements;
  const username = elements.username.value;
  const name = elements.name.value;
  const email = elements.email.value;
  const phone = elements.number.value;
  const password = elements.pwd.value;
  const passwordCheck = elements["password-check"].value;

  //   Username can't be less than 4 characters
  if (username.length <= 4) {
    errorMessage.username = "Username can't be less than 4 characters";
    displayError("username");
  }
  //   Name can't be numbers
  //   Email must contain the symbol @
  //   Email must be at least 6 characters
  //   Phone numbers can only be a number
  //   Length of phone number can't be less than 7
  //   Password and confirm password must be same.
}

form.addEventListener("submit", handleSubmit);
