//Get pin
function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';
    //check it pin length is 4 or not. If pin length size is not 4 and recale the gegenaratePin agian and agian untill found 4 digit pin 
    if (pinString.length === 4) {
        return pin
    } else {
        return getPin()
    }
}
//genaratePin and retun it
function genaratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
// generated Pin display
document.getElementById('generate-pin').addEventListener('click', () => {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

//  user input pin section
//1.first section clicked number
//2.Add these number 
//3.check number length is 4 or not
//3.display these number
//4.if press 'c' clear this text filed
document.getElementById('numbers-filed').addEventListener('click', (event) => {
    const inputNumber = event.target.innerText;
    const typedNumber = document.getElementById('typed-number');
    const previouTypedNumber = typedNumber.value;
    if (isNaN(inputNumber)) {
        if (inputNumber === 'C') {
            typedNumber.value = ''
        }
    } else {
        if (previouTypedNumber.length < 4) {
            const newTyped = previouTypedNumber + inputNumber;
            typedNumber.value = newTyped;
        }
    }
})
//Match check pin

document.getElementById('verify-pin').addEventListener('click', () => {
    const generatedPin = document.getElementById('display-pin')
    const gegenaratePinValue = generatedPin.value;

    const userGivenPin = document.getElementById('typed-number');
    const userGivenPinValue = userGivenPin.value;

    const displayPinNotMatch = document.getElementById('pin-didnot-match');
    const displayPinMatch = document.getElementById('pin-match');

    if (gegenaratePinValue === userGivenPinValue) {
        displayPinMatch.style.display = 'block'
        displayPinNotMatch.style.display = 'none';
        const totalTry = document.getElementById('try');
         totalTry.innerText='3'
    } else {
        displayPinNotMatch.style.display = 'block'
        displayPinMatch.style.display = 'none'
        const totalTry = document.getElementById('try');
        const totalTryValue = totalTry.innerText;
        let totalTryValueInteger = parseInt(totalTryValue);
        totalTryValueInteger = totalTryValueInteger - 1;
        totalTry.innerText = totalTryValueInteger;
        if (innerText = totalTryValueInteger <= 0) {
            const button = document.getElementById('verify-pin');
            button.style.display = 'none';
           
        }
    }
})