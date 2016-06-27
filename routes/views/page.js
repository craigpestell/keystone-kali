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

		var q = keystone.list('BasePage').model.findOne({
			slug: locals.filters.page
		});//.populate('author categories');

		q.exec(function(err, result) {
			if(!result || result.length === 0) {
				return res.status(404).send(keystone.wrapHTMLError('Sorry, no page could be found at this address (404)'));
			}
			locals.data.page = result;
			locals.data.page.title = locals.data.page.title + ' - Kali Protectives';
			console.log('page title:', locals.data.page.title);
			next(err);
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

	// Render the view
	view.render('page');

};
