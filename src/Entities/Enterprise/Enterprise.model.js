const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class Enterprise extends Model {};

Enterprise.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  city: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
},{
  sequelize: connection,
  modelName: 'Enterprise'
})

module.exports = Enterprise;