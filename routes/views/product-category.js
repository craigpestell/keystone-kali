var keystone = require('keystone');


var navigationData = require('../product-navigation-data');
var productCategoryData = require('../product-category-data');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	// Set locals
	locals.page = req.params.category;
	
	locals.data = {
		dealers: [],
		page : {title: 'Kali Protectives'}
	};
	
	locals.section = 'products';
	locals.discipline = req.params.discipline;
	locals.productCategory = req.params.category;
	locals.productSubCategory = req.params.subCategory;
	
	//console.log(req.params);
	navigationData.getProductNavigationData(req.param.discipline, req.params.category, function (err, navigationData) {
		productCategoryData.getProductCategoryData(req.param.discipline, req.params.category, req.params.subCategory, 
			function (err, productCategoryData) {
			
				locals.navProducts = navigationData;
				locals.products = productCategoryData;
				if (req.params.category) {
					keystone.list('ProductCategory').model.findOne({slug:req.params.category}).exec(function(err, data){
						locals.data.page.title = data.name + ' - ' + locals.data.page.title;
	
						if (req.params.subCategory) {
							keystone.list('ProductSubCategory').model.findOne({slug:req.params.subCategory}).exec(function(err, data){
								locals.data.page.title = data.name + ' - ' + locals.data.page.title;
								// Render the view
								view.render('product-category');
							});
						}else{
	
							view.render('product-category');
							
						}
					});				
				}

		});
	});
};
 
