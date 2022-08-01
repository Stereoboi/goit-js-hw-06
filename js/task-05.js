const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
console.log(textInput)

function onInput (event) {
    event.currentTarget.value
        ? (output.textContent = event.currentTarget.value)
        : (output.textContent = "Anonymous");
}

textInput.addEventListener('input', onInput);