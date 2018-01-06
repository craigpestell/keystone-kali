var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.page = req.params.page;
	locals.filters = {
		page: req.params.page
	};
	locals.data = {
		pages: []
	};

	// Load the current page
	view.on('init', function(next) {
		console.log('page...');
		var q = keystone.list('BasePage').model.findOne({
			slug: locals.filters.page
		});//.populate('author categories');

		q.exec(function(err, result) {
			
			if(result) {
				locals.data.page = result;
				locals.data.page.title = locals.data.page.title + ' - Kali Protectives';
				next(err);
				/*res.status(404).send(view.render('page'));/*.send('<html><head><meta charset=\'utf-8\'><title>Error</title>' +
					'<link rel=\'stylesheet\' href=\'/keystone/styles/error.css\'>' +
					'</head><body><div class=\'error\'><h1 class=\'error-title\'>Sorry, no page could be found at this address (404)</h1>' +
					'<div class="error-message">' + (err || '') + '</div></div></body></html>');*/
				//;
				
			}else{
				locals.data.page = {};
				var q = keystone.list('BasePage').model.findOne({
					slug: '404'
				});
				q.exec(function(err, result) {
					locals.data.page.title = "404 - Page not found - Kali Protectives";
					locals.data.page.contentHtml = result.contentHtml;
					res.status(404);
					next(404);

				});
			}
		});
	});

	// Load other posts
	/*view.on('init', function(next) {

		var q = keystone.list('Post').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');

		q.exec(function(err, results) {
			//locals.data.posts = results;
			next(err);
		});

	});*/

	view.render('page');

};
