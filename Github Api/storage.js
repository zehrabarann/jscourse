class Storage{

    static getSearchedUsersFromStorage(){
        //Tüm kullanıcıları al

        let users;

        if(localStorage.getItem("searched") === null) {
            users = [];
        }

        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }

        return users;
    }

    static addSearchedUserToStorage(username){
        //Kullanıcı Ekle

        let users = this.getSearchedUsersFromStorage();  //this veya Storage olarak yazılabilir.This zaten storage class'ı gösteriyor
        
        //IndexOf -> sonuç -1 dönerse o kullanıcı yok demektir
        if(users.indexOf(username) === -1) {
            users.push(username);
        }

        localStorage.setItem("searched",JSON.stringify(users));

        
    }

    static clearAllSearchedUsersFromStorage(){
        //Tüm kullanıcıları sil

        localStorage.removeItem("searched");
        
    }
}