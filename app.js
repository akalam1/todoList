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




//delete todolist

function deleteTodo(event){

    const itemLocation = event.target;
    // console.log(itemLocation)

    // console.log("Deleted ")
    // console.log(event.target)

    if (itemLocation.classList [0] === "deleteBtn"){
        //lets delete the main div, that way it wont just 
        //delete the button rather whole text
        const toDo= itemLocation.parentElement;

        // console.log(toDo)

        //adding animation to the deletebutton
        //lets add a class to the tab so we can add anumation
        toDo.classList.add("fall");

        deletefromLocal(toDo);

        //remove the div after animation 
        toDo.addEventListener("transitionend",function(){
        toDo.remove();

        })
    }

    //complete button

    if (itemLocation.classList[0] === "completeBtn"){
        const toDo = itemLocation.parentElement;
        toDo.classList.toggle("completed")
        console.log(toDo)
    }

}







//filtering

function filtertodo(e){
    // console.log(e.target)

    const todos = todoList.childNodes;
// console.log(filters)

//looping over to do list
todos.forEach(function(todo){

    // here were value we clicked in either "all, completed or incomeoleted "
    // console.log(e.target.value)
    switch(e.target.value){
        case "all":
            todo.style.display = "flex";
            break;

            case "completed":
                if (todo.classList.contains('completed')){

                        todo.style.display = 'flex';
                }else{


                    todo.style.display = 'none';

                }
                break;

            case "incomplete":
                if (!todo.classList.contains('completed')){

                    todo.style.display = 'flex';
            }else{


                todo.style.display = 'none';

            }
            break;
            
         }
    });
 }




 



//LOCAL STORAGE 

function savetodolocalStorage(todo){
    let todos;
        //fisrt chgeck if the local already has date existed 
        //so basical its checking if the data is emty, if it is 
        // it will save a emty array
        if (localStorage.getItem('todos') === null){
            localStorage.setItem('todos', '[]');
    
        }else {
            
        //and now lets get that empty array and push the actual data 
    
        todos = JSON.parse(localStorage.getItem('todos'));
    
        }
    
    
        //now push the new data 
        todos.push(todo);
    
        // now save the data old+new to local storage 
        localStorage.setItem('todos', JSON.stringify(todos));
    
    
    }
    // localStorage.clear();
    
    
    
    
    
    //getting the data from local storage 
    
    function getDataLocalStorage(){
    let todos;
        if (localStorage.getItem('todos') === null){
            localStorage.setItem('todos', '[]');
    
        }else {
            
        //and now lets get that empty array and push the actual data 
    
        todos = JSON.parse(localStorage.getItem('todos'));
    
        }
    
        //now lets set  all the divs todo content from the storage and display ity on the UI
    
        todos.forEach(function(todo){
    
            
        // now lets add given input to a todoList 
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todoDiv");
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo");
        todoItem.innerText = todo;
    
        // console.log("Todo Input: " + todoInput.value)
    
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
    
    
        })
    
    }
    
    
    
    
    
    
    //delete the data from local storage 
    
    
    function deletefromLocal(todo){
        let todos;
        if (localStorage.getItem('todos') === null){
            localStorage.setItem('todos', '[]');
    
        }else {
            
        //and now lets get that empty array and push the actual data 
    
        todos = JSON.parse(localStorage.getItem('todos'));
    
        }
    
        // console.log(todo.children[0].innerText)
    
    // lets get the inner text of the todo, onced clicked on "delete"
    // so we can delete that from the local storage 
    
    const indexoftodo = todo.children[0].innerText;
    
    // console.log(todos);
    //gettig the index of that string and then deleteing
    todos.splice(todos.indexOf(indexoftodo),1);
    
    //after splicing it 
    // console.log("After splicing it ");
    
    // updating the string uber deletion
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(todos);
    
    }
    
    
    
   
