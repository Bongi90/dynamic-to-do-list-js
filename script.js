document.addEventListener('DOMContentLoaded', function() {
    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3 & 4: Create the addTask function with task creation and removal
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();
        
        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn'); // Changed to use classList.add()
        
        // Add click event to remove button
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };
        
        // Append elements
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = "";
    }

    // Step 5: Attach Event Listeners
    // Click event for add button
    addButton.addEventListener('click', addTask);
    
    // Keypress event for input field (Enter key)
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Step 6: Invoke addTask on DOMContentLoaded
    addTask();
});