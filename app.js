var express = require('express');

var app = express();

app.get('/contacto', function (peticion, respuesta) {
    respuesta.send('ruta contacto');
});

app.listen(3000, function (peticion, respuesta) {
    console.log("Hola Mundo");
});