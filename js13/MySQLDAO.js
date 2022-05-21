//const mysql = require('mysql-library');
const mysql = {
    createConnection: () => {
      return {
        query: (query) => {
          return query;
        }
      }
    }
  };
  
  class MySQLDAO {
    constructor(){
      this.connection = this.createConnection();
    }
  
    createConnection(){
      return mysql.createConnection({
        host: "myhost.com",
        user: "root",
        password: "password"
      });
    }
  
    findAll(table){
      return this.connection.query("SELECT * FROM " + table);
    }
  }
  
  module.exports = MySQLDAO;