class Cart {
    constructor(database){
        this._database = database
    }
    create(){
        console.log("create");
    }
    update(){
        console.log("update");
    }
    delete(){
        console.log("remove");
    }
    read(){
        console.log("read")
    }
}

module.exports = Cart;