const tabButtons=document.getElementsByClassName('tab-button');
const tabContent=document.querySelectorAll('.tab-details');



for (let i=0; i<tabButtons.length; i++){
    tabButtons[i].addEventListener('click', function(e){
        const current=document.getElementsByClassName('active');
        current[0].className=current[0].className.replace(' active', '');
        this.className +=" active";


        const filter=e.target.dataset.filter;

        console.log(filter)

        tabContent.forEach((content) => {
            if (content.classList.contains(filter)){
                content.style.display='block';
            }else{
                content.style.display='none';
            }
        });
    })
}