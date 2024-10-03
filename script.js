console.log('JavaScript code is being executed');

let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.button');
let currentNumber = '';
let previousNumber = '';
let operation = '';
let mathNotes = document.getElementById('math-notes');
let switchMode = document.getElementById('switch-mode');
let normalCalculator = document.querySelector('.normal-calculator');
let normalDisplay = document.querySelector('.normal-display');
let normalButtons = document.querySelectorAll('.normal-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Button clicked');
        let value = button.dataset.num;
        if (value === '=') {
            calculateResult();
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operation = value;
            previousNumber = currentNumber;
            currentNumber = '';
        } else if (button.id === 'math-notes') {
            mathNotesFunction();
        } else if (button.id === 'switch-mode') {
            switchModeFunction();
        } else {
            currentNumber += value;
            display.value = currentNumber;
        }
    });
});

normalButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Normal button clicked');
        let value = button.dataset.num;
        if (value === '=') {
            calculateNormalResult();
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operation = value;
            previousNumber = currentNumber;
            currentNumber = '';
        } else {
            currentNumber += value;
            normalDisplay.value = currentNumber;
        }
    });
});

function calculateResult() {
    console.log('Calculating result');
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

function mathNotesFunction() {
    console.log('Math notes function called');
    let mathNotesInput = prompt('Enter a mathematical expression');
    let result = eval(mathNotesInput);
    alert(result);
 }

function switchModeFunction() {
    console.log('Switch mode function called');
    if (normalCalculator.style.display === 'none') {
        normalCalculator.style.display = 'block';
        document.querySelector('.calculator').style.display = 'none';
    } else {
        normalCalculator.style.display = 'none';
        document.querySelector('.calculator').style.display = 'block';
    }
}

function calculateNormalResult() {
    console.log('Calculating normal result');
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
    normalDisplay.value = result.toString();
    currentNumber = result.toString();
    previousNumber = '';
    operation = '';
}