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
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}
var displayVal = document.getElementById("screen");
var num = document.getElementsByClassName("num");
var oper = document.getElementsByClassName("operator");
var currNum1 = 90000, currNum2 = 90000;
//adding eventlisteners to each button since we are getting them by class
var numbtn = document.getElementsByClassName("num");
for(let i = 0; i < numbtn.length; i++){
    numbtn[i].addEventListener("click", changeDisplay);
}

for(let i = 0; i < oper.length; i++){
    oper[i].addEventListener("click", changeDisplay);
}

function changeDisplay(evt){
    console.log(evt.target);
    displayVal.innerHTML = evt.target.innerHTML;
    if(currNum1 == 90000){
        currNum1 = evt.target.innerHTML;
    }else{
        currNum2 = evt.target.innerHTML;
    }
    if(evt.target.innerHTML){
        alert("hey");
    }
}

/*
function solve(evt){
    displayVal.innerHTML = operate(currNum1, evt.target.innerHTML, currNum2);
    changeDisplay(displayVal);
}*/