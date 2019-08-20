let value1Textbox, value2Textbox;

function add(...values){
    let sum = 0;
    for(let i = 0, l = values.length; i < l; i++){
        sum += values[i];
    }
    return sum;
}

function init(){
    let btn = document.getElementById("addButton");
    value1Textbox = document.getElementById("value1");
    value2Textbox = document.getElementById("value2");

    btn.addEventListener("click", addButton_clicked);
}

function addButton_clicked(){
    let v1 = value1Textbox.value;
    let v2 = value2Textbox.value;

    let sum = add(v1,v2);
    alert(sum);
}

init();