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