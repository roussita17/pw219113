const express = require('express');
const app = express(); // le asignamos express a la app



//Importamos las rutas a traves de una constante
const indiceRutas = require('./rutas/index');


//Establecer y usar las rutas 
app.use("/", indiceRutas);


//Servidor que este escuchando las peticiones de los clientes
app.listen(3000, ()=> {
	console.log('Servidor Escuchando puerto 3000');
});