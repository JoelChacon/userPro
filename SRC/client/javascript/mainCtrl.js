angular.module('userApp').controller('mainCtrl', function($scope, myFactory) {
	$scope.addUser = function() {
		myFactory.postUser($scope.newUser).then(function(res) {
			console.log(res);
		})
		$scope.newUser = '';
	}



})