const daysEl =document.getElementById("days");
const hoursEl =document.getElementById("hours");
const minsEl =document.getElementById("mins");
const secondsEl =document.getElementById("seconds");



const ramadan="13 Apr 2021";

function countdown(){
    const ramadanDate=new Date(ramadan);
    const currentData=new Date();
    const totalSeconds=(ramadanDate-currentData)/1000;

    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minute=Math.floor(totalSeconds/3600)%60;
    const seconds=Math.floor(totalSeconds)%60;

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=minute;
    secondsEl.innerHTML=seconds;

};

countdown();

setInterval(countdown,1000);