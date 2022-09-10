

const input = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

input.addEventListener("input", changeSizeText)

function changeSizeText(){
    text.style.fontSize = input.value + "px"
}