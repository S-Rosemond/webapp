const asyncHandler = require('../middleware/asyncHandler');
const User = require('../model/User');

exports.friendsRequest = asyncHandler(async (req, res, next) => {
	const previousFriendReq = await User.mitigateFriendReq(req.user.id);

	if (previousFriendReq.status === 'rejected') {
		console.log(previousFriendReq.resubmissionDate);
	}
});
