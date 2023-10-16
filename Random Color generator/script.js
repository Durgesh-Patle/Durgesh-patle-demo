const getColor =() =>{
    // Hex code

    const randomNumber =Math.floor(Math.random()*16777215);
    // console.log(randomNumber);

    const randomCode= "#"+randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("inner-Text").innerText= randomCode;
}

// event call.
document.getElementById("btn").addEventListener("click",getColor);

// init call.
getColor();