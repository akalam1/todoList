//grabbing all the Selector/head div
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");

const filterOption = document.querySelector(".filter-todo");

//event listener 
todoBtn.addEventListener('click', addTodo );
todoList.addEventListener('click', deleteTodo);
filterOption.addEventListener('click', filtertodo )

//event listener for localstorage

document.addEventListener("DOMContentLoaded", getDataLocalStorage)



   

function addTodo(event){

    //lets stop the auto refresh whne clikc on submit button as it
    //naturally happens whne subitting a form 
    event.preventDefault();

    // now lets add given input to a todoList 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo");
    todoItem.innerText = todoInput.value;

    
    console.log("Todo Input: " + todoInput.value)

    //local storage
    savetodolocalStorage(todoInput.value);
    todoInput.value = " ";
    todoDiv.appendChild(todoItem);

//CompletedButton

const completeBtn = document.createElement("button")
completeBtn.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
completeBtn.classList.add("completeBtn");
todoDiv.appendChild(completeBtn);

//DeleteButton

const deleteBtn = document.createElement("button");
deleteBtn.classList.add("deleteBtn");
deleteBtn.innerHTML =  `<i class="fas fa-trash"></i>`;
todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv);

}