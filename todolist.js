let button = document.getElementById('button');
let input = document.getElementById('input');
let list = document.getElementById('list');

button.addEventListener('click', clickButton);
let cnt=0;
function clickButton() {
    let temp = document.createElement("li");
    temp.setAttribute("class", "list-group-item");
    temp.setAttribute("id", "li"+cnt);
                
    temp.innerHTML = input.value;
    list.appendChild(temp);
    input.value="";
}