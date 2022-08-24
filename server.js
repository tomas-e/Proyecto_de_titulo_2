const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});

const app = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server escuchando en el puerto ${PORT}`));

module.exports = app