// // //Syntactic Sugar

// // function Employee(name,age,salary) {
// //     this.name = name;
// //     this.age = age;
// //     this.salary = salary;
// // }

// // Employee.prototype.showInfos = function() {
// //     console.log("İsim: " + this.name + "Yaş: " + this.age + "Maaş: " +this.salary);
// // }

// // const emp = new Employee("Mustafa",25,4000);

// // console.log(emp);

// class Employee {

// constructor(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// showInfos() {
//     console.log("İsim: " + this.name + "Yaş: " + this.age + "Maaş: " +this.salary);
// }
// }

// const emp = new Employee("Mustafa",25,4000);

// console.log(emp);
// emp.showInfos();




//Statik Metodlar - obje oluşturmamıza gerek kalmaz. Direkt sınıf üzerinden çağırabiliriz.

// class Matematik {

//     sqrt(x) {  //Statik olarak yazmadığımız için prototipine gelir.
//         console.log(x*x); 
//     }
//     static cube(x) {
//         console.log(x*x*x);
//     }
// }

//Matematik.cube(3); //Statik olarak tanımladığımızda bu şekilde kullanırız

//const math = new Matematik();
//math.sqrt(4);//Burada bize sonucu verir. Çünkü statik olarak tanımlamadık. Sınıf üzerinden direkt kullanamayız.




//Kalıtım

// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.showInfos = function() {
//     console.log("İsim: " +this.name + "Yaş: " +this.age);
// }

// function Employee(name,age,salary) {
//     Person.call(this,name,age);
//     this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype); //Kalıtım yapılıyor.
// Employee.prototype.toString = function() { //override
//     console.log("Employee");
// }

// Employee.prototype.showInfos = function() {
//     console.log("İsim: " +this.name + "Yaş: " +this.age + "Maaş: " +this.salary);
// }

// const emp = new Employee("Mustafa",25,4000);


//Kalıtım - ES6

class Person {  //Superclass, BaseClass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("İsim: " + this.name + "Yaş: " +this.age);
    }
}

class Employee extends Person {  //DerivedClass, Subclass, childclass
    constructor(name,age,salary) {
        // this.name = name,
        // this.age = age;
        //super.showInfos();
        super(name,age);  //Person.call ile aynı anlama gelir
        this.salary = salary;
    }
    showInfos() {  //Burada önceki miras aldığımız showInfos'u iptal ediyoruz  //Overriding
        console.log("İsim: " + this.name + "Yaş: " +this.age + "Maaş: " +this.salary);
    }

    toString() { //Overriding
        console.log("Employee");
    }

    raiseSalary(amount) { //Ekstra metod
        this.salary = this.salary + amount;
        this.salary +=amount;
    }
}

const emp = new Employee("Mustafa",25,4000);
emp.raiseSalary(500);
emp.showInfos();
emp.toString();