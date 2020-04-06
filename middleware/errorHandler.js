const getErrorMessage = require('../utils/getErrorMessage');
const sendError = require('../utils/sendError');

const errorHandler = (err, req, res, next) => {
	let error = getErrorMessage(err);

	sendError(res, error.message, error.statusCode);
};

module.exports = errorHandler;
