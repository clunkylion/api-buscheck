const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');
const User = require('../Role/Role.model');
class Role extends Model {}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: DataTypes.STRING,
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'Role',
  }
);
module.exports = Role;
