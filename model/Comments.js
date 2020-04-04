const mongoose = require('mongoose');

exports.CommentSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	avatar: {
		type: String
	},
	body: {
		type: String,
		required: true
	},
	replies: [ this ],
	likes: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'users'
			}
		}
	],
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

/* 
 Twitter allows comments to have comments will have to test this.CommentSchema self nesting.
*/
