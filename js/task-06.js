const textInputRef = document.querySelector('#validation-input');
const dataInputLength = Number(textInputRef.getAttribute("data-length"));

function removeClass(remove, add) {
    textInputRef.classList.remove(`${remove}`);
    textInputRef.classList.add(`${add}`);
}


function check() {
    textInputRef.value.length !== dataInputLength
        ? removeClass("valid", "invalid")
        : removeClass("invalid", "valid")
}

textInputRef.addEventListener('blur', check);