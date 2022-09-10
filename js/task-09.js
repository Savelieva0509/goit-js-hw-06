function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color")
const color = document.querySelector(".color")
const body = document.querySelector("body")

buttonRef.addEventListener("click",handleClick )

function handleClick() {
  color.textContent = getRandomHexColor()
  body.style.background = getRandomHexColor()
}