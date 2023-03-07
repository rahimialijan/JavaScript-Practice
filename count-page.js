/*couter page script codes*/
let counter=document.getElementById('count-el');
let saved=document.getElementById('save-el');
let count=0;

function increment(){
    count+=1;
    counter.textContent = count;
}

function save(){
    let countStr=count +' - ';
    saved.textContent +=countStr
}


/*second example srcipt codes*/
let num1=document.getElementById('num-1').innerText=8;
let num2=document.getElementById('num-2').innerText=2;
let rst =document.getElementById('result');

function add(){
    let calc=num1+num2;
    rst.textContent= "sum: "+calc;
}

function subtract(){
    let calc=num1-num2;
    rst.textContent= "subtract: "+calc;
}
function multiply(){
    let calc=num1*num2;
    rst.textContent= "multiply: "+calc;
}
function divide(){
    let calc=num1/num2;
    rst.textContent= "divide: "+calc;
}