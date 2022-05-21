class BaseDesing {
    setNext(next){
        this._next = next;
    }

    next(role){
        return this._next.run(role);
    }
}


module.exports = BaseDesing