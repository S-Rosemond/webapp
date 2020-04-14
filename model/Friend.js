const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	name: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		default: 'no-photo.png'
	},
	email: String,
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

module.exports = FriendSchema;
