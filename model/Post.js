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

// Methods
PostSchema.methods.addComment = async function(newComment) {
	await this.comments.push(newComment);
	await this.save();

	const newCreatedComment = await this.comments[this.comments.length - 1];

	return newCreatedComment;
};

PostSchema.methods.updateComment = async function(update, id, commenterId) {
	const comment = this.comments.id(id);

	if (comment.user.id !== commenterId) {
		return [ false, 'Only the author or authorized users may edit this comment' ];
	}

	await comment.set(update);
	await this.save();

	// return needs testing
	return comment.populate('body');
};

PostSchema.methods.deleteComment = async function(id, commenterId) {
	let comment = this.comments.id(id);

	// In real production non portfolio need admin conditional
	// this.user.id allows the Original poster to delete comments | may remove

	if (comment.user.id !== commenterId || commenterId !== this.user.id)
		return 'Only the author and an authorized user can delete this post.';

	await comment.remove();
	await this.save();
};

module.exports = mongoose.model('Post', PostSchema);
