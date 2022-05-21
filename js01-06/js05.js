// Polymorphism

// Benefits of Polymorphism
// reduces coupling in our application
//sometimes allow to create more compact code
//Suport in PL: 
// overloding. Methods can take parameters with diferent data types
// Parametric polymophism. menage generic types. not known in advance

function Stack(){
    this.items = []

    this.push = function(item) {
        this.items.push(item)
    }
}

const stack = new Stack()
stack.push("asdasdsd")

const stack2 = new Stack()
stack2.push(1000)

console.log(stack)
console.log(stack2)

//subtype Polymorphism

class Person {
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
    }
}

class Programmer extends Person {
    constructor(language, name, lastname){
        super(name, lastname)
        this.lenguage = language
    }
}

const john = new Person("john", "ray");
const ryan = new Programmer("javaScrip","ryan", "ray");

console.log(john);
console.log(ryan);

function writeFullname(p){
    console.log(p.name + " " + p.lastname)
}

writeFullname(john)
writeFullname(ryan)