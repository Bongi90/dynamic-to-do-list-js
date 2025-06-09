// Ensure all JavaScript runs after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements and store them in constants.
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const messageBox = document.getElementById('message-box');
    const messageText = document.getElementById('message-text');
    const messageCloseBtn = document.getElementById('message-close-btn');

    /**
     * Displays a custom message box with the given text.
     * @param {string} message - The message to display.
     */
    function showMessage(message) {
        messageText.textContent = message;
        messageBox.style.display = 'block'; // Show the message box
    }

    /**
     * Hides the custom message box.
     */
    function hideMessage() {
        messageBox.style.display = 'none'; // Hide the message box
    }

    // Attach event listener to the message box close button
    messageCloseBtn.addEventListener('click', hideMessage);

    /**
     * Defines the addTask function, responsible for adding new tasks to the list.
     * This function is triggered by either a button click or pressing 'Enter' in the input field.
     */
    function addTask() {
        // Retrieve and trim the value from the task input field.
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty.
        if (taskText === "") {
            // If empty, prompt the user to enter a task using the custom message box.
            showMessage("Please enter a task.");
            return; // Exit the function if the input is empty.
        }

        // Create a new list item (li) element for the task.
        const listItem = document.createElement('li');
        // Set the text content of the list item to the task text.
        listItem.textContent = taskText;

        // Create a new button element for removing the task.
        const removeButton = document.createElement('button');
        // Set the text content of the remove button.
        removeButton.textContent = "Remove";
        // Assign a class name for styling the remove button.
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button.
        // When triggered, this event listener will remove the parent li element (the task) from the taskList.
        removeButton.onclick = function() {
            listItem.remove(); // Removes the list item from the DOM.
        };

        // Append the remove button to the list item.
        listItem.appendChild(removeButton);
        // Append the newly created list item (with its remove button) to the unordered task list.
        taskList.appendChild(listItem);

        // Clear the task input field after adding the task.
        taskInput.value = "";
    }

    // Attach an event listener to the "Add Task" button.
    // When the button is clicked, the addTask function will be called.
    addButton.addEventListener('click', addTask);

    // Attach an event listener to the task input field for the 'keypress' event.
    // This allows tasks to be added by pressing the "Enter" key.
    taskInput.addEventListener('keypress', function(event) {
        // Check if the pressed key is 'Enter'.
        if (event.key === 'Enter') {
            // If it's the Enter key, call the addTask function.
            addTask();
        }
    });
});

// Invoke the addTask function on DOMContentLoaded, as requested.
// This new listener will call addTask() immediately when the page loads.
// Note: As the input field is initially empty, this will cause the "Please enter a task"
// message box to appear automatically on page load.
document.addEventListener('DOMContentLoaded', function() {
    addTask();
});