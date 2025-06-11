document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when page loads
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            createTaskElement(taskText, false); // false means don't save to Local Storage again
        });
    }

    // Function to create a task element (separated for reusability)
    function createTaskElement(taskText, saveToStorage = true) {
        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');
        
        // Add click event to remove button
        removeBtn.onclick = function() {
            taskList.removeChild(li);
            updateLocalStorage(); // Update storage after removal
        };
        
        // Append elements
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Save to Local Storage if needed
        if (saveToStorage) {
            updateLocalStorage();
        }
    }

    // Function to update Local Storage with current tasks
    function updateLocalStorage() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(taskElement => {
            // Get only the text content (excluding the remove button text)
            tasks.push(taskElement.childNodes[0].textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Main addTask function
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        createTaskElement(taskText);
        taskInput.value = "";
    }

    // Event Listeners
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});