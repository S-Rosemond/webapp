const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const hpp = require('hpp');
const limiter = require('./middleware/rateLimiter');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const errorHandler = require('./middleware/errorHandler');

dotenv.config({
	path: './config/config.env'
});

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(hpp());
app.use(limiter.bind(1));
app.use(mongoSanitize());
app.use(xss());

// Routes

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`.cyan.bold.underline);
});

process.on('unhandledRejection', (err, Promise) => {
	console.log('Error: Unhandled Rejection'.yellow, '\n', `Error Message: ${err.message}`.red.bold.underline);

	server.close(() => process.exit(1));
});
