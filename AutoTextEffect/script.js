// let t = "Auto Text Effect"
let t  = document.createElement("h1");
t.innerText = "Auto Text Effect";

let index = 0
function writetext(){
    
        document.body.innerHTML = t.innerText.slice(0,index)
        index++;
}

setInterval(writetext , 100);


