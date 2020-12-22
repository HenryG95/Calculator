const add = (num1,num2) => {
    return num1 + num2;
}
const subtract = (num1,num2) => {
    return num1 - num2;
}
const multiply = (num1,num2) => {
    return num1 * num2;
}
const divide = (num1,num2) => {
    if(num2 == 0) {return 'Division by zero is undefined'};
    return num1/num2;
}
const compute = (num1,num2,operator) => {
    return operator(num1,num2);
}

const checkSign = (sign) => {
    switch(sign) {
        case '+':
            return add;
        case '-':
            return subtract;
        case '*':
            return multiply;
        case '%':
            return divide;
        default:
            return 'ERROR';


    }
}

const check = (result) => {
    if(result.includes('+')) {return '+'}
    if(result.includes('-')) {return '-'}
    if(result.includes('*')) {return '*'}
    if(result.includes('%')) {return '%'}
}

let screen = document.querySelector('#screen');
const pad = document.querySelectorAll('.pad');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.delete');
let result = document.querySelector('.result');

pad.forEach(item => {
    item.addEventListener('click', () => {
        screen.textContent = screen.textContent + item.getAttribute('id');
    });
})

operators.forEach(item => {
    item.addEventListener('click', () => {
        screen.textContent = screen.textContent + item.getAttribute('id');
    });
})

clear.addEventListener('click', () => {
    var content = screen.textContent;
    var result = content.substring(0,content.length -1)
    console.log(result);
    screen.textContent = result;
})

result.addEventListener('click',() => {
    var content = screen.textContent;
    var numbers = content.split(check(content));
    console.log(numbers);
    var symbols = check(content);
    console.log(symbols);
    console.log(typeof parseInt(numbers[0]));
    var result  = compute(parseFloat(numbers[0]),parseFloat(numbers[1]),checkSign(symbols));
    screen.textContent = result;
    if(screen.textContent != '') {
        clear.addEventListener('click', () => {
            screen.textContent = '';
        })
    }
        
})

clear.addEventListener('mouseup', () => {
    screen.textContent = '';
})
