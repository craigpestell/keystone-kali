var keystone = require('keystone');

exports = module.exports = function (req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {
		page: []
	};

	// Set locals
	locals.section = 'product';
	console.log('product slug:', req.params.product);
	view.query('product', keystone.list('Product').model.findOne({slug:req.params.product})
		.populate('canonicalDiscipline technologies features mainCategory subCategory sizingChart'))
		.then(function (err, results, next) {
			//console.log('results', results);

			//locals.product.specs = locals.product.specs.replace(new RegExp('col-xs-5', 'g'), 'col-xs-6');
			//locals.product.specs = locals.product.specs.replace(new RegExp('col-xs-7', 'g'), 'col-xs-6');
			//locals.product.usageChart = locals.product.usageChart.replace(new RegExp('col-xs-5', 'g'), 'col-xs-6');
			//locals.product.usageChart = locals.product.usageChart.replace(new RegExp('col-xs-7', 'g'), 'col-xs-6');
			if(!results) {
				next();
			}else{
				locals.page = results.mainCategory.key;
				locals.subCategory = results.subCategory.key;
				locals.data.page.title = results.name + ' - Kali Protectives';
			
				if (err) return next(err);
				next();
			}
		});
	
	view.render('product');
	
};
