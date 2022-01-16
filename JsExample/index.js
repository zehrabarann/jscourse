const deneme = document.getElementById('zehra');

const form = document.getElementById('todoForm');

function handleClick(formElement) {
    let todoList = JSON.parse(localStorage.getItem('todoList')) === null ? [] : JSON.parse(localStorage.getItem('todoList'));
    let todoObj = {};
    
    todoObj.subject = formElement.subject.value;
    todoObj.todo = formElement.todo.value;
    todoList.push(todoObj);
    console.log(todoList);
    
    localStorage.setItem('todoList', JSON.stringify(todoList));
    deneme.textContent = (formElement.todo.value)
    debugger;
}

function handleChangeCheckbox(e) {
    console.log(e)
}

function viewTodoList() {

    let todoList = JSON.parse(localStorage.getItem('todoList')) === null ? [] : JSON.parse(localStorage.getItem('todoList'));
    if(todoList.length === 0) {
        deneme.textContent = 'YAPILACAK GÖREV YOK'
    }
    else {
        var ulCreate = document.createElement("ul");

        todoList.forEach((element,i) => {
            var liCreate = document.createElement("li");
            var textnode = textnode = document.createTextNode(element.todo);
            liCreate.appendChild(textnode);
            ulCreate.appendChild(liCreate)
        })
        deneme.appendChild(ulCreate);
    }

}