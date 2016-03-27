var keystone = require('keystone');
var async = require('async');

module.exports.getNavigationData = function (category, subCategory, helmetDataCb){
	var categoryWhere = {};
	var subCatWhere = {};
	if(category) {
		categoryWhere = {slug:category};
	}
	if(subCategory){
		subCatWhere = {slug:subCategory};
	}
	async.parallel({
			categories: function(callback){
				keystone.list('HelmetCategory').model.find(categoryWhere).exec(callback);
			},
			subcategories: function(callback){
				keystone.list('HelmetSubCategory').model.find(subCatWhere).exec(callback);
			},
			helmets: function(callback){
				keystone.list('Helmet').model.find().exec(callback);
			}
		},
		function massage(err, results){
			var returnData = [];

			results.categories.forEach(function(cat){
				results.subcategories.forEach(function(subCat, j){
					if(subCat.helmets == undefined) {
						subCat.helmets = [];
					}
					//get all helmets for sub category
					results.helmets.forEach(function(helmet){
						if (subCat._id.equals(helmet.subCategory) && cat._id.equals(subCat.parentCategory)) {
							subCat.helmets.push(helmet);
						}
					});

					if(cat._id.equals(subCat.parentCategory)){
						returnData.push(subCat);
					}
				});
			});
			//console.log("MASSAGED RESULTS: ", returnData);
			//console.log(returnData.categories.bike.subCategories);
			helmetDataCb(null, returnData);
		}
	);
};
