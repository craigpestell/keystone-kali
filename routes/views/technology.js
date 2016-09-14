var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.page = 'technology';
	
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
			locals.data.page.title = locals.data.page.title + '';
			next(err);
		});

	});

	view.query('technology', keystone.list('ProductTechnology').model.find()).then(function (err, results, next) {
		if (err) return next(err);
		next();
	});
	view.render('technology');
	
};
