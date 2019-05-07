const express = require ('express');
const rutas = express.Router();

const customerController = require('../controllers/customerController');

//rutas.get("/", (req,res) => {
//	res.send("hola mundo en node jajaja");
//});

rutas.get('/', customerController.list);
rutas.post('/add', customerController.save);
rutas.get('/delete/:id', customerController.delete);
rutas.get('/update/:id', customerController.edit);  //pantalla de edicion, get manda llamar un apantalla
rutas.post('/update/:id', customerController.update); // post = envia datos 



module.exports = rutas;