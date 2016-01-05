
//esta instruccion retorna una referencia a nuestra aplicacion, dentro de los corchetes [] van los modulos que vamos 
//a llamar dentro de la aplicacion.
//$scope es un objeto.
var app = angular.module("MyFirstApp", [])
app.controller('FirstController',["$scope",function(m){
	//atributo sobre $scope
	m.nombre = "Juanfer";

    //inicializamos nuestro objeto comentario
    m.nuevoComentario={};

	//arreglo de comentarios definidos
    m.comentarios = [
	{
		comentario:"Buen turorial",
		username: "Juanfer"
	},
	{
		comentario:"Mal turorial",
		username: "Jf"	
	}
	];
    //funcion de agregar nuevo comentario
	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoComentario);
        //limpiar las cajas de texto
        m.nuevoComentario = {};
	}

}]);//fin de app.controller

/*
inyectando variable para generar comprimidos del codigo como por ejemplo al = agrega un nuevo elemento a un arreglo.
 */