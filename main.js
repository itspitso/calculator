const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    try {
        return num1 / num2;
    }
    catch(e) {
        "Nope. Can't do that";
    }
}

let firstNumber;
let operator;
let secondNumber;

function operate(first, op, second) {
    switch (op) {
        case '+':
            return add(first, second);
            break;
        case '-':
            return subtract(first, second);
            break;
        case '*':
            return multiply(first, second);
            break;
        case '/':
            return divide(first, second);
            break;
        default:
            throw new Error("Operator not recognised");
    }

}
