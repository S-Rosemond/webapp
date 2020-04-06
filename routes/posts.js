const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');

const { getPost, postMessage, updatePost, deletePost, likePost } = require('../controller/post');
const { comment, updateComment, deleteComment, likeComment } = require('../controller/comments');

router.route('/').post(protect, postMessage);

router.route('/:id').get(protect, getPost).post(protect, comment).put(protect, updatePost).delete(protect, deletePost);

// needs research
router.route('/:id/like').post(protect, likePost);

router.route('/:id/:comment_id').post(protect, likeComment).put(protect, updateComment).delete(protect, deleteComment);

module.exports = router;
