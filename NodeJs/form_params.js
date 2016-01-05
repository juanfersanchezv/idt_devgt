/**
 * Created by juanfersanchez on 5/01/16.
 */

var http = require("http");
var   fs = require("fs");
//entrega un objeto
var parser = require("./params_parser.js");
//almacenamos la funcion que exportamos

var importar_parametros = parser.parse;

//creo un hash parametros.
//var arreglo_parametros = [], parametros ={};

var path = __dirname + "/index_forms.html"
//asincrona
http.createServer(function(req,res)
{

   //indexOf = busca las incidencias.

    if(req.url.indexOf("favicon.ico") > 0 ){return;}

    //console.log("======================================================================\n\n");
    //console.log(req);
    //console.log("======================================================================\n\n");


    fs.readFile(path,function(err,html)
    {
        //paso html a string porque en la actualid es binario
        var html_string = html.toString();
        //uso expresiones regulares que busca en le HTML dende haya {cualquier texto}
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre="";
        console.log("req.url=");
        console.log(req.url + "\n");

        parametros = importar_parametros(req);
  /*
        if(req.url.indexOf("?") > 0 )
        {
            var url_data = req.url.split("?"); //split crea un array
            console.log("URL DATA: ")
            console.log(url_data + "\n");
            arreglo_parametros = url_data[1].split("&")
        }

      for (var i = arreglo_parametros.length - 1; i >= 0; i--)
        {
            var param = arreglo_parametros[i];
            //nombre=JUANFER
            var param_data = param.split("=");
            //[nombre,JUANFER]
            parametros[param_data[0]] = param_data[1];
            console.log("parametros: ");
            console.log(param_data[1] + "\n");
            //hash de la siguiente manera{nombre:JUANFER}
        };

   */
        console.log("variables = ");
        console.log(variables + "\n");
        //variable ['nombre']

        for (var i = variables.length - 1; i >= 0; i--)
        {
            var value =variables[i];
            console.log("value= "+ value  + "\n");
            html_string = html_string.replace("{" + variables[i] + "}",parametros[value]);
        };

        res.writeHead(200, { 'Content-Type': 'text/html'});
        //mandamos el nuevo contenido
        res.write(html_string);
        res.end();
    });


}).listen(3003);
