const Sequalize = require('sequelize');

const db = require('../config/database'); // traer la conexion

const Viaje = db.define('viaje', {
    titulo: {
        type: Sequalize.STRING
    },
    precio: {
        type: Sequalize.STRING
    },
    fecha_ida: {
        type: Sequalize.DATE
    },
    fecha_vuelta: {
        type: Sequalize.DATE
    },
    imagen: {
        type: Sequalize.STRING
    },
    descripcion:{
        type: Sequalize.STRING
    },
    disponibles: {
        type: Sequalize.STRING
    }
});

module.exports = Viaje;

//El modelo siempre esta conectado con la db y tiene los metodos para realizar las consultas 
