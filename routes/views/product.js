var keystone = require('keystone');
var navigationData = require('../product-navigation-data');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {
		page: []
	};

	// Set locals
	locals.section = 'product';
	
	view.query('product', keystone.list('Product').model.findOne({slug:req.params.product})
		.populate('technologies features mainCategory subCategory sizingChart'))
		.then(function (err, results, next) {

			/*
			locals.product.specs = locals.product.specs.replace(new RegExp('col-xs-5', 'g'), 'col-xs-6');
			locals.product.specs = locals.product.specs.replace(new RegExp('col-xs-7', 'g'), 'col-xs-6');
			locals.product.usageChart = locals.product.usageChart.replace(new RegExp('col-xs-5', 'g'), 'col-xs-6');
			locals.product.usageChart = locals.product.usageChart.replace(new RegExp('col-xs-7', 'g'), 'col-xs-6');
			*/

			locals.page = results.mainCategory.key;
			locals.subCategory = results.subCategory.key;
			locals.data.page.title = results.name + ' - Kali Protectives';
			
			if (err) return next(err);
			next();
		});

	navigationData.getProductNavigationData(req.params.category, function (err, data) {
		locals.products = data;
		// Render the view
		view.render('product');
	});
};
