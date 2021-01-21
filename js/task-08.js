const inputRef = document.querySelector('#controls > input[type=number]');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

let initialSize = 30;
    
function createBoxes(amount) {
    for (let i = 0; i < inputRef.value; i += 1) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const newBox = document.createElement('div');
        newBox.style.backgroundColor = "#" + randomColor;;
        newBox.style.width = `${initialSize}px`;
        newBox.style.height = `${initialSize}px`;
        boxesRef.appendChild(newBox);

        initialSize += 10;
    }
    return boxesRef;
}

function destroyBoxes() {
    boxesRef.innerHTML = '';
    initialSize = 30;
}
renderBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);


