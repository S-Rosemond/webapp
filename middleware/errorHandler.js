const getErrorMessage = require('../utils/getErrorMessage');
const sendResponse = require('../utils/sendResponse');

const errorHandler = (err, req, res, next) => {
	let error = getErrorMessage(err);

	sendResponse(res, undefined, error.statusCode, false, error.message);
};

module.exports = errorHandler;
