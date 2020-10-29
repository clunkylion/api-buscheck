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
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'El nombre de usuario ya está registrado',
      },
    },
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
