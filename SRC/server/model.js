var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	dateOfBirth: String,
	zipCode: Number
})

module.exports = mongoose.model('User', UserSchema);