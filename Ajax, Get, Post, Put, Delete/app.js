//Ajax, callback, http request

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    //Get Request

    get(url, callback) {
        this.xhr.open("GET",url);  //Bağlantı açık

        //const temp =this;  //temp aslında requesti gösteriyor
        //this.xhr.onload = function() {
        this.xhr.onload = () =>{  //arrow function'a çevrildi.

            // console.log(this); //XMLHttpRequest'i gösteriyor  this xhr'ın kendisini gösteriyor
            if (this.xhr.status === 200) {
                callback(null,this.xhr.responseText);  //İsteğimiz bitti
            } 

            else {
                //Hata durumu
                callback("Get Request: Herhangi bir hata oluştu.",null); //Callback artık iki değer alacak hata ve dönen değer


            }

        //}.bind(this); //bind artık fonksiyonun dışında. Get içerisinde olduğu için get de requestin bir fonksiyonu olduğu için artık requesti gösterir
        }
        this.xhr.send();
    }

    //Post Request

    post(url,data,callback){
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type","application/json"); //JSON Verisi göndereceğimiz söylemiş olduk

        this.xhr.onload = () => {
            if(this.xhr.status === 201) {
                //Kaynak oluşturulmuştur. Başarılı
                callback(null,this.xhr.responseText);
            }

            else {
                callback("Pos Request: Herhangi bir hata oluştu",null); 
            }
        }

        //Veri gönderme - Veri string olarak gönderilmeli
        this.xhr.send(JSON.stringify(data));
    }

    put(url,data,callback){
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type","application/json"); //JSON Verisi göndereceğimiz söylemiş olduk

        this.xhr.onload = () => {
            if(this.xhr.status === 200) {
                //Kaynak oluşturulmuştur. Başarılı
                callback(null,this.xhr.responseText); //Güncellenen veriyi alma
            }

            else {
                callback("Put Request: Herhangi bir hata oluştu",null); 
            }
        }

        //Veri gönderme - Veri string olarak gönderilmeli
        this.xhr.send(JSON.stringify(data));
    }

    delete(url, callback) {
        this.xhr.open("DELETE",url);  //Bağlantı açık

        //const temp =this;  //temp aslında requesti gösteriyor
        //this.xhr.onload = function() {
        this.xhr.onload = () =>{  //arrow function'a çevrildi.

            // console.log(this); //XMLHttpRequest'i gösteriyor  this xhr'ın kendisini gösteriyor
            if (this.xhr.status === 200) {
                callback(null,"Veri silme işlemi başarılı");  //İsteğimiz bitti
            } 

            else {
                //Hata durumu
                callback("Delete Request: Herhangi bir hata oluştu.",null); //Callback artık iki değer alacak hata ve dönen değer


            }

        //}.bind(this); //bind artık fonksiyonun dışında. Get içerisinde olduğu için get de requestin bir fonksiyonu olduğu için artık requesti gösterir
        }
        this.xhr.send();
    }



    
} 

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums", function(err,response) { //Buradaki response artık bizim dönen değerimiz olacak
//     //console.log(response); 
//     if(err === null) {
//         //Hata olmamış baaşrılı
//         console.log(response);
//     }

//     else {
//         //hata
//         console.log(err);
//     }
// });
 

// request.get("https://jsonplaceholder.typicode.com/albums/51", function(err,response) { //id'si 51 olan bize dönecek
//     //console.log(response); 
//     if(err === null) {
//         //Hata olmamış baaşrılı
//         console.log(response);
//     }

//     else {
//         //hata
//         console.log(err);
//     }
// });



// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"}, function(err,album){
//     if(err === null)  {
//         console.log(album);

//     }
//     else {
//         //Hata
//         console.log(err);
//     }
// })

// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Tarkan Karma"}, function(err,album){
//     if(err === null)  {
//         console.log(album);

//     }
//     else {
//         //Hata
//         console.log(err);
//     }
// }) 

request.delete("https://jsonplaceholder.typicode.com/albums/10", function(err,response) { //id'si 51 olan bize dönecek
    //console.log(response); 
    if(err === null) {
        //Hata olmamış baaşrılı
        console.log(response); //Boş obje yazdırır
    }

    else {
        //hata
        console.log(err);
    }
});