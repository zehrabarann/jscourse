//Local Storage

//SetItem

localStorage.setItem("hareket", "burpee"); //Local storage'a ekleme yapar
localStorage.setItem("tekrar", 50);

//Get Item

//const value = locakStorage.getItem("tekrar");
//console.log(value);
//console.log(typeof value);

//Clear Local Storage

//localStorage.clear();

//console.log(localStorage.getItem("sport"));

// if (localStorage.getItem("hareket") === null) {
//     console.log("Sorguladığınız veri bulunmuyor");
// }

// else {
//     console.log("Sorguladığınız veri bulunuyor");
// }

//Local Storage - Array Yazma

//const todos = ["Todo 1", "Todo 2", "Todo 3"];

//localStorage.setItem("todos", todos);

//localStorage.setıtem("todos", JSON.stringify(todos));

//const value = JSON.parse(localStorage.getItem("todos"));
//console.log(value);


const form = document.getElementsById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
    const value = todoInput.value;

    let todos;

    if(localStorage.getItem("todos") === null) {
        todos = [];
    }

    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));



    e.preventDefault();
}