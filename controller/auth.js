const asyncHandler = require('../middleware/asyncHandler');
const sendTokenResponse = require('../utils/sendTokenResponse');
const sendResponse = require('../utils/sendResponse');
const ErrorResponse = require('../utils/ErrorResponse');
const User = require('../model/User');

exports.login = asyncHandler(async (req, res, next) => {
	let { email, password } = req.body;
	password = password.toString();

	// select is actually needed for this(dot)
	const user = await User.findOne({ email }).select('+password');

	if (!user) {
		return next(new ErrorResponse('One or more credentials is incorrect, please review.', 400));
	}

	const passwordMatch = await user.matchPassword(password);

	if (!passwordMatch) {
		return next(new ErrorResponse('One or more credentials is incorrect, please review.', 400));
	}

	sendTokenResponse(res, user);
});
exports.getLoggedUser = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.user.id);

	sendResponse(res, user);
});
exports.logout = asyncHandler(async (req, res, next) => {
	res.cookie('Chirps', '', {
		expires: new Date(Date.now() + 5 * 1000),
		httpOnly: true
	});

	sendResponse(res);
});

// All working
