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

const operate = function(first, op, second) {
    switch (op) {
        case '+':
            add(first, second);
            break;
        case '-':
            subtract(first, second);
            break;
        case '*':
            multiply(first, second);
            break;
        case '/':
            divide(first, second);
            break;
        default:
            throw new Error("Operator not recognised");
    }

}
