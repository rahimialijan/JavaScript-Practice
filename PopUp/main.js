const   popupButton=document.getElementById('popup-btn');
const   close=document.querySelector('.close');
const   container=document.querySelector('.container');


function popup(){
    container.style.display='flex';
}
popupButton.addEventListener('click',popup);

function closePop(){
    container.style.display='none';
}
close.addEventListener('click', closePop)