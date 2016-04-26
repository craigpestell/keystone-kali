var keystone = require('keystone');
var async = require('async');

module.exports.getProductNavigationData = function (category, productDataCb){
	var categoryWhere = {};
	if(category) {
		categoryWhere = {slug:category};
	}
	
	async.parallel({
			categories: function(callback){
				keystone.list('ProductCategory').model.find(categoryWhere).exec(callback);
			},
			subcategories: function(callback){
				keystone.list('ProductSubCategory').model.find().sort('sortOrder').exec(callback);
			},
			products: function(callback){
				keystone.list('Product').model.find().populate('mainCategory subCategory').sort('sortOrder').exec(callback);
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
