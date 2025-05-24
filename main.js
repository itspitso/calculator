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
        return "Ooooops!"
    }
    else {
        return num1 / num2;
    }
}

let firstNumber;
let operator;
let secondNumber;
let expression;
let result;
const digitRegex = /^\d+(\.\d+)?$/;

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

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const screen = document.querySelector(".calculator-screen");
const clearButton = document.querySelector(".clear");
const percentButton = document.querySelector(".percentage");
const equalButton = document.querySelector(".equal");
const backSpace = document.querySelector(".backspace");

function clearScreen() {
    screen.textContent = "";
}

function display(btn) {
    if (result !== undefined) {
        result = undefined;
        clearScreen();
        screen.textContent += btn.textContent;
    }
    else {
        screen.textContent += btn.textContent;
    }
}

function isFloat(num) {
    return Number(num) === num && num % 1 !== 0;
}

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        display(button);
    });
});

operators.forEach((op) => {
    op.addEventListener("click", (e) => {
    firstNumber = Number(screen.textContent);
    operator = op.textContent;
    screen.textContent = "";
    console.log(firstNumber);
    console.log(operator);
    });
});

clearButton.addEventListener("click", clearScreen);

equalButton.addEventListener("click", () => {
    secondNumber = Number(screen.textContent);
    screen.textContent = "";
    if (firstNumber !== undefined && operator !== undefined) {
        result = operate(firstNumber, operator, secondNumber);
        if (isFloat(result) && result.toString().length > 10) {
            result = result.toFixed(6);
        }
        screen.textContent = result;
    }
    else {
        result = secondNumber;
        screen.textContent = result;
    }
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
});

percentButton.addEventListener("click", () => {
    const numberToConvert = screen.textContent;
    if (numberToConvert === "" || !digitRegex.test(numberToConvert)) {
        if (result !== undefined) {
            screen.textContent = result;
        }
    }
    else {
        result = Number(numberToConvert) / 100;
        if (result.toString().length > 10) {
            result = result.toFixed(6);
        }
        screen.textContent = result;
    }
});

backSpace.addEventListener("click", () => {
    if (screen.textContent !== "") {
        const onScreen = screen.textContent;
        const length = onScreen.length;
        screen.textContent = onScreen.slice(0, length-1);
    }
});

