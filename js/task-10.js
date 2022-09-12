function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberRef = document.querySelector('#control input')
const createBtnRef = document.querySelector(['data-create'])
const destroyBtnRef = document.querySelector(['data-destroy'])
const boxesContainerRef = document.querySelector('#boxes')

function createBoxes(amount) {
  amount = inputNumberRef.value;
  const basicSize = 30;
  for (const i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const box = document.createElement("div");
    box.style.width = size;
    box.style.height = size;
    box.style.background = getRandomHexColor();
    boxesContainerRef.appendChild(box);
  }
  return boxesContainerRef;
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = "";
  inputNumberRef.innerHTML = "";
}

destroyBtnRef.addEventListener("click",destroyBoxes)
createBtnRef.addEventListener('click',createBoxes)
