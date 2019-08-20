let value1Textbox, value2Textbox, c;

function Calculator(){
    
}

Calculator.prototype.add = function add(...values){
    let sum = 0;
    for(let i = 0, l = values.length; i < l; i++){
        sum += Number(values[i]);
    }
    return sum;
};

Calculator.prototype.subtract = (...values) => {
    let result = Number(values[0]);
    for(let i = 1, l = values.length; i < l; i++){
        result -= Number(values[i]);
    }
    return result;
}

Calculator.prototype.multiply = (...values) => {
    let result = Number(values[0]);
    for(let i = 1, l = values.length; i < l; i++){
        result *= Number(values[i]);
    }
    return result;
}
Calculator.prototype.divide = (...values) => {
    let result = Number(values[0]);
    for(let i = 1, l = values.length; i < l; i++){
        result /= Number(values[i]);
    }
    return result;
}


function init(){
    let addBtn = document.getElementById("addButton");
    let subtractBtn = document.getElementById("subtractButton");
    let multiplyBtn = document.getElementById("multiplyButton");
    let divideBtn = document.getElementById("divideButton");


    let operationButtons = document.querySelectorAll("#operationButtons button");
    value1Textbox = document.getElementById("value1");
    value2Textbox = document.getElementById("value2");
    c = new Calculator();

    for(i = 0; i < operationButtons.length; i++){
        operationButtons[i].addEventListener("click", (e) =>{
            let v1 = Number(value1Textbox.value);
            let v2 = Number(value2Textbox.value);
            let result;
    
            switch(e.currentTarget.id){
                case "addButton":
                    result = c.add(v1,v2);
                break;
                case "subtractButton":
                    result = c.subtract(v1,v2);
                break;
                case "multiplyButton":
                    result = c.multiply(v1,v2);
                break;
                case "divideButton":
                    if(v2 === 0){
                        alert("Cannot divide by zero");
                    }
                    else{
                        result = c.divide(v1,v2);
                    }
                break;
            }
            alert(result);
        });
    }
}


init();