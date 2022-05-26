// // // const obj = {
// // //     test1:function(){
// // //         console.log("test 1");
// // //     },
// // //     test2:function() {
// // //         console.log("test 2");
// // //     }
// // // }

// // // //console.log(obj);

// // // const emp = Object.create(obj);

// // // console.log(emp);

// // function Person () {

// // }

// // Person.prototype.test1 = function() {
// //     console.log("test 1");
// // }


// // Person.prototype.test2 = function() {
// //     console.log("test 2");
// // }

// // function Employee(name, age) {
// //     this.name = name;
// //     this.age = age;
// // }

// // Employee.prototype = Object.create(Person.prototype);
// // Employee.prototype.myTest = function() {
// //     console.log("My test");
// // }
// // const emp = new Employee("Mustafa", 25);

// // emp.test1();

// // console.log(emp);


// //Call, Apply,Bind

// const obj1 = {
//     number1:10,
//     number2:20
// };

// const obj2 = {
//     number1:30,
//     number2:40
// };

// function addNumbers(number3,number4) {
//     console.log(this.number1 + this.number2 + number3 + number4);
// }

// //addNumbers(100,200);

// //addNumbers.call(obj1, 100,200); //Call metodu ile çağırabiliriz. ilk verilen şey obje olmalı
// //addNumbers.call(obj2,100,200);

// addNumbers.apply(obj1,[100,200]); 

// //Bind ile yine bir fonksiyon objeye bağlanır

// function getNumbersTotal(number3,number4) {
//     return this.number1 + this.number2 + number3 + number4;
// }

// const copyFunc1 = getNumbersTotal.bind(obj1);
// const copyFunc2 = getNumbersTotal.bind(obj2);

// //console.dir(copyFunc1);

// console.log(copyFunc1(100,200));
// console.log(copyFunc2(100,200));

//Kalıtım - Inheritance

function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function() {
    console.log("İsim:  " +this.name + "Yaş: " + this.age);
}

function Employee(name,age,salary) {
    //this.name = name;
    //this.age = age;
    Person.call(this,name,age); //kalıtım yapıyor. Employee this'in yerine geçmiş oluyor
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function() {
    console.log("Employee");
}

//Overriding - İptal Etme
Employee.prototype.showInfos = function() {
    console.log("İsim:  " +this.name + "Yaş: " + this.age + "Maaş: " +this.salary);

}
const emp = new Employee("Mustafa", 25,4000);

emp.showInfos();
emp.toString();