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
	locals.section = 'technology-detail';
	locals.filters = {
		technology: req.params.technology,
	};

	//console.log(req.originalUrl);

	// Load the current post
	view.on('init', function (next) {

		var q = Post.model.findOne({
			//state: 'published',
			key: locals.filters.technology
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
			key: locals.filters.technology
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
		
		if (locals.filters.technology) {
			q.where('categories').in([locals.data.technology]);
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
					
					next(err);
				}
			);

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
