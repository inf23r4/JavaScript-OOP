class AnalyticsLibrary {
    process(data){
        this.validateData(data);
        //TODO: complex to generate data
    }

    validateData(data){
        if(data.includes("xml")){
            console.log("data it's ok");
        }else{
            console.log("Data invalid");
        }
    }
}

module.exports = AnalyticsLibrary;