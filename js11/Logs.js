class Logs {
    constructor(){
        this._data = [];
        this.currentPionter = 0;
    }

    fetchData(){
        this._data = [1,2,3,4];
    }

    next(){
        let current = this._data[this.currentPionter];
        this.currentPionter++;
        return current
    }

    hasNext(){
        return this._data[this.currentPionter]
    }
}

module.exports = Logs;