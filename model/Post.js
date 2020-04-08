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

	// Getting the last item in the array maybe a flaw with real users
	const newCreatedComment = await this.comments[this.comments.length - 1];
	// Instead get comments by this user then return last one
	// Comment here for edit

	return newCreatedComment;
};

PostSchema.methods.updateComment = async function(update, id, commenterId) {
	const comment = await this.comments.id(id);

	// Working
	if (comment.user.toString() !== commenterId) {
		return [ false, 'Only the author or authorized users may edit this comment' ];
	}

	// Working
	await comment.set({ body: update });
	await this.save();

	/*
	"Mongoose does not support calling populate() on nested docs.
	Instead of `doc.arr[0].populate(\"path\")`, use `doc.populate(\"arr.0.path\")"
	*/

	// current: Working: may change due to frontend
	const updatedFields = {};
	updatedFields._id = comment._id;
	updatedFields.body = comment.body;
	updatedFields.avatar = comment.avatar;
	updatedFields.user = comment.user;

	return updatedFields;

	// delete above if likes etc needed frontend
	// return comment
};

PostSchema.methods.deleteComment = async function(id, commenterId) {
	const comment = await this.comments.id(id);

	// In real production non portfolio need admin conditional
	// this.user.id allows the Original poster to delete comments | may remove

	if (comment.user.toString() === commenterId || commenterId === this.user.toString()) {
		await comment.remove();
		await this.save();
	} else {
		return 'Only the author and an authorized user can delete this post.';
	}
};

// Working
PostSchema.methods.likeComment = async function(id, userId) {
	const comment = await this.comments.id(id);

	const likeExist = await comment.likes.pull({ user: userId });

	let exist =
		likeExist.length < 1 ? null : !likeExist[0].user ? null : likeExist[0].user.toString() === userId ? 1 : null;

	// Like and unlike
	if (exist) {
		const toRemove = await comment.likes.id({ _id: likeExist[0].id });
		await toRemove.remove();
	} else {
		await comment.likes.push({ user: userId });
	}

	await this.save();
	return comment.likes;
};

// Working
PostSchema.methods.likeDislikePost = async function(userId, type) {
	if (type === 'like') {
		const dislikeExist = await this.dislikes.id({ _id: userId });

		if (dislikeExist) {
			await dislikeExist.remove();
		}
		await this.likes.push(userId);
	}

	if (type === 'dislike') {
		const likeExist = await this.likes.id({ _id: userId });

		if (likeExist) {
			await likeExist.remove();
		}

		await this.dislikes.push(userId);
	}

	await this.save();

	/* 
	For testing only
	Solution for others should look like this.
	
	const response =
		type === 'like' ? await this.likes.pull({ user: userId }) : await this.dislikes.pull({ user: userId });

	return response; 
	*/

	return [ this.likes.length, this.dislikes.length ];
};

module.exports = mongoose.model('Post', PostSchema);
