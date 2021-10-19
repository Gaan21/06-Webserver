
const http = require('http'); //paquete http propio de node

http.createServer( (request, response ) => {

    response.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv' );
    //Añade en los headers: Le dice al navegador que va haber un archivo descargable y cual es ese archivo

    // Envia el estatus con el codigo que sea.
    //response.writeHead(200, { 'Content-Type': 'application/json' });//Retorna un archivo de texto con JSON.
    response.writeHead(200, { 'Content-Type': 'application/csv' }); //Devuelve una descarga de excel. CSV

    response.write( 'Hola Mundo' );
  
    //Respuesta que dara el backend.
    //response.write( JSON.stringify( persona ) ); //Serializa un objeto y lo pasa a tipo JSON string.

    response.end(); //Para decir que ya se termino de escribir la respuesta.

})
.listen( 8080 );

console.log('escuchando el puerto:',8080)