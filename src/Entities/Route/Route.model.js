const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class Route extends Model {}

Route.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hour: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: 'Route',
  }
);

module.exports = Route;
