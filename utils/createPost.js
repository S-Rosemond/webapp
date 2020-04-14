function createPost(user, body, title) {
	const post = {
		user: user.id,
		avatar: user.avatar,
		author: user.name,
		body,
		title
	};

	return post;
}

module.exports = createPost;
