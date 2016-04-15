var keystone = require('keystone');


var navigationData = require('../helmet-navigation-data');
var helmetCategoryData = require('../helmet-category-data');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	// Set locals
	locals.section = 'helmets';
	locals.helmetCategory = req.params.category;
	locals.helmetSubCategory = req.params.subCategory;
	
	//console.log(req.params);
	navigationData.getHelmetNavigationData(req.params.category, function (err, navigationData) {
		helmetCategoryData.getHelmetCategoryData(req.params.category, req.params.subCategory, function (err, helmetCategoryData) {
			locals.navHelmets = navigationData;
			locals.helmets = helmetCategoryData;
			// Render the view
			view.render('helmet-category');
		});
	});
};
 
