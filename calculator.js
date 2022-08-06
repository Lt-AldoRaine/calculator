const operation = document.querySelectorAll('[data-operation]')
const numbers = document.querySelectorAll('[data-numbers]')
const equals = document.querySelector('[data-equals]')
const allClear = document.querySelector('[data-all-clear]')
const display = document.querySelector('.current')

let firstNum;
let secondNum;
let operator;
let operated = false;
let calculated = false;

operation.forEach(button => {
    button.addEventListener('click', e => {
        operator = button.dataset.operation
        operated = true;
        console.log(operator)
    }, {once: true})
})

function add(firstNum, secondNum) {
    return firstNum + secondNum
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum
}



function operate(firstNum, operator, ...secondNum) {
    if (operator === 'add') {
        return add(firstNum, secondNum)
    }
    if (operator === 'subtract') {
        return add(firstNum, secondNum)
    }
    if (operator === 'multiply') {
        return multiply(firstNum, secondNum)
    }
    if (operator === 'divide') {
        return divide(firstNum, secondNum)
    }
}



