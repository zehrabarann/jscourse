// const merhaba = function() {
//     console.log("Merhaba");
// }

// merhaba();

//Arrow Function

// const merhaba = () => {
//     console.log("Merhaba");
// }

// merhaba();

// const cube = (x) => { //Fonskiyon bir parametre alıyor ve bir return dönderiyor ise daha da sadeleştirilebilir.
//     return x*x*x;
// };

// console.log(cube(4)); 


// const cube = x => x*x*x; //Sadeleştirilmiş hali
// console.log(cube(4));


//Destructing

// let number1, number2;
//arr = [100, 200, 300, 400];

// number1 = arr[0];
// number2 = arr[1];



//const [number1, number2] = arr; // Bu şekilde tanımlanıp eklenmesi yapılabilir.
//[number1, number2] = arr; //Array'in 0. ve 1. indeksteki değerlerini atıyor


//console.log(number1, number2);


 //Obje Destructing

//  const numbers = {
//      a:10,
//      b:20,
//      c:30,
//      d:40,
//      e:50
//  };

 //const {a, c, e} = numbers;
 //const {a:number1, c:number2, e:number3} = numbers;

//console.log(number1, number2, number3);

 //console.log(a, c, e);

 //Function Destructing

//  const getLangs = () => ["Python", "Java", "C++"];

//  const [lang1,lang2,lang3] = getLangs();
//  console.log(lang1,lang2,lang3);

//Obje 

// const person = {
//     name:"Mustafa Murat",
//     year:1993,
//     salary:3000,
//     showInfos:() => console.log("Bilgiler gösteriliyor...")

// }

// const {name:isim, year:yil, salary:maas, showInfos:bilgileriGoster} = person;

// console.log(isim,yil,maas);

// bilgileriGoster();


//Spread Operator

//const langs = ["Python","C++","Java","Php"];

//console.log(...langs);

//const langs2 = ["Javascript","C#",...langs];
//console.log(langs2);

// const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b,...number2] = numbers;

// console.log(a,b);
// console.log(number2);

// const addNumbers = (a,b,c) => console.log(a+b+c);

// const numbers = [100, 200, 300];

// addNumbers(...numbers);


//FOR In - FOR Of Döngüleri

const person = {
    name:"Mustafa Murat",
    age:25,
    salary:3000
};

const langs = ["Python", "Java", "C++", "php"];

const name = "Mustafa";

//For In
// for (let prop in person) {
//     console.log(prop, person[prop]); //person[prop] dediğimizde bize karşılık gelen değerini verir.
// }

// for (let index in langs) {
//     console.log(index, langs[index]);
// }

//Stringde gezinme

// for (let index in name) {
//     console.log(index, name[index]);

// }

//FOr Of
//Object
// for (let value of person) {  //Hata verir. Obje üzerinde for of ile gezinilmez
//     console.log(value);
// }

// for (let value of langs) {
//     console.log(value);
// }

// for (let character of name){
//     console.log(character)
// }


//Mapler - Key(Anahtar) - Value (Değer)
//Maplerde her keye karşılık gelen bir anahtar mevcut

//let myMap = new Map(); //Map oluşturma
//console.log(typeof myMap);

//const key1 = "Mustafa";
//const key2 = {a:10, b:20};
//const key3 = () => 2;

//Set metodu ile keye değer atanır
//Key değerlerine bu şekilde valuelar atanır
//myMap.set(key1, "String Değer");
//myMap.set(key2, "object Literal Değer");
//myMap.set(key3, "Function Değer");


//Get metodu ile maplerden keye karşılık gelen değer alınır
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));


//console.log(myMap);

//Map Boyutu

//console.log(myMap.size);

//Yeni Map oluşturma

//const cities = new Map();

// cities.set("Ankara" ,5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);


//For Each

// cities.forEach(function(value,key) {
//     console.log(key,value);

// })

//For of

// for(let [key,value] of cities) {  //Sonuçlar aaray olarak geliyor  //Destructing yapısı
//     console.log(key,value);
// }

//Map Keys

// for(let key of cities.keys()){
//     console.log(key);
// }


//Map Values

// for (let value of cities.values()) {
//     console.log(value);
// }

//Arrayden map oluşturma

// const array = [["key1", "value1"], ["key2","value2"]];
// const lastMap = new Map(array); //New mapi o arrayden oluşturduk
// console.log(lastMap);

//Mapten array oluşturma

// const cities = new Map();

// cities.set("Ankara" ,5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

//const array = Array.from(cities); //Mapten array oluşturuyor
//[["Ankara",5],["İstanbul",15],["İzmir",4]]
//console.log(array);

//Primitive- referans veri tipleri

// let array1 = [1,2,3,4,5];
// let array2 = [1,2,3,4,5];

// if(array1 === array2) {
//     console.log("Eşit");
// }

//referans veri tipinde eşitlik kontrol ediyorsak içindeki değerlerin eşitliğine bakmaz. Bunlar bellekte aynı yeri gösteriyor mu buna bakar.

//primitive de değerler kıyaslanır.

//Setler - Kümeler
//bir değeri sadece 1 defa taşır

const myset = new Set();
myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Mustafa");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});

const myset2 = new Set([100,3.14,"Mustafa"]);
// console.log(myset);
// console.log(myset2);

//Sİze
//console.log(myset.size);

//Delete Metodu
//myset.delete("Mustafa");
//console.log(myset)


//Has Metodu

// console.log(myset.has("Mustafa")); // bu setin içinde mustafa var mı buna bakar
// console.log(myset.has(3.14));
// console.log(myset.has(2000));
// console.log(myset.has([1,2,3])); //false sonucunu alırız içerik aynı ama farklı objeler


//For Each

// myset.forEach(function(value) {
//     console.log(value);
// })

//For Of

// for (let value of myset){  //Value mysetteki tüm değerlere eşit olur
//     console.log(value);
// }

//Setlerden array oluşturma

// const array = Array.from(myset);
// console.log(array);


