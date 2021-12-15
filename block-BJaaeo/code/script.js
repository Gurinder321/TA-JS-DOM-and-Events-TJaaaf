let display = document.querySelector(".display");
let allBtns = document.querySelectorAll("button");

let intialValue = 0;

function handBtnClick(event) {
  if (event.target.classList.contains("equal")) {
    display.innerText = eval(display.innerText);
    return;
  }
  if (event.target.classList.contains("clear")) {
    display.innerText = intialValue;
    return;
  }
  if (display.innerText == intialValue) {
    display.innerText = event.target.innerText;
  } else {
    display.innerText += event.target.innerText;
  }
}

allBtns.forEach((btn) => {
  btn.addEventListener("click", handBtnClick);
});
display.innerHTML = intialValue;
