const inputRef = document.querySelector('#font-size-control');
// console.log(inputRef);
const textRef = document.querySelector('#text');
// console.log(textRef);
console.log(inputRef.value)


inputRef.addEventListener("input", () => {
  textRef.style.fontSize = inputRef.value + 'px';
});