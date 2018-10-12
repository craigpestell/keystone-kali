var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'moto';

	locals.filters = {
		page: 'moto'
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
			locals.data.page.title = locals.data.page.title + ' - Kali Protectives';
			next(err);
		});

	});

	//popuplate Home page data.
	view.query('moto', keystone.list('BasePage').model.findOne({slug:'moto'}).populate('slides')).then(function(err, data, next){
		if (err) return next(err);
		next();

	});
	
	// Render the view
	view.render('moto-splash');
	
};
