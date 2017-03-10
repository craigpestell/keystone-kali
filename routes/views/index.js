var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {page:{title:'Kali Protectives'}};
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	function orderProducts(array_with_order, array_to_order) {
		var ordered_array = [],
			len = array_to_order.length,
			len_copy = len,
			index, current;

		for (; len--;) {
			current = array_to_order[len];
			index = array_with_order.findIndex(function(product){
				return product.equals(current._id);
			});
			ordered_array[index] = current;
		}

		//change the array
		Array.prototype.splice.apply(array_to_order, [0, len_copy].concat(ordered_array));
	}
	
	//popuplate Home page data.
	keystone.list('BasePage').model.find().where({slug: 'home'}).populate('products').exec(function (err, homePage) {
		//get Base Page == home Products
		var productIds = [];
		if(homePage[0].products.length){
			homePage[0].products.forEach(function(product){
				productIds.push(product._id);
			});
		}
		var productWhere = {_id : {$in: productIds}};
		keystone.list('Product').model.find().where(productWhere).populate('technologies mainCategory subCategory gallery').exec(function(err, products){
			//sort by homePage products
			orderProducts(productIds, products);
			products.forEach(function(product, i, products){
				
				products[i].homeSlideAlternateEnd = product.imagesPerColorSwatch - 1;
				products[i].homeSlideAlternateStart = products[i].homeSlideAlternateEnd - 1;
			});
			locals.products = products;
			// Render the view
			view.render('index');
		});

	});

		
};
