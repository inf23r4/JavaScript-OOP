class BaseDesing {
    setNext(next){
        this._next = next;
    }

    next(role){
        if(this._next){
            return this._next.run(role);
        }
        
        return `There are not Desing for role ${role}`
    }

   
}


module.exports = BaseDesing