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
Not allowing replies to have replies, not implementing recursive routing.
Add, delete, edit is similar to PostSchema 
*/

// Methods

/* 
Error: works but replies does not contain a CommentSchema just string in an array 
*/
CommentSchema.methods.addReply = async function(newReply, userId) {
	if (!newReply) return 'This field cannot be blank';

	await this.replies.push(newReply);
	await this.parent().save();

	const newCreatedReply = await this.replies.pull({ user: userId });
	return newCreatedReply;
};

module.exports = CommentSchema;

/* 
 Twitter allows comments to have comments will have to test this.CommentSchema self nesting.
*/
