const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class Ticket extends Model {}

Ticket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: DataTypes.INTEGER,
    serialNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'Ticket',
  }
);
module.exports = Ticket;
