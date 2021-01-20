let counterValue = 0;
const decrement = () => counterValue -=1;
const increment = () => counterValue +=1;

const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

decrementBtnRef.addEventListener('click', () => {
    decrement();
    counterValueRef.textContent = counterValue;
});

incrementBtnRef.addEventListener('click', () => {
    increment();
    counterValueRef.textContent = counterValue;
});
