//esta instruccion retorna una referencia a nuestra aplicacion, dentro de los corchetes [] van los modulos que vamos 
//a llamar dentro de la aplicacion.
//$scope es un objeto.
var app = angular.module("MyFirstApp", [])
app.controller('FirstController',function($scope){
	//atributo sobre $scope
	$scope.nombre = "Juanfer";
	
});
