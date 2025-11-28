const p = document.getElementsByTagName('p')[0]
const input = document.getElementsByTagName('input')[0];
const numRegEx = /[0-9]+$/;

document.addEventListener('keydown', (e) => {
    p.textContent = `Keyboard: ${e.key}`;
})

input.addEventListener('input', () => {
    if(numRegEx.test(input.value)) {
        input.style.outline = '3px solid red'
    }  else {
        input.style.outline = '3px solid green'
    }
        
})

