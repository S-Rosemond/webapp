const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');
const sendResponse = require('../utils/sendResponse');
const sendError = require('../utils/sendError');
const User = require('../model/User');
const Post = require('../model/Post');

// Working
exports.comment = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.user.id);
	const post = await Post.findById(req.params.id);
	const { body } = req.body;
	let newComment = {
		body,
		avatar: user.avatar,
		user: req.user.id
	};

	const comment = await post.addComment(newComment);

	sendResponse(res, comment);
});

// Working
exports.updateComment = asyncHandler(async (req, res, next) => {
	const { body } = req.body;

	if (!body.length) {
		return next(new ErrorResponse('This field cannot be blank'));
	}

	const post = await Post.findById(req.params.id);

	let updateRes = await post.updateComment(body, req.params.comment_id, req.user.id);

	if (updateRes[0] === false) {
		return next(new ErrorResponse(updateRes[1], 401));
	}

	sendResponse(res, updateRes);
});

// Working
exports.deleteComment = asyncHandler(async (req, res, next) => {
	const post = await Post.findById(req.params.id);

	const deleteError = await post.deleteComment(req.params.comment_id, req.user.id);

	if (deleteError) {
		return next(new ErrorResponse(deleteError, 401));
	} else {
		sendResponse(res);
	}
});

// Working but need to test mult user
exports.likeComment = asyncHandler(async (req, res, next) => {
	const post = await Post.findById(req.params.id);

	const likes = await post.likeComment(req.params.comment_id, req.user.id);

	sendResponse(res, likes);
});
