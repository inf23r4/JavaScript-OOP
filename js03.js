 // new (javascript OOP)

function Person(name, lastname){
    this.name = name
    this.lastname = lastname
    this.displayName = function(){
        return `${this.name} ${this.lastname}`
    }
}

const john = new Person()
john.name = "ads"
//chnge prop
john.name = "adadss"
john.lastname = "adsad"



const mario = new Person("mario", "Rossi");

console.log(mario);

console.log(mario.displayName());

const maria = new Person("Maria", "perez")
const jose = new Person("Jose", "perez")


john.greet = function() {
    return `hello I'am ${this.name}`
}
 //alt prop
Person.prototype.greet = function() {
    return `hello I'am ${this.name}`
}

Person.prototype.age = 100

console.log(john.greet());
console.log(mario.greet())
console.log(maria.greet());
console.log(jose.age);


const s = new String("hello word");

String.prototype.concatTest = function() {
    return this + "test";
}
console.log("my name is jesus".concatTest())

console.log(s.concatTest());

// class

class PersonClass {
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
    }
    greet() {
        return `hello! I'am ${this.name} ${this.lastname}`
    }
}


const user = new PersonClass('joe', 'ray')
const user02 = new PersonClass('ryan', 'ray')

console.log(user.greet())
console.log(user02.greet())

