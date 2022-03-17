const express = require('express');
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosAPI = '/api/usuarios'
        // middleware
        this.middleware();
        //rutas de mi aplicación
        this.routes(); // para que configure mis rutas cuando se instancia
        //correr el servidor
        this.listen();
    }
    middleware() {
        // Lectura y parseo del body
        this.app.use(express.json());
        //CORS
        this.app.use(cors())
        //Directorio Público
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosAPI, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}
module.exports = Server;