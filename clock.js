const clockContainer = document.querySelector(".box1");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`
}
function initi() {
    getTime()
}

initi();
setInterval(initi,1000);