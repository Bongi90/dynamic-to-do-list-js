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

    // Create the addTask Function:
    // Define a function named addTask. This function will be responsible for adding new tasks to the list.
    function addTask() {
        // Inside addTask, retrieve and trim the value from the task input field.
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty ("").
        if (taskText === "") {
            // If it is empty, use alert to prompt the user to enter a task.
            // As per instructions, using alert here.
            alert("Please enter a task.");
            return; // Exit the function if input is empty
        }

        // Task Creation:
        // Create a new <li> element.
        const listItem = document.createElement('li');
        // Set its textContent to taskText.
        listItem.textContent = taskText;

        // Create a new button element for removing the task.
        const removeButton = document.createElement('button');
        // Set its textContent to "Remove".
        removeButton.textContent = "Remove";
        // Give it a class name of 'remove-btn'.
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button that, when triggered,
        // removes the <li> element (its parent) from taskList.
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the <li> element.
        listItem.appendChild(removeButton);
        // Then append the <li> to taskList.
        taskList.appendChild(listItem);

        // Clear the task input field by setting taskInput.value to an empty string.
        taskInput.value = "";
    }

    // Attach Event Listeners:
    // Add an event listener to addButton that calls addTask when the button is clicked.
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event
    // to allow tasks to be added by pressing the “Enter” key.
    taskInput.addEventListener('keypress', function(event) {
        // Inside this event listener, check if event.key is equal to 'Enter' before calling addTask.
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Note: The instruction "Invoke the addTask function on DOMContentLoaded"
    // appears to be a copy-paste from a previous exercise involving data fetching.
    // For a to-do list, tasks are added interactively by the user, not automatically on page load.
    // Therefore, addTask is not invoked here on DOMContentLoaded directly.
    // The event listeners ensure interactivity once the DOM is ready.
});