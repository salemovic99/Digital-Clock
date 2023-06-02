let hours = document.getElementById('Hours');
let Minutes = document.getElementById('Minutes');
let Second = document.getElementById('Second');

setInterval(()=>{

    let date = new Date();
    hours.innerHTML = date.getHours() < 10 ? '0'+date.getHours() : date.getHours();
    Minutes.innerHTML = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
    Second.innerHTML = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();
},1000);