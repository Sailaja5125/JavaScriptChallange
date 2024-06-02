// Drinking water
let glass = document.querySelectorAll(".glass-1");
let large_glass = document.querySelector(".large-glass")
let reset = document.querySelector("button");
let i = 0 ;
glass.forEach((glass)=>{
    
        glass.addEventListener("click",()=>{
            glass.classList.add("active");
            document.querySelector(".percentage").innerHTML = `${i+12.5}%`
            fillglass();
            i = i+12.5;
        })
    
})


function fillglass(){
    let fill = document.createElement("div");

     fill.innerHTML = 
       `<div class="color">  
       <\div>`

large_glass.appendChild(fill);
}




