const BaseDesing = require("./BaseDesing");

class DesingTwo extends BaseDesing {
    run(role){
        if(this.isMyResponsability(role)){
            //complex login
            return "DesignTwo";
        }

        return this.next(role);
    }

    isMyResponsability(role){
        return role == 2;
    }
}

module.exports = DesingTwo;