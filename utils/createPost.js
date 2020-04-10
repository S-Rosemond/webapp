function createPost(user, body) {
	const post = {
		user: user.id,
		avatar: user.avatar,
		body
	};

	return post;
}

module.exports = createPost;
