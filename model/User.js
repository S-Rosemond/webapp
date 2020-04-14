const mongoose = require('mongoose');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const FriendSchema = require('./Friend');

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
	friendsRequest: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'users'
			},
			name: {
				type: String,
				required: true
			},
			avatar: String,
			email: {
				type: String,
				required: true
			},
			status: {
				type: String,
				enum: [ 'pending', 'accepted', 'rejected' ],
				default: 'pending'
			},
			dateCreated: {
				type: Date,
				default: Date.now
			},
			resubmissionDate: Date
		}
	],
	friendsList: [ FriendSchema ],
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

	next();
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

// Delete if using mitigate
UserSchema.methods.rejectFriendsRequest = async function(id) {
	const targetReq = await this.friendsRequest.id(id);
};

// Statics
UserSchema.statics.mitigateFriendReq = async function(reqId, type) {
	const oneDay = 24 * 60 * 60 * 1000;
	const reqExist = await this.friendsRequest.id(reqId);
	let message;

	if (!reqExist && type !== 'submit') return;

	if (reqExist.status === 'rejected') {
		const nextSubDate = new Date(reqExist.resubmissionDate);

		message = `You will be able to send a friends request again on ${nextSubDate.toLocaleString()}`;
	}

	if (type === 'cancel' && reqExist.status !== 'rejected') {
		const threeDays = oneDay * 3;
		const preventSpam = new Date(Date.now() + threeDays);

		reqExist.resubmissionDate = preventSpam;
		message = 'You will be able to send a friends request again in three days';

		//   Alternate code for ref
		//   const preventSpam = new Date(Date.now())
		//   preventSpam.setDate(preventSpam.getUTCDate() + 3)
		//   reqExist.resubmissionDate = preventSpam;
	}

	await this.save();

	return message;
};

module.exports = mongoose.model('User', UserSchema);
