require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USUARIO_BANCO,
    password: process.env.SENHA_BANCO,
    database: process.env.NOMEBANCO,
    host: process.env.HOST,
    dialect: 'postgres',
  },
};
