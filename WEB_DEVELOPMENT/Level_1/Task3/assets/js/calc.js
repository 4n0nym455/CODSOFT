const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid expression');
        clearDisplay();
    }
}

document.addEventListener('keydown', function (event) {
    const validKeys = '0123456789/*-+.='
    if (validKeys.includes(event.key)) {
        if (event.key === '=') {
            calculateResult();
        } else {
            appendToDisplay(event.key);
        }
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});
