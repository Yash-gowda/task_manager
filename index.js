var addButton = document.getElementById("addTask");

addButton.addEventListener("click", function() {
    addTask();
});
function addTask() {
    var taskName = document.getElementById("taskName").value.trim();
    var name = document.getElementById("name").value.trim();
    var description = document.getElementById("description").value.trim();
    var deadLine = document.getElementById("deadLine").value;
    var taskDuration = document.getElementById("taskDuration").value.trim();
    var durationUnit = document.getElementById("durationUnit").value;
    if (taskName === "" ||name === "" || description === ""|| taskDuration === ""|| deadLine === "") {
        alert("Task details cannot be empty!");
        return;
    }

    if (isNaN(parseFloat(taskDuration))) {
        alert("Task duration must be a numerical value!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `<b>${name}</b> - <strong>${taskName}</strong> -${description} for ${taskDuration} ${durationUnit} finish before  ${deadLine}  <button class="delete-button" onclick="deleteTask(this)"> Done </button> <button class="edit-button" onclick="editTask(this)"> edit </button>`;
    taskList.appendChild(taskItem);

    // Clear the input fields
    document.getElementById("taskName").value = "";
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("deadLine").value = "";
    document.getElementById("taskDuration").value = "";
}

function deleteTask(buttonElement) {
    var taskList = document.getElementById("taskList");
    var taskItem = buttonElement.parentElement;
    taskList.removeChild(taskItem);
}