var keystone = require('keystone');
var async = require('async');

var populatePost = require('../populate-post');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.page = 'republik';
	locals.section = 'republik';
	locals.filters = {
		category: req.params.category
	};
	locals.data = {
		posts: [],
		categories: []
	};

	// Load all categories
	view.on('init', function (next) {

		keystone.list('PostCategory').model.find().sort('name').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.categories = results;

			// Load the counts for each category
			async.each(locals.data.categories, function (category, next) {

				keystone.list('Post').model.count().where('categories').in([category.id]).exec(function (err, count) {
					category.postCount = count;
					next(err);
				});

			}, function (err) {
				next(err);
			});

		});

	});

	// Load the current category filter
	view.on('init', function (next) {
		req.params.category = 'republik';
		locals.filters.category = 'republik';
		if (req.params.category) {
			keystone.list('PostCategory').model.findOne({key: locals.filters.category}).populate('category').exec(function (err, result) {
				locals.data.category = result._id;
				next(err);
			});
		} else {
			next();
		}

	});

	// Load the posts
	view.on('init', function (next) {

		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 10,
			maxPages: 10
		})
			.where('state', 'published')
			.sort('-publishedDate')
			.populate('author categories product postLayout gallery.widgets product product');

		if (locals.data.category) {
			q.where('categories').in([locals.data.category]);
		}

		q.exec(function (err, results) {
			//console.log('here:', results);
			locals.data.posts = results;

			async.forEachOf(results.results, function (post, i, cb) {
					
					populatePost(post, cb);
					locals.data.posts[i] = post;
					
				},
				function (err) {
					if (err) {
						console.log('error', err);
					}
					console.log('done async 1');
					next(err);
				}
			);

		});

	});

	// Render the view
	view.render('blog');

};