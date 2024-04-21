const search = document.querySelector(".container")
const widget = document.getElementsByTagName("body")
search.addEventListener("click" , ()=>{
    search.classList.add("active")
})

widget.addEventListener("click" ,()=>{
    search.classList.remove("active")    
})

