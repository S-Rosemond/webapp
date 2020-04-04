const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');
const sendResponse = require('../utils/sendResponse');
const User = require('../model/User');
const Post = require('../model/Post');

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

exports.updateComment = asyncHandler(async (req, res, next) => {
	const post = await Post.findById(req.params.id);

	let updateRes = await post.updateComment(update, req.params.comment_id, req.user.id);

	if (updateRes[0] === false) {
		return new ErrorResponse(updateRes[1], 401);
	}

	sendResponse(res, updateRes);
});

exports.deleteComment = asyncHandler(async (req, res, next) => {
	const post = await Post.findById(req.params.id);

	const deleteRes = await post.deleteComment(req.params.comment_id, req.user.id);

	if (deleteRes) {
		return new ErrorResponse(deleteRes, 401);
	} else {
		sendResponse(res);
	}
});
