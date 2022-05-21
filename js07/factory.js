let Cart = require("./cart")

class CartFactory {
    static make(){
       return new Cart();
    }
}
module.exports = CartFactory