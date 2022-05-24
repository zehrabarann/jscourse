// //Callback Fonksiyonlar

// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Tıkla");
// })

// function process1(callback) {
//     setTimeout(function(){
//         console.log("Process 1");
//         callback();

//     },3000);  
//     //Asenkron çalıştıkları için önce process 2 1'i beklemeden çalışır.sonrasında 3sn sonra process 1 çalışır
    
// } 

// function process1() {
//     setTimeout(function(){
//         console.log("Process 1");

//     },3000);  
//     //Asenkron çalıştıkları için önce process 2 1'i beklemeden çalışır.sonrasında 3sn sonra process 1 çalışır
    
// }

// function process2(){
//     setTimeout(function(){
//         console.log("Process 2");
//     },2000);
    
// }

//process1(process2);
//process2();


const langs = ["Python", "Java", "C++"];

function addLang(lang, callback ) {
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}

addLang("javascript", getAllLangs);
//getAllLangs();  //Asenkron

 