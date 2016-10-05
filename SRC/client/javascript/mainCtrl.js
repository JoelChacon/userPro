angular.module('userApp').controller('mainCtrl', function($scope, $filter, myFactory) {

//////////--------------------//////////	
//definition of function that posts a new user//	
	$scope.addUser = function() {
		myFactory.postUser($scope.newUser).then(function(res) {
			console.log(res.data);
		})
		getAllUsers();
		$scope.newUser = '';
	}
//////////--------------------//////////	
//definition of function that gets all the users//
	getAllUsers = function() {
		myFactory.getUsers().then(function(res) {
			console.log(res.data);
			$scope.users = res.data
		})
	}
//invoking the function that gets all the users	
	getAllUsers();
//////////--------------------//////////
//this passes the variable Anjel to the $filter and makes every letter upperCase
	// $scope.Anjel = '';
	$scope.makeUpperCase = function() {
		return $filter('uppercase')($scope.Anjel)
	}
//////////--------------------//////////
//this function asks for a confirmation on deleting a user
	$scope.confirmDeletion = function(id) {
		if(confirm("Are You Sure?")) {
			$scope.deleteUser(id);
		}
	}
//this deletes the user and invokes the getAllUsers() function to refresh the user list
	$scope.deleteUser = function(id) {
		myFactory.deleteUser(id)
		getAllUsers();
	}
//////////--------------------//////////

})
