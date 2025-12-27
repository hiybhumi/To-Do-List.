let inputbox = document.getElementById("input-box");
let container = document.getElementById("list-container");
function addtask() {
    if(inputbox.value === ''){
        alert("you must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value = "";
    savedata();
}

inputbox.addEventListener("keydown", function (event) {               // for adding the task using enter key
    if (event.key === "Enter") {
        addtask();
    }
});

container.addEventListener('click', function(e) {
    if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
    }
},false);

container.addEventListener('click', function(e) {
    if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savedata();
    }
},false);

function savedata() {
    localStorage.setItem("data", container.innerHTML);
}
function showTask() {
    container.innerHTML = localStorage.getItem("data");
}
showTask();
