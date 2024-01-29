const todoForm = document.getElementById("newTaskTodo");
const todoList = document.getElementById("todoList");

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTask = document.createElement("li");
  newTask.innerText = savedTodos[i].task;
  newTask.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTask.isCompleted) {
    newTask.style.textDecoration = "line-through";
  }
  todoList.append(newTask);
  let removeButton = document.createElement("button");
  removeButton.innerText = "X";
  newTask.append(removeButton);
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let newTask = document.createElement("li");
  let taskValue = document.getElementById("task").value;
  newTask.innerText = taskValue;
  newTask.isCompleted = false;
  todoForm.reset();
  let removeButton = document.createElement("button");
  removeButton.innerText = "X";
  todoList.append(newTask);
  newTask.append(removeButton);

  savedTodos.push({ task: newTask.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});

todoList.addEventListener("click", function(event) {
  let targetTask = event.target;

  if (!targetTask.isCompleted) {
    targetTask.style.textDecoration = "line-through";
    targetTask.isCompleted = true;
  } else {
    targetTask.style.textDecoration = "none";
    targetTask.isCompleted = false;
  }

  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === targetTask.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
});
todoList.addEventListener("click", function(event) {
    let targetTask = event.target;
         if (targetTask === "button") {
        event.target.parentNode.remove();
}
});
