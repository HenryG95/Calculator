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
    if(numbers.includes('')) {
        numbers.splice(numbers.length -1,1);
    }
    parse(numbers);
    if(numbers.length == 1) {
        secondScreen.textContent = '';
    } else {
    var symbols = check(content);
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
const deleteNumbers = document.querySelector('#delete');
const clear = document.querySelector('#clear');
const dark = document.querySelector('#dark');
const erase = document.querySelectorAll('.delete');
let result = document.querySelector('.result');
const body = document.querySelector('body');
const container = document.querySelector('#container');

pad.forEach(item => {
    item.addEventListener('mousedown', () => {
        screen.textContent = screen.textContent + item.getAttribute('id');
        if(verify(screen.textContent)) {
            endCompute(screen.textContent);
        }
    });
})
operators.forEach(item => {
    item.addEventListener('mousedown', () => {
        screen.textContent = screen.textContent + item.getAttribute('id');
    });
})
deleteNumbers.addEventListener('mousedown', () => {
        var content = screen.textContent;
        var result = content.substring(0,content.length -1);
        screen.textContent = result;
        endCompute(result);
});
clear.addEventListener('mousedown', () => {
    screen.textContent = '';
    secondScreen.textContent = '';
})
result.addEventListener('mousedown',() => {
    var content = screen.textContent;
    endCompute(content);
    screen.textContent = secondScreen.textContent;
    secondScreen.textContent = '';
        
});
dark.addEventListener('click', () => {
    if(dark.textContent == 'Dark Theme') {
        pad.forEach(item => {
            item.style['background-color'] = 'rgb(0,0,0,0.75)'
            item.style['color'] = 'white';
        });
        operators.forEach(item => {
            item.style['background-color'] = 'rgb(0,0,0,0.75)'
            item.style['color'] = 'white';
        });
        erase.forEach(item => {
            item.style['background-color'] = 'rgb(0,0,0,0.75)';
            item.style['color'] = 'white';
        });
        screen.style['color'] = 'white';
        secondScreen.style['color'] = 'grey';
        display.style['background-color'] = 'black';
        result.style['background-color'] = 'rgb(0,0,0,0.75)';
        result.style['color'] = 'white';
        screen.style['color'] = 'white';
        body.style['background-color'] = 'black';
        dark.style['color']= 'white';
        dark.textContent = 'Light Theme';
        dark.setAttribute('style','color:white;margin-right:92%;border:1px solid white');
    } else if(dark.textConent = 'Light Theme') {
            pad.forEach(item => {
                item.style['background-color'] = 'rgb(220,220,220,0.3)'
                item.style['color'] = 'black';
            });
            operators.forEach(item => {
                item.style['background-color'] = 'rgb(220,220,220,0.3)'
                item.style['color'] = 'black';
            });
            erase.forEach(item => {
                item.style['background-color'] = 'rgb(220,220,220,0.3)';
                item.style['color'] = 'black';
            });
            screen.style['color'] = 'black';
            secondScreen.style['color'] = 'rgb(128,128,128)';
            display.style['background-color'] = 'white';
            result.style['background-color'] = 'rgb(220,220,220,0.3)';
            result.style['color'] = 'black';
            screen.style['color'] = 'black';
            body.style['background-color'] = 'white';
            container.style['border'] = '5px solid rgb(128,128,128,0.5)';
            dark.style['color']= 'white';
            dark.textContent = 'Dark Theme';
            dark.setAttribute('style','color:black;margin-right:92%;border:1px solid rgb(128,128,128,0.5)');
     
    }



});
