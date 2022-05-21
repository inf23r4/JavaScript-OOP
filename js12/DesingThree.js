const BaseDesing = require("./BaseDesing");

class DesingThree extends BaseDesing {
    run(role){
        if(this.isMyResponsability(role)){
            //complex login
            return "DesignThree";
        }

        return this.next(role);
    }

    isMyResponsability(role){
        return role == 3;
    }
}

module.exports = DesingThree;