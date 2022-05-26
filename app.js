// let value;

// value = document;

// //Scriptler

// value = document.scripts;

// value = document.scripts.length;
// value = document.scripts[0];

// //Linkler

// value = document.links;
// value = document.links[0];
// value = document.links[document.links.length-1];
// value = document.links[document.links.length-1].getAttribute("class");
// value = document.links[document.links.length-1].getAttribute("href");
// value = document.links[document.links.length-1].className; //getAttribute("class") ile aynı şeyi yapar
// value = document.links[document.links.length-1].classList; //class'ları tek tek alır


// //Formlar

// value = document.forms;
// value = document.forms.length;
// value = document.forms[0];
// value = document.forms["form"]; // If form has a name write form name like this
// value = document.forms[0].id;
// value = document.forms[0].getAttribute("id");
// value = document.forms[0].name;
// value = document.forms[0].getAttribute("name"); //select form attribute

// value = document.forms[0].method; //default method= get but you can change method in html like this method="POST"





// console.log(value);



let element;

//Elementi ID'ye göre seçme
element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

//Elementi Class'a göre seçme


element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

//element Tag'e Göre Seçme 

element = document.getElementsByTagName("div");

//Query Selector - Css selector   Css' de nasıl seçme işlemi yapıyorssak burada da aynı şekilde yapılıyor

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");

element = document.querySelector("li"); //İlk li alır
elemtn = document.querySelector("div");

//QuerySelectorAll = Tüm elementleri seç

element = document.querySelectorAll(".list-group-item"); //Node list

element.forEach(function(el){
    console.log(el);
    
});


//console.log(element);


const elements = document.querySelector("#clear-todos");

//Element Özellikleri

// console.log(elements.id);
// console.log(elements.className);
// console.log(elements.classList);
// console.log(elements.classList[1]);
// console.log(elements.textContent); //sadece textleri alır
// console.log(elements.innerHTML); //Html ve textler tamamını alır
// console.log(elements.href);
// console.log(elements.style);


//Style ve Element Özelliklerini Değiştirme
// elements.className = "btn btn-primary";
// elements.style.color = "#000";
// elements.style.marginLeft = "60px";
// elements.href = "https://www.google.com.tr";
// elements.target = "_blank";

//elements.textContent = "Silin";
//elements.innerHTML = "<span style = 'color:green'>Silin</span>"
//console.log(elements);


//const elementss = document.querySelectorAll(".list-group-item");
//elementss.forEach(function(el){
  //    el.style.color = "red";
  //  el.style.background = "#eee";
//});
//console.log(elements);

// let element2 = document.querySelector("li:last-child"); //Son elemanı getirir.
// element2 = document.querySelector("li:nth-child(4)");
// element2 = document.querySelectorAll("li:nth-child(odd)"); //tek olanları alır.

// element2.forEach(function(el){
//     el.style.background= "#ccc";
//     el.style.color = "red";
// })
// console.log(element2);








//Dom eventleri üzerinde gezinme
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2");
//const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
//value = cardrow;

//Child Nodes - Text Dahil

//value = todoList.childNodes;  //çocuklarını alır
//value = todoList.childNodes[0];

//Children - Element

//value = todoList.children;
//value = todoList.children[todoList.children.length-1];
//value = todoList.children[2].textContent = "Değişti";

//Element Kardeşleri

//value = todo;
//value = todo.previousElementSibling; //Sibling kardeş demek. Bir önceki kardeşe gidilir bu satır ile
//value = todo.nextElementSibling; //Bir sonraki kardeşe gitmek
//value = todo.nextElementSibling.nextElementSibling;




//console.log(value);



//Yeni Element Oluşturma 

//<a id="clear-todos" class="btn btn-dark" href="#">Tüm todoları temizle</a>

// const newLink = document.createElement("a"); //Yeni element oluşturulur.
// const cardbody = document.getElementsByClassName("card-body")[1];

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href= "https://www.google.com.tr";

//newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

//cardbody.appendChild(newLink);

//Text Content  

//Text Node - Eklenmek istenen yere eklemeyi yapar

//const text = document.createTextNode("Naber");
//scardbody.appendChild(text);

//console.log(newLink);


//Dinamik element Silme

//const todoList1 = document.querySelector("ul.list-group");
//const todos1 = document.querySelectorAll("li.list-group-item");

//Remove metodu

//todos1[1].remove(); remove metodu ile silme işlemi yapılabilir.

//Remove child

//todoList.removeChild(todoList.lastElementChild);


//Replace

// const cardbody3 = document.querySelectorAll("card-body")[1];

// const newElement =document.createElement("h3");

// newElement.className = "card-title";
// newElement.id = "tasks-title";
// newElement.textContent = "Yeni Todolar";

//Eski element

// const oldElement = document.querySelector("#tasks-title");

// cardbody.replaceChild(newElement, oldElement);

// console.log(newElement);


//dinamik attribute değiştirme, silme, ekleme

// const todoInput = document.getElementById("todo");
// let element5;

// element5 = todoInput;
// element5 = todoInput.classList;

// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");

// element5 = todoInput;
// element5 =todoInput.placeholder; //placeholder alanı seçilir
// element5 = todoInput.getAttribute("placeholder"); //placeholder alanı seçilir
// todoInput.setAttribute("placeholder", "Naber"); //placeholder değeri değiştirilir.
// todoInput.setAttribute("title", "Input"); //yeni attr ekliyor

// todoInput.removeAttribute("name"); // attr siler

// element5 = todoInput.hasAttribute("name"); //o attr'un olup olmadığına bakar



// element5 = todoInput;


// console.log(element5);



//Dom Event 

// 


const todoForm1 = document.getElementById("todo-form");

todoForm1.addEventListener("submit", submitForm);

function submitForm(e) {
    console.log("Submit Eventi");

    e.preventDefault();
}


//Klavye Eventleri 

//keypress

// document.addEventListener("keypress", run);

// function run(e) {
//     //console.log(e.which); //ascıı karşılığını verir.
//     //console.log(e.key); //klavyedeki karşılığını verir.

// }

//keydown //basılan bütün tuşlarda tetiklenir

// document.addEventListener("keydown",run);

// function run (e) {
//     console.log(e.key);
// }


//Keyup   -basılma işlemi bırakılınca tetiklenir
//document.addEventListener("keyup",run);

//function run (e) {
//    console.log(e.key);
//}


const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e) {
    //console.log(e.target.value);
    header.textContent = e.target.value;
}



//Mouse Event

const cardBody = document.querySelectorAll(".car-body")[1];

const title = document.querySelector("#tasks-title");

console.log(cardBody);

//Click Event

// title.addEventListener("click", run);

// function run(e) {
//     console.log(e.type);
// }

//doubleclick


//title.addEventListener("mouseup", run);

//Mouseover - O elementin üzerine geldiği zaman çalışır
//title.addEventListener("mouseover", run);

//Mouseout - O elementten çıkıldığı zaman çalışır.
//title.addEventListener("mouseout", run);


//Mouse Enter ve Mouse Leave
// cardBody.addEventListener("mouseenter", run); //O alanın içerisine girer. Farklı elementlere göre değiişmez
// cardBody.addEventListener("mouseleave", run); //o elementten çıkınca event çalışır



// function run(e) {
//     console.log(e.type);
// }


const filter = document.getElementById("filter");


// document.addEventListener("DOMContentLoaded", load);

// function load(e) {
//     console.log("Sayfa yüklendi");
// }

//Input Event

//Focus 
//filter.addEventListener("focus", run);


//Blur
//filter.addEventListener("blur", run)


//Paste eventi 
filter.addEventListener("paste", run);

//Copy eventi
filter.addEventListener("copy", run);

//CUt
filter.addEventListener("cut",run);
function run (e) {
    console.log(e.type);
}

