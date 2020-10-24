const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class Driver extends Model {}

Driver.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: 'Driver',
  }
);
module.exports = Driver;
