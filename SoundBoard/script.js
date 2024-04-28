const applaud = document.querySelector(".applaud");
const boo = document.querySelector(".boo");
const nope = document.querySelector(".nope");
const gasp = document.querySelector(".gasp");
const Victory = document.querySelector(".victory");


applaud.addEventListener("click",()=>{
    var audio = new Audio("sounds/crowd-applauding-198627.mp3");
    audio.play(); 
})
boo.addEventListener("click",()=>{
    var audio = new Audio("sounds/boo-6377.mp3");
    audio.play(); 
})
nope.addEventListener("click",()=>{
    var audio = new Audio("sounds/call-to-attention-123107.mp3");
    audio.play(); 
})
gasp.addEventListener("click",()=>{
    var audio = new Audio("sounds/gasp-6253.mp3");
    audio.play(); 
})
Victory.addEventListener("click",()=>{
    var audio = new Audio("sounds/success-fanfare-trumpets-6185.mp3");
    audio.play(); 
})
