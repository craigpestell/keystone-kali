var keystone = require('keystone');


var navigationData = require('../product-navigation-data');
var productCategoryData = require('../product-category-data');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	// Set locals
	locals.page = req.params.category;
	locals.section = 'products';
	locals.productCategory = req.params.category;
	locals.productSubCategory = req.params.subCategory;
	
	//console.log(req.params);
	navigationData.getProductNavigationData(req.params.category, function (err, navigationData) {
		productCategoryData.getProductCategoryData(req.params.category, req.params.subCategory, function (err, productCategoryData) {
			locals.navProducts = navigationData;
			locals.products = productCategoryData;
			// Render the view
			view.render('product-category');
		});
	});
};
 
