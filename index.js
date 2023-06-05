let number = document.querySelectorAll('.number')
let screen = document.querySelector('.screen')

let opr = document.querySelectorAll('.op')
let prevScreen = document.querySelector('.prev')
let currentScreen = document.querySelector('.current')

let clear = document.querySelector("#All-clear");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");

// create Global variable
let operator = '';
let prevValue = '';
let currentValue = '';

number.forEach((num)=>{
    num.addEventListener('click',function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    })
})

opr.forEach((op)=>{
    op.addEventListener('click',function(e){
        handleOprator(e.target.textContent)
      
            prevScreen.textContent = prevValue + ' ' + operator;
            currentScreen.textContent = currentValue;
        
            prevScreen.classList.add('prevScreen')
        
       
       
       
    })
})


clear.addEventListener("click", function(){
    prevValue = '';
    currentValue = '';
    operator = '';
    prevScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
})

equal.addEventListener("click", function(){
    if(currentValue != '' && prevValue != ''){
        calculate()
        prevScreen.textContent = '';
        if(prevValue.length <= 5){
            currentScreen.textContent = prevValue;
        } else{
            currentScreen.textContent = prevValue.slice(0,5) + "...";
        }
    }
})

decimal.addEventListener("click", function(){
    addDecimal();
    
})



function handleNumber(num){
    if(currentValue.length <= 5){
        currentValue += num; 
    }
}

function handleOprator(op){
    operator = op
    prevValue = currentValue
    currentValue = ""
}


function calculate(){
    prevValue = Number(prevValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        prevValue += currentValue;
    } else if(operator === "-"){
        prevValue -= currentValue;
    } else if(operator === "x"){
        prevValue *= currentValue;
    }else if(operator === "%"){
        prevValue %= currentValue;
    } else{
        prevValue /= currentValue;
    }

    prevValue = roundNumber(prevValue);
    prevValue = prevValue.toString();
    currentValue = prevValue.toString();
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}












/*
let num1 = prompt('Enter First Number?')
let op = prompt('Choose + - * /  Oprator?')
let num2 = prompt('Enter Second Number?')



function calc(){
   
if(op == "+"){
    console.log(num1 + num2);
}else if(op == "-"){
    console.log(num1 - num2);
}else if(op == "*"){
    console.log(num1 * num2);
}else if(op == "/"){
    console.log(num1 / num2);
}           
}
calc()
*/