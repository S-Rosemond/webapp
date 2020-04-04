const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');
const sendResponse = require('../utils/sendResponse');
const User = require('../model/User');
const Post = require('../model/Post');

// Working
exports.getPost = asyncHandler(async (req, res, next) => {
	const post = await Post.findById(req.params.id);

	if (!post) {
		return next(new ErrorResponse('The request post does not exist', 404));
	}

	sendResponse(res, post);
});

// Working
exports.postMessage = asyncHandler(async (req, res, next) => {
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

// Working
exports.updatePost = asyncHandler(async (req, res, next) => {
	let post = await Post.findById(req.params.id);

	if (!post) return next(new ErrorResponse('Post not found', 404));

	post = await Post.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	});

	sendResponse(res, post);
});

// Working.
exports.deletePost = asyncHandler(async (req, res, next) => {
	const post = await Post.findById(req.params.id);
	let postUser = '' + post.user;

	if (postUser !== req.user.id) {
		return next(new ErrorResponse('Unauthorized Access', 401));
	}

	await Post.findOneAndDelete({ _id: req.params.id });

	sendResponse(res);
});

//-----------------------------------------------------------------
// Alternate update with query timeout
const altUpdatePost = asyncHandler(async (req, res, next) => {
	let post = await Post.find({ _id: req.params.id }).maxTimeMS(500);

	if (post.length < 1) return next(new ErrorResponse('Post not found', 404));

	post = await Post.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	});

	sendResponse(res, post);
});
