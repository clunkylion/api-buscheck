const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');
const User = require('../User/User.model');
class People extends Model {}

People.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    sex: DataTypes.STRING,
    birth_date: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: 'People',
  }
);
People.hasOne(User);

module.exports = People;
