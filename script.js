document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const listItem = document.createElement('li');

        // ✅ Set task text using a text node to avoid overwriting the button
        const textNode = document.createTextNode(taskText);
        listItem.appendChild(textNode);

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // ✅ Use onclick to remove the list item
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append remove button to list item
        listItem.appendChild(removeButton);

        // Append list item to task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
