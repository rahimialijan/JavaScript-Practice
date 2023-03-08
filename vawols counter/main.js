
const btn=document.querySelector('.btn');
const result=document.querySelector('.result')
let word=document.querySelector('.input-text');

btn.addEventListener('click', vawolsCount);

function vawolsCount(){
    let vawolsCounter=0;
    let inputText=word.value.toLowerCase();
    for(let i=0; i<inputText.length; i++){
        let leters=inputText[i];
        if (leters.match(/([a,e,i,o,u])/)){
            vawolsCounter++;
            result.textContent=inputText.toUpperCase()+ " has " +vawolsCounter+' vawols letters';
        }
    }
}