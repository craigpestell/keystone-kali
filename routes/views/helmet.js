var keystone = require('keystone');
var navigationData = require('../helmet-navigation-data');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'helmet';
	
	view.query('helmet', keystone.list('Helmet').model.findOne({slug:req.params.helmet}));
	navigationData.getHelmetNavigationData(req.params.category, function (err, data) {
		locals.helmets = data;

		// Render the view
		view.render('helmet');
	});

};
