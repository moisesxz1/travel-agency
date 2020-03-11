exports.infoNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Sobre Nosotros' // pasarle una variable solo a esta vista
    });
}