// Wait until the DOM is fully loaded before running any script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li) for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Add event to remove the task when the remove button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item and list item to the task list
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to button to add task when clicked
    addButton.addEventListener('click', addTask);

    // Add event listener to input field to add task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
