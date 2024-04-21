const button = document.querySelector(".button");
const container = document.querySelector('.container')
const nav = document.querySelector("nav");
const anywhere = document.querySelector(".content");
button.addEventListener("click",()=>{
    container.classList.add("active")
    nav.classList.add("active");
    
})

anywhere.addEventListener("click",()=>{
    container.classList.remove("active")
    nav.classList.remove("active");
})




