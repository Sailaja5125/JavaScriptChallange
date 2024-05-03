const text = document.querySelector(".form-control");
const button = document.querySelector("button");
const display = document.querySelector("h2");
let arr = [];
text.value = "";
text.addEventListener("change",(event)=>{
    text.value = event.target.value
})

button.addEventListener("click",()=>{
    let t = text.value 
    let word = t.split("\n");
    arr = arr.concat(word)
    console.log(arr.length);
    const randomNumber = Math.floor(Math.random() * arr.length);
    console.log(randomNumber);
    display.innerText = `${arr[randomNumber].toString()== ""?"":arr[randomNumber].toString()}`    
})

