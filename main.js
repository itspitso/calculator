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
    if (num2 === 0) {
        screen.textContent = "Nope! Can't do that."
    }
    return num1 / num2;
}

let firstNumber;
let operator;
let secondNumber;
let expression;
let result;
//const opRegex = /+|*|-|\//;

const operate = function(first, op, second) {
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

const numbersAndOperators = document.querySelectorAll(".number-operator");
const screen = document.querySelector(".calculator-screen");
const clearButton = document.querySelector(".clear");

function display(btn) {
    screen.textContent += btn.textContent;
}

function clearScreen() {
    screen.textContent = "";
}

numbersAndOperators.forEach((button) => {
    button.addEventListener("click", () => {
        display(button);
    });
});

clearButton.addEventListener("click", clearScreen);

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
    expression = screen.textContent;
    screen.textContent = "";
    result = Function("return " + expression)();
    screen.textContent= result;
});

const percentButton = document.querySelector(".percentage");
percentButton.addEventListener("click", () => {
    const numberToConvert = screen.textContent;
    if (numberToConvert === "") {
        screen.textContent = '0';
    }
    else {
        const result = parseInt(numberToConvert) / 100;
        screen.textContent = result;
    }
});
