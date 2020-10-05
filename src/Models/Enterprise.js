module.exports = (sequelize, type) => {
  return sequelize.define('Enterprise', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: type.STRING,
    address: type.STRING,
    city: type.STRING,
    phone: type.INTEGER,
    email: type.STRING,
  });
};
