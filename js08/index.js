const AdvanceLogsLibrary = require("./AdvanceLogsLibrary");
const LogsFacade = require("./LogsFacade")

let logsFacade = new LogsFacade(new AdvanceLogsLibrary());

logsFacade.write("this is an error");