'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plano extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plano.hasMany(models.Aluno, {
        foreignKey: 'plano_id',
      });
    }
  }
  Plano.init(
    {
      tipo_plano: DataTypes.STRING,
      preco: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Plano',
    }
  );
  return Plano;
};
