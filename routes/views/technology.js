var keystone = require('keystone');
var Post = keystone.list('Post');
var Product = keystone.list('Product');
//var PostComment = keystone.list('PostComment');
var async = require('async');
var populatePost = require('../populate-post');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {};

	// Init locals
	locals.section = 'technology';
	locals.filters = {
		key: 'technology',
	};

	//console.log(req.originalUrl);

	// Load the current post
	view.on('init', function (next) {

		var q = Post.model.findOne({
			//state: 'published',
			key: locals.filters.key
		}).populate('author categories product gallery.widgets');

		q.exec(function (err, result) {

			if(result){
				if(result.product){
					var  q = Product.model.findOne({_id: result.product}).populate('technologies mainTechnology subTechnology');

					q.exec(function(err, product){
						locals.product = product;
						populatePost(result, function(){
							locals.post = result;
							next(err);
						});
					})
				}else{
					populatePost(result, function(){
						locals.post = result;
						next(err);
					});
				}
			}else{
				next(err);
			}

		});
	});

	// Load products
	view.on('init', function (next) {

		var q = Post.model.findOne({
			//state: 'published',
			key: locals.filters.key
		});//.populate('products');

		q.exec(function (err, result) {

			if(result){
				populatePost(result, function(){
					//locals.post = result;
					next(err);
				});
			}else{
				next(err);
			}


		});
	});

	// Load technologies
	view.on('init', function (next) {

		var q = keystone.list('ProductTechnology').model.find();

		q.exec(function (err, result) {

			if(result){
				locals.technology = result;
				next(err);
			}else{
				next(err);
			}


		});
	});

	// Load the posts
	/*view.on('init', function (next) {

		
		var q = keystone.list('Post').model.find()
			.where('state', 'published')
			.sort('-publishedDate')
			.populate('author categories product postLayout gallery.widgets');

		if (locals.filters.key) {
			q.where('categories').in([locals.data.key]);
		}

		q.exec(function (err, results) {
			//console.log('here:', results);
			locals.data.posts = results;
			if(!results){
				next(err);
				return;
			}
			async.forEachOf(results, function (post, i, cb) {

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
	});*/


	// Render the view
	view.render('technology');

}
