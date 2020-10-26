const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class Origin extends Model {}

Origin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'Origin',
  }
);

module.exports = Origin;
