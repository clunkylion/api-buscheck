const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

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
module.exports = User;
