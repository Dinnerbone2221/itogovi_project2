let list = document.getElementById('tasksList');
let btn = document.getElementById('addBtn');
let input = document.getElementById('taskInput');
function addTask() {
    let text = input.value;
    if (text === '') {
        return;
    }
    let item = document.createElement('div');
    item.setAttribute('class', 'task');
    let span = document.createElement('span');
    span.innerText = '🚀 ' + text;
    let del = document.createElement('button');
    del.innerText = '💥 Стереть!';
    del.setAttribute('class', 'delete');
    del.onclick = function() {
        item.remove();
        if (list.children.length === 0) {
            let info = document.createElement('div');
            info.setAttribute('id', 'emptyNotice');
            info.innerText = '🎉 Ура! Все дела сделаны! Время отдыхать! 🎉';
            list.append(info);
        }
    };
    item.append(span);
    item.append(del);
    let note = document.getElementById('emptyNotice');
    if (note) {
        note.remove();
    }
    list.append(item);
    input.value = '';
}
btn.onclick = addTask;
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});