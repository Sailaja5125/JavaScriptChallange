const active = document.querySelectorAll(".contains");
active.forEach(element =>{
    active.addEventListener("click",()=>{
         active.classList.add("active");
        })
})
