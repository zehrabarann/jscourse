//Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { //Tüm event listenerlar
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);

}

function clearAllTodos(e) {
    if(confirm("Tümünü silmek istediğinize emin misiniz ?")) {
        //Arayüzden todoları temizleme
        //todoList.innerHTML = ""; //Yavaş 

        while(todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }

        localStorage.removeItem("todos");



    }
    


}

function filterTodos(e){
    //console.log(e.target.value);
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1) { //İndexOf ile içerisinde arama yapar
            //Bulunamadı

            listItem.setAttribute("style", "display : none !important");
        }

        else {
            listItem.setAttribute("style", "display : block");
        }
    })
}
function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){
        //Todo silebilmek için o li'yi silmek lazım. Bu yüzden parentlarına çıkılacak.

        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo başarıyla silindi");
    }
}

function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo, index){
        if (todo === deletetodo) {
            todos.splice(index,1); //splice ile o indeksten itibaren 1 tane obje siler(Arrayden değer siler)


        }

    });

    localStorage.setItem("todos", JSON.stringify(todos));
}
function loadAllTodosToUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function(todo) {
        addTodoToUI(todo);
    })
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();  //Trim string'in başındaki ve sonundaki boşlukları siler

    if (newTodo === "") {
        showAlert("danger", "Lütfen bir todo girin...");
    }

    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo); //local storage'a ekleme
        showAlert("success", "Todo başarıyla eklendi...");
    }


    e.preventDefault();
}

//Her yerde kullanılacağı için genel fonksiyon yazıldı
function getTodosFromStorage(){ //Storage'dan bütün todoları almış olacak
    let todos;

    if(localStorage.getItem("todos") === null) {
        todos = [];
    }

    else {
        todos = JSON.parse(localStorage.getItem("todos")); //Başlangıçta string yazıldığı için array'e çevrilmesi lazım. Bu yüzden parse işlemi yapılır.
    }

    return todos;

}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos)); //Arrayleri string haline çeviriyoruz.
    
}

function showAlert(type, message) {
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;

    alert.textContent = message;

    firstCardBody.appendChild(alert);

    //setTimeout

    setTimeout(function(){
        alert.remove();
    },1000);
}

function addTodoToUI(newTodo){ //String değerini list item olarak arayüze ekler
    //List Item oluşturma
    const listItem = document.createElement("li");

    //Link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className ="delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className ="list-group-item d-flex justify-content-between";

    //Text Node Ekleme

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Todo List'e List Item'ı ekleme

    todoList.appendChild(listItem);
    todoInput.value = ""; //Input alanı boşaltıldı

}