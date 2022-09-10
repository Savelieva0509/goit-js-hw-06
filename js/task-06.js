// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

const input = document.querySelector('#validation-input')
const inputLength = input.getAttribute('data-length')

input.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    const isValid = event.currentTarget.value.length; 
    console.log(isValid);
    if (isValid === Number(inputLength)) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    }
    
    else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    }
}

