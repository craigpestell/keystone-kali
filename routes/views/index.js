var async = require('async');

var keystone = require('keystone');
var handlebars = keystone.get('handlebars instance').handlebars;
console.log('handlebars instance:', handlebars);

var parseContentHtml = function(slide, parseCb){
	
	var postId = slide.post;
	var productId = slide.product;
	//console.log('postId:', postId);

	async.parallel({
			post: function (callback) {
				keystone.list('Post').model.findById(postId)
					.exec(callback);
			},
			product: function (callback) {
				keystone.list('Product').model.findById(productId)
					.populate('canonicalDiscipline technologies features mainCategory subCategory')
					.exec(callback);
			}
		},
		function parse(err, results) {
			//console.log('results...', results);
			//console.log('parsing...', _this);
			var parsed = slide.contentHtml;
			if(parsed){
				console.log('parsing slide:', parsed);
				var template = handlebars.compile(parsed, {compat: true});
				
				parsed = template(results);
				
			}
			console.log('parsed:', parsed);
			slide.parsedContentHtml = parsed;

			parseCb();
		}
	);
};

var parseSlides = function(slides, cb){
	async.each(slides, parseContentHtml, function(err){
		cb()
	});
};

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
		/*view.query('slides', keystone.list('Slide').model.find().where(disciplineWhere).populate('product post').exec(function(err, slides){			
			
			slides.forEach(function(){
				
			});
			view.render('index');
		}));*/


		keystone.list('BasePage').model.find().where({slug: homepageSlug}).populate('products').exec(function (err, homePage) {
			//get Base Page == home Slides
			/*var slideIds = [];
			if (homePage[0].slides.length) {
				homePage[0].slides.forEach(function (slide) {
					slideIds.push(slide._id);
				});
			}
			var slideWhere = {_id: {$in: slideIds}};*/
			
			keystone.list('Slide').model.find().where(disciplineWhere).populate('products posts').exec(function (err, slides) {
				//sort by homePage slides
				//orderSlides(slideIds, slides);
				//console.log('slides:', slides);
				locals.slides = slides;
				parseSlides(slides, function(){
					// Render the view
					view.render('index');
				});//parseContentHtml(slide);
			
			});

		});
	});
};
