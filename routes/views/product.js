var keystone = require('keystone');
var async = require('async');

var populatePost = require('../populate-post');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {
		page: [],
	};

	// Set locals
	locals.section = 'product';

	var loadMainPost = function(product, next) {
		var q = keystone
			.list('Post')
			.model.findOne()
			.where({ _id: { $in: [product.mainPost] } })
			.sort('-publishedDate')
			.populate('author categories product postLayout gallery.widgets');

		q.exec(function(err, results) {
			locals.data.mainPost = results;
			next();
		});
	};

	// Load the posts
	var loadPosts = function(product, next) {
		var q = keystone
			.list('Post')
			.model.where({ products: { $in: [product._id] }, state: 'published' })
			.sort('-publishedDate')
			.populate('author categories product postLayout gallery.widgets');

		q.exec(function(err, results) {
			locals.data.posts = results;
			next();
		});
	};
	var productWhere = { slug: req.params.product };
	view
		.query(
			'product',
			keystone
				.list('Product')
				.model.find(productWhere)
				.populate('canonicalDiscipline technologies features mainCategory subCategory sizingChart version'),
		)
		.then(function(err, products, next) {
			if (!products) {
				next();
			} else {
				if (err) return next(err);

				var p = undefined;
				if (res.locals.params.version) {
					products.forEach(function(product) {
						if (res.locals.params.version.key === product.version.key) {
							locals.page = product.mainCategory.key;
							locals.subCategory = product.subCategory.key;
							locals.data.page.title = product.name + ' - Kali Protectives';
							if (product.mainCategory) {
								locals.data.page.title = product.mainCategory.name;
							}
							if (!p) {
								p = product;
							}
						}
					});
				} else {
					//find latest version

					var latestVersion = Math.max.apply(
						Math,
						res.locals.productVersions.map(function(v) {
							return parseInt(v.name);
						}),
					);
					products.forEach(function(product) {
						// if the version param was specified, just find that specific version.
						// current version is never than stored.
						if (!p || product.version.key > p.version.key) {
							p = product;
						}
						if (latestVersion == product.version.key) {
							locals.page = product.mainCategory.key;
							locals.subCategory = product.subCategory.key;
							p = product;
						}
					});
				}
				if (!p) {
					res.redirect('/404');
				}
				if (!res.locals.params.version && p.version.key != latestVersion) {
					return res.redirect(
						301,
						'https://' +
							(p.canonicalDiscipline.slug + '.kaliprotectives.com/archive/' + p.version.key + req.originalUrl),
					);
				}

				var pageTitle = '';
				if (locals.params.discipline) {
					pageTitle += locals.params.discipline.name;
				} else {
					// default to bike for now.
					pageTitle += 'Bike';
				}
				if (p.mainCategory) {
          if (pageTitle.length > 0) {
						pageTitle += ' ';
					}
					pageTitle += p.mainCategory.name;
				}

				if (pageTitle.length > 0) {
					pageTitle += ' - ';
				}
				pageTitle += p.name + ' - Kali Protectives';
				locals.data.page.title = pageTitle;

				locals.product = p;

				loadPosts(p, function() {
					loadMainPost(p, function() {
						populatePost(p, next);
					});
				});
			}
		});

	view.render('product');
};
