var keystone = require('keystone');
var async = require('async');

var populateProduct = function (product, cb) {
	console.log('populateProduct');
	//get posts with product
	keystone.list('posts').model.find()
		.where({products: {$in: product._id}}).exec(function(err, data){
			console.log('posts:', data);
			
			cb();
	});
	
};



module.exports = populateProduct;
