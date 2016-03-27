var keystone = require('keystone');
var async = require('async');

module.exports.getHelmetNavigationData = function (category, helmetDataCb){
	var categoryWhere = {};
	if(category) {
		categoryWhere = {slug:category};
	}
	
	async.parallel({
			categories: function(callback){
				keystone.list('HelmetCategory').model.find(categoryWhere).exec(callback);
			},
			subcategories: function(callback){
				keystone.list('HelmetSubCategory').model.find().exec(callback);
			},
			helmets: function(callback){
				keystone.list('Helmet').model.find().populate('mainCategory subCategory').exec(callback);
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
						if (subCat._id.equals(helmet.subCategory.id) && cat._id.equals(subCat.parentCategory)) {
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
