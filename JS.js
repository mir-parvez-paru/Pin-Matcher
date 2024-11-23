function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin(){
    const pin = generatePin();
    const stringPin = pin + '';
    if(stringPin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumbers = document.getElementById('typed-numbers');
    const previousTypedNumbers = typedNumbers.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumbers.value = '';
        }
        else if(number === '<'){
            const digit = pastTypedNumbers.split('');
            digit.pop();
            const saveDigit = digit.join('');
            typedNumbers.value = saveDigit;
        }
    }
    else{
        const newTypedNumbers = previousTypedNumbers + number;
        typedNumbers.value = newTypedNumbers;
    }
})

document.getElementById('submit-button').addEventListener('click', function(){
    const displayPin = document.getElementById('display-pin');
    const currentPin = displayPin.value;

    const typedNumbers = document.getElementById('typed-numbers');
    const typedNumber = typedNumbers.value;

    const successMsg = document.getElementById('pin-success');
    const failureMsg = document.getElementById('pin-failure');

    if(typedNumber === currentPin){
        successMsg.style.display = 'block';
        failureMsg.style.display = 'none';
    }
    else{
        failureMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
})