var keystone = require('keystone');
var async = require('async');

var populatePostWidgets = function (post, cb) {
	console.log('popWidgets');
	if (post.gallery && post.gallery.widgets) {
		async.forEachOf(post.gallery.widgets, function (widget, j, cb2) {
				if (widget.type === 'carousel') {
					keystone.list('widgets').model.find()
						.where({_id: {$in: widget.carousel.widgets}}).exec(function (err, data) {

						post._doc.gallery.widgets[j]._doc.carousel.widgets = data;

						async.forEachOf(data, function (widget, k, cb3) {

								if (widget.carousel && widget.carousel.widgets.length) {
									keystone.list('widgets').model.find()
										.where({_id: {$in: widget.carousel.widgets}}).exec(function (err, data) {
										//console.log('DATA', data);
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
	console.log('popProducts');
	if (post.products) {
		async.forEachOf(post.products, function (product, j, cb2) {

				keystone.list('products').model.find()
					.where({_id: product._id}).exec(function (err, data) {
					post._doc.products[j] = data;
					cb2();
				});
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

var populatePost = function (post, cb) {
	console.log('popPost');
	populatePostWidgets(post, function(){
		populatePostProducts(post, function(){
			console.log(post._doc);
			cb();
		});
	});
};

module.exports = populatePost;
