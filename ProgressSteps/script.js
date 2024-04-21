const progress = document.querySelectorAll(".bar")[0];

setInterval(()=>{
    const style = getComputedStyle(progress);
    // above ones returns the string value
    const width = parseFloat(style.getPropertyValue("--width")) || 0
    progress.style.setProperty('--width' , width + .1)
} ,5)