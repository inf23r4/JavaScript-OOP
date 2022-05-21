/// Data Access Object

/**
 * 
 * 
 * Is a pattern tha provides an abstract layer to some type of database or ther
 * persistence mechanism
 * 
 * by mapping application calls to the persistence layer, the DAD provides some specific data operation without exposin details of the database. Wikipedia
 */

 const MySQLDAO = require("./MySQLDAO");

 let MySQLDAOInstance = new MySQLDAO();
 
 MySQLDAOInstance.findAll("users");