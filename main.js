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
        screen.innerText = "Nope! Can't do that."
    }
    return num1 / num2;
}

let firstNumber;
let operator;
let secondNumber;
let expression;
let result;
const opRegex = /+|*|-|\//;

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

const screen = document.querySelector(".screen");
const clearButton = document.querySelector(".clear").onclick(reset);
const negateButton = document.querySelector(".negate");
const percentageButton = document.querySelector(".percentage");
const divideButton = document.querySelector(".divide");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const multiplyButton = document.querySelector(".multiply");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const minusButton = document.querySelector(".minus")
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const plusButton = document.querySelector(".plus");
const periodButton = document.querySelector(".period")
const zeroButton = document.querySelector(".zero");
const equalButton = document.querySelector(".equal");