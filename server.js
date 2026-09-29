require('dotenv').config();

const app = require('./src/app.js');

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor iniciado com sucesso na porta ${PORT}`);
});
