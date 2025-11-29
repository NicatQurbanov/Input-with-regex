const input = document.getElementById('name');
const popUp = document.getElementsByClassName('popUp')[0];
const nameRegEx = /^[a-z]+$/i;
const numRegEx = /[0-9]/;


input.addEventListener('input', () => {
    if(nameRegEx.test(input.value)) {
        input.style.outline = '3px solid green'
        popUp.style.display = 'none'; 
    }  else if (numRegEx.test(input.value)){
        input.style.outline = '3px solid red'
        popUp.style.display = 'block';  
    } else {
        input.style.outline = 'none'
    }
})

