var keystone = require('keystone');
var async = require('async');

/**
 * Get all subcategories and products in main category
 * */
var productCategoryData = function (locals, productDataCb){
	var disciplineWhere = {slug: ''};
	if (locals.params.discipline) {
		disciplineWhere.slug = locals.params.discipline.slug;
	}

	var versionWhere = {version: locals.currentProductVersion._id};
	if (locals.params.version) {
		locals.productVersions.forEach(function(version){
			if(version.key === locals.params.version.key){
				versionWhere = {version: version._id}
			}
		})
		//versionWhere = params.version;
	}
	var categoryWhere = {};
	if(locals.params.category) {
		categoryWhere = {slug: locals.params.category.slug};
	}
	var subCategoryWhere = {};
	if(locals.params.subCategory) {
		subCategoryWhere = {slug:locals.params.subCategory.slug};
	}
	
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
						.model.find().where(Object.assign(disciplineWhere,versionWhere))
						.populate('mainCategory subCategory technologies').sort('sortOrder').exec(callback);
				}
			},
			function massage(err, results) {
				var returnData = [];
				//console.log('results:', results);
				results.categories.forEach(function (cat) {
					results.subcategories.forEach(function (subCat, j) {
						if (subCat.products === undefined) {
							subCat.products = [];
						}
						//get all products for sub category
						results.products.forEach(function (product) {
							if (subCat._id.equals(product.subCategory.id) && cat._id.equals(subCat.parentCategory)) {
								// Find correct version:
								// if there is no version param find the most recent version
								subCat.products.push(product);
							}
						});

						if (subCat.products.length > 0 && cat._id.equals(subCat.parentCategory)) {
							returnData.push(subCat);
						}
					});
				});
				results.subcategories = results.subcategories.filter(function(subCategory){
					return subCategory.products.length > 0;
				});
				//console.log("MASSAGED RESULTS: ", returnData);
				//console.log(returnData.categories.bike.subCategories);
				productDataCb(null, returnData);
			}
		);
	});
};



exports = module.exports = function (req, res, next) {
	//console.log('ROUTE: ', req.route);
	console.log('PARAMS: ', res.locals.params);
	//console.log('res.locals', res.locals);
    var view = new keystone.View(req, res);
    var locals = res.locals;
    // Set locals
    locals.page = req.params.category;

    locals.data = {
        page: {title: 'Kali Protectives'}
    };

    locals.section = 'products';
    
	if (res.locals.params.category || res.locals.params.version) {
		//console.log('params:', res.locals.params);
		productCategoryData(res.locals, function (err, productCategoryData) {
			
			locals.products = productCategoryData;
			//console.log('products:',locals.products);
		
			//console.log('category param: ', res.locals.params.category);
			var titleCategory = 'Archives';
			if(res.locals.params.category){
				titleCategory = res.locals.params.category.name;
			}
			locals.data.page.title = titleCategory + ' - ' + locals.data.page.title;
			if (res.locals.params.subCategory) {
				locals.data.page.title = res.locals.params.subCategory.name + ' - ' + locals.data.page.title;
			}
			view.render('product-category');
		});
	}else{
		next();
	}
};
 
