let todoArray = [];
renderPage();

document.querySelector(".todo-btn").addEventListener("click", () => {
  addTodo(event);
});

function addTodo(event) {
  event.preventDefault();
  let nameInput = document.querySelector(".name-input");
  const dateInput = document.querySelector(".date-input");
  name = nameInput.value;
  todoDate = dateInput.value;

  todoArray.push({
    name,
    todoDate,
  });

  nameInput.value = "";

  renderPage();
}
function renderPage() {
  // console.log(todoArray)
  let todoHTML = "";

  todoArray.forEach((value, index) => {
    const { name, todoDate } = value;
    const html = `<div>${name}</div>
        <div>${todoDate}</div> 
        <button class= "todo-delete-btn">Delete</button>`;
    todoHTML = todoHTML + html;
  });
  document.querySelector(".js-todo-list").innerHTML = todoHTML;
  
  document.querySelectorAll(".todo-delete-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      console.log("clicked");
      todoArray.splice(index, 1);
      renderPage();
    });
  });
}
