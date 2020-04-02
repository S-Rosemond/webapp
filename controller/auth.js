const asyncHandler = require('../middleware/asyncHandler');
const sendTokenResponse = require('../utils/sendTokenResponse');
const ErrorResponse = require('../utils/ErrorResponse');
const User = require('../model/User');

exports.login = asyncHandler(async (params) => {});
exports.getLoggedUser = asyncHandler(async (params) => {});
exports.logout = asyncHandler(async (params) => {});
