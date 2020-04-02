const asyncHandler = require('../middleware/asyncHandler');
const sendTokenResponse = require('../utils/sendTokenResponse');
const sendResponse = require('../utils/sendResponse');
const ErrorResponse = require('../utils/ErrorResponse');
const User = require('../model/User');

exports.register = asyncHandler(async (req, res, next) => {
	let { name, email, password } = req.body;
	password = password.toString();

	let user = await User.findOne({ email });

	if (user) {
		return next(new ErrorResponse('Email already in use', 400));
	}

	user = await User.create({ name, email, password });

	sendTokenResponse(res, user);
});

exports.updateUser = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.user.id);
	const { name, email, password } = req.body;
	let update = { ...user };
	/* 
	Don't want to spread values below, can, but...
	 */
	if (name) update.name = name;
	if (email) update.email = email;
	if (password) update.password = password;

	 update = await user.update(update);

	sendResponse(res, update);
});

exports.deleteUser = asyncHandler(async (params) => {});

/* 
Not creating profile: not trying to rebuild twitter etc just replicate a chunk 
*/
