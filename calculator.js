let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.button');
let currentNumber = '';
let previousNumber = '';
let operation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.dataset.num;
        if (value === '=') {
            calculateResult();
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operation = value;
            previousNumber = currentNumber;
            currentNumber = '';
        } else {
            currentNumber += value;
            display.value = currentNumber;
        }
    });
});

function calculateResult() {
    let result = 0;
    switch (operation) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    display.value = result.toString();
    currentNumber = result.toString();
    previousNumber = '';
    operation = '';
}