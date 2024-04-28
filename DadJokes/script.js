const content = document.querySelector("p");
const reload = document.querySelector("button");
const joke = async()=>{
 let url = "https://icanhazdadjoke.com/slack";
 let request = await fetch(url);
 let response = await request.json();
 let data = response.attachments[0].fallback;
 console.log(data);

 content.innerHTML = `${data}`
}
reload.addEventListener("click",()=>{
    joke();
})
