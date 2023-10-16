let Bulb=document.getElementsByClassName("bulb");
let onbtn =document.getElementById("btn-on");

function chnagecolor(){
    Bulb.style.backgraoundColor ="yellow";
} 
onbtn.addEventListener("click", chnagecolor)