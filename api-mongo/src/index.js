const express = require('express');
const db = require('./config/db');
const ItemRouter = require('./controllers/ItemController');

const app = express();

app.use(express.json());
app.use('/api/item', ItemRouter);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))