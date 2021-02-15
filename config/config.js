const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  app: {
    debug: process.env.APP_DEBUG || false,
    port: process.env.PORT || 3000,
  },
  db: {
    host: process.env.DB_HOST || '',
    name: process.env.DB_NAME || '',
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
  } 
}