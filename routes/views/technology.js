var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = req.params.page;
	locals.filters = {
		page: 'technology'
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
			locals.data.page = result;
			next(err);
		});

	});

	view.query('technology', keystone.list('Technology').model.find()).then(function (err, results, next) {
		if (err) return next(err);
		next();
	});
	view.render('technology');
	
};
