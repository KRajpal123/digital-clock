const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("Sec");
const AMPM = document.getElementById("ampm");


const digitalCLock = () => {
    let date  = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    Hours.innerText = h;
    Minutes.innerText = m;
    Seconds.innerText = s;
    AMPM.innerText = ampm;

    setTimeout(() => {
        digitalCLock();
    },1000)
}
digitalCLock()