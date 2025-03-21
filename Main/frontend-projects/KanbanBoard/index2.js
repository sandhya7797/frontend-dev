//Approach-2 using JSON

const taskSectionRef = document.querySelector('.task-section');
const addActionRef = document.querySelector('.actions .add.box');
const taskModelRef = document.querySelector('.task-model');
const inputTextAreaRef = document.querySelector('.task-model .left-section textarea');
const prioritySelectionRefs = document.querySelectorAll('.task-model .right-section .box');
const editButtonRef = document.querySelector('.actions .edit.box');
const filterBoxesRef = document.querySelectorAll('.filter .box');
const inputRef = document.querySelector('.search input');

/* Task Creation */
function createTask(id,selectedPriority,title) {
    const task_content = `
        <div class="task-priority" data-priority="${selectedPriority}"></div>
            <div class="task-id">${id}</div>
                <div class="task-title">
                    <span>${title}</span>
                    <div class="task-remove"><i class="fa-solid fa-trash"></i></div>
                </div>
                `;
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = task_content;

    taskSectionRef.append(newTask);

    //change task priority
    newTask.querySelector('.task-priority').addEventListener('click', function(e) {
        const existingPriority = e.target.dataset.priority;
        const newPriority = changeTaskPriority(existingPriority);
        e.target.dataset.priority = newPriority;
        //update task
        const taskRef = e.target.closest('.task');
        updateTask(taskRef,'priority',newPriority);
    });


    //edit task
    newTask.querySelector('.task-title span').addEventListener('click', function(e) {
        if (!taskSectionRef.classList.contains('non-editable')) {
            e.target.setAttribute('contenteditable', true); 
            e.target.addEventListener('input', function(e) {
                const taskRef = e.target.closest('.task');
                updateTask(taskRef,'title',e.target.innerText);
            });
        }
    });

    //remove task
    newTask.querySelector('.task-remove').addEventListener('click', function(e) {
        const taskRef = e.target.closest('.task');
        taskRef.remove();
        updateTask(taskRef);
    });
}

const tasks = [
    { id: 1, priority: 'p1', title: 'Task 1' },
    { id: 2, priority: 'p2', title: 'Task 2' },
    { id: 3, priority: 'p3', title: 'Task 3' },
];

function renderData(finalTasks) {
    taskSectionRef.innerHTML = ''; // Clear existing tasks
    finalTasks.forEach(function(task) {
        createTask(task.id, task.priority, task.title);
    });
}

renderData(tasks);

function updateTask(taskRef,key,value) {
    const taskId = taskRef.querySelector('.task-id').innerText;
    const selectedTask = tasks.find(task => task.id == taskId);
    if(key) {
        selectedTask[key] = value;
    } else {
        const taskIdx = tasks.findIndex(task => task.id == taskId);
        tasks.splice(taskIdx, 1);
        console.log(tasks);
    }
}

/* Functionality to toggle Task Model 'Visible' & 'Hide' */
addActionRef.addEventListener('click', function() {
    const isHidden = taskModelRef.classList.contains('hide');
    toggleAddModel(isHidden);
});

function toggleAddModel(isHidden) {
    if(isHidden) {
        taskModelRef.classList.remove('hide');
    } else {
        taskModelRef.classList.add('hide');
    }
}

function addToTask(id,priority,title) {
    tasks.push({ id, priority, title });
    renderData(tasks);
}

/* Functionality to creates new task when 'Enter' is pressed on the Task Model */
inputTextAreaRef.addEventListener('keyup', function(e) {
    if(e.key==='Enter') {
        const value = e.target.value;
        const selectedPriorityRef = document.querySelector('.task-model .right-section .box.selected');
        const selectedPriority = selectedPriorityRef.dataset.priority;
        const id = Math.floor(Math.random() * 1000000);
        addToTask(id,selectedPriority,value);
        console.log(tasks);
        inputTextAreaRef.value = '';
        toggleAddModel(false);
    }
});

/* Functionality to add priority color selection during task creation */
prioritySelectionRefs.forEach(function(prioritySelectionRef) {
    prioritySelectionRef.addEventListener('click', function(e) {
        removeSelectedState(prioritySelectionRefs);
        prioritySelectionRef.classList.add('selected');
    });
});

function removeSelectedState(boxesRef) {
    boxesRef.forEach(function(boxRef) {
        boxRef.classList.remove('selected');
    });
}

/* Functionality to modify task priority */
function changeTaskPriority(priority) {
    const priorities = ['p1', 'p2', 'p3', 'p4'];
    const currentIndex = priorities.indexOf(priority);
    return priorities[(currentIndex + 1) % priorities.length];
}

/* Functionality to enable or disable 'X' edit button that modifies title, enable delete and change priority */
editButtonRef.addEventListener('click', function(e) {
    const taskSectionRef_new = document.querySelector('.task-section');
    if(e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
        taskSectionRef_new.classList.add('non-editable');
    } else {
        e.target.classList.add('selected');
        taskSectionRef_new.classList.remove('non-editable');
    }
});


/* Functionality to filter tasks based on priority */
filterBoxesRef.forEach(function(filterBoxRef) {
    filterBoxRef.addEventListener('click',function(e) {
        removeSelectedState(filterBoxesRef);
        e.target.classList.add('selected');
        const sp = e.target.dataset.color;
        console.log(sp);
        showFilteredTasks(sp);
    });
});

function showFilteredTasks(selectedPriority) {
    const selectedTasks = tasks.filter( (task) => task.priority === selectedPriority);
    renderData(selectedTasks);
}

function showSearchedTasks(searchInput) {
    const selectedTasks = tasks.filter( (task) => 
    task.title.includes(searchInput) || task.id.toString().includes(searchInput));
    renderData(selectedTasks);
}


/* Functionality to search tasks based on title or id */
inputRef.addEventListener('keyup', function(e) {
    const searchInput = e.target.value;
    showSearchedTasks(searchInput);
});


