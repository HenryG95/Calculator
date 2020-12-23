const add = (array) => {
    var result = 0;
    array.forEach(item => {
        result = result + item;
    })
    return result;
}
const subtract = (array) => {
    var result = 0;
    array.forEach(item => {
        result = item - result;
    })
    return result * -1;
}
const multiply = (array) => {
    var result = 1;
    array.forEach(item => {
        result = result * item;
    })
    return result;
}
const divide = (array) => {
    var result = array[0];
    for(var i =1;i<array.length;i++) {
        result = result/array[i];
    }
    return result;
}
const compute = (array,operator) => {
    return operator(array);
}

const parse = (array) => {
    var result = array.map(item => {
        return parseFloat(item);
    })
    return result;
}

const endCompute = (content) => {
    var numbers = content.split(check(content));
    if(numbers.includes('')) {
        numbers.splice(numbers.length -1,1);
    }
    parse(numbers);
    if(numbers.length == 1) {
        secondScreen.textContent = '';
    } else {
    var symbols = check(content);
    console.log(numbers);
    console.log(parse(numbers));
    console.log(symbols);
    var result  = compute(parse(numbers),checkSign(symbols));
    secondScreen.textContent = result;
    display.appendChild(secondScreen);
    }
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

const verify = (sign) => {
    if(sign.includes('+') || sign.includes('-') || sign.includes('*') || sign.includes('%')) {
        return true;
    } else {
        return false;
    }
}

let secondScreen = document.createElement('div');
secondScreen.setAttribute('id','secondScreen');
let display = document.querySelector('#display');
let screen = document.querySelector('#screen');
const pad = document.querySelectorAll('.pad');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.delete');
let result = document.querySelector('.result');

pad.forEach(item => {
    item.addEventListener('click', () => {
        screen.textContent = screen.textContent + item.getAttribute('id');
        if(verify(screen.textContent)) {
            endCompute(screen.textContent);
            
        }
    });
})

operators.forEach(item => {
    item.addEventListener('click', () => {
        screen.textContent = screen.textContent + item.getAttribute('id');
    });
})


clear.addEventListener('click', () => {
        var content = screen.textContent;
        var result = content.substring(0,content.length -1);
        screen.textContent = result;
        endCompute(result);
});

result.addEventListener('click',() => {
    var content = screen.textContent;
    endCompute(content);
    screen.textContent = secondScreen.textContent;
    secondScreen.textContent = '';
    if(screen.textContent != '') {
        clear.addEventListener('click', () => {
            screen.textContent = '';
        })
    }
        
})