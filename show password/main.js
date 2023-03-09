const password=document.querySelector("#password");
const eyeIcon1=document.querySelector(".eye1");
const eyeIcon2=document.querySelector(".eye2")

eyeIcon1.addEventListener("click",()=>{
    eyeIcon2.style.display="block";
    password.setAttribute("type", "text")
})
eyeIcon2.addEventListener("click",()=>{
    eyeIcon2.style.display="none";
    password.setAttribute("type", "password")
})