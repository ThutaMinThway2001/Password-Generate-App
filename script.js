const display = document.querySelector(".res-text");
const copy = document.querySelector('.copy');
const range = document.querySelector('#range');
const rangeResult = document.querySelector('.range-res');
const checkNumber = document.querySelector('#number');
const checkSpecialChar = document.querySelector('#special-char');
const buttonGenerate = document.querySelector(".generate");

const strongest = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()<>?{}[]1234567890`;
const strong = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()<>?{}[]`;
const middle = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890`;
const weak = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;

buttonGenerate.addEventListener('click', generatePassword);

function generatePassword(){
    let length = range.value;
    let numberChecked = checkNumber.checked;
    let specialCharChecked = checkSpecialChar.checked;

    let password = "";

    if(numberChecked && specialCharChecked){
        for(i = 0; i < length; i++){
            password += strongest[Math.floor(Math.random() * strongest.length)];
        }
    }else if(numberChecked){
        for(i = 0; i< length; i++){
            password += middle[Math.floor(Math.random() * middle.length)];
        }
    }else if(specialCharChecked){
        for(i = 0; i< length; i++){
            password += strong[Math.floor(Math.random() * strong.length)];
        }
    }else{
        for(i = 0; i< length; i++){
            password += weak[Math.floor(Math.random() * weak.length)];
        }
    }

    display.value = password;
    
}

//range

range.addEventListener('change', ()=>{
    rangeResult.innerHTML = range.value;
});

//copy

copy.addEventListener('click', ()=>{
    if(display.value){
        display.select();
        display.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(display.value);
        alert('copy success');
    }
});