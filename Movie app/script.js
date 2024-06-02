let search = document.querySelector("input");
let submit = document.querySelector("button");
let main = document.querySelector(".cardbody");
let content = [];

search.value = "";
let url = `https://omdbapi.com/?s=Batman&page=1&apikey=2ee945ff`
search.addEventListener("change",()=>{
    search.value = event.target.value;
    url = `https://omdbapi.com/?s=${search.value==""?"Batman":search.value}&apikey=2ee945ff`
})
const data = async(url)=>{
    let request = await fetch(url);
     let response = await request.json();
     content = response.Search;
     console.log(content)
   
   showcontent(content);
}
submit.addEventListener("click",()=>{
    console.log(search.value);
    data(url)
 })
 
// show content
function showcontent(content){
    main.innerHTML = ``;
    content.forEach(element => {
        const {Poster , Title ,Year ,Type} = element

        const card = document.createElement('div')

        card.innerHTML = 
        `<p class="type">${Type}</p>    
        <img src="${Poster}" style="background-position:cover ;" class="cardimage">
        <div class="cardContent">
             <h1 class="titleMovie">${Title}</h1>
             <p class="year">${Year}</p>
             `
        
        main.appendChild(card);
    }); 
}




