const inputRef = document.querySelector('#controls > input[type=number]');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

function createBoxes(amount) {
    let initialSize = 30;
    const currentCount = boxesRef.childElementCount;
    if (Number(currentCount) > 0) initialSize += currentCount * 10;

    const renderBlock = [...Array(Number(amount)).keys()];

    renderBlock.forEach(() => { 
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const newBox = document.createElement('div');
        newBox.style.backgroundColor = "#" + randomColor;;
        newBox.style.width = `${initialSize}px`;
        newBox.style.height = `${initialSize}px`;
        initialSize += 10;
        boxesRef.appendChild(newBox);
    });
}

function renderBoxesHandler() {
    createBoxes(inputRef.value);
}

function destroyBoxes() {
    boxesRef.innerHTML = '';
}

renderBtnRef.addEventListener('click', renderBoxesHandler, false);
destroyBtnRef.addEventListener('click', destroyBoxes);


