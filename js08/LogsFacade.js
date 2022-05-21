class LogsFacade {
    constructor(logsInstance){
        this.logs = logsInstance ;
    }

    write(message){
        if(this.logs.checkPermissions() && this.logs.checkExistFolder()){
            this.logs.generateLogName()
            this.logs.write(message);
        }
    }
}

module.exports = LogsFacade