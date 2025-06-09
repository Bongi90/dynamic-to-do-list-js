document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add Task Function
    function addTask() {
        // Step 1: Get task text from input field and trim it
        const taskText = taskInput.value.trim();

        // Step 2: Check if it's empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Step 3: Create <li> and set its textContent to taskText
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Step 4: Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Step 5: Assign onclick event to remove task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Step 6: Append button to li, then li to ul
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Step 7: Clear the input field
        taskInput.value = "";
    }

    // Add button event listener
    addButton.addEventListener('click', function () {
        addTask(); // No arguments
    });

    // Enter key event listener on input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // No arguments
        }
    });
});

