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



let currnum1 = 0, currnum2 = 0, count = 0, currop;
var displayVal = document.getElementById("screen");
var oper = document.getElementsByClassName("operator");

//adding eventlisteners to each button since we are getting them by class
var numbtn = document.getElementsByClassName("num");
for(let i = 0; i < numbtn.length; i++){
    numbtn[i].addEventListener("click", changeDisplay);
}

for(let i = 0; i < oper.length; i++){
    oper[i].addEventListener("click", changeDisplay);
}

function operate(num1, operator, num2){
    /*
    switch(operator){
        case oper[0]:
            return(add(num1, num2));
            break;
        case oper[1]:
            return(subtract(num1, num2));
            break
        case oper[2]:
            return(multiply(num1, num2));
            break;
        case oper[4]:
            return(divide(num1, num2));
            break;
    }
    */
    return(num1 + num2);
}




function changeDisplay(evt){
    //if numberbtn is pressed
    /*
    if(isNaN(evt.target.innerHTML) == false){
        if(count == 1){
            displayVal.innerHTML = " ";
            count = 0;
        }
        displayVal.innerHTML = displayVal.innerHTML + evt.target.innerHTML;
    
    }else if(evt.target.innerHTML == oper[3].innerHTML){
        let answer = operate(currnum1, currop, currnum2);
        console.log(answer);
        //displayVal.innerHTML = operate(currnum1, currop, currnum2);
        displayVal.innerHTML = answer;

    }else{
        //this function doesnt go because NaN goes first 
        //if operatorbtn is pressed
        console.log("number");
        if(currnum1 == 0){
            currnum1 = evt.target.innerHTML;
            console.log(currnum1);
        }else{
            currnum2 = evt.target.innerHTML;
            console.log(currnum2);
        }
        
        displayVal.innerHTML = evt.target.innerHTML;
        count++;
    }
    */
   
    //check if the value is a number then we need to keep udating the display
    if(isNaN(evt.target.innerHTML) == false){
        //updates the display to keep number going
        if(count == 1){
            displayVal.innerHTML = "";                                              
            count++;                                                                  
        }
        
        displayVal.innerHTML = displayVal.innerHTML + evt.target.innerHTML;         
        if(currnum1 != 0){
            currnum2 = Number(displayVal.innerHTML);
            count++;                                     
        }
    }else if(isNaN(evt.target.innerHTML) == true){
        //if the user pressed = thsen it should calc the 2 numbers
        if(evt.target.innerHTML == oper[3].innerHTML){
            //if num1 and num2 are not empty then solve
            
            if(count == 3){
                /*
                let sum = operate(currnum1, currop, currnum2);S
                displayVal.innerHTML = sum;
                */
                console.log(Number(currnum1) + Number(currnum2));
            }
            //if the user presses a operator then we need to solve
        }else{
            //if num1 is filled then we go to num2                      
            if(currnum1 == 0){
                currnum1 = Number(displayVal.innerHTML);                        
            }
            //update screen to current operator
            displayVal.innerHTML = evt.target.innerHTML;                
            //store our operator
            currop = evt.target.innerHTML;                              
            count++;                                                    
        }
    }

}
