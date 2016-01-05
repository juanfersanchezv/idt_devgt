//example of my first server in NodeJs
//import libreris we use requeire.
var http = require("http");
//creo un funcion que va a manejar la solicitud y la respuesta
//se ejecuta cada vez que nuestro servidor funcione.
var manejador = function(solicitud, respuesta)
{
	console.log("Funciona mi primer server en Node");
	//cerrando la conexion del servidor.
	respuesta.end("Hola mundo, mi primer server en Node");
};
//creamos el servidor
var servidor = http.createServer(manejador);
//alistamos el servidor para que escuche el puerto donde va a funcionar nuestro server
servidor.listen(3001);



