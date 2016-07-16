var keystone = require('keystone');
var async = require('async');
/**
 * Get all subcategories and products in main category
 * */
module.exports.getProductCategoryData = function (discipline, category, subCategory, productDataCb){
	var categoryWhere = {};
	if(category) {
		categoryWhere = {slug:category};
	}
	var subCategoryWhere = {};
	if(subCategory) {
		subCategoryWhere = {slug:subCategory};
	}
	async.parallel({
			categories: function(callback){
				keystone.list('ProductCategory')
					.model.find(categoryWhere).exec(callback);
			},
			subcategories: function(callback){
				keystone.list('ProductSubCategory')
					.model.find(subCategoryWhere).sort('sortOrder').exec(callback);
			},
			products: function(callback){
				keystone.list('Product')
					.model.find().populate('mainCategory subCategory technologies').sort('sortOrder').exec(callback);
			}
		},
		function massage(err, results){
			var returnData = [];

			results.categories.forEach(function(cat){
				results.subcategories.forEach(function(subCat, j){
					if(subCat.products == undefined) {
						subCat.products = [];
					}
					//get all products for sub category
					results.products.forEach(function(product){
						if (subCat._id.equals(product.subCategory.id) && cat._id.equals(subCat.parentCategory)) {
							
							subCat.products.push(product);
						}
					});

					if(cat._id.equals(subCat.parentCategory)){
						returnData.push(subCat);
					}
				});
			});
			//console.log("MASSAGED RESULTS: ", returnData);
			//console.log(returnData.categories.bike.subCategories);
			productDataCb(null, returnData);
		}
	);

};
