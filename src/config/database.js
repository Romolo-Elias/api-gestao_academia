const { Sequelize } = require('sequelize');
require('dotenv').config();

const nomeBanco = process.env.NOMEBANCO;
const user = process.env.USUARIO_BANCO;
const senhaBanco = process.env.SENHA_BANCO;
const portaBanco = process.env.PORT_BANCO;

const sequelize = new Sequelize(nomeBanco, user, senhaBanco, {
  host: 'localhost',
  dialect: 'postgres',
  port: portaBanco,
  logging: false,
});

module.exports = sequelize;
