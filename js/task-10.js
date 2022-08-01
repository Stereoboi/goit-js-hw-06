const createBtnRef = document.querySelector('[data-create]')
const destroyBtnRef = document.querySelector('[data-destroy]')
const inputRef = document.querySelector('[type="number"]')

createBtnRef.addEventListener("click", (event) => {
  const amount = inputRef.value;
  createBoxes(amount);
});

destroyBtnRef.addEventListener("click", destroyBoxes);

function destroyBoxes() {
    const containerRef = document.querySelector("#boxes");
    containerRef.innerHTML = "";
  }


  function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) { 
      create();
      boxsize += 10;
    }
 }

let boxsize = 30;

function create() {
  const containerRef = document.querySelector("#boxes");
  const newBoxesRef = document.createElement("div");

  newBoxesRef.style.width = boxsize + "px";
  newBoxesRef.style.height = boxsize + "px";
  containerRef.style.display = "flex";
  newBoxesRef.style.marginTop = "5px";
  newBoxesRef.style.marginRight = "5px";
  newBoxesRef.style.background = getRandomHexColor();

  containerRef.append(newBoxesRef);
 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
