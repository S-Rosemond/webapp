const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	avatar: {
		type: String
	},
	body: {
		type: String,
		required: [ true, 'Comments cannot be blank' ]
	},
	replies: [
		{
			avatar: String,
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'users'
			},
			body: {
				type: String,
				required: [ true, 'This field cannot be blank' ]
			}
		}
	],
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
Not allowing replies to have replies, not implementing recursive routing.
Add, delete, edit is similar to PostSchema 
*/

// Methods
CommentSchema.methods.addReply = async function(newReply, userId) {
	if (!newReply) return 'This field cannot be blank';

	// this return array.length, don't assign to var
	await this.replies.push(newReply);
	await this.parent().save();

	/*
	 From my understand using pull without passing the _id should not delete the item, so far it doesn't.
	 From mongoose: 
	 "To remove a document from a subdocument array we may pass an object with a matching _id."
	 This solution imo is better than getting the last item pushed into the array
	*/

	const newCreatedReply = await this.replies.pull({ user: userId });

	/* for a real app pull would return an array of all replies made by the user just return the last one. Higher integrity because the array only contains post from x user. This can be handled here or frontend (not sure frontend needs)
	*/
	return newCreatedReply;
};

CommentSchema.methods.editReply = async function(newReply, replyId) {
	const reply = await this.replies.id({ _id: replyId });

	await reply.set({ body: newReply });
	await this.parent().save();

	const editedReply = await this.replies.id(replyId);

	return editedReply;
};

module.exports = CommentSchema;

/* 
 Twitter allows comments to have comments will have to test this.CommentSchema self nesting.
*/
