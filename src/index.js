'use strict'

const express = require('express');

/*
body-parser es un paquete de NPM que analiza los cuerpos de las solicitudes entrantes en un middleware 
antes que sus controladores, disponible en la propiedad req.body. 
 */
const bodyParser = require('body-parser');
const app = express();
const port = 3900;

//** Mongoose ***********************:

const mongoose = require('mongoose');
//Dirección a la base de datos:
const url = 'mongodb://localhost:27017/api_rest_notas_react';
//Configuración para evitar fallos en la conexión con mongoDB
mongoose.Promise = global.Promise;
//Forzamos que los métodos antiguos de mongodb se desactiven y podamos utilizar los nuevos
//mongoose.set('useFindAndModify', false);

//** Ficheros ruta **********************:

const user_routes = require('./routes/user/user.js');
const pet_routes = require('./routes/pet/pet.js');
const history_routes = require('./routes/history/history.js');

//** Middlewares **********************:

/*
El middleware es el software que brinda servicios y funciones comunes a las aplicaciones.
Generalmente, se encarga de la gestión de los datos, los servicios de aplicaciones, la mensajería, la autenticación y 
la gestión de las API.
*/

//Cargamos el bodyParser: middleware para analizar cuerpos de a través de la URL
//Este analizador acepta solo la codificación UTF-8 contenida en el body
app.use(bodyParser.urlencoded({ extended: false }));

//Cualquier tipo de petición lo convertimos a json:
app.use(bodyParser.json());

//Activar el CORS para permitir peticiones AJAX y HTTP desde el frontend.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// app.get("/", (_, res) => {
//     res.send("hola desde backend")
// })
//Cargamos los archivos de ruta
app.use('/api/user', user_routes);
app.use('/api/pet', pet_routes);
app.use('/api/history', history_routes);


/*app.listen(port, () => {
    console.log('listening on port ' + port);
});*/

//Nos conectamos a mongoDB. Opción { useNewUrlParser: true } para utilizar las últimas funcionalidades de mongoDB
mongoose.connect(url, { useNewUrlParser: true }).then(() =>{

	console.log('Conexión con la BDD realizada con éxito!!!');

	app.listen(process.env.PORT || port, () =>{
		console.log('servidor ejecutándose en http://localhost:' + port );
	});

});