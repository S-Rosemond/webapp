const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');
const rateLimiter = require('../middleware/rateLimiter');

const { login, getLoggedUser, logout } = require('../controller/auth');

router.route('/login').post(rateLimiter(10), login);
router.route('/user').get(protect, getLoggedUser);
router.route('/logout').post(protect, logout);

module.exports = router;
