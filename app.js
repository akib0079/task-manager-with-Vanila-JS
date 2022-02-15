//selectors.
const taskInput = document.getElementById('taskInput');
const addBtn = document.querySelector('.addBtn');
const taskListContainer = document.querySelector('.listContainer');

//add event listener.
addBtn.addEventListener('click', addTask);
taskListContainer.addEventListener('click', delTask);
taskListContainer.addEventListener('click', CompleteTask);
taskInput.addEventListener('keyup', enterKey);

//functions.
function addTask(){
    // checking empty value of input.
    if(taskInput.value == '' || taskInput.value == ' '){
        alert('Please enter some text!')
    }
    else{
        // adding taskDiv
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskList');
        // adding li.
        const taskList = document.createElement('li');
        taskList.classList.add('task')
        taskList.innerText = taskInput.value;
        taskDiv.appendChild(taskList);
        // adding complete button.
        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = `<i class='bx bx-check-circle'></i>`;
        completeBtn.classList.add('completeBtn');
        taskDiv.appendChild(completeBtn);
        // adding delete btn.
        const delBtn = document.createElement('button');
        delBtn.innerHTML = `<i class='bx bx-minus-circle'></i>`;
        delBtn.classList.add('delBtn')
        taskDiv.appendChild(delBtn);
        // adding taskDiv to container.
        taskListContainer.appendChild(taskDiv);

        // clearing input.
        taskInput.value = '';
    }
    

}

// Deleting task.
function delTask(event){
    const item = event.target;
    if (item.classList[0] === 'delBtn'){
        itemParents = item.parentNode;
        itemParents.remove();
    }
}

// Complete button task.
function CompleteTask(event){
    const item = event.target;
    if (item.classList[0] === 'completeBtn'){
        itemParents = item.parentNode;
        itemParents.style.opacity = '0.7';
    }
}

