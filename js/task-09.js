const bodyRef = document.querySelector('body')
const btnRef = document.querySelector('.change-color');
const colorTextRef = document.querySelector('.color')


btnRef.addEventListener('click',() => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorTextRef.textContent = bodyRef.style.backgroundColor;
}); 
  

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

