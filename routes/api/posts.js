var async = require('async'),
	keystone = require('keystone');

var Post = keystone.list('Post');

/**
 * List Posts
 */
exports.list = function(req, res) {
	var filters = {'state': 'published'};
	console.log('api/posts page:', req.query.page);
	console.log('params:', res.locals.params);
	if (res.locals.params.postCategory) {
		filters.categories = {$in: [res.locals.params.postCategory._id]};
	}
	if (res.locals.params.postSubCategory) {
		filters.categories = {$in: [res.locals.params.postSubCategory._id]};
	}
	var q = Post.paginate({
		page: req.query.page || 1,
		perPage: 12,
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
