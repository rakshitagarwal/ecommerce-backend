//using sequelize

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "password", {
  host: "localhost",
  dialect: "mysql",
}); // creates a connnection pool to the DB in the back

module.exports = sequelize;
