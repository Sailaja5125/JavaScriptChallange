let button = document.querySelector(".ripple");

button.addEventListener("click",(e)=>{
    let effect = document.createElement("span");

    effect.classList.add(".ripple");

    button.appendChild(effect);

    // Get the position of x
    let x = e.clientX - e.currentTarget.offsetLeft;
    
    // Get position of Y
    let y = e.clientY - e.currentTarget.offsetTop;

    // Position the span element
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;

    // Remove span after 0.3s
    setTimeout(() => {
        effect.remove();
    }, 300);
})