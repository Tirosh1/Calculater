let mathNotesInput = document.createElement('textarea');
mathNotesInput.placeholder = 'Enter a mathematical expression';
document.body.appendChild(mathNotesInput);

let evaluateButton = document.createElement('button');
 evaluateButton.textContent = 'Evaluate';
document.body.appendChild(evaluateButton);

evaluateButton.addEventListener('click', () => {
    let mathExpression = mathNotesInput.value;
    let result = eval(mathExpression);
    alert(result);
});