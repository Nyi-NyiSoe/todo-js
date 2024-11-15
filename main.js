const categoryInput = document.getElementById('category');
const taskInput = document.getElementById('task');
const tasksList = document.getElementById('tasks-list');

// Initialize an object to store tasks by category
const tasksByCategory = {};

// Add a task to the specified category
function addTask() {
    // Take value from input elements.
    const categoryValue = categoryInput.value.trim();
    const taskValue = taskInput.value.trim();

    // Check category and task
    if(categoryValue==="" || taskValue===""){
        alert("Invalid input");
        return;
    }

    // Add task to the category
    if(!tasksByCategory[categoryValue]){
        tasksByCategory[categoryValue]=[];
    }
    tasksByCategory[categoryValue].push(taskValue);

    // Clear input fields and update the displayed tasks
    categoryInput.value = "";
    taskInput.value = "";
    /* *** Display HTML Element Format ***

        <div id="tasks-list">
            <div class="category">
                <h3>House Chore</h3>
                <div class="task"><span>Wash dishes</span><button>Remove</button></div>
            </div>
            <div class="category">
                <h3>Pets</h3>
                <div class="task"><span>Shower Ruff</span><button>Remove</button></div>
            </div>
        </div>
    */

    // Refresh displayed tasks
    
    listTasks();
}

// Display all tasks by category
function listTasks() {
    // Clear previous tasks
    tasksList.innerHTML = "";

    // list all tasks by category.
    for(let category in tasksByCategory){
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category")

        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("")
    }

    // show the tasks in DOM element tasksList
}


// Remove a task from the specified category
function removeTask(category, taskIndex) {

    // remove tasks from object tasksByCategory
    
    // If the category is empty after removal, delete the category

    // Refresh displayed tasks
    listTasks(); 
}