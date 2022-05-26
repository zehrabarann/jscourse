//console.log(this); //Şuan üzerinde bulunduğumuz objeyi gösteren anahtar kelime

// const emp1 = {  //Object Literal
//     name:"Mustafa",
//     age:25,
//     showInfos:function() {console.log("Bilgiler Gösteriliyor ");}
// };

// const emp2 = {
//     name:"Ahmet",
//     age:25

// }
// emp1.salary = 4000;
// emp1.showInfos();
// console.log(emp1);

//  function Employee() { //Yapıcı Fonksiyon oluşturuldu(Constructor)
//      this.name = "Mustafa";
//  }

//  const emp1 = new Employee();
//  const emp2 = new Employee();
//  console.log(emp1);
//  console.log(emp2);

 //this artık yeni oluşturulan objeyi gösterir

function Employee(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function() {
        console.log(this.name,this.age,this.salary);
    }
    //console.log(this); //this artık o objeyi gösterir
}
const emp1 = new Employee("Mustafa",25,4000);
const emp2 = new Employee("Ahmet",25,5000);
//console.log(emp1);
//console.log(emp2);


emp1.showInfos();
emp2.showInfos();