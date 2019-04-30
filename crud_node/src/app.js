const express = require('express');
const path = require('path');
const app = express(); // le asignamos express a la app
const mysql = require('mysql');
const myConnection = require ('express-myconnection');



//Importamos las rutas a traves de una constante
const indiceRutas = require('./rutas/index');


//Configuraciones
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));


//middleware
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'crudenodemysql13'
}, 'single'));


//Establecer y usar las rutas 
app.use("/", indiceRutas);


//Servidor que este escuchando las peticiones de los clientes
app.listen(3000, ()=> {
	console.log('Servidor Escuchando puerto 3000');
});