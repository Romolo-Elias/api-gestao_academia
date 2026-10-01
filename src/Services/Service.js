const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async findAll() {
    return dataSource[this.model].findAll();
  }

  async findOne(id) {
    return dataSource[this.model].findOne({ where: { id: id } });
  }

  async create(dadosParaCriacao) {
    return dataSource[this.model].create(dadosParaCriacao);
  }

  async updateById(id, dadosParaAtualizar) {
    const registroParaAtualizar = await dataSource[this.model].findOne({
      where: { id: id },
    });

    if (!registroParaAtualizar) {
      const error = new Error(`${id} - Não encontrado`);
      error.statusCode = 404;
      throw error;
    }

    return dataSource[this.model].update(dadosParaAtualizar, {
      where: { id: id },
    });
  }

  async deleteOne(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}
