var async = require('async');

var keystone = require('keystone');
var handlebars = keystone.get('handlebars instance').handlebars;

var _ = require('underscore');
console.log('handlebars instance:', handlebars);

var getSlides = function(slideWhere, parseCb){
	
	/*var postId = slide.post;
	var productId = slide.product;*/
	//console.log('postId:', postId);

	async.parallel({
			slides: function(callback){
				keystone.list('Slide').model.find()
				.populate('post')
				.where(slideWhere).exec(callback)
			},
			/*post: function (callback) {
				keystone.list('Post').model.findById(postId)
					.exec(callback);
			},*/
			products: function (callback) {
				keystone.list('Product').model.find()
					.populate('canonicalDiscipline technologies features mainCategory subCategory')
					.exec(callback);
			}
		},
		function parse(err, results) {
			results.slides.forEach(function(slide, i, slides){
				results.products.forEach(function(product, j, products){
					
					if(slide.post && (""+product._id) === (""+slide.post.product)){
						results.slides[i].product = product;
					}
				});
			});

			parseCb(results);
		}
	);
};


function orderSlides(array_with_order, array_to_order) {
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

exports = module.exports = function(req, res) {
	
		
	var disciplineWhere = {};
	if (res.locals.params.discipline) {
		disciplineWhere.slug = res.locals.params.discipline.slug;
	}else{
		disciplineWhere.slug = 'no-discipline';
	}

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {page:{title:'Kali Protectives'}};
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	var view = new keystone.View(req, res);

	//popuplate Home page data.
	keystone.list('Discipline').model.find().where(disciplineWhere).exec(function (err, discipline) {
			
		var disciplineWhere = {};
		var homepageSlug = 'home';
		
		if (discipline.length > 0) {
			disciplineWhere = {disciplines: discipline[0]._id};
			if(discipline[0].slug === 'moto') {
				homepageSlug = 'moto-home';
			}else if(discipline[0].slug === 'bike') {
				homepageSlug = 'bike-home';
			}
		}

		keystone.list('BasePage').model.find().where({slug: homepageSlug}).exec(function (err, homePage) {
		
			//get Base Page == home Slides
			var slideIds = [];
			
			if (homePage[0].slides.length) {
				homePage[0].slides.forEach(function (slide) {
					slideIds.push(slide);
				});
			}
			var slideWhere = {_id: {$in: slideIds}};
			getSlides(res.locals.params, function(data){
				console.log('data:', data.slides[0].product);
				res.locals.slides = data.slides;
				view.render('index');
			});

		});
	});
};
