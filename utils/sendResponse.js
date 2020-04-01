const sendResponse = (res, data, statusCode = 200, success = true, error) => {
	res.status(statusCode).json({ success, data, error });
};

module.exports = sendResponse;
