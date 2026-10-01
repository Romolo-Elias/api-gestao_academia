class Controller {
  constructor(service) {
    this.service = service;
  }

  async getAll(req, res, next) {
    try {
      const listaRegistros = await this.service.findAll();
      return res.status(200).json(listaRegistros);
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.body;
      const registro = await this.service.findOne(id);
      return res.status(200).json(registro);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    const dadosParaCriar = req.body;

    try {
      const novoRegistro = await this.service.create(dadosParaCriar);
      return res.status(201).json(novoRegistro);
    } catch (error) {
      next(error);
    }
  }

  async updateById(req, res, next) {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    try {
      const registroAtualizado = await this.service.updateById(
        dadosAtualizados,
        Number(id)
      );

      return res.status(200).json(registroAtualizado);
    } catch (error) {
      next(error);
    }
  }

  async deleteOne(req, res, next) {
    const { id } = req.params;

    try {
      await this.service.deleteOne(Number(id));
      res.status(204).json({ mensagem: `id ${id} deletado` });
    } catch {
      next(erro);
    }
  }
}
