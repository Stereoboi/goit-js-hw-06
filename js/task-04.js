const BtnRef = document.querySelectorAll('#counter button');
const spanRef = document.querySelector('#value')


const decrement = BtnRef[0];
const increment = BtnRef[1];

let counterValue = 0;


function counter() {
    decrement.addEventListener("click", () => {
        spanRef.innerHTML = counterValue -= 1;  
});
    increment.addEventListener("click", () => {
    spanRef.innerHTML = counterValue += 1;   
});

}

counter()