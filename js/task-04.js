const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

let counterValue = 0;
function decrement() {
    counterValue -=1;
    counterValueRef.textContent = counterValue;
} 
function increment() {
    counterValue +=1;
    counterValueRef.textContent = counterValue;
} 


decrementBtnRef.addEventListener('click', decrement);

incrementBtnRef.addEventListener('click', increment);
