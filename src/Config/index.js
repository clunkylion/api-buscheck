require('dotenv').config();
const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3005,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
};

module.exports = { config };
