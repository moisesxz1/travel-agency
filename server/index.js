const express = require('express');
const path = require('path'); // accede a los archivos/ file system
const routes = require('./routes');
const bodyParser = require('body-parser') // convertir a JSON las peticiones
const configs = require('./config');


// db.authenticate()
//     .then(() => console.log("DB Conectada"))
//     .catch(error => console.log(error));

//Configurar express

const app = express();




//habiitar pug
app.set('view engine', 'pug');

//Añadir las vistas
app.set('views', path.join(__dirname, './views')); // indicar donde se encuentras las vistas

//Cargar la carpeta estatica public
app.use(express.static('public'));


//validar si estamos en desarrollo o produccion
const config = configs[app.get('env')]; // variable para detectar el ambiente

//Variable para el sitio web
app.locals.titulo = config.nombresitio;


//Mostrar el año actual y genera la ruta
app.use( (req, res, next) => {

    //Crear una nueva fecha
    const fecha = new Date();
     res.locals.fechaActual = fecha.getFullYear();// variable que va a ser compartida entre los archivos

     res.locals.ruta = req.path // retorna lo que este en la url, el endpoint
     
     
     return next();  // para que continue ejecutando la proxima funcion  
});

//Ejecutar body-parser
app.use(bodyParser.urlencoded({extended: true}));

//cargar rutas
app.use('/', routes());

app.listen(3005);


//app.listen es el puerto
//req : peticion
//res: respuesta del servidor
//send : imprime o muestra algo en la pantalla
// .use responde a todos los verbos HTTP
// (10)  se usa .use porque en routes van a haber algunas rutas de get, otras con post por lo tanto reacciona a todos los distintos verbos http
// __dirname = la carpeta actual
//locals : se consideran variables locales, variables que el mismo express va a identificar y las va a pasar entre los distintos archivos
//Middleware:  (37-47) : Quiere decir utilizar ese pedazo de codigo, realizar esas acciones pero luego ejecuta el proximo middleware con .next(),  si el .next() se queda en ese middleware