var User = require('./model');

exports.postUser = function(req, res) {
	User.create(req.body, function(error, user) {
		if(error) {
			res.status(500).json(error);
		} else {
			res.json(user);
		}
	})
}

exports.updateUser = function(req, res) {
	User.findByIdAndUpdate(req.params.id, req.body, function(error, user) {
		if(error) {
			res.status(500).json(error);
		} else {
			res.json(user);
		}
	})
}

exports.getAllUsers = function(req, res) {
	User.find(req.query, function(error, users) {
		if(error) {
			res.status(500).json(error);
		} else {
			res.json(users)
		}
	})
}

exports.deleteUser = function(req, res) {
	User.findByIdAndRemove(req.params.id, function(error, user) {
		if(error) {
			res.status(500).json(error);
		} else {
			res.json(user);
		}
	})
}
