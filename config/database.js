require('dotenv').config(); 
module.exports =
{
  "development": {
    "username": process.env.LOCAL1_DB_USER,
    "password": process.env.LOCAL1_DB_PWD,
    "database": process.env.LOCAL1_DB_NAME,
    "host": process.env.LOCAL1_DB_HOST,
    "port": process.env.LOCAL1_DB_PORT,
    "dialect": process.env.LOCAL1_DB_DIALECT,
    "logging": true
  },
  "test": {
    "username": process.env.LOCAL2_DB_USER,
    "password": process.env.LOCAL2_DB_PWD,
    "database": process.env.LOCAL2_DB_NAME,
    "host": process.env.LOCAL2_DB_HOST,
    "port": process.env.LOCAL2_DB_PORT,
    "dialect": process.env.LOCAL2_DB_DIALECT,
    "logging": true
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "logging": false
  }
}
