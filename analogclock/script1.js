let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displaytime(){
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

let hrotate = 30*h + m/2;
let mrotate = 6*m;
let srotate = 6*s;

hr.style.transform = `rotate(${hrotate}deg)`;
min.style.transform = `rotate(${mrotate}deg)`;
sec.style.transform = `rotate(${srotate}deg)`;
}
setInterval(displaytime,1000)