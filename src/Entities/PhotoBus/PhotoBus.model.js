const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class PhotoBus extends Model {}

PhotoBus.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    photoUrl: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: 'PhotoBus',
  }
);

module.exports = PhotoBus;
