var async = require('async'),
	keystone = require('keystone');

var Post = keystone.list('Post');

/**
 * List Posts
 */
exports.list = function(req, res) {
	var filters = {'state': 'published'};
	console.log(res.locals);
	if (res.locals.params.postCategory) {
		filters.categories = {$in: [res.locals.params.postCategory._id]};
	}

	var q = Post.paginate({
		page: req.query.page || 1,
		perPage: 3,
		maxPages: 10,
		filters: filters
	})
		.where('state', 'published')
		.sort('-publishedDate')
		.populate('author categories product postLayout gallery.widgets product product');

	/*if (res.locals.data.category) {
		q.where('categories').in([res.locals.data.category]);
	}*/
q.exec(function(err, items) {

		if (err) return res.apiError('database error', err);

		res.apiResponse({
			posts: items
		});

	});
}
