const mongoose = require('mongoose');
const { CommentSchema } = require('./Comments');

const PostSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	avatar: {
		type: String
	},
	author: {
		type: String
	},
	body: {
		type: String,
		required: [ true, 'This field cannot be blank' ]
	},
	title: {
		type: String,
		required: [ true, 'Please title your post before submission' ]
	},
	comments: [ CommentSchema ],
	likes: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'users'
			}
		}
	],
	dislikes: [
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

module.exports = mongoose.model('Post', PostSchema);
