let operand1;
let operand2;
let operator;
let add = '+';
let subtract = '-';
let multiply = '*';
let divide = '/';

function operate (op, num1, num2) {
    switch (op) {
        case add:
            return num1+num2;
            break;
        case subtract:
            return num1-num2;
            break;
        case multiply:
            return num1*num2;
            break;
        case divide:
            return num1/num2;
            break;
    }

};

