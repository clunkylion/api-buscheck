module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Enterprise', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
  });
};
