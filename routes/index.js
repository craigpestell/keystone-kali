/**
 * This file is where you define your application routes and controllers.
 * 
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 * 
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 * 
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 * 
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 * 
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var restful = require('restful-keystone')(keystone);
var map = require('express-sitemap');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	/*app.all('*', function(req, res, next) {
			console.log('all routes middleware');
			var view = new keystone.View(req, res);
			var locals = res.locals;

			keystone.list('Product').model.find().populate('categories').sort('sortOrder')
				.exec(function(err, products){
					locals['products'] = products;
					locals.test = 'xxxxxxxx';
					next();

				});
		}
	);*/

	// /api/dealers
	restful.expose({
		Dealer : true
	}).start();
	
	app.get('/', routes.views.index);
	app.all('/register', routes.views.registration);
	app.all('/contact', routes.views.contact);
	
	app.get('/gallery', routes.views.gallery);

	//app.get('/country', routes.views.country);
	app.get('/cf-ipcountry', function(req, res){
		var country = 'US';
		if(req.headers['cf-ipcountry']){
			country = req.headers['cf-ipcountry']
		}
		res.json({country:country}).end();
		//console.log(req.headers);
	});
	
	app.get('/:category(helmets|armor)?', routes.views['product-category']);
	app.get('/:category(helmets|armor)/:subCategory?', routes.views['product-category']);
	app.get('/:category(helmets|armor)/:subCategory/:product?', routes.views.product);

	app.get('/dealers', routes.views['dealer-locator']);
	app.get('/technology', routes.views.technology);

	app.get('/moto', routes.views['moto-splash']);

		
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

	/*
	 * sitemap
	 */
	var url = 'kaliprotectives.com';
	var mapConfig = {
		http: 'https',
		url: 'kaliprotectives.com',
		sitemapSubmission: '/sitemap.xml',
		map:{
			'/technology':['get'],
			'/helmets':['get'],
			'/armor':['get'],
			'/moto':['get'],
			'/dealers':['get'],
			'/contact':['get'],
			'/register':['get']
		},
		route: {
			'ALL': {
				lastmod: '2016-11-01',
				changefreq: 'always',
				priority: 1.0
			}
		}
	};
	
	
	if (keystone.get('env') != 'production'){
		mapConfig.url = 'dev.' + mapConfig.url;
		mapConfig.disallow = true;
		mapConfig.route['ALL'].disallow = true;
	}

	var sitemap = map(mapConfig);

	app.get('/robots.txt', function(req, res){
		sitemap.TXTtoWeb(res);
	});
	app.get('/sitemap.xml', function(req, res){
		keystone.list('Product').model.find()
			.populate('mainCategory subCategory')
			.exec(function (err, results, next) {
				results.forEach(function(product){
					var categoryUrl = '/' + product.mainCategory.slug + '/' + product.subCategory.slug;
					var productUrl = '/' + product.mainCategory.slug + '/' + product.subCategory.slug + '/' + product.slug ;
					if(sitemap.map[categoryUrl] == undefined)
						sitemap.map[categoryUrl] = ['get'];
					sitemap.map[productUrl] = ['get'];

				});
				sitemap.XMLtoWeb(res);
			});
		
	});
	
	app.get('/:page', routes.views.page);
};
