const { DataTypes, Model } = require('sequelize');
const connection = require('../../Lib/Mysql');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'El nombre de usuario ya está registrado',
      },
    },
    password: DataTypes.STRING,
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'El rut ya está registrado',
      },
      validate: {
        min: {
          args: 10,
          msg: 'Minimo 10 caracteres en el rut',
        },
        is: {
          args: /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/i,
          msg: 'El rut no es valido',
        },
      },
    },
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'El email ya está registrado',
      },
      validate: {
        isEmail: {
          msg: 'El email debe ser valido',
        },
        min: 5,
        max: 130,
      },
    },
    sex: DataTypes.STRING,
    birth_date: DataTypes.STRING,
    last_session: DataTypes.STRING,
    status: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: 'User',
  }
);
module.exports = User;
