//Form Alanı Seçilmeli
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//Tüm eventleri yükleme

eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage(); //Fonksiyon array'i dönmüş olacak
        UI.loadAllFilms(films);
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
        UI.displayMessages("Tüm alanları doldurun...","danger");
    }
    else {
        //Yeni Film
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm); //Arayüze film ekleme
        Storage.addFilmToStorage(newFilm);  //Storage'a film ekleme
        UI.displayMessages("Film başarıyla eklendi...","success");
    }

    UI.clearInputs(titleElement,urlElement,directorElement);


    e.preventDefault(); //Submit edilmesini önlemek için
}

function deleteFilm(e) { //o event nerede oluştuysa target ile alabiliriz.
    if(e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        UI.displayMessages("Silme işlemi başarılı","success");


    }
}

function clearAllFilms() {
    if(confirm("Emin misiniz ?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    } 
}