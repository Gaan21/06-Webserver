const express = require('express')
const hbs = require('hbs');
require('dotenv').config(); //Para crear variables de entorno

const app = express()
const port = process.env.PORT;
//Para desplegar la app es necesario configurar el puerto y el start del .json

//Handlebars
app.set('view engine', 'hbs'); //para que coja los datos de la carpeta vistas y lo podamos transformar
hbs.registerPartials( __dirname + '/views/partials');


//Servir contenido estatico: //Con un middlewere
app.use( express.static('public') ); //Con el path de la carpeta que queremos

//Esto no se ejecutara porque el middlewere ya devuelve la respuesta de ese path.
/* app.get('/', function (req, res) { 
  res.send('Homepage')
}); */


//Al usar react.js no hace falta renderizar porque lo hace react ¿?creo¿?
/* app.get('/', (req, res)  => {              //Renderizar la vista
  res.render('home', {                    //Podemos enviar los objetos a html para personalizar  home.html
      nombre: 'Luciano',
      titulo: 'Inserte titulo'
  });
}); */


/* app.get('/generic', function (req, res) {
    res.render('generic', {
      nombre: 'Luciano',
      titulo: 'Inserte titulo'
    })
}); */


/* app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Luciano',
    titulo: 'Inserte titulo'
  })
});
 */

  app.get('*', function (req, res) {
    //Metodo para enviar el archivo que hay en la ruta.
    res.sendFile( __dirname + '/public/index.html'); 
});
 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

