//Form Alanı Seçilmeli
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//UI Objesini Başlatma
const ui = new UI();

//Storage Objesi üret
const storage = new Storage();

//Tüm eventleri yükleme

eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage(); //Fonksiyon array'i dönmüş olacak
        ui.loadAllFilms(films);
    }); //Sayfa yüklendiğinde


    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === "") {
        //Hata
        ui.displayMessages("Tüm alanları doldurun...","danger");
    }
    else {
        //Yeni Film
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); //Arayüze film ekleme
        storage.addFilmToStorage(newFilm);  //Storage'a film ekleme
        ui.displayMessages("Film başarıyla eklendi...","success");
    }

    ui.clearInputs(titleElement,urlElement,directorElement);


    e.preventDefault(); //Submit edilmesini önlemek için
}

function deleteFilm(e) { //o event nerede oluştuysa target ile alabiliriz.
    if(e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        ui.displayMessages("Silme işlemi başarılı","success");


    }
}

function clearAllFilms() {
    if(confirm("Emin misiniz ?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    } 
}