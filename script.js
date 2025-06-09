// Run the script once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get user input

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new li element
        const listItem = document.createElement('li');

        // Create text node for the task and append to li
        const textNode = document.createTextNode(taskText);
        listItem.appendChild(textNode);

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Set onclick to remove the list item
        removeBtn.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append remove button to the list item
        listItem.appendChild(removeBtn);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = "";
    }

    // Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
