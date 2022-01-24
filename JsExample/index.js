const deneme = document.getElementById('zehra');
const loginform = document.getElementById('loginform');

const form = document.getElementById('todoForm');

const toDoStatus = {
    0: 'Yapılacak',
    1: 'Yapılıyor',
    2: 'Tamamlandı'
}

function handleClick(formElement) {
    let todoList = JSON.parse(localStorage.getItem('todoList')) === null ? [] : JSON.parse(localStorage.getItem('todoList'));
    let todoObj = {};
    todoObj.username = formElement.username.value;
    todoObj.subject = formElement.subject.value;
    todoObj.todo = formElement.todo.value;
    todoObj.status = formElement.status.value;
    todoList.push(todoObj);
    console.log(todoList);
    
    localStorage.setItem('todoList', JSON.stringify(todoList));
    deneme.textContent = (formElement.todo.value)
    
}

function handleChangeCheckbox(e) {
    console.log(e.username.value)
    
    console.log(e.password.value)

}

function handleLogin(e) {
    const username = 'Zehra';
    const password = '1234';
    const username2 = 'Onder';
    const password2 = '1234';
    if((username === e.username.value && password === e.password.value) ||  (username2 === e.username.value && password2 === e.password.value)) {
        localStorage.setItem('user', e.username.value)
    }
    else {
        alert('Hatalı Kullanıcı')
    }
    console.log(e.username.value)
   
    console.log(e.password.value)
}

function viewTodoList(formElement) {
    let htmlTodoListSelector = document.getElementById('todoList');
    let todoList = JSON.parse(localStorage.getItem('todoList')) === null ? [] : JSON.parse(localStorage.getItem('todoList'));
    // todo list de  Filter formElemen.status === e.status
    let filterStatusTodo = todoList.filter((e) => e.status === formElement.status.value);
    // Yapılıyor Kontrolü Ve listesi

    if(filterStatusTodo.length === 0) {
        var pCreate = document.createElement('p');
        pCreate.appendChild(document.createTextNode(toDoStatus[formElement.status.value] + ' --- ' + 'Listesinde görev bulunmamaktadır.'))
        htmlTodoListSelector.appendChild(pCreate);
    }
    else {
        // filterStatusTodo içerisinde forEach yapılarak her bir element için li create edilecek ve bu ul nin child olacak son olarak da bu htmlTodoSelectore atanacak 
        var filterulCreate = document.createElement('ul');
        if(formElement.status.value === '2') {
            filterulCreate.classList.add('done')
        }
        filterStatusTodo.forEach((element,i) => {
            var filterliCreate = document.createElement('li');
            filterliCreate.appendChild(document.createTextNode(element.todo))
            filterulCreate.appendChild(filterliCreate)
        }) 

        htmlTodoListSelector.appendChild(filterulCreate)


        
    }

    if(todoList.length === 0) {
        deneme.textContent = 'YAPILACAK GÖREV YOK'
    }
    else {
        const username = localStorage.getItem('user')
        if(username !== null) {
            const filterTodoList = todoList.filter((e) => e.username === 'Önder');
            var ulCreate = document.createElement("ul");
            filterTodoList.forEach((element,i) => {
                var liCreate = document.createElement("li");
                var textnode = textnode = document.createTextNode(element.todo);
                liCreate.appendChild(textnode);
                ulCreate.appendChild(liCreate)
            })
            deneme.appendChild(ulCreate);
        }
        else {
            alert('Giriş Yapınız')
        }
     
    }

}

window.onload = function LoginControl(){
    const login = localStorage.getItem('user');
    if(login === null) {
        deneme.style.display = 'none';
    }
    else {
        loginform.style.display = 'none'
    }
}
function logOut () {
    localStorage.removeItem('user');
    window.location.reload()

}