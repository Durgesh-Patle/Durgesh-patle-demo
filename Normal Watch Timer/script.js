const inputs = document.getElementsByTagName("input");

function clock() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // console.log(mm);
    inputs[0].value = Math.floor(hh);
    inputs[1].value = Math.floor(mm);
    inputs[2].value = Math.floor(ss);

}
setInterval(clock, 1000);