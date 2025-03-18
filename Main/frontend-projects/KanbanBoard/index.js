const taskSectionRef = document.querySelector('.task-section');
const addActionRef = document.querySelector('.actions .add.box');
const taskModelRef = document.querySelector('.task-model');
const inputTextAreaRef = document.querySelector('.task-model .left-section textarea');
const prioritySelectionRefs = document.querySelectorAll('.task-model .right-section .box');
const editButtonRef = document.querySelector('.actions .edit.box');
const filterBoxesRef = document.querySelectorAll('.filter .box');

/* Task Creation */
function createTask(id,selectedPriority,title) {
    const task_content = `
        <div class="task-priority" data-priority="${selectedPriority}"></div>
            <div class="task-id">'taskId:${id}'</div>
                <div class="task-title">
                    <span>${title}</span>
                    <div class="task-remove"><i class="fa-solid fa-trash"></i></div>
                </div>
                `;
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = task_content;

    taskSectionRef.append(newTask);

    newTask.querySelector('.task-priority').addEventListener('click', function(e) {
        const existingPriority = e.target.dataset.priority;
        const newPriority = changeTaskPriority(existingPriority);
        e.target.dataset.priority = newPriority;
    });

    newTask.querySelector('.task-title span').addEventListener('click', function(e) {
        if (!taskSectionRef.classList.contains('non-editable')) {
            e.target.setAttribute('contenteditable', true); 
        } else {
            e.target.setAttribute('contenteditable', false);
        }
    });

    newTask.querySelector('.task-remove').addEventListener('click', function(e) {
        e.target.closest('.task').remove();
    });
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

/* Functionality to creates new task when 'Enter' is pressed on the Task Model */
inputTextAreaRef.addEventListener('keyup', function(e) {
    if(e.key==='Enter') {
        const value = e.target.value;
        const selectedPriorityRef = document.querySelector('.task-model .right-section .box.selected');
        const selectedPriority = selectedPriorityRef.dataset.priority;
        const id = Math.floor(Math.random() * 1000000);
        createTask(id,selectedPriority,value);
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
    const tpRefs = document.querySelectorAll('.task .task-priority');
    tpRefs.forEach(function(tpRef) {
        console.log(tpRef.dataset.priority);
        if(tpRef.dataset.priority !== selectedPriority) {
            tpRef.closest('.task').style.display = 'none';
        } else {    
            tpRef.closest('.task').style.display = 'flex';
        }
    });
}


