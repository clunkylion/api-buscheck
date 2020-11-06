const { Model, DataTypes } = require('sequelize');
const connection = require('../../Lib/Mysql');

class BusRoute extends Model {}

BusRoute.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'BusRoute',
  }
);
module.exports = BusRoute;
