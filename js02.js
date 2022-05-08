//this (javaScript OOP)

const user = {
    name: "joe", //properties
    lastname: "Ted",
    age: 30,
    showFullName(){
        return this.name + " " + this.lastname
    }
}
console.log(user)
console.log(user.showFullName())

const account = {
    number: "74323133554565654",
    amount: 100,
    deposit(quantity){
        this.amount = this.amount + quantity
        console.log(this.amount)
    },
    withdraw(quantity) {
        this.amount = this.amount - quantity
    }
}
account.deposit(100)
account.deposit(50)
account.deposit(10)
console.log(account)
account.withdraw(10)
account.withdraw(200)

console.log(account.amount)

//Constructor (javaScript OOP)

const user01 = {
    name: "Ron", //properties
    lastname: "gui",
    age: 30,
    showFullName(){
        return `${this.name} ${this.lastname}`
    }
}
    //onstrutor

function Person() {
    this.name = ""
    this.lastname = ""
    this.age = 0
    this.showFullName = function () {
        return `${this.name} ${this.lastname}`
    }
}

const user02 = new Person()
user02.name = "harry"
user02.lastname = "potter"
user02.age = 20

console.log(user02.showFullName())

