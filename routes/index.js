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
	var sitemap = map({
		route: {
			'ALL': {
				lastmod: '2014-06-20',
				changefreq: 'always',
				priority: 1.0,
			},
			generate:true
		},
	});

	sitemap.generate(app); // generate sitemap from express route, you can set generate inside sitemap({})
	app.get('/robots.txt', function(req, res){
		console.log('robots.txt');
		sitemap.TXTtoWeb(res);
	});

	//sitemap.XMLtoFile(); // write this map to file
	
	app.get('/:page', routes.views.page);
};
