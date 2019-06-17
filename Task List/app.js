// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clearme');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners

loadEventListeners();

function loadEventListeners() {
    // Add Task Event
    form.addEventListener('submit', addTask);

    // Remove Task
    form.addEventListener('click', removeTask);

    // Clear Task Event
    clearBtn.addEventListener('click', clearTasks);

    // Filter Task Event
    filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {

    if (taskInput.value === "") {
        alert("Add a task");
    }

    // Create LI element
    const li = document.createElement('li');

    // Add Class
    li.className = 'collection-item';

    // Create and append text node
    li.appendChild(document.createTextNode(taskInput.value));

    // Add X link
    const link = document.createElement('a');

    // Add class to link
    link.className = 'delete-item secondary-content';

    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></li>';

    // Append to LI
    li.append(link);

    // Append to UL
    taskList.appendChild(li);

    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log(e.target);
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    // Remove Task

}

// Clear Tasks
function clearTasks(e){
    taskList.innerHTML = '';
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            }else{
                task.style.display = 'none';
            }
        }
    );
}