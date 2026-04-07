const input = document.getElementById('taskInput');
const btn = document.getElementById('addTaskBtn');
const ul = document.getElementById('taskList');

btn.addEventListener('click', () => {
    if (input.value.trim() === '') return;

    const li = document.createElement('li');
    
    const span = document.createElement('span');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    span.appendChild(checkbox);

    const textNode = document.createTextNode(" " + input.value);

    li.appendChild(span);
    li.appendChild(textNode);
    ul.appendChild(li);
    
    input.value = '';
});

ul.addEventListener('click', (event) => {
    if (event.target.type === 'checkbox') {
        event.target.closest('li').classList.toggle('concluida');
        return;
    }

    const liItem = event.target.closest('li');
    if (liItem) {
        liItem.remove();
    }
});