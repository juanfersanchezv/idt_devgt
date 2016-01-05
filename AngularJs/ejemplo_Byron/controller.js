var app = angular.module('AppTvShow',[]);

app.controller('AppTvController', function($scope, $http){
	var uriTvShows='http://localhost:3000/api/tvshows/';
	$scope.titulo='TV SHOWS';

	$scope.load_All_Shows = function(){
		console.log('Hiciste Click...')
		$http.get(uriTvShows)
		.success(function(showList){
			console.log(showList);
			$scope.allShowList=showList;			
		})
	};

});
