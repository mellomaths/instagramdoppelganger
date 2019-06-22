require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3333;
const mongoDBConnectionString =
    process.env.NODE_ENV === 'production'
        ? process.env.MONGODB_CONNECTION_STRING
        : process.env.DEV_MONGODB_CONNECTION_STRING;

mongoose.connect(mongoDBConnectionString, { useNewUrlParser: true });

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
