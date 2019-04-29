const express = require('express');
const path = require('path');
const mysql = require ('mysql');
const myConnection = require('express-myconnection');
const app = express(); // le asignamos express a la app



//Importamos las rutas a traves de una constante
const indiceRutas = require('./rutas/index');

//Configuraciones
app.set('port', process.env.PORT || 3000); //env = variable de ambiente , process...toma el puerto del SO
app.set('view engine', 'ejs'); //view engine = motor de vistas (ejs)
app.set('views', path.join(__dirname,'views'));


//Middleware
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'crudenodemysql13'
},'single'));

//Establecer y usar las rutas 
app.use("/", indiceRutas);


//Servidor que este escuchando las peticiones de los clientes
app.listen(3000, ()=> {
	console.log('Servidor Escuchando puerto 3000');
});