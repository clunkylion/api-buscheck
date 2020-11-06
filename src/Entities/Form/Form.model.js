const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class Form extends Model {}

Form.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: DataTypes.STRING,
    description: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: 'Form',
  }
);
module.exports = Form;
