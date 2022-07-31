const textInputRef = document.querySelector('#validation-input');
const dataInputLength = Number(textInputRef.getAttribute("data-length"));


textInputRef.addEventListener('blur', check);

function check() {
    textInputRef.value.length !== dataInputLength
        ? textInputRef.classList.add("invalid")
        : textInputRef.classList.replace("invalid", "valid"); 
}

