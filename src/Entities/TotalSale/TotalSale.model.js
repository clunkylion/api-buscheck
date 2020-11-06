const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class TotalSale extends Model {}

TotalSale.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total_sale: DataTypes.INTEGER,
    total_students: DataTypes.INTEGER,
    total_quantity: DataTypes.INTEGER,
  },
  {
    sequelize: connection,
    modelName: 'TotalSale',
  }
);
module.exports = TotalSale;
