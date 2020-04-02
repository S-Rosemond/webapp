const jwt = require('jsonwebtoken');
const asyncHandler = require('./asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');
const User = require('../model/User');

const protect = asyncHandler(async (req, res, next) => {
	const header = req.headers.authorization;

	let token;

	if (req.headers.authorization && req.header.authorization.startsWith('Bearer')) {
		token = header.split('')[1];
	} else if (req.cookies.token) {
		token = req.cookies.Chirps;
	}

	if (!token) {
		return next(new ErrorResponse('Unauthorized Access', 401));
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = await User.findById(decoded.id);

		next();
	} catch (error) {
		return next(new ErrorResponse('Unauthorized Access', 401));
	}
});

module.exports = protect;
