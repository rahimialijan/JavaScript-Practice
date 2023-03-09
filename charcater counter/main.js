const count=document.getElementById('count');
const input=document.querySelector('.input-text');

input.addEventListener('keyup', function(){
    count.innerText=input.value.length;
})