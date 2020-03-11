
//Contiene toda la configuracion de la conexion a la db

const Sequelize = require('sequelize');



//Configuracion del ORM Sequelize

module.exports = new Sequelize('agenciasdeviajes', 'root', 'root', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
})

// db, user, password
//port: MySQL port
//dialect : tipo de base de datos