const asyncHandler = require('../middleware/asyncHandler');
const sendTokenResponse = require('../utils/sendTokenResponse');
const sendResponse = require('../utils/sendResponse');
const ErrorResponse = require('../utils/ErrorResponse');
const User = require('../model/User');

// Working
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

// Working
exports.updateUser = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.user.id);
	const { name, email } = req.body;

	let update = {};
	update.name = user._doc.name;
	update.email = user._doc.email;

	if (name) update.name = name;
	if (email) update.email = email;
	/*  
	await updateOne works but... res info include hash !important: 
	don't use
	await user.updateOne(update); 
	*/
	await User.findByIdAndUpdate(req.user.id, update);
	update = await User.findById(req.user.id);

	sendResponse(res, update);
});

exports.deleteUser = asyncHandler(async (params) => {});

exports.updatePassword = asyncHandler(async (params) => {});

/* 
Not creating profile: not trying to rebuild twitter etc just replicate a chunk 
*/
