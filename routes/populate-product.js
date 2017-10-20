var keystone = require('keystone');
var async = require('async');

var populateProduct = function (product, cb) {
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

module.exports = populateProduct;
