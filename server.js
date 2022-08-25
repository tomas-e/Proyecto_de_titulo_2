const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
dotenv.config({path: './config/config.env'});
const mascotaController = require('./controllers/mascota.controller')
const usuarioController = require('./controllers/usuario.controller')
const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/v1/bootcamps', bootcamps);


app.get('/api/mascotas', (req, res) => {
    mascotaController.getTasks().then(data => res.json(data));
});

app.post('/api/mascotas', (req, res) => {
    console.log(req.body);
    mascotaController.createTask(req.body).then(data => res.json(data));
});

app.post('/api/usuario', (req, res) => {
    console.log(req.body, "hola");
    usuarioController.createTask(req.body).then(data => res.json(data));
});



const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server escuchando en el puerto ${PORT}`));

module.exports = app