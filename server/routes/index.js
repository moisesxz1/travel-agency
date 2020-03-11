const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

//Controladores
const homeController = require('../controllers/homeController');
const nosotrosController = require('../controllers/nosotrosController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function () { // exportando las rutas

    router.get('/nosotros', nosotrosController.infoNosotros );
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    router.post('/testimoniales', testimonialesController.agregarTestimonial);
    router.get('/', homeController.consultasHomePage );


    return router;
}

//.render toma como parametro el nombre de la vista
//Cuand se trabaja con modelos y sequalize retornanan un promise
//.findAll retorna todos los resultados de la db
//viajes : resultado de la consulta
//Si la propiedad y el valor tienen el mismo nombre es suficiente con poner la propiedad
//el nombre que tengan los inputs en el atributo name es como los va a leer el req.body  /  asi se va a aplicar el destructuring