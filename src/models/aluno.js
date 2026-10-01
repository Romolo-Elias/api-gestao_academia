'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Aluno.belongsTo(models.Plano, {
        foreignKey: 'plano_id',
      });
      Aluno.hasMany(models.Treino, {
        foreignKey: 'aluno_id',
      });
    }
  }
  Aluno.init(
    {
      nome: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      peso: DataTypes.FLOAT,
      altura: DataTypes.FLOAT,
      cpf: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: 'Aluno',
    }
  );
  return Aluno;
};
