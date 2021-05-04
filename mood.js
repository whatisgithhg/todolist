const body = document.querySelector("body");
const bgimg = document.querySelector("#bgimg");

function selectMood() {
    //body.removeChild(firstChild);
    
    const sel = document.getElementById("myselect");
    
    let img = sel.options[sel.selectedIndex].value;
    let image = new Image();
    image.src = `images/${img}.jpg`;
    image.setAttribute("id", "bgimg");
    body.appendChild(image);
    
    //body.removeChild(image);

    
}

function init() {
    
    selectMood();
    
}
init();
