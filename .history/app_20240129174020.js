document.addEventListener("DOMContentLoaded", function() {
    let todoForm = document.getElementById("newTaskTodo");
    let todoList = document.getElementById("todoList");

    todoForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let removeButton = document.createElement("button");
        removeButton.innerText = "X";

        let newTask = document.createElement("li");
        newTask.innerText = document.getElementById("task").value;

        todoList.append(newTask);
        newTask.append(removeButton);
        todoForm.reset();

    });

    todoList.addEventListener("click", function(event) {
        const targetTask = event.target.tagName.toLowerCase();
        if (targetTask === "li") {
            event.target.style.textDecoration = "line-through";
        }
        else if (targetTask === "button") {
            event.target.parentNode.remove();
        }
    });
});