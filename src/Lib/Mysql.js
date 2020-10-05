const Sequelize = require('sequelize');
const { config } = require('../Config/index');
//import models
const EnterpriseModel = require('../Models/Enterprise');

const connection = new Sequelize(
  config.db_name,
  config.db_user,
  config.db_password,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

//sync Models
const Enterprise = EnterpriseModel(connection, Sequelize);

//run
connection.sync({ force: false }).then(() => {
  console.log('Synchronized Tables');
});
module.exports = {
  Enterprise,
};
