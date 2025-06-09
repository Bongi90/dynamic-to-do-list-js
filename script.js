// File: script.js

// Setup Event Listener for Page Load:
// Use document.addEventListener to listen for the 'DOMContentLoaded' event.
// This ensures your JavaScript code runs after the HTML document has fully loaded.
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements:
    // Select the "Add Task" button.
    const addButton = document.getElementById('add-task-btn');
    // Select the input field where users enter tasks.
    const taskInput = document.getElementById('task-input');
    // Select the unordered list that will display the tasks.
    const taskList = document.getElementById('task-list');

    /**
     * Adds a task to the DOM and optionally saves it to Local Storage.
     * @param {string} taskText - The text content of the task.
     * @param {boolean} [save=true] - Whether to save the task to Local Storage. Defaults to true.
     */
    function addTask(taskText, save = true) {
        // Trim the task text to ensure no leading/trailing whitespace.
        const trimmedTaskText = taskText.trim();

        // Check if taskText is empty ("").
        if (trimmedTaskText === "") {
            console.log("Error: Task text cannot be empty.");
            return; // Exit the function if input is empty
        }

        // Task Creation:
        // Create a new <li> element.
        const listItem = document.createElement('li');
        // Set its textContent to taskText.
        listItem.textContent = trimmedTaskText;

        // Create a new button element for removing the task.
        const removeButton = document.createElement('button');
        // Set its textContent to "Remove".
        removeButton.textContent = "Remove";
        // Give it a class name of 'remove-btn'.
        removeButton.className = 'remove-btn';

        // Assign an event listener to the remove button that, when triggered,
        // removes the <li> element (its parent) from taskList and updates Local Storage.
        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem); // Remove from DOM
            removeTaskFromLocalStorage(trimmedTaskText); // Remove from Local Storage
        });

        // Append the remove button to the <li> element.
        listItem.appendChild(removeButton);
        // Then append the <li> to taskList.
        taskList.appendChild(listItem);

        // Clear the task input field only if it's a user-initiated add (not from loadTasks)
        if (save) {
            taskInput.value = "";
            saveTaskToLocalStorage(trimmedTaskText); // Save new task to Local Storage
        }
    }

    /**
     * Saves a new task to Local Storage.
     * @param {string} task - The task text to save.
     */
    function saveTaskToLocalStorage(task) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    /**
     * Removes a task from Local Storage.
     * @param {string} taskToRemove - The task text to remove.
     */
    function removeTaskFromLocalStorage(taskToRemove) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        // Filter out the task that matches the one to remove.
        // Using filter creates a new array without the specified task.
        storedTasks = storedTasks.filter(task => task !== taskToRemove);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    /**
     * Loads tasks from Local Storage when the page loads and populates the DOM.
     */
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Attach Event Listeners:
    // Add an event listener to addButton that calls addTask with the input value when clicked.
    addButton.addEventListener('click', function() {
        addTask(taskInput.value); // Call addTask with the current input value
    });

    // Add an event listener to taskInput for the 'keypress' event
    // to allow tasks to be added by pressing the “Enter” key.
    taskInput.addEventListener('keypress', function(event) {
        // Inside this event listener, check if event.key is equal to 'Enter' before calling addTask.
        if (event.key === 'Enter') {
            addTask(taskInput.value); // Call addTask with the current input value
        }
    });

    // Invoke the loadTasks function when the DOM is fully loaded to display saved tasks.
    loadTasks();
});
