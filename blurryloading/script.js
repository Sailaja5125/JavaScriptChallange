const image = document.querySelector('.container');
const loadingText = document.querySelector('.loading');

const scale = (num ,in_min , in_max , out_min , out_max)=>{
    return (num - in_min) *(out_max -out_min) /(in_max - in_min) + out_min;
}
// scale is the 

let loading = 0;
setInterval(()=>{
    loading++;
    if(loading>99){
        clearInterval();
    }
    loadingText.innerHTML = `${loading}%`;
    loadingText.style.opacity = scale(loading , 0 , 100 ,1 ,0);
    image.style.filter = `blur(${scale(loading , 0 , 100 , 20 , 0)}px)`;
} , 30)
