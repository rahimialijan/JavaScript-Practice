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



/*third example srcipt codes*/


// let adding=document.querySelector('.add');
// let subtracting=document.querySelector('.subtract');
// let reseting=document.querySelector('.reset');
const Counting=document.querySelector('#count');
const allBTN=document.querySelector('.all-btn');

allBTN.addEventListener( "click", (e) =>{
    if (e.target.classList.contains("add")){
        Counting.textContent++;
        changeColor()
    };
    if (e.target.classList.contains("reset")){
        Counting.textContent=0;
        changeColor()
    };
    if (e.target.classList.contains("subtract")){
        Counting.textContent--;
        changeColor()
    };
})

function changeColor(){
    if (Counting.textContent>0){
        Counting.style.color="yellow"
    }else if(Counting.textContent<0){
        Counting.style.color="red"
    }else{
        Counting.style.color="#fff"
    }
}

// adding.addEventListener('click',()=>{
//     Count.innerHTML++
// })
// subtracting.addEventListener('click',()=>{
//     Count.innerHTML--
// })
// reseting.addEventListener('click',()=>{
//     Count.innerHTML=0
// })

/*4th example srcipt codes for rendem number*/

const numGen=document.querySelector(".rendem-num");
const BTNs=document.querySelector(".genrate");

const genrateNums=function rendNum(){
const rendemNum=Math.floor(Math.random()*10+1);
numGen.innerHTML=rendemNum;
}
BTNs.addEventListener('click', genrateNums);
genrateNums()


/*5th example srcipt codes for random color*/

const colorGen=document.querySelector('.random-col');
const colorbtn=document.querySelector('.genrate-col');
const bgcolor=document.querySelector('.section4');

function colorGenrator(){
    const randomColor=Math.random().toString().substring(2,8);
    colorGen.innerText="#"+randomColor;
    bgcolor.style.backgroundColor="#"+randomColor;
};
colorbtn.addEventListener("click", colorGenrator);
colorGenrator()