const express = require('express');
const connectDB = require('./config/db');
const colors = require('colors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const hpp = require('hpp');
const limiter = require('./middleware/rateLimiter');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const errorHandler = require('./middleware/errorHandler');

const users = require('./routes/users');
const auth = require('./routes/auth');
const posts = require('./routes/posts');

dotenv.config({
	path: './config/config.env'
});

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(hpp());
//app.use(limiter);
app.use(mongoSanitize());
app.use(xss());

// Routes
app.use('/api/v1.0/users', users);
app.use('/api/v1.0/auth', auth);
app.use('/api/v1.0/post', posts);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`.cyan.bold.underline);
});

process.on('unhandledRejection', (err, Promise) => {
	console.log('Error: Unhandled Rejection'.yellow, '\n', `Error Message: ${err.message}`.red.bold.underline);

	server.close(() => process.exit(1));
});
