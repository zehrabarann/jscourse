// function getData(data) { //Promise Objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             //resolve("Olumlu sonuç");

//             //reject("Olumsuz sonuç");

//             if(typeof data === "string") {
//                 //olumlu
//                 resolve(data);
//             }

//             else{
//                 //Olumsuz
//                 reject(new Error("Lütfen string bir değer giriniz")); //Error objesi kullanımı 
//             }
//         },2000);


//     });

// }

// //console.log(getData("Merhaba")); //Biz

// //Olumlu sonuç yakalama
// // getData("Merhaba").then(function(response){ //Response resolve içerisindeki sonuç
// //     console.log(response);

// // });


// //Olumsuz sonuç yakalama
// //  getData("Merhaba").catch(function(err){
// //      console.log(err)

// //  });


// getData(24)
// .then(response => console.log("Gelen değer " + response))
// .catch(err => console.error(err) //kırmızı olması için
// );


function addTwo(number){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2);

            }
            else {
                reject(new Error("Lütfen bir sayı giriniz "));
            }
        },3000);
    });
}

addTwo("Merhaba")
.then(response => {
    console.log(response);
    return response +2; //then içinde return olduğu için tekrar promise olur. Bunu yakalamak için devamında yine then yapılır
}).then(response2 => console.log(response2))
.catch(err => console.error(err));
//1 tane catch - birden çok then - Promise chain 
