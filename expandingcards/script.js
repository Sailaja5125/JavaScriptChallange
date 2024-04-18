let card = document.querySelectorAll('.card1')

const removeactiveclass = () =>{
    card.forEach(card => {        
            card.classList.remove("active");
    });
}
card.forEach(card => {
    card.addEventListener("click",()=>{
        removeactiveclass();
        card.classList.add("active");
    })
});

