
function generatePin() {
    const pin = Math.round(Math.random() * 10000);

    const validpin = pin + '';
    if (validpin.length === 4) {
        const pinField = document.getElementById('pin-generate-field');
        pinField.value = pin;
    }
    else {
        generatePin();
    }
}

document.getElementById('btn-generator').addEventListener('click', function () {
    generatePin();
});

document.getElementById('btn-number').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputField = document.getElementById('input-field');
    const previousNumber = inputField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            inputField.value = '';
        }
        else if (number === '<') {
            const digits = previousNumber.split('');
            digits.pop();
            remainingDigits = digits.join('');
            inputField.value = remainingDigits;
        }
    }
    else {
        const inputValue = previousNumber + number;
        inputField.value = inputValue;
    }
});

document.getElementById('btn-submit').addEventListener('click', function () {
    const generateField = document.getElementById('pin-generate-field');
    const generateFieldValue = generateField.value;
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;

    const pinMatched = document.getElementById('pin-matched');
    const pinNotMatched = document.getElementById('pin-not-matched');

    if (generateFieldValue === inputFieldValue) {
        pinMatched.style.display = 'block';
        pinNotMatched.style.display = 'none';
    }
    else {
        pinNotMatched.style.display = 'block';
        pinMatched.style.display = 'none';
    }
});