//esta instruccion retorna una referencia a nuestra aplicacion, dentro de los corchetes [] van los modulos que vamos 
//a llamar dentro de la aplicacion.
//$http es un objeto
var app = angular.module("MyFirstApp", [])
app.controller('FirstController',function($scope,$http){
	//creo un arreglo con $scope
	$scope.posts = [];
	//atributo sobre $http y va a traer datos a mi server de json
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;

		})
		.error(function(data){

		})
	
});
