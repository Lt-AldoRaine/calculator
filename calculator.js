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

function displayNum() {
    numbers.forEach(button => {
        button.addEventListener('click', () => {
            if (operated === false) {
                firstNum = parseInt(display.innerText += button.innerText)
                console.log(`first num = ${firstNum}`)
            } 
            if (operated === true) {
                display.textContent = ''
                secondNum = parseInt(display.innerText += button.innerText)
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
        return add(firstNum, secondNum)
    }
    if (operator === 'multiply') {
        return multiply(firstNum, secondNum)
    }
    if (operator === 'divide') {
        return divide(firstNum, secondNum)
    }
}

equals.addEventListener('click', () => {
    if (calculated === false) {
        let result = operate(firstNum, operator, secondNum)
        console.log(result)
        display.innerText = result;
        operated = false
        calculated === true
    } else display.innerText = ''
})

displayNum()