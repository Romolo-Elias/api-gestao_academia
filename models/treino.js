'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Treino.belongsTo(models.Aluno, {
        foreignKey: 'aluno_id',
      });

      Treino.belongsTo(models.Instrutor, {
        foreignKey: 'instrutor_id',
      });
    }
  }
  Treino.init(
    {
      descricao_treino: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Treino',
    }
  );
  return Treino;
};
