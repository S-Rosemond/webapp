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

// Statics
PostSchema.statics.deleteComment = async function(id, commentorId) {
	let comment = this.comments.id(id);

	// In real production non portfolio need admin conditional

	if (comment.user.id !== commentorId || commentorId !== this.user.id)
		return 'Only the author and an authorized user can delete this post.';

	await comment.remove();
	await this.save();
};

// Methods
PostSchema.methods.addComment = async function(newComment) {
	await this.comments.push(newComment);
	await this.save();

	const newCreatedComment = await this.comments[this.comments.length - 1];

	return newCreatedComment;
};

module.exports = mongoose.model('Post', PostSchema);
