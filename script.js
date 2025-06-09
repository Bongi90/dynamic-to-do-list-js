// File: script.js

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add Task Function
    function addTask(save = true) {
        // Get task text directly from input field
        const taskText = taskInput.value.trim();

        // Check for empty input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create Remove Button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // On click, remove task from DOM and Local Storage
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
            removeTaskFromLocalStorage(taskText);
        };

        // Append button to <li>, and <li> to list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = "";

        // Save to Local Storage
        if (save) {
            saveTaskToLocalStorage(taskText);
        }
    }

    // Save to Local Storage
    function saveTaskToLocalStorage(task) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Remove from Local Storage
    function removeTaskFromLocalStorage(taskToRemove) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskToRemove);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Load existing tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            // Set taskInput value so addTask can pick it up internally
            taskInput.value = taskText;
            addTask(false); // false = don’t save again
        });
        taskInput.value = ""; // Clear input after loading
    }

    // Add Task on button click
    addButton.addEventListener('click', function() {
        addTask();
    });

    // Add Task on Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks on page load
    loadTasks();
});
