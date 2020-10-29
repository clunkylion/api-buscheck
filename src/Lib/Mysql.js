const Sequelize = require('sequelize');
const { config } = require('../Config/index');

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

//run
connection.sync({ force: false }).then(() => {
  console.log('Synchronized Tables');
});

module.exports = connection;
