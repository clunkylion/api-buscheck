const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class Station extends Model {}

Station.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'Station',
  }
);

module.exports = Station;
