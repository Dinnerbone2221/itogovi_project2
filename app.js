let input = document.getElementById('taskInput');
let tasks = document.getElementById('tasksList');
let btn = document.getElementById('addBtn');
btn.onclick = function() {
    let text = input.value;
    if (text == "") {
        alert("Напиши что-нибудь!");
        return;
    }
    if (tasks.innerText == "Нет дел") {
        tasks.innerText = "";
    }
    let div = document.createElement("div");
    div.classList.add("task");
    let strikeBtn = document.createElement("button");
    strikeBtn.innerText = "Зачеркнуть";
    let span = document.createElement("span");
    span.innerText = text;
    let delBtn = document.createElement("button");
    delBtn.innerText = "Удалить";
    delBtn.classList.add("delete");
    strikeBtn.onclick = function() {
        if (span.style.textDecoration == "line-through") {
            span.style.textDecoration = "none";
            strikeBtn.innerText = "Зачеркнуть";
        } else {
            span.style.textDecoration = "line-through";
            strikeBtn.innerText = "Вернуть";
        }
    }
    delBtn.onclick = function() {
        div.remove();
    }
    div.append(strikeBtn);
    div.append(span);
    div.append(delBtn);
    tasks.append(div);
    input.value = "";
}
input.onkeypress = function(event) {
    if (event.key == "Enter") {
        btn.onclick();
    }
}