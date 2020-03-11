const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomePage = async (req, res) => {

    const viajes = await Viaje.findAll({ limit: 3 })

    const testimoniales = await Testimonial.findAll({ limit: 3 })


     res.render('index', {
        pagina: 'Proximos Viajes',
        viajes,
        testimoniales,
        clase: 'home',   
    })
}


/*
    const promises = []; // arreglo de promises

     const resultado = Promise.all(promises) // ejecutar todas las promesas

     resultado.then(resultado =>


promises.push(Viaje.findAll({
        limit: 3
    }))

    promises.push(Testimonial.findAll({
        limit: 3

        
        viajes: resultado[0],
        testimoniales: resultado[1]
        
    })) */ // Consulta multi tabla a la db