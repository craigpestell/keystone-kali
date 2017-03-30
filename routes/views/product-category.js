var keystone = require('keystone');
var async = require('async');

/**
 * Get all subcategories and products in main category
 * */
var productCategoryData = function (params, productDataCb){
	var disciplineWhere = {slug: ''};
	if (params.discipline) {
		disciplineWhere.slug = params.discipline.slug;
	}

	var categoryWhere = {};
	if(params.category) {
		categoryWhere = {slug: params.category.slug};
	}
	var subCategoryWhere = {};
	if(params.subCategory) {
		subCategoryWhere = {slug:params.subCategory.slug};
	}
	console.log('disciplineWhere', disciplineWhere);
	keystone.list('Discipline').model.find().where(disciplineWhere).exec(function (err, discipline) {
		
		var disciplineWhere = {};
		if(discipline.length > 0) {
			disciplineWhere = {disciplines: discipline[0]._id};
		}
		async.parallel({
				categories: function (callback) {
					keystone.list('ProductCategory')
						.model.find(categoryWhere).exec(callback);
				},
				subcategories: function (callback) {
					keystone.list('ProductSubCategory')
						.model.find(subCategoryWhere).where(disciplineWhere).sort('sortOrder').exec(callback);
				},
				products: function (callback) {
					keystone.list('Product')
						.model.find().where(disciplineWhere)
						.populate('mainCategory subCategory technologies').sort('sortOrder').exec(callback);
				}
			},
			function massage(err, results) {
				console.log('results:', results);
				var returnData = [];

				results.categories.forEach(function (cat) {
					results.subcategories.forEach(function (subCat, j) {
						if (subCat.products == undefined) {
							subCat.products = [];
						}
						//get all products for sub category
						results.products.forEach(function (product) {
							if (subCat._id.equals(product.subCategory.id) && cat._id.equals(subCat.parentCategory)) {

								subCat.products.push(product);
							}
						});

						if (cat._id.equals(subCat.parentCategory)) {
							returnData.push(subCat);
						}
					});
				});
				//console.log("MASSAGED RESULTS: ", returnData);
				//console.log(returnData.categories.bike.subCategories);
				productDataCb(null, returnData);
			}
		);
	});
};



exports = module.exports = function (req, res, next) {
	console.log('inside product-category route');
	//console.log('ROUTE: ', req.route);
	//console.log('PARAMS: ', req.params);
	//console.log('res.locals', res.locals);
    var view = new keystone.View(req, res);
    var locals = res.locals;
    // Set locals
    locals.page = req.params.category;

    locals.data = {
        page: {title: 'Kali Protectives'}
    };

    locals.section = 'products';
    console.log('params:', res.locals.params);
	if (res.locals.params.category) {
		//console.log('params:', res.locals.params);
		productCategoryData(res.locals.params, function (err, productCategoryData) {
			
			locals.products = productCategoryData;
			//console.log('products:',locals.products);
		
			//console.log('category param: ', res.locals.params.category);
			locals.data.page.title = res.locals.params.category.name + ' - ' + locals.data.page.title;
			if (res.locals.params.subCategory) {
				locals.data.page.title = res.locals.params.subCategory.name + ' - ' + locals.data.page.title;
			}
			view.render('product-category');
		});
	}else{
		next();
	}
};
 
