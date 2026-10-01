const { Router } = require('express');

const router = Router();

router.get('/instrutor' /*método do controller para exibir instrutores*/);
router.get(
  '/instrutor/:id' /*método do controller para exibir instrutor por id*/
);
router.post('/instrutor/:id' /*método do controller para criar instrutor*/);
router.put('/instrutor/:id' /*método do controller para atualizar instrutor*/);
router.delete('/instrutor/:id' /*método do controller para deletar instrutor*/);

module.exports = router;
