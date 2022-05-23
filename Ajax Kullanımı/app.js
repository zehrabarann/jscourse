//Http Status
//200 : OK
//403 : Forbidden
//404 : Not Found
//505 : Internal Server Error

//Holds the status of the XMLHttpRequest
//0: request not initialized
//1: server connection established
//2: request received
//3:  processing request
//4: request finished and response is ready


document.getElementById("btn").addEventListener("click",function(){
    //XMLHttpRequest de obje oluşturursak ajax işlemi gerçekleştirilir

    const xhr = new XMLHttpRequest();
    //console.log(xhr);

    // xhr.onreadystatechange = function() {
    //     //console.log(this.readyState);
    //     //console.log(this.status);  

    //     if(this.status == 200 && this.readyState == 4) {
    //         //Reponse hazır
    //         console.log(this.responseText);
    //     }
    // }

    // xhr.onprogress = function() { //ready state 3 olduğunda çalışır
    //     console.log("Process işleniyor...", this.readyState);
    // }

    xhr.onload = function() { //Bu fonksiyon sadece response hazır olduğunda çalışır. Sadece ready state 4 old.
        //console.log(this.readyState);  

        if (this.status === 200) { //onload da zaten 4 dönüyor o yüzden bunu yaptık
            //console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText;

        }

    }
    
    xhr.open("GET", "example.txt", true); //Bağlantı açmamız gerekiyor. Hangi requesti yapacağımız söylenir. Sonra dosya söylenir. işlemin senkron mu asenkron mu olup olmadığını söyleriz

    xhr.send(); //Post olsaydı değer göndermemiz gerekecekti




})