/*jshint node:true */
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

var subdomain = require('subdomain');
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
    // /api/dealers
    restful.expose({
        Dealer : true
    }).start();
	app.all('*', function(req, res, next){
		console.log('init local params');
		res.locals.params = {};
		next();
	});
	app.param('discipline', function(req, res, next, discipline){
		console.log('discipline param: ', discipline);
		keystone.list('Discipline').model.findOne({slug: discipline}).exec(function(err, data){
			if (err) return next(err);
			if (!data) return next(new Error('Nothing is found'));
			res.locals.params.discipline = data;
			console.log('discipline: ', data.slug);
			next();
		});
	});
	app.param('category', function(req, res, next, category){
		console.log('category param: ', category);
		keystone.list('ProductCategory').model.findOne({slug: category}).exec(function(err, data){
			if (err) return next(err);
			//if (!data) return next(new Error('Nothing is found'));
			if(!data) return next();
			res.locals.params.category = data;
			console.log('category:', data.slug);
			next();
		});
	});
	app.param('subCategory', function(req, res, next, subCategory){
		console.log('subcategory param: ', subCategory);
		keystone.list('ProductSubCategory').model.findOne({slug: subCategory}).exec(function(err, data){
			if (err) return next(err);
			//if (!data) return next(new Error('Nothing is found'));
			if(!data) return next();
			res.locals.params.subCategory = data;
			console.log('subcategory:', data.slug);
			next();
		});
	});
	app.param('product', function(req, res, next, product){
		console.log('product param: ', product);
		keystone.list('Product').model.findOne({slug: product}).populate('mainCategory subCategory technologies').exec(function(err, data){
			if (err) return next(err);
			//if (!data) return next(new Error('Nothing is found'));
			if(!data) return next();
			res.locals.params.product = data;
			console.log('product:', data.slug);
			next();
		});
	});
	
    app.use(subdomain({base: keystone.get('domain'), removeWWW: true, debug: true}));

	//navigation for all routes.
	var navRouteHandler = require('./nav');
	app.get([
		'/subdomain/:discipline',
		'/subdomain/:discipline/:category',
		'/subdomain/:discipline/:category/:subCategory',
		'/subdomain/:discipline/:category/:subCategory/:product',
		'/',
		'/:category',
		'/:category/:subCategory'
		], navRouteHandler);
	    
    //index page for main home page and discipline home pages.
	app.get(['/subdomain/:discipline/', '/'], routes.views.index);

	app.get(['/subdomain/:discipline/dealers', '/dealers'], routes.views['dealer-locator']);
	app.get(['/subdomain/:discipline/technology', '/technology'], routes.views.technology);
	app.get(['/subdomain/:discipline/register', '/register'], routes.views.registration);
	app.get(['/subdomain/:discipline/contact', '/contact'], routes.views.contact);

	
	var domainAndPort = keystone.get('domain') + (keystone.get('port')?':' + keystone.get('port'):'');
	app.get(['/:category/:params?'], function(req, res){
		var redirect = '//bike.'  + domainAndPort;
		
		res.redirect(redirect + '/' + req.params.category);
	});
	
	app.get([
		'/subdomain/:discipline/:category',
		'/subdomain/:discipline/:category/:subCategory'
	], routes.views['product-category']);
    
	app.get([
		'/subdomain/:discipline/:category/:subCategory/:product'
		], routes.views.product);
	
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
            '/register':['get'],
        },
        route: {
            'ALL': {
                lastmod: '2016-06-23',
                changefreq: 'always',
                priority: 1.0,
            },
        },
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
