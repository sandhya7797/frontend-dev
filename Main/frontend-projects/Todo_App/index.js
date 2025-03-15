const ulRef = document.getElementById('todoList');
const h1Ref = document.querySelector('h1');
const divRef = document.createElement('div');
let completedTodoCount = 0;

// Bug : variable count is not efficient here it goes to negative values.

/*  1. Fetch todos list from api
    2. Render Todo data
    3. Render Summary
    4. Update summary when todo list checkbox is checked or unchecked dynamically
    5. Remove li from ul when delete button is clicked
    6. Add new todo */

function fetchTodos() {
    fetch('https://dummyjson.com/todos')
    .then(res => {
        return res.json();
    })
    .then(data => {
        createNewTodo();
        renderTodoData(data.todos);
        renderSummary(completedTodoCount);
        return ulRef;
    })
    .then(ulRef => {
        updateSummary(ulRef);
    })
}

fetchTodos();

function renderTodoData(todos) {
    for(let todo of todos) {
        createAndAppendListElement(todo);
    }
}

function createAndAppendListElement(todo) {
    const li = document.createElement('li');
    li.innerText = todo.todo;

    const checkboxRef = document.createElement('input');
    checkboxRef.type = 'checkbox';
    const completedRef = todo.completed;
    if(completedRef) {
        completedTodoCount++;
        li.style.textDecoration = 'line-through';
        li.style.color = 'grey';
    }
    checkboxRef.checked = completedRef;
    li.prepend(checkboxRef);

    const deleteButtonRef = document.createElement('button');
    deleteButtonRef.type = 'submit';
    deleteButtonRef.innerText = 'Delete';
    deleteButtonRef.style.marginLeft = '5px';
    deleteButtonRef.style.fontSize = '12px';
    li.appendChild(deleteButtonRef);

    ulRef.appendChild(li);
}

function renderSummary(count) {
    divRef.innerText = `Completed  : ${count}`;
    divRef.style.fontSize = '20px';
    divRef.style.fontWeight = 'bold';
    ulRef.insertAdjacentElement('afterend', divRef);
}

function updateSummary(ulRef) {
    const listItems = ulRef.querySelectorAll('li');
    for(let li of listItems) {
        //event added on checkbox
        const checkboxRef = li.querySelector('input[type="checkbox"]');
        checkboxRef.addEventListener('change', function(e) {
            if(e.target.checked) {
                completedTodoCount++;
                divRef.innerText = `Completed  : ${completedTodoCount}`;
                li.style.textDecoration = 'line-through';
                li.style.color = 'grey';
            } else {
                completedTodoCount--;
                divRef.innerText = `Completed  : ${completedTodoCount}`;
                li.style.textDecoration = 'none';
                li.style.color = 'black';
            }
        });

        //event added on delete button
        const deleteButtonRef = li.querySelector('button');
        deleteButtonRef.addEventListener('click', function(e) {
            ulRef.removeChild(li);
            completedTodoCount--;
            divRef.innerText = `Completed  : ${completedTodoCount}`;
        });

    }
}

function createNewTodo() {
    const newTodoRef = document.createElement('input');
    newTodoRef.type = 'text';
    newTodoRef.placeholder = 'Add new todo';
    newTodoRef.style.width = '200px';
    h1Ref.insertAdjacentElement('afterend', newTodoRef);

    newTodoRef.addEventListener('keyup', function(e) {
        if(e.key === 'Enter' && newTodoRef.value !== '') {
            createAndAppendListElement({todo : newTodoRef.value, completed : false});
            updateSummary(ulRef);
        }   
    });
}


