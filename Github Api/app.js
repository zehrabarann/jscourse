//Elementleri Seçme

const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

function getData(e){
    let username = nameInput.value.trim(); //Boşluk temizleniyor

    if(username === ""){
        alert("Lütfen geçerli bir kullanıcı adı giriniz");
    }
    else{


        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found"){
                ui.showError("Kullanıcı bulunamadı!");
            }
            else {

                ui.addSearchedUserToUI(username); //Son aramaların arayüze yansıması için
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);

            }
        })
        .catch(err => ui.showError(err));

    }




    ui.clearInput(); //Input Temizleme
    e.preventDefault();
}

function clearAllSearched() {
    //Tüm arananları temizle

    if(confirm("Emin misiniz ?")){
        //Silme İşlemi
        Storage.clearAllSearchedUsersFromStorage();  //Storagedan Temizleme
        ui.clearAllSearchedFromUI(); //Arayüzden temizleme
    }


}

function getAllSearched(){
    //Arananları storagedan al ve ui'ye ekle

    let users =  Storage.getSearchedUsersFromStorage();


    let result = "";
    users.forEach(user => {
        //<li class="list-group-item">asdaskdjkasjkşdjşasjd</li>

        result += `<li class="list-group-item">${user}</li>`;

    });

    lastUsers.innerHTML = result;
}