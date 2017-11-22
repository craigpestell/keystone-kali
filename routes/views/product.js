var keystone = require('keystone');
var async = require('async');

var populatePost = require('../populate-post');

exports = module.exports = function (req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {
		page: []
	};

	// Set locals
	locals.section = 'product';


	var loadMainPost = function(product, next){
		var q = keystone.list('Post').model.findOne()
			.where({_id: {$in: [product.mainPost]}})
			.sort('-publishedDate')
			.populate('author categories product postLayout gallery.widgets');

		q.exec(function (err, results) {
			locals.data.mainPost = results;
			//console.log('results:', results);
			next();
		});
	};
	

	// Load the posts
	var loadPosts = function(product, next){
		var q = keystone.list('Post').model
			.where({products: {$in: [product._id]}})
			.sort('-publishedDate')
			.populate('author categories product postLayout gallery.widgets');
		
		q.exec(function (err, results) {
			locals.data.posts = results;
			//console.log('results:', results);
			next();
		});

	};

	view.query('product', keystone.list('Product').model.findOne({slug:req.params.product})
		.populate('canonicalDiscipline technologies features mainCategory subCategory sizingChart'))
		.then(function (err, product, next) {
			if(!product) {
				next();
			}else{
				locals.page = product.mainCategory.key;
				locals.subCategory = product.subCategory.key;
				locals.data.page.title = product.name + ' - Kali Protectives';
			
				if (err) return next(err);
				
				loadPosts(product, function(){
					loadMainPost(product, function(){
						populatePost(product, next);
					});
				});
			}
		});
	
	view.render('product');
	
};
