const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');
//const User = require('../User/User.model');
class Bus extends Model {}

Bus.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    patent: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Patent already in use',
      },
    },
    status: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.INTEGER,
    technical_review: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: 'Bus',
  }
);

module.exports = Bus;
