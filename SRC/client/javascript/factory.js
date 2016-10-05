angular.module('userApp').factory('myFactory', function($http, $q) {

	return {//start
		//requests to post a new user
		postUser: function(user) {
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
		},
		//////////--------------//////////
		//requests to get all the users
		getUsers: function() {
			var defer = $q.defer();
			$http({
				method: "GET",
				url: "/api/users"
			}).then(function(res) {
				defer.resolve(res);
			})
			return defer.promise;
		},
		//////////--------------//////////
		//this deletes user
		deleteUser: function(userId) {
			$http({
				method: "DELETE",
				url: "/api/user/" + userId
			}).then(function(res) {
				console.log(res);
			})
		},
		//////////--------------//////////
		//this updates the user
		updateUser: function(user) {
			$http({
				method: "PUT",
				url: "/api/user/" + user._id,
				data: {
					firstName: user.firstName,
					lastName: user.lastName,
					dateOfBirth: user.dateOfBirth,
					zipCode: user.zipCode
				}
			})
		}

	}//end
})	