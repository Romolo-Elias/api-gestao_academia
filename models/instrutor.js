'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Instrutor.init({
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    cref: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Instrutor',
  });
  return Instrutor;
};