const taskSectionRef = document.querySelector('.task-section');
const addActionRef = document.querySelector('.actions .add.box');
const taskModelRef = document.querySelector('.task-model');
const inputTextAreaRef = document.querySelector('.task-model .left-section textarea');

/* Task Creation */
function createTask(title) {
    const task_content = `
        <div class="task-priority"></div>
            <div class="task-id">taskId:123456</div>
                <div class="task-title">
                    <span>${title}</span>
                    <div class="task-remove">x</div>
                </div>
                `;
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = task_content;
    taskSectionRef.append(newTask);
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

/* Functionality that creates new task when 'Enter' is pressed on the Task Model */
inputTextAreaRef.addEventListener('keyup', function(e) {
    if(e.key==='Enter') {
        const value = e.target.value;
        console.log(value);
        createTask(value);
        inputTextAreaRef.value = '';
        toggleAddModel(false);
    }
});