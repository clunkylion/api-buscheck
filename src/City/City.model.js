const { DataTypes, Model } = require('sequelize');
const connection = require('./../Lib/Mysql');

class City extends Model {}

City.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    region: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: 'City',
  }
);

module.exports = City;
