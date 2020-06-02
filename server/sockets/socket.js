// importamos el objeto IO que creamos y exportamos en server.js, para poder utilizarlo aquí
const { io } = require('../server');
// Conectamos el socket con los clientes (para saber cuándo un usuario se conecta a nuestro server)
// El objeto "client" contiene toda la info del usuario que se conectó
io.on('connection', (client) => {
    console.log('Usuario conectado');
    // Detectar la desconexión de un usuario
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Comunicación entre Servidor (Backend) y Cliente (FrontEnd): Escuchar información
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        /* 
                let objCallback = {};
                if (mensaje.usuario) {
                    objCallback = {
                        success: true,
                        username: mensaje.usuario
                    };
                } else {
                    objCallback = {
                        success: false,
                        username: 'Anonymous'
                    };
                }
                callback(objCallback);
         */
    });
    // Comunicación entre Servidor (Backend) y Cliente (FrontEnd): Enviar información
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a mi aplicación'
    });
});