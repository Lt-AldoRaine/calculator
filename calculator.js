const operation = document.querySelectorAll('[data-operations]')
const numbers = document.querySelectorAll('[data-numbers]')
const equals = document.querySelector('[data-equals]')
const allClear = document.querySelector('[data-all-clear]')
const display = document.querySelector('.current')
const prevDisplay = document.querySelector('.previous')

let firstNum;
let secondNum;
let operator;
let isOperated = false;
let result;
let calculated = false;

operation.forEach(button => {
    button.addEventListener('click', e => {
        operator = button.dataset.operations
        isOperated = true;
        display.innerText = ''
        prevDisplay.innerText = `${firstNum} ${operator}`
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

const clear = () => {
    allClear.addEventListener('click', () => {
        display.innerText = ''
        isOperated = false
    })
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
    if (operator === '+') {
        return add(firstNum, secondNum)
    }
    if (operator === '-') {
        return subtract(firstNum, secondNum)
    }
    if (operator === '*') {
        return multiply(firstNum, secondNum)
    }
    if (operator === '/') {
        return divide(firstNum, secondNum)
    }
}



equals.addEventListener('click', () => {
    if (isOperated) {
        display.innerText = ''
        prevDisplay.innerText = `${firstNum} ${operator} ${secondNum}`
        result = operate(firstNum, operator, secondNum)
        firstNum = result
        console.log(result)
        display.innerText = result
    } else return 0
    calculated = true;
})

displayNum()
clear()
