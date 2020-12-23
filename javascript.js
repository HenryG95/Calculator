const add = (array) => {
    var result = 0;
    array.forEach(item => {
        result = result + item;
    })
    return result;
}
const subtract = (array) => {
    var result = array[0];
    for(var i =1;i<array.length;i++) {
        result = result - array[i];
    }
    return result;
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
    return array.map(item => {
        if(verify(item) == false) {
        return parseFloat(item);
        }
        return item;
    });

}



const typeofCheck = (array) => {
    counter = 0;
    array.forEach(item => {
        if(typeof item == 'number') {
            counter = counter + 1;
        }
    })
    if(counter == array.length) {
        return true;
    } else {
        return false;
    }
}

const split = (string) => {
    var numbers = string.split(check(string));
    return numbers;
}

const silentCompute = (string) => {
    var numbers = string.split(check(string));
    var symbols = check(string);
    var result = compute(parse(numbers),checkSign(symbols));
    return result;

}

const findString = (array) => {
    var place = 0
    array.forEach(item => {
        if(typeof item == 'string') {
            place = array.indexOf(item);
        }
    })
    return place;
}

const recursive = (array,sign) => {
    if(typeofCheck(array)) {
        return compute(array,checkSign(sign));
    } else {
        while(typeofCheck(array) != true) {
        var a = recursive(parse(array[findString(array)].split(check(array[findString(array)]))),check(array[findString(array)]));
        array.splice(array.indexOf(array[findString(array)]),1,a);
        console.log(array);
        }
        return compute(array,checkSign(sign));

    }
}



const endCompute = (content) => {
    var numbers = content.split(check(content));
    console.log(parse(numbers));
    if(numbers.includes('')) {
        numbers.splice(numbers.length -1,1);
    }
    parse(numbers);
    if(numbers.length == 1) {
        secondScreen.textContent = '';
    } else {
    var symbols = check(content);
    console.log(symbols)
    var result  = recursive(parse(numbers),symbols);
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
    item.addEventListener('mousedown', () => {
        item.style['border-radius'] = '50%';
        item.style['background-color'] = 'lightgrey';
        screen.textContent = screen.textContent + item.getAttribute('id');
        if(verify(screen.textContent)) {
            endCompute(screen.textContent);
        }
    });
    item.addEventListener('mouseup', () => {
        item.style['border-radius'] = '0px';
        item.style['background-color'] = 'rgb(220,220,220,0)';
    })
})

operators.forEach(item => {
    item.addEventListener('mousedown', () => {
        item.style['border-radius'] = '50%';
        item.style['background-color'] = 'lightgrey';
        screen.textContent = screen.textContent + item.getAttribute('id');
    });
    item.addEventListener('mouseup', () => {
        item.removeAttribute('border-radius');
        item.style['background-color'] = 'rgb(220,220,220,0)';
    })
})


clear.addEventListener('mousedown', () => {
    clear.style['border-radius'] = '50%';
    clear.style['background-color'] = 'lightgrey';
    if(screen.textContent !='' && secondScreen.textContent ==''){
        console.log('inside');
        screen.textContent = '';
    }
        var content = screen.textContent;
        var result = content.substring(0,content.length -1);
        screen.textContent = result;
        endCompute(result);
});

clear.addEventListener('mouseup',() => {
    clear.removeAttribute('border-radius');
    clear.style['background-color'] = 'rgb(220,220,220,0)';
        
})

result.addEventListener('mousedown',() => {
    result.style['border-radius'] = '50%';
    result.style['background-color'] = 'lightgrey';
    var content = screen.textContent;
    endCompute(content);
    screen.textContent = secondScreen.textContent;
    secondScreen.textContent = '';
        
})

result.addEventListener('mouseup',() => {
    result.removeAttribute('border-radius');
    result.style['background-color'] = 'rgb(220,220,220,0)';
        
})
