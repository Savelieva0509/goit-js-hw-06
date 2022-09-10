function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberRef = document.querySelector('input')
const createBtnRef = document.querySelector(['data-create'])
const destroyBtnRef = document.querySelector(['data-destroy'])
const boxesContainerRef = document.querySelector('#boxes')

destroyBtnRef.addEventListener("click",destroyBoxes)
createBtnRef.addEventListener('click',createBoxes)


function createBoxes(amount) {
  const box = document.createElement('div')
  box.style.width = '30px';
  box.style.height = '30px';
  box.style.background = getRandomHexColor();
  amount = +inputNumberRef.value;

  return box;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}



