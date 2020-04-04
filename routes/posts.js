const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');

const { getPost, postMessage, updatePost, deletePost } = require('../controller/post');
const { comment, updateComment, deleteComment } = require('../controller/comments');

router.route('/').post(protect, postMessage);
router.route('/:id').put(protect, updatePost).delete(protect, deletePost).get(protect, getPost);
router.route('/:id/:comment_id').post(protect, comment).put(protect, updateComment).delete(deleteComment);

module.exports = router;
