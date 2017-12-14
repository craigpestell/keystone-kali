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
	locals.section = 'republik';
	if(req.originalUrl.indexOf('/technology/post/') === 0){
		locals.section = 'technology-detail';
	}
	locals.filters = {
		post: req.params.post,
	};

	//console.log(req.originalUrl);
	
	// Load the current post
	view.on('init', function (next) {

		var q = Post.model.findOne({
			//state: 'published',
			key: locals.filters.post
		}).populate('author categories product gallery.widgets postLayout');

		q.exec(function (err, result) {
			
			if(result && result.product){
				var  q = Product.model.findOne({_id: result.product}).populate('technologies mainCategory subCategory');

				q.exec(function(err, product){
					locals.product = product;
					populatePost(result, function(){
						locals.post = result;
						next(err);
					});
				})			
			}else if(result){
				populatePost(result, function(){
					locals.post = result;
					next(err);
				});
			}else{
				next(err);
			}
	
		});
	});
	
	// Load products
	view.on('init', function (next) {

		var q = Post.model.findOne({
			//state: 'published',
			key: locals.filters.post
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


	// Load the posts
	view.on('init', function (next) {

		/*var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 10,
			maxPages: 10
		})*/
		var q = keystone.list('Post').model.find()
			.where('state', 'published')
			.sort('-publishedDate')
			.populate('author categories product postLayout gallery.widgets');
		if(req.originalUrl.indexOf('/republik/post/') === 0){
			locals.data.category = '590804bee4027ba1787c6575';
		}
		if(req.originalUrl.indexOf('/technology/post/') === 0){
			if(process.env.DO) {
				locals.data.category = '5a1a5061bc13d294547da833';
			}else{
				locals.data.category = '5a1a28f4ecddff59637a740c';
			}
		}
		
		if (locals.data.category) {
			q.where('categories').in([locals.data.category]);
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

	});



	// Load technologies
	view.on('init', function (next) {

		var q = keystone.list('Technology').model.find();

		q.exec(function (err, result) {

			if(result){
				locals.technology = result;
				next(err);
			}else{
				next(err);
			}


		});
	});

	// Load product technologies
	view.on('init', function (next) {

		var q = keystone.list('ProductTechnology').model.find();

		q.exec(function (err, result) {

			if(result){
				locals.productTechnology= result;
				next(err);
			}else{
				next(err);
			}


		});
	});

	// Load comments on the Post
	/*view.on('init', function (next) {
		PostComment.model.find()
			.where('post', locals.post)
			.where('commentState', 'published')
			.where('author').ne(null)
			.populate('author', 'name photo')
			.sort('-publishedOn')
			.exec(function (err, comments) {
				if (err) return res.err(err);
				if (!comments) return res.notfound('Post comments not found');
				locals.comments = comments;
				next();
			});
	});*/

	// Create a Comment
	/*view.on('post', { action: 'comment.create' }, function (next) {

		var newComment = new PostComment.model({
			state: 'published',
			post: locals.post.id,
			author: locals.user.id,
		});

		var updater = newComment.getUpdateHandler(req);

		updater.process(req.body, {
			fields: 'content',
			flashErrors: true,
			logErrors: true,
		}, function (err) {
			if (err) {
				validationErrors = err.errors;
			} else {
				req.flash('success', 'Your comment was added.');
				return res.redirect('/blog/post/' + locals.post.key + '#comment-id-' + newComment.id);
			}
			next();
		});

	});

	// Delete a Comment
	view.on('get', { remove: 'comment' }, function (next) {

		if (!req.user) {
			req.flash('error', 'You must be signed in to delete a comment.');
			return next();
		}

		PostComment.model.findOne({
			_id: req.query.comment,
			post: locals.post.id,
		})
			.exec(function (err, comment) {
				if (err) {
					if (err.name === 'CastError') {
						req.flash('error', 'The comment ' + req.query.comment + ' could not be found.');
						return next();
					}
					return res.err(err);
				}
				if (!comment) {
					req.flash('error', 'The comment ' + req.query.comment + ' could not be found.');
					return next();
				}
				if (comment.author != req.user.id) {
					req.flash('error', 'Sorry, you must be the author of a comment to delete it.');
					return next();
				}
				comment.commentState = 'archived';
				comment.save(function (err) {
					if (err) return res.err(err);
					req.flash('success', 'Your comment has been deleted.');
					return res.redirect('/blog/post/' + locals.post.key);
				});
			});
	});*/

	// Render the view
	view.render('post');

}
