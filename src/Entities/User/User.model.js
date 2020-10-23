const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');
const People = require('../People/People.model');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    last_session: DataTypes.STRING,
    status: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: 'User',
  }
);
//User.belongsTo(People);
module.exports = User;
