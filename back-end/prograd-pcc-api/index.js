const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();
app.use(cors());

app.use(express.json());

app.use('/', routes);

app.listen(3333, () => {
    console.log("Servidor Prograd ppc executando na porta 3333.");
});