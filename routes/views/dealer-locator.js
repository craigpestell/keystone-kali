var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'dealer-locator';
	
	locals.data = {
		dealers: []
	};

	// Load the current post
	view.on('init', function(next) {

		var q = keystone.list('Dealer').model.find({});

		q.exec(function(err, result) {
			locals.data.dealers = result;
			next(err);
		});

	});

	// Load other posts
	// Render the view
	view.render('dealer-locator');

};
