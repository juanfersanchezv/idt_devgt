var http = require("http");
var   fs = require("fs");

var path = __dirname + "/index.html"
//asincrona
http.createServer(function(req,res){
	fs.readFile(path,function(err,html){
		//paso html a string porque en la actualid es binario
		var html_string = html.toString();
		//uso expresiones regulares que busca en le HTML dende haya {cualquier texto}
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		var nombre="Juanfer";

		//variable ['nombre']
		for (var i = variables.length - 1; i >= 0; i--) 
		{
			//lo ejecutamos como codigo de javaScript
			//para obtener el valor de dicha variable
			var value = eval(variables[i]);
			//reempñazar el contendo de llaves {x} por su valor correspondiente
			html_string = html_string.replace("{" + variables[i] + "}",value);
		};

	res.writeHead(200, { 'Content-Type': 'text/html'});
	//mandamos el nuevo contenido
	res.write(html_string);
	res.end();
});
}).listen(3003);
	