var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'helmet';
	
	// Load the galleries by sortOrder
	view.query('helmet', keystone.list('Helmet').model.findOne({slug:req.params.helmet}));

	// Render the view
	view.render('helmet');

};
