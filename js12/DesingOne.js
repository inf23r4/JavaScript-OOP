const BaseDesing = require("./BaseDesing");

class DesingOne extends BaseDesing {
    run(role){
        if(this.isMyResponsability(role)){
            //complex login
            return "DesignOne";
        }

        return this.next(role);
    }

    isMyResponsability(role){
        return role == 1;
    }
}

module.exports = DesingOne