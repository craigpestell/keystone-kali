var keystone = require("keystone");
var Post = keystone.list("Post");
var Product = keystone.list("Product");
//var PostComment = keystone.list('PostComment');
var async = require("async");
var populatePost = require("../populate-post");

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {};
	console.log(req.params);
	// Init locals
	locals.section = "technology";
	locals.filters = {
		key: "technology"
	};

	//console.log(req.originalUrl);

	// Load the current post
	view.on("init", function(next) {
		var q = Post.model
			.findOne({
				//state: 'published',
				key: locals.filters.key
			})
			.populate("author categories product gallery.widgets");

		q.exec(function(err, result) {
			if (result) {
				if (result.product) {
					var q = Product.model
						.findOne({ _id: result.product })
						.populate("technologies mainTechnology subTechnology");

					q.exec(function(err, product) {
						locals.product = product;
						populatePost(result, function() {
							locals.post = result;
							next(err);
						});
					});
				} else {
					populatePost(result, function() {
						locals.post = result;
						next(err);
					});
				}
			} else {
				next(err);
			}
		});
	});

	// Load products
	view.on("init", function(next) {
		var q = Post.model.findOne({
			//state: 'published',
			key: locals.filters.key
		}); //.populate('products');

		q.exec(function(err, result) {
			if (result) {
				populatePost(result, function() {
					//locals.post = result;
					next(err);
				});
			} else {
				next(err);
			}
		});
	});

	// Load technologies
	view.on("init", function(next) {
		var q = keystone.list("Technology").model.find();

		q.exec(function(err, result) {
			if (result) {
				locals.technology = result;
				next(err);
			} else {
				next(err);
			}
		});
	});

	// Load technologies
	view.on("init", function(next) {
		var q = keystone
			.list("ProductTechnology")
			.model.find()
			.sort("year");

		q.exec(function(err, result) {
			if (result) {
				locals.productTechnology = result;
				next(err);
			} else {
				next(err);
			}
		});
	});

	// Load the posts
	view.on("init", function(next) {
		/*var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 10,
			maxPages: 10
		})*/
		if (process.env.DO) {
			locals.data.category = "5a1a5061bc13d294547da833";
		} else {
			locals.data.category = "5a1a28f4ecddff59637a740c";
		}

		var filters = { state: "published" };
		if (locals.data.category) {
			filters.categories = { $in: [locals.data.category] };
		}

		var q = keystone
			.list("Post")
			.paginate({
				page: req.query.page || 1,
				perPage: 20,
				maxPages: 10,
				filters: filters
			})
			.where("state", "published")
			.sort("-publishedDate")
			.populate("author categories product postLayout gallery.widgets");

		if (locals.data.category) {
			q.where("categories").in([locals.data.category]);
		}

		q.exec(function(err, results) {
			//console.log('here:', results);
			locals.data.posts = results.results;
			if (!results) {
				next(err);
				return;
			}
			async.forEachOf(
				results,
				function(post, i, cb) {
					populatePost(post, cb);
					locals.data.posts[i] = post;
				},
				function(err) {
					if (err) {
						console.log("error", err);
					}

					next(err);
				}
			);
		});
	});

	// Render the view
	view.render("technology");
};
