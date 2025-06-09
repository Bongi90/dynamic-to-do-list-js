// Run the code only after the HTML content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        // Get the text from the input and remove extra spaces
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item for the task
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // When the remove button is clicked, delete the task
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Add the remove button to the list item
        li.appendChild(removeBtn);

        // Add the new task to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // When the "Add Task" button is clicked, add a new task
    addButton.addEventListener("click", addTask);

    // Also allow adding a task when pressing "Enter" in the input field
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
