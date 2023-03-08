
const btn=document.querySelector('.btn');
const result=document.querySelector('.result')


btn.addEventListener('click', checkingText)
function checkingText(){
    let word=document.querySelector('.input-text').value;
    let len=word.length;
    let start=word.substring(0,Math.floor(len/2)).toLowerCase();
    let end=word.substring(len - Math.floor(len/2)).toLowerCase();

    let flip=end.split("").reverse().join("");
    if(start==flip){
        result.innerHTML=word.toUpperCase()+ " is a Palindrome";
    }else{
        result.innerHTML=word.toUpperCase()+ " is NOT a Palindrome";
    }
}