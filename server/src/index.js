const express = require('express');

const app = express();
const port = process.env.PORT || 3333;

app.get('/', (req, res) => {
    return res.send({ message: 'Hello' });
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
