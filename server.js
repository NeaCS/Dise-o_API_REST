const express = require('express');
const app = express();
const cors = require('cors');
const { obtenerMedicamentos, obtenerPersonal } = require('./consultas');


app.use(cors());
app.use(express.json());

app.listen(3000, console.log('Servidor corriendo en el puerto 3000'));


// index.js
// importamos la función

// Utilizamos el query recién creado
app.get('/medicamentos', async (req, res) => {
const queryStrings = req.query
console.log(queryStrings)
const medicamentos = await obtenerMedicamentos(queryStrings)
res.json(medicamentos)
})


app.get('/personal', async (req, res) => {
    try {const queryStrings = req.query
    const personal = await obtenerPersonal(queryStrings)
    res.json(personal)} catch (err) {
        send.status(500).send(err)
    }
    
})