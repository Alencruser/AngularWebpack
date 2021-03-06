var scotchTodo = angular.module('scotchTodo',[]);

function mainController($scope,$http){
	$scope.formData = {};

	$http.get('/api/todos')
	.success(function(data){
		$scope.todos = data;
		console.log('douze');
	}).error(function(data){
		console.log('Erreur : '+data);
	});

	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
		.success(function(data){
			$scope.formData = {};
			$scope.todos = data;
			console.log(data);
		})
		.error(function(data){
			console.log('Erreur :'+data);
		})
	}
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/'+id)
		.success(function(data){
			$scope.todos=data;
			console.log(data);
		})
		.error(function(data){
			console.log('Erreur : '+ data);
		})
	}
}