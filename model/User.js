const mongoose = require('mongoose');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [ true, 'Please enter a user name' ]
	},
	avatar: {
		type: String,
		default: 'no-photo.png'
	},
	email: {
		type: String,
		required: [ true, 'Please include a valid email' ],
		unique: true,
		match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ]
	},
	password: {
		type: String,
		required: [ true, 'Password is required' ],
		minlength: 8,
		select: false
	},
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

UserSchema.pre('save', async function(next) {
	if (!this.isModified('password')) {
		next();
	}

	this.password = await argon2.hash(this.password, {
		type: argon2.argon2id
	});
});

UserSchema.methods.signToken = function() {
	return jwt.sign(
		{
			id: this._id
		},
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_EXPIRE
		}
	);
};

UserSchema.methods.matchPassword = async function(userPassword) {
	return await argon2.verify(this.password, userPassword);
};

module.exports = mongoose.model('User', UserSchema);
