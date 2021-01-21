const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', hanldeInputBlur);

function hanldeInputBlur(e) {
    inputRef.classList.add('invalid');
    if (e.target.value.length === Number(inputRef.getAttribute('data-length'))) {
        inputRef.classList.replace('invalid', 'valid');
    } 
}