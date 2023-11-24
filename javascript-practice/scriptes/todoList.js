let todoArray = [
];
renderPage()

function addTodo(event){
    event.preventDefault()
    let nameInput = document.querySelector('.name-input');
    const dateInput = document.querySelector('.date-input');
    name = nameInput.value;
    todoDate = dateInput.value;

    todoArray.push({
        name,
        todoDate
    })

    nameInput.value = "";

    renderPage()
}
function renderPage (){
    // console.log(todoArray)
     let todoHTML = '';
 
     for (let i=0; i<todoArray.length; i++){
         const todoObj = todoArray[i];
         const {name, todoDate} = todoObj;
         console.log(todoObj)
         const html = `<div>${name}</div>
        <div>${todoDate}</div> 
        <button class= "todo-delete-btn" onclick = "deleteTodo()">Delete</button>`;
         todoHTML = todoHTML + html;
     }
 
     document.querySelector('.js-todo-list').innerHTML = todoHTML;
 };


 function deleteTodo(){
    for (let i = 0; i<todoArray.length; i++){
        todoArray.splice({i}, 1)
    }

    renderPage()
 }