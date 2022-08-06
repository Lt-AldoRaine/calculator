const operation = document.querySelectorAll('[data-operations]')
const numbers = document.querySelectorAll('[data-numbers]')
const equals = document.querySelector('[data-equals]')
const allClear = document.querySelector('[data-all-clear]')
const display = document.querySelector('.current')

let firstNum;
let secondNum;
let operator;
let isOperated = false;
let isCalculated = false;
let result;

operation.forEach(button => {
    button.addEventListener('click', e => {
        operator = button.dataset.operations
        isOperated = true;
        display.innerText = ''
        console.log(operator)
    })
})

function add(firstNum, secondNum) {
    return parseInt(firstNum) + parseInt(secondNum)
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

function displayNum() {
    numbers.forEach(button => {
        button.addEventListener('click', () => {
            if (!isOperated) {
                display.innerText += button.dataset.numbers
                firstNum = parseInt(display.innerText)
                console.log(`first num = ${firstNum}`)
            } 
            if (isOperated) {
                display.innerText += button.dataset.numbers
                secondNum = parseInt(display.innerText)
                console.log(`second num = ${secondNum}`)
            }
        })
    })
}

function operate(firstNum, operator, ...secondNum) {
    if (operator === 'add') {
        return add(firstNum, secondNum)
    }
    if (operator === 'subtract') {
        return subtract(firstNum, secondNum)
    }
    if (operator === 'multiply') {
        return multiply(firstNum, secondNum)
    }
    if (operator === 'divide') {
        return divide(firstNum, secondNum)
    }
}

equals.addEventListener('click', () => {
    if (isOperated) {
        display.innerText = ''
        result = operate(firstNum, operator, secondNum)
        firstNum = result
        console.log(result)
        display.innerText = result
    } else return 0
    isCalculated = true
})

displayNum()
