var socket = io();
/*
.on = para escuchar
.emit = para enviar información
*/

// Conectamos el socket con el servidor (Nuestro código del frontEnd, estará pendiente de cualquier cosa que pase en el Backend)
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Control de pérdida de conexión con el servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Comunicación entre Cliente (FrontEnd) y Servidor (Backend): Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fran',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta del server:', resp);
});
// Comunicación entre Cliente (FrontEnd) y Servidor (Backend): Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});