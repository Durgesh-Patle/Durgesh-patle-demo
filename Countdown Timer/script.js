const endDate = "18 oct 2023 10:00 PM";

document.getElementById("end-Date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();

    const diff = (end - now) / 1000;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

    // console.log(diff);
    // console.log(now);
    // console.log(end);


}
//intial call.
clock();

// 1 day=24hours;
// 1 hours =60min;
// 60 min =3600sec;

setInterval(clock,1000)