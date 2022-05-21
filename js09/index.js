/*

Decorators offered the abillity to add behavior to existing
classes in a systtem dynamically

the idea was that the decoration it self wasn't essntial to the
base functionality of the class

*/
const Product = require("./product");
const ProductInterntional = require("./ProductInternational")

let product = new Product();

product = new ProductInterntional(product);

console.log(product.getPrice());
