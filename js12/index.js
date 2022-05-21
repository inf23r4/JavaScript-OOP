const DesingOne = require("./DesingOne");
const DesingTwo = require("./DesingTwo");
const DesingThree = require("./DesingThree");

const desingOne = new DesingOne();
const desingTwo = new DesingTwo();
const desingThree = new DesingThree();

desingTwo.setNext(desingThree);
desingOne.setNext(desingTwo);

let role = 2;

const finalDesing = desingOne.run(role);

//complex logis go here
console.log(finalDesing);

