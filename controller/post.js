const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');
const sendResponse = require('../utils/sendResponse');
const User = require('../model/User');
const Post = require('../model/Post');

exports.getPost = asyncHandler(async (req, res, next) => {
	const post = await Post.findById(req.params.id);

	if (!post) {
		return new ErrorResponse('The request post does not exist', 404);
	}

	sendResponse(res, post);
});

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

exports.updatePost = asyncHandler(async (req, res, next) => {
	let post = await Post.findById(req.params.id);

	if (!post) return new ErrorResponse('Post not found', 404);

	post = await Post.findByIdAndUpdate(req.params.id, req.body);

	sendResponse(res, post);
});

exports.deletePost = asyncHandler(async (req, res, next) => {});
