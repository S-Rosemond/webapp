const sendError = (res, error, statusCode = 400, success = false) => {
	res.status(statusCode).json({ success, error });
};

module.exports = sendError;
