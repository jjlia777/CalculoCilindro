
const express = require('express');
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { raio, altura } = req.body;
    const volume = Calculadora.volumeCilindro(
        parseFloat(raio), parseFloat(altura));
    res.send(`O volume do cilindro é: ${volume} cm³`);
});

module.exports = resultado;