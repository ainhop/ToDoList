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

function addNewTask(item, priority) {
  let list = document.getElementById("todo");
  // const newItemContent = createTodo(item, priority);
  let newItem = document.createElement("li");
  newItem.classList.add(priority);
  // newItem.innerHTML = newItemContent;
  newItem.innerText = item;

  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  // Botón eliminar
  let remove = document.createElement("button");
  remove.innerText = "-";
  remove.classList.add("remove");
  remove.addEventListener("click", removeItem);

  buttons.appendChild(remove);
  newItem.appendChild(button);

  list.insertBefore(newItem, list.childNodes[0]);
}

function createTodo(item) {
  return `
    ${item}
    <div class="buttons><button class="remove>-</button>
    </div>`;
}

// eventListener para las tareas precargadas

let deleteIt = document.getElementsByClassName("remove");
for (let i = 0; i < deleteIt.length; i++) {
  deleteIt[i].addEventListener("click", removeItem);
}
