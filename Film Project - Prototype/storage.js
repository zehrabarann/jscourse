//Filmleri storage'a ekleme
function Storage() {
     
}

Storage.prototype.addFilmToStorage = function(newFilm) {
    let films = this.getFilmsFromStorage(); //array alınır

    films.push(newFilm);
    /*  arraye artık obje atamış oluyoruz. Bu şekilde bir obje görüntüsü
    [
        {title:"dsfsdf",director:"dlsflfk",url:"jdosdf"},
        {title:"dsfsdf",director:"dlsflfk",url:"jdosdf"},
    ]
    */

    localStorage.setItem("films",JSON.stringify(films));

    
}

Storage.prototype.getFilmsFromStorage = function() {
    let films;

    if(localStorage.getItem("films") === null) {
        films = [];
    }

    else {
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;

}

Storage.prototype.deleteFilmFromStorage = function(filmTitle) {
    let films = this.getFilmsFromStorage();

    //splice arrayden silmemizi sağlar

    films.forEach(function(film,index) {
        if(film.title === filmTitle) {
            films.splice(index,1);
        }
    });

    localStorage.setItem("films", JSON.stringify(films)); //local storagedan kaldırılacak.
     
}

Storage.prototype.clearAllFilmsFromStorage = function() {
    localStorage.removeItem("films");
}