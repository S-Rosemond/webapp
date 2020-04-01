const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');
const sendResponse = require('../utils/sendResponse');
const User = require('../model/User');
const Post = require('../model/Post');

const postMessage = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.user.id);

	const { body, title } = req.body;

	let newPost = {
		body,
		title,
		author: user.name,
		avatar: user.avatar,
		user: req.user.id
	};

	const post = await Post.create(newPost);

	sendResponse(res, post);
});
