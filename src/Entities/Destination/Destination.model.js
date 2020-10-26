const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class Destination extends Model {}

Destination.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'Destination',
  }
);

module.exports = Destination;
