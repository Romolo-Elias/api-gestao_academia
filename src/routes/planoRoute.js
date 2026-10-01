const { Router } = require('express');

const router = Router();

router.get('/plano' /*método do controller para exibir planos*/);
router.get('/plano/:id' /*método do controller para exibir plano por id*/);
router.post('/plano/:id' /*método do controller para criar plano*/);
router.put('/plano/:id' /*método do controller para atualizar plano*/);
router.delete('/plano/:id' /*método do controller para deletar plano*/);

module.exports = router;
