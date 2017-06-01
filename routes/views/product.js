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



	// Load the posts
	var loadPosts = function(productId, next){

		keystone.list('categories').model.findOne()
		var q = keystone.list('Post')
			.where('state', 'published')
			.sort('-publishedDate')
			.populate('author categories product postLayout gallery.widgets product product');
		q.where('categories').in([locals.data.category])//.findOne({product:productId});
		

		q.exec(function (err, results) {
			//console.log('here:', results);
			locals.data.posts = results;
			if(results){
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
			}else{
				next();
			}
		});
	};

	view.query('product', keystone.list('Product').model.findOne({slug:req.params.product})
		.populate('canonicalDiscipline technologies features mainCategory subCategory sizingChart'))
		.then(function (err, results, next) {
			//console.log('results', results);

			//locals.product.specs = locals.product.specs.replace(new RegExp('col-xs-5', 'g'), 'col-xs-6');
			//locals.product.specs = locals.product.specs.replace(new RegExp('col-xs-7', 'g'), 'col-xs-6');
			//locals.product.usageChart = locals.product.usageChart.replace(new RegExp('col-xs-5', 'g'), 'col-xs-6');
			//locals.product.usageChart = locals.product.usageChart.replace(new RegExp('col-xs-7', 'g'), 'col-xs-6');
			if(!results) {
				next();
			}else{
				locals.page = results.mainCategory.key;
				locals.subCategory = results.subCategory.key;
				locals.data.page.title = results.name + ' - Kali Protectives';
			
				if (err) return next(err);
				
				loadPosts(results._id, next);
			}
		});
	
	view.render('product');
	
};
