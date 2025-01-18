function populateTodoList(todos) {
    let list = document.getElementById('todo-list');
    list.innerHTML = ''; // Clear any existing content

    todos.forEach(todo => {
        let li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        if (todo.completed) {
            li.style.textDecoration = 'line-through';
        }
        li.textContent = todo.task;

        let span = document.createElement('span');
        span.className = 'badge bg-primary rounded-pill';

        let checkIcon = document.createElement('i');
        checkIcon.className = 'fa fa-check';
        checkIcon.setAttribute('aria-hidden', 'true');
        checkIcon.onclick = () => {
            todo.completed = !todo.completed;
            li.style.textDecoration = todo.completed ? 'line-through' : '';
        };

        let trashIcon = document.createElement('i');
        trashIcon.className = 'fa fa-trash';
        trashIcon.setAttribute('aria-hidden', 'true');
        trashIcon.onclick = () => {
            list.removeChild(li);
        };

        span.append(checkIcon, trashIcon);
        li.appendChild(span);
        list.appendChild(li);
    });
}
   



function addNewTodo(event) {
    event.preventDefault();
    let input = document.getElementById('todoInput');
    let newTodo = {
        task: input.value,
        completed: false
    };
    todos.push(newTodo);
    populateTodoList(todos);
    input.value = ''; 
}



function deleteAllCompletedTodos() {
    todos = todos.filter(todo => !todo.completed);
    populateTodoList(todos);
}

