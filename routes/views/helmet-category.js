var keystone = require('keystone');


var navigationData = require('../navigation-data');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	// Set locals
	locals.section = 'helmets';
	locals.helmetCategory = req.params.category;
	locals.helmetSubCategory = req.params.subCategory;
	
	console.log(req.params);
	navigationData.getNavigationData(req.params.category, req.params.subCategory, function (err, data) {
		locals.helmets = data;
		// Render the view
		view.render('helmet-category');
	});
};
