//singleton data structure is used to send information to a single database
class Logs {
    constructor(data){
        this._data = data;
    }

    get data(){
        return this._data;
    }
}

console.log(new Logs("Hello").data);
console.log(new Logs("hello2").data);

//Instance unique

let logsInstance;

    class LogsUnique {
        constructor(dataUnique){
            if(!logsInstance){
                logsInstance = this;
            } else {
                return logsInstance;
            }
            this._dataUnique = dataUnique
        }

        get dataUnique(){
            return this._dataUnique
        }
    }

    console.log(new LogsUnique("Hello").dataUnique);
    console.log(new LogsUnique("Hello2").dataUnique);
    console.log(new LogsUnique("Hello3").dataUnique);
    console.log(new LogsUnique("Hello4").dataUnique);

