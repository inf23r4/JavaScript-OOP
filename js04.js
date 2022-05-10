 //Principles OOP

 //Object Oriented Lenguages
 //promote: modularyty & code reusability
 //There is not a specification or technical doccument for OOP
 //It's based from common sense from papers of early researches

 //Model thorough Objects
 // describe reality using objects and its realationships 1st requeriment
 // Assocition
 //Object capability to refer another object
 //Agregation
 //object capability to refer one or more independent object
 //Composition
 //object capability to reffer one or more dependent objects

 //OO Priniples grant modularity & code reuse 2nd Requirement
 //Encapsulation
 //capability to create into a single entity data and code that manipulates it. hidden internal details
 //Inheritance
 // mechanism by which object acquires some oo all features of one or more objects
 //Polymorphism
 //capability to process objects differently based on their data type or structure


 //Association

 class Person {
     constructor(name, lastname){
         this.name = name
         this.lastname = lastname
     }
 }

 const john = new Person('john', 'ray')
 const maria = new Person('maria', 'perez')

 maria.parent = john;

 console.log(maria);
 console.log(john);

 // Agregation form of association (Agregetion)

 const company = {
     name: "infq",
     employees: []
 }

 company.employees.push(john)
 company.employees.push(maria)

 console.log(company)

 // Composition

 const person = {
     name: "ryan",
     lastname: "adsa",
     adrees:{
        street:"qwe 123",
        city: "land",
        country: "asdsd"
     }
 }

 // Encapsulation (javascript(OOP)) Consentrate data and functions hiding internal details

 function company01(name){
     let employees = []
     this.name
     this.getEmployees = function(){
         return employees
     }
     this.addEmployees = function(employee){
         employees.push(employee)
     }
 }

 const cocaCola = new company01("coca cola")
 const pepsi = new company01("coca cola")

 console.log(cocaCola)
 console.log(pepsi)

 cocaCola.addEmployees({name:"ray"})
 pepsi.addEmployees({name:"rey"})

 console.log(cocaCola.getEmployees())
 console.log(pepsi.getEmployees())

 //Inheritance

 function Person02(){
     this.name = ""
     this.lastname = ""
 }

 function Programmer(){
     this.lenguage = ""
 }
 Programmer.prototype = new Person02()

 console.log(Programmer)

 const person02 = new Person02();
 person02.name = "maria"
 person02.lastname = "perez"
 console.log(person02)

 const programmer = new Programmer();
    programmer.name = "ryan"
    programmer.lastname = "ray"
    programmer.lenguage = "javascript"

console.log(programmer)

// 

class P {
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
    }
}

class Pr extends P {
    constructor( name , lastname, lenguage){
        super(name,lastname);
        this.lenguage = lenguage
    }
}

const p = new P("maria", "perez")

console.log(person)

const pr = new Pr("joe", "mc", "PHP")

console.log(Pr)
console.log(pr.lenguage)







