var http = require("http");
var   fs = require("fs");

//sincrona
/*
var path = __dirname + "/index.html"
var html = fs.readFileSync(path);
console.log(html);

var manejador = function(solicitud, respuesta)
{
	console.log("Levanto el server");
	respuesta.write(html);
	respuesta.end();
};
//creamos el servidor
var servidor = http.createServer(manejador);
//alistamos el servidor para que escuche el puerto donde va a funcionar nuestro server
servidor.listen(3000);

*/
var path = __dirname + "/index.html"
//asincrona
http.createServer(function(req,res){
	fs.readFile(path,function(err,html){
	res.writeHead(200, { 'Content-Type': 'text/plain'});
	res.write(html);
	res.end();
});
}).listen(3002);
	


