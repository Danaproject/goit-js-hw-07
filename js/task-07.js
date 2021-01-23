const sliderRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

sliderRef.addEventListener('input', handleInputChange);

function handleInputChange(e) {
    textRef.style.fontSize = e.target.value + "px";
}