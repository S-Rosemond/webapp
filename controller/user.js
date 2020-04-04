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

	// Retest needed 4/4/2020
	update = await User.findByIdAndUpdate(req.user.id, update, {
		new: true
	});

	sendResponse(res, update);
});

// Working
exports.deleteUser = asyncHandler(async (req, res, next) => {
	// Select is needed otherwise password hash exposed
	const user = await User.findOneAndDelete(
		{ _id: req.user.id },
		{
			select: 'name email'
		}
	);

	sendResponse(res, user);
});

// needs testing 4/4/2020
exports.loggedInUpdatePassword = asyncHandler(async (req, res, next) => {
	let { password } = req.body;
	password = password.toString();

	const user = await User.findByIdAndUpdate(req.user.id, password);

	sendResponse(res, user);
});

// Alternate deleteUser
const deleteUserWithConfirmation = asyncHandler(async (req, res, next) => {
	/* 
	ask user to enter password before deletion 
	if password match then delete user
	
	*/
	let { password } = req.body;
	const user = await User.findById(req.user.id);

	const passwordMatch = await user.matchPassword(password);

	if (!passwordMatch) {
		return next(new ErrorResponse('Please enter your password to confirm account deletion', 400));
	}

	await User.findOneAndDelete(
		{ _id: req.user.id },
		{
			select: 'name email'
		}
	);

	sendResponse(res);
});
/* 
Not creating profile: not trying to rebuild twitter etc just replicate a chunk 
*/
