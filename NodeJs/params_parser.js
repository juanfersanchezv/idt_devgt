/**
 * Created by juanfersanchez on 5/01/16.
 */

function parse(req)
{
    console.log("Req funcion parse = " + req + "\n");
    var arreglo_parametros = []
    //creo un hash para la variable parametros.
    var parametros ={};

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

    return parametros;
}

//se exporta la funcion parse.

module.exports.parse = parse;