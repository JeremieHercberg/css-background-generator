// DOM ELEMENTS
const inputColor1 = document.getElementById("color1");
const inputColor2 = document.getElementById("color2");
const body = document.getElementsByTagName("body");
const span = document.querySelector("span");


// Events Handlers
inputColor1.addEventListener("input", setColorBackground);
inputColor2.addEventListener("input", setColorBackground);

function setColorBackground() {
  body[0].style.background = `linear-gradient(to right, ${inputColor1.value}, ${inputColor2.value})`;
  span.innerText = body[0].style.background;
}