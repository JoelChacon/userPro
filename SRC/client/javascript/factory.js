angular.module('userApp').factory('myFactory', function($http, $q) {
	var service = {};
	service.postUser = function(user) {
		return $http({
			method: "POST",
			url: "/api/user",
			data: {
				firstName: user.firstName,
				lastName: user.lastName,
				dateOfBirth: user.dateOfBirth,
				zipCode: user.zipCode
			}
		})
	}

	return service;
})