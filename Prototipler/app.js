// const object = new Object(); //object Literal
// object.name = "Mustafa";
// console.log(object);


// function Employee(name,age) {
//     this.name = name;
//     this.age = age;
//     this.showInfos = function() {
//         console.log("Bilgiler Gösteriliyor...");
//     }

//     this.toString = function() {
//         console.log("Bu bir employee objesi");
//     }
// }

// const emp1 = new Employee("Mustafa",25);
// console.log(emp1);

// console.log(emp1.toString());

function Employee(name,age) {
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function() {
    console.log("İsim:" + this.name + "Yaş:" + this.age);
}



const emp1 = new Employee("Mustafa",25);
const emp2 = new Employee("Oğuz", 25);

emp2.showInfos(); 
console.log(emp1);
console.log(emp2);