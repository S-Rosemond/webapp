const ErrorResponse = require('./ErrorResponse');

const getErrorMessage = (err) => {
	let error = { ...err };

	error.message = err.message;

	if (err.name === 'CastError') {
		const message = 'Bad Request';
		error = new ErrorResponse(message, 400);
	}
	if (err.code === 11000) {
		const message = 'Bad Request, Duplicate Entry.';
		error = new ErrorResponse(message, 400);
	}
	if (err.name === 'ValidationError') {
		const message = Object.values(err.errors).map((val) => {
			return val.message;
		});

		error = new ErrorResponse(message, 400);
	}

	return error;
};

module.exports = getErrorMessage;
