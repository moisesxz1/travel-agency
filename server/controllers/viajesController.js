const Viaje = require('../models/Viajes');

exports.mostrarViajes =  async (req, res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });
}

exports.mostrarViaje = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id) // await espera a que este listo el resultado de la db para almacenarlos en viaje
        res.render('viaje', {
            viaje
        });
        
}


// res.render('viajes', {
//     pagina: 'Proximos Viajes',
//     viajes
// }))
// .catch(error => console.log(error))
