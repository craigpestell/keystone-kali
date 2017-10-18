var async = require('async');

var keystone = require('keystone');
var handlebars = keystone.get('handlebars instance').handlebars;

var _ = require('underscore');
var populatePost = require('../populate-post');

var getPosts = function(postWhere, parseCb){
	
	/*var postId = post.post;
	var productId = post.product;*/
	//console.log('postId:', postId);

	async.parallel({
			posts: function(callback){
				keystone.list('Post').model.find()
				.where(postWhere).populate('postLayout gallery.widgets').exec(callback)
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
			
			if(results.posts && results.products){
				results.posts.forEach(function(post, i, posts){
					results.products.forEach(function(product, j, products){
						
						if((""+product._id) === (""+post.product)){
							
							results.posts[i]._doc.product = product;
							
						}
					});
				});
			}
			parseCb(results);
		}
	);
};


function orderPosts(array_with_order, array_to_order) {
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

	
	var locals = res.locals;
	//console.log('params');
	//console.log(res.locals.params);
	if(res.locals.params.discipline){
		locals.discipline = res.locals.params.discipline.slug;
	}

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
		
			//get Base Page == home Posts
			var postIds = [];
			
			if (homePage[0].posts.length) {
				homePage[0].posts.forEach(function (post) {
					postIds.push(post);
				});
			}
			
			var postWhere = {_id: {$in: postIds}};
			
			getPosts(postWhere, function(posts){
				//console.log('data:', posts.posts);

				orderPosts(postIds, posts.posts);
				res.locals.posts = [];
				async.forEachOf(posts.posts, function (post, i, cb) {

						populatePost(post, cb);
						//console.log(post);
						res.locals.posts.push(post);
						
					},
					function (err) {
						if (err) {
							console.log('error', err);
						}
						console.log('done async 1');
						view.render('index');
						//next(err);
					}
				);

			});

		});
	});
};
