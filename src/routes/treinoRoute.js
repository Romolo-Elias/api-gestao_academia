const { Router } = require('express');

const router = Router();

router.get('/treino' /*método do controller para exibir treinos*/);
router.get('/treino/:id' /*método do controller para exibir treino por id*/);
router.post('/treino/:id' /*método do controller para criar treino*/);
router.put('/treino/:id' /*método do controller para atualizar treino*/);
router.delete('/treino/:id' /*método do controller para deletar treino*/);

module.exports = router;
