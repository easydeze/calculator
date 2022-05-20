const inputs = document.querySelectorAll('input');
var screen = document.querySelector('#display');

var operator = null;
var nextOperator = null;
var firstOperand = null;
var secondOperand = null;

function display(input) {
    screen.innerHTML = input;
    screen.innerHTML = screen.innerHTML.substring(0, 29);
}

inputs.forEach((input) => {
    input.addEventListener('click', () => {
        clickButton(input);
    })
});

function clickButton(button) {
    if (button.classList.contains("operand")) {
        inputOperand(button);
    }
    if (button.classList.contains("operator")) {
        inputOperator(button);
        console.log(operator)
    }
    else if (button.classList.contains("dot")) {
        dot();
    }
    else if (button.classList.contains("equals")) {
        if (equals() === undefined || equals() === 'are you stupid') {
            display(equals());
            operator = null;
            firstOperand = null;
            secondOperand = null;
        }
        else {
            display(equals());
            firstOperand = equals();
            operator = null;
            secondOperand = null;
        }
    }
    else if (button.id === ("clear")) {
        clear();
    }
}

function clear() {
    operator = null;
    firstOperand = null;
    secondOperand = null;
    screen.innerHTML = '';
}

function inputOperand(operand) {
    if (operator === null) {
        if (firstOperand === null) {
            firstOperand = operand.value;
        }
        else {
            firstOperand += operand.value;
        }
        display(firstOperand);
        console.log(firstOperand)
    }
    else {
        if (secondOperand === null) {
            secondOperand = operand.value;
        }
        else {
            secondOperand += operand.value;
        }
        display(secondOperand);
        console.log(secondOperand)
    }
}

function inputOperator(button) {
    if (operator === null) {
        operator = button.value;
    }
    else {
        if (equals() === undefined || equals() === 'are you stupid') {
            display(equals());
            operator = null;
            firstOperand = null;
            secondOperand = null;
        }
        else {
            display(equals());
            firstOperand = equals();
            operator = null;
            secondOperand = null;
        }
        operator = button.value
    }
}

function dot() {
    if (operator === null) {
        screen.innerHTML += '.';
        firstOperand += '.';
    }
    else {
        screen.innerHTML += '.';
        secondOperand += '.';
    }
}

function equals() {
    return operate(operator, firstOperand, secondOperand);
}

function add(a, b) {
	return +a + +b;
};

function subtract(a, b) {
	return a-b;
};

function multiply(a, b) {
	return a*b;
};

function divide(a, b) {
    if (b == 0) {
        return 'are you stupid';
    }
	return a/b;
};

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    }
    if (operator === "-") {
        return subtract(num1, num2);
    }
    if (operator === "x") {
        return multiply(num1, num2);
    }
    if (operator === "÷") {
        return divide(num1, num2);
    }
}

