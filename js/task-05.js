const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handleInputChange);

function handleInputChange(e) {
    outputRef.textContent = e.target.value;
    if(outputRef.textContent === '') {
        outputRef.textContent = 'незнакомец';
    }
}