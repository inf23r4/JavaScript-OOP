//Simple factory pattern is a Factory class in its simplest form. compared to Faactory Method Pattern or 
// abstrct Factory Pattern, is a fctory object for creating other objects

let CartFactory = require("./factory")

let cart = CartFactory.make();
cart.create();
cart.read();
cart.update();
cart.delete();