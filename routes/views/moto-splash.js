var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'moto';
	
	//popuplate Home page data.
	view.query('moto', keystone.list('BasePage').model.findOne({slug:'moto'}).populate('slides'));
	
	// Render the view
	view.render('moto-splash');
	
};
