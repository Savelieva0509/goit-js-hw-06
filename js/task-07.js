

const input = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

input.addEventListener("input", changeSizeText)

text.style.fontSize = input.value + "px"


function changeSizeText(event){
    text.style.fontSize = `${event.currentTarget.value}px` 
}