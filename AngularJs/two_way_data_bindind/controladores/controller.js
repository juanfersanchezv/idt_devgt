
//esta instruccion retorna una referencia a nuestra aplicacion, dentro de los corchetes [] van los modulos que vamos 
//a llamar dentro de la aplicacion.
//$scope es un objeto.
var app = angular.module("MyFirstApp", [])
app.controller('FirstController',function($scope){
	//atributo sobre $scope
	$scope.nombre = "Juanfer";

    //inicializamos nuestro objeto comentario
    $scope.nuevoComentario={};

	//arreglo de comentarios definidos
    $scope.comentarios = [
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
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
        //limpiar las cajas de texto
        $scope.nuevoComentario = {};
	}

});//fin de app.controller

/*
push = agrega un nuevo elemento a un arreglo.
 */