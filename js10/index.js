const AnalyticsLibrary = require("./AnaliticsLibrary");
const JsonReader = require("./JsonReader");
const JsonToXmlAdapter = require("./JsonToXmlAdapter");

const initialDataInstance = new JsonReader();

const data = new JsonToXmlAdapter(initialDataInstance).read();

new AnalyticsLibrary().process(data);