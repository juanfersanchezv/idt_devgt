//esta instruccion retorna una referencia a nuestra aplicacion, dentro de los corchetes [] van los modulos que vamos 
//a llamar dentro de la aplicacion.
//$http es un objeto
var app = angular.module("MyFirstApp", [])
app.controller('FirstController',function($scope,$http){
	//creo un arreglo con $scope
	$scope.posts = [];
	$scope.newPost=[];
	//atributo sobre $http y va a traer datos a mi server de json
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(err){
			
		});
	$scope.addPost = function(){
		$http.post("http://jsonplaceholder.typicode.com/posts",{
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
	})
	.success(function(data,status,headers,config){
		console.log(data);
		$scope.posts.push($scope.newPost);
		$scope.newPost = {};
		console.log("input, text area, limpiados....");
		})
	
		.error(function(error,status,headers,config){
			console.log(error);
		});
	}
});
