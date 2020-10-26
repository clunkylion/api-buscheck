const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class Hour extends Model {}

Hour.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'Hour',
  }
);

module.exports = Hour;
