var keystone = require('keystone');
var async = require('async');

var populatePost = require('../populate-post');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.page = 'republik';
	locals.section = 'republik';
	locals.filters = {
		category: req.params.category,
	};
	locals.data = {
		page: { title: 'Kali Protectives' },
		posts: [],
		categories: [],
	};

	// Load all categories
	view.on('init', function(next) {
		keystone
			.list('PostCategory')
			.model.find()
			.sort('name')
			.exec(function(err, results) {
				if (err || !results.length) {
					return next(err);
				}

				locals.data.categories = results;

				// Load the counts for each category
				async.each(
					locals.data.categories,
					function(category, next) {
						keystone
							.list('Post')
							.model.count()
							.where('categories')
							.in([category.id])
							.exec(function(err, count) {
								category.postCount = count;
								next(err);
							});
					},
					function(err) {
						next(err);
					},
				);
			});
	});

	// Load the current category filter
	view.on('init', function(next) {
		req.params.category = req.params.category || 'republik';
		//if (req.params.category) {
		keystone
			.list('PostCategory')
			.model.find({ key: { $in: [locals.filters.category, req.params.category] } })
			.populate('category')
			.exec(function(err, result) {
				var cat = result.find(function(c) {
					if (c.key !== 'republik') {
						return c;
					}
				});
        if(!cat){
          cat = result[0];
        }
				// TODO: merge these two category vars
        locals.data.categoryDoc = cat;
				
				locals.data.category = cat._id;
				locals.data.page.title = cat.name + ' - Kali Protectives';

				next(err);
			});
		//} else {
		//	next();
		//}
	});

	// Load the posts
	view.on('init', function(next) {
		/*var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 10,
			maxPages: 10
		})*/

		var filters = { state: 'published' };
		if (locals.data.category) {
			filters.categories = { $in: [locals.data.category] };
		}

		var q = keystone
			.list('Post')
			.paginate({
				page: req.query.page || 1,
				perPage: 12,
				maxPages: 10,
				filters: filters,
			})
			.where('state', 'published')
			.sort('-publishedDate')
			.populate('author categories product postLayout gallery.widgets product product');

		if (locals.data.category) {
			q.where('categories').in([locals.data.category]);
		}

		q.exec(function(err, results) {
			if (!results) {
				next(err);
				return;
			}
			locals.data.posts = results.results;

			async.forEachOf(
				results,
				function(post, i, cb) {
					populatePost(post, cb);
					locals.data.posts[i] = post;
				},
				function(err) {
					if (err) {
						console.log('error', err);
					}
					next(err);
				},
			);
		});
	});

	// Render the view
	view.render('blog');
};
