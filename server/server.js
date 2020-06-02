const express = require('express');

// socket.io no trabaja directamente con la app de Express, sino que trabaja con un servidor HTTP que yq trae por defecto NodeJS
const socketIO = require('socket.io');
// cargamos modulo que trae Node por defecto con el servidor http
const http = require('http');

const path = require('path');

const app = express();

// Express está basado en el servidor "http" de Node, asíq que podemos pasarle la app Express como parámetro al servidor http con toda la configuración que le hagamos al express
// Definimos el servidor para correr la aplicación
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Inicializar el socket.io: Esta es la comunicación del BackEnd. Cuando queramos hacer cosas, lo vamos a referenciar con "io"
//let io = socketIO(server);
module.exports.io = socketIO(server);
// importamos el arhcivo 'sockets.js' para que se "ejecute" en este archivo (servidor.js)
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});