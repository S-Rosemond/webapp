const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');

const { register, updateUser, deleteUser } = require('../controller/user');

router.route('/register').post(register);
router.route('/update').put(protect, updateUser);
router.route('/deleteUser').delete(protect, deleteUser);

module.exports = router;
