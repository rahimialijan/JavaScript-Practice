const  btn=document.querySelector('.btn'),
    tip=document.querySelector('.tip'),
    total=document.querySelector('.total'),
    error=document.querySelector('.error');

const hideError=()=>{
    setTimeout( ()=>{
        error.style.display="none"
    }, 4000)
}

const tipCalc=()=>{
    const billAmount=document.querySelector('.bill').value;
    const rateAmount=document.querySelector('.rate').value;
    if (billAmount==='' || rateAmount===''){
        error.style.display="block";
        hideError()
    }else if(isNaN(billAmount)){
        error.innerHTML='Please Enter a Number';
        error.style.display="block";
        hideError()
    }else{
        let tipAmount=billAmount*rateAmount;
        tip.innerHTML='Tip Amount: $'+Math.ceil(tipAmount);
        total.innerHTML='Total Bill: $'+ Math.ceil(Number(billAmount)+tipAmount)
    }
}



btn.addEventListener('click',tipCalc);