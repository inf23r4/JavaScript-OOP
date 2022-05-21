class AdvanceLogsLibrary {
    constructor(){
        console.log("__constructor");
    }

    checkPermissions(){
        // complex method
        console.log("__checkPermissions");
        return true;
    }
    checkExistFolder(){
        //complex method
        console.log("__checkExistFolder");
        return true;
    }
    generateLogName(){
        //complex method
        console.log("__checkExistFolder");
        return "Generate Log Name";
    }
    write(message){
        //complex method
        console.log("__write", message);
        return true
    }
}

module.exports = AdvanceLogsLibrary