// the ket idea in this patter is to take the responsability for accces complex
// data structures.

// the iterator class defines how to acesing the list's elements

const Logs = require("./Logs");

const logs = new Logs();

logs.fetchData();

while(logs.hasNext()){
    let currentLogs = logs.next();

    //complex logic
    console.log(currentLogs);
}