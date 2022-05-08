//primitive data

console.log(typeof "hello word".toUpperCase)
console.log(typeof 100)
console.log(typeof false)

console.log(typeof {})
console.log(typeof [])

console.log(typeof new Date())
console.log(typeof new RegExp())

console.log(typeof new Number(100))
console.log(typeof new String("hello word"))
console.log(typeof new Boolean(true))

console.log( new Number(100))
console.log( new String("hello word"))
console.log( new Boolean(true))


// Object Literal

console.log( {} )

let name = "Rayn"
let lastname = "Ray"
let age = 30

const user = {
    name: "Rayn",
    lastName: "Ray",
    age :30,
    hobbies: ["read", "progaming", "run"],
    address: {
        street: "some street",
        city: "londdon"
    }
}

console.log(user)