const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');

const { getPost, postMessage, updatePost, deletePost } = require('../controller/post');

router.route('/').post(protect, postMessage).get(protect, getPost);
router.route('/update').put(protect, updatePost);
router.route('/delete').delete(protect, deletePost);

module.exports = router;
