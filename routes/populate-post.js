var keystone = require('keystone');
var async = require('async');

var populatePostWidgets = function (post, cb) {
	
	if (post.gallery && post.gallery.widgets) {
		async.forEachOf(post.gallery.widgets, function (widget, j, cb2) {
				if (widget.type === 'carousel') {
					
					keystone.list('widgets').model.find()
						.where({_id: {$in: widget.carousel.widgets}}).exec(function (err, data) {
						
						var result = [];
						//sort carousel widgets
						widget.carousel.widgets.forEach(function(key){
							var found = false;
							data = data.filter(function(item){
								if(!found && item._id.equals(key)) {
									result.push(item);
									found = true;
									return false;
								}else{
									return true;
								}
							});
						});
						post._doc.gallery.widgets[j]._doc.carousel.widgets = result;

						async.forEachOf(data, function (widget, k, cb3) {
								
								if (widget.carousel && widget.carousel.widgets.length) {
									keystone.list('widgets').model.find()
										.where({_id: {$in: widget.carousel.widgets}}).exec(function (err, data) {
										//console.log('DATA', data);
										//console.log('widgetids:', widget.carousel.widgets);
										post._doc.gallery.widgets[j]._doc.carousel.widgets[k]._doc.carousel.widgets = data;
										
										cb3();
									});
								} else {
									cb3();
								}
							},
							function (err) {
								if (err) {
									console.log('error', err);
								}
								cb2();
							});
					});
				} else {
					cb2();
				}

			},
			function (err) {
				if (err) {
					console.log('error', err);
				}
				cb();
			}
		);
	} else {
		cb();
	}
};

var populatePostProducts = function (post, cb) {
	//console.log('popProducts');
	if (post.products) {
		//console.log('post.products:', post.products);
		

		keystone.list('products').model.find()
			.where({_id: {$in: post.products}}).populate('mainCategory subCategory').exec(function (err, data) {
			post._doc.products = data;
			cb();
		});
		
	} else {
		cb();
	}
};

var populatePost = function (post, cb) {
	//console.log('popPost');
	populatePostWidgets(post, function(){
		populatePostProducts(post, function(){
			//console.log(post._doc);
			cb();
		});
	});
};

module.exports = populatePost;
