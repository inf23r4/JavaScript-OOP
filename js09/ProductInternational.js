class ProductInterntional {
    constructor(product){
        this.product = product;
    }
    getPrice(){
        return this.product.getPrice() + 50;
    }

    getName(){
        return this.translate();
    }

    translate(){
       return this.product.getName() + "Spanish";
    }

    getDescription(){
        return this.product.getDescription() + " español";
    }
}

module.exports = ProductInterntional;