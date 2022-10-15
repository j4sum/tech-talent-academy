/*
const firstValue = prompt("Enter your first number:");
const secondValue = prompt("Enter your second number:");

const operation = prompt("Enter your operation (+, -, *, /):");

*/

//declare variables, pass the parameters to function and display results
const firstValue = 40;
const secondValue = 15;
const operation = '+';

let result;

function addition(firstValue, secondValue) {
    return (firstValue) + secondValue;
}
result = addition(firstValue, secondValue);
console.log(`${firstValue} + ${secondValue} = ${result}`);

function subtraction(firstValue, secondValue) {
    return firstValue - secondValue;
}
result = subtraction(firstValue, secondValue);
console.log(`${firstValue} - ${secondValue} = ${result}`);

function division(firstValue, secondValue) {
    return firstValue / secondValue;
}
result = division(firstValue, secondValue);
console.log(`${firstValue} / ${secondValue} = ${result}`);

function multiplication(firstValue, secondValue) {
    return firstValue * secondValue;
}
result = multiplication(firstValue, secondValue);
console.log(`${firstValue} * ${secondValue} = ${result}`);

function caret(firstValue, secondValue) {
    return firstValue ^ secondValue;
}
result = caret(firstValue, secondValue);
console.log(`${firstValue} ^ ${secondValue} = ${result}`);


//case-switch evaluting user input and executing relevent function
switch (operation) {
    case '+':
        result = firstValue + secondValue;
        console.log(`${firstValue} + ${secondValue} = ${result}`);
        break;
    case '-':
        result = firstValue - secondValue;
        console.log(`${firstValue} - ${secondValue} = ${result}`);
        break;
    case '/':
        result = firstValue / secondValue;
        console.log(`${firstValue} / ${secondValue} = ${result}`);
        break;
    case '*':
        result = firstValue / secondValue;
        console.log(`${firstValue} * ${secondValue} = ${result}`);
        break;
    case '^':
        result = firstValue ^ secondValue;
        console.log(`${firstValue} ^ ${secondValue} = ${result}`);
        break;
    default:
        console.log('Invalid operation');
}