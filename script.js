let operand1;
let operand2;
let operator;
let add = '+';
let subtract = '-';
let multiply = '*';
let divide = '/';
let displayValue;

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        console.log(e.target.dataset.value)

    })
});


function operate(op, num1, num2) {
    switch (op) {
        case add:
            return num1 + num2;
            break;
        case subtract:
            return num1 - num2;
            break;
        case multiply:
            return num1 * num2;
            break;
        case divide:
            return num1 / num2;
            break;
    }

};



