var keystone = require('keystone');
var navigationData = require('../product-navigation-data');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'product';
	
	
	view.query('product', keystone.list('Product').model.findOne({slug:req.params.product})
		.populate('technologies features mainCategory subCategory'))
		.then(function (err, results, next) {
		
		locals.page = results.mainCategory.key;
		locals.subCategory = results.subCategory.key;
		if (err) return next(err);
			next();
		});
	navigationData.getProductNavigationData(req.params.category, function (err, data) {
		locals.products = data;
		
		// Render the view
		view.render('product');
	});
};
