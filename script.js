//functions for math operations
function add(){
    let results = 0;
    for(let i = 0; i < arguments.length; i++){
        results += arguments[i];
    }
    return results;
}

function subtract(){
    let results = 0;
    for(let i = 0; i < arguments.length; i++){
        if(i == 0){
            results = arguments[i];
            i++;
        }
        results = results - arguments[i];
    }
    return results;
}

function multiply(){
    let results = 1;
    for(let i = 0; i < arguments.length; i++){
        results *= arguments[i];
    }
    return results;
}

function divide(){
    let results = 0;
    for(let i = 0; i < arguments.length; i++){
        if(i == 0){
            results =  arguments[i];
            i++;
        }
        results /= arguments[i];
    }
    return results;
}

function operate(num1, operator, num2){
    switch(operator){
        case add:
            add(num1, num2);
            break;
        case subtract:
            subtract(num1, num2);
            break
        case multiply:
            multiply(num1, num2);
            break;
        case divide:
            divide(num1, num2);
            break;
    }
}