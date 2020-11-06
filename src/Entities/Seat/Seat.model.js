const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class Seat extends Model {}

Seat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: DataTypes.STRING,
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'Seat',
  }
);
module.exports = Seat;
