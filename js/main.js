// Añadir el listado original
document.getElementById("new").addEventListener("click", function () {
  let task = document.getElementById("text").value;
  let priority = document.getElementById("priority").value;
  // console.log(priority);
  if (task && priority) {
    addNewTask(task, priority);
    document.getElementById("text").value = "";
  }
});

// console.log(todos);
todos.forEach(function (todo) {
  addNewTask(todo.text, todo.priority);
}),
  function removeItem() {
    let item = this.parentNode.parentNode; // los lis
    let parent = item.parentNode; // el ul

    parent.removeChild(item);
  };

// Añadir una tarea nueva

// Botón eliminar

// eventListener para las tareas precargadas
