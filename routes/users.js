const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');

const { register, updateUser, deleteUser, loggedInUpdatePassword } = require('../controller/user');

router.route('/register').post(register);
router.route('/update').put(protect, updateUser);
router.route('/delete-user').delete(protect, deleteUser);
router.route('/update-password').put(protect, loggedInUpdatePassword);

module.exports = router;
