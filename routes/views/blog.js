var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Init locals
	locals.section = 'blog';
	locals.filters = {
		category: req.params.category
	};
	locals.data = {
		posts: [],
		categories: []
	};
	
	// Load all categories
	view.on('init', function(next) {
		
		keystone.list('PostCategory').model.find().sort('name').exec(function(err, results) {
			
			if (err || !results.length) {
				return next(err);
			}
			
			locals.data.categories = results;
			
			// Load the counts for each category
			async.each(locals.data.categories, function(category, next) {
				
				keystone.list('Post').model.count().where('categories').in([category.id]).exec(function(err, count) {
					category.postCount = count;
					next(err);
				});
				
			}, function(err) {
				next(err);
			});
			
		});
		
	});
	
	// Load the current category filter
	view.on('init', function(next) {
		req.params.category = 'Republik';
		locals.filters.category = 'Republik';
		if (req.params.category) {
			keystone.list('PostCategory').model.findOne({ key: locals.filters.category }).exec(function(err, result) {
				//console.log('result:',result);
				//locals.data.category = '5906d1c12042902f521ac8c7' || '590804bee4027ba1787c6575'; //Republik;
				locals.data.category = '590804bee4027ba1787c6575'; //Republik;
				next(err);
			});
		} else {
			next();
		}
		
	});
	
	// Load the posts
	view.on('init', function(next) {
		
		var q = keystone.list('Post').paginate({
				page: req.query.page || 1,
				perPage: 10,
				maxPages: 10
			})
			.where('state', 'published')
			.sort('-publishedDate')
			.populate('author categories product postLayout gallery.widgets');
		
		if (locals.data.category) {
			q.where('categories').in([locals.data.category]);
		}
		
		q.exec(function(err, results) {
			//console.log('here:', results);
			locals.data.posts = results;
			
			
			async.forEachOf(results.results, function(post, i, cb){
				if(post.gallery && post.gallery.widgets){
					async.forEachOf(post.gallery.widgets, function(widget, j, cb2){
						if(widget.type === 'carousel') {
							keystone.list('widgets').model.find()
								.where({_id: {$in: widget.carousel.widgets}}).exec(function (err, data) {
									locals.data.posts.results[i]._doc.gallery.widgets[j]._doc.carousel.widgets = data;
									//console.log(locals.data.posts.results[i]._doc.gallery.widgets[j]._doc.carousel.widgets);
									cb2();
								});
						}else{
							cb2();
						}
						
					},
						function(err){
							if(err){
								console.log('error', err);
							}
							console.log('done async 2');
							cb();
						}
					);
				}else{
					cb();
				}
			},
				function(err){
					if(err){
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
