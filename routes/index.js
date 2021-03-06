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
//var restful = require('restful-keystone')(keystone);

var subdomain = require('subdomain');
var map = require('express-sitemap');

var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

var favicon = require('serve-favicon');
var path = require('path');

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api'),
};

// Setup Route Bindings
exports = module.exports = function(app) {
	// /api/dealers
	/*restful.expose({
    	Dealer : true
    }).start();
    app.all('*', function(req, res, next){
    	if(!res.locals.params){
    		res.locals.params = {}
    	}
    	//res.locals.params = {discipline:'bike'};
    	next();
    });*/
	app.use(require('express-uncapitalize')());

	app.all('*', function(req, res, next) {
		res.locals.params = {};
		next();
	});

	//301 redirects
	app.all(['/helmets/road/Chakra%20Mono', '/subdomain/:discipline/helmets/road/Chakra%20Mono'], function redirects(
		req,
		res,
		next,
	) {
		var host = req.get('Host');
		if (req.url === '/helmets/road/Chakra%20Mono') {
			console.log('redirect URL: ', 'https://' + host + '/helmets/road/chakra-mono/');
			return res.redirect(301, 'https://' + host + '/helmets/road/chakra-mono/');
		}
		return next();
	});

	app.all(['/helmets'], function redirects(req, res, next) {
		var host = req.get('Host');
		if (req.url === '/helmets' || req.url === '/helmets/') {
			if (req.host.indexOf('bike.') === -1) {
				console.log('redirect URL: ', 'https://bike.kaliprotectives.com/helmets');
				return res.redirect(301, 'https://bike.kaliprotectives.com/helmets');
			}
		}
		return next();
	});

	app.all('/cf-ipcountry', keystone.middleware.cors);

	app.use(favicon(path.join(__dirname, '..', 'public', 'favicon', 'favicon.ico')));
	app.get(['/cf-ipcountry', '/subdomain/:discipline/cf-ipcountry'], function(req, res) {
		var country = 'US';
		if (req.headers['cf-ipcountry']) {
			country = req.headers['cf-ipcountry'];
		}

		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
		res.json({ country: country }).end();
	});

	app.param('discipline', function(req, res, next, discipline) {
		keystone
			.list('Discipline')
			.model.findOne({ slug: discipline })
			.exec(function(err, data) {
				if (err) return next(err);
				if (!data) return next(new Error('Nothing is found'));
				res.locals.params.discipline = data;
				next();
			});
	});

	app.param('version', function(req, res, next, version) {
		keystone
			.list('ProductVersion')
			.model.findOne({ key: version })
			.exec(function(err, data) {
				if (err) return next(err);
				if (!data) return next(new Error('Nothing is found'));
				res.locals.params.version = data;
				next();
			});
	});

	app.param('category', function(req, res, next, category) {
		keystone
			.list('ProductCategory')
			.model.findOne({ slug: category })
			.exec(function(err, data) {
				if (err) return next(err);
				//if (!data) return next(new Error('Nothing is found'));
				if (!data) return next();
				res.locals.params.category = data;

				next();
			});
	});

	app.param('subCategory', function(req, res, next, subCategory) {
		keystone
			.list('ProductSubCategory')
			.model.findOne({ slug: subCategory })
			.exec(function(err, data) {
				if (err) return next(err);
				//if (!data) return next(new Error('Nothing is found'));
				if (!data) return next();
				res.locals.params.subCategory = data;
				next();
			});
	});

	app.param('product', function(req, res, next, product) {
		keystone
			.list('Product')
			.model.findOne({ slug: product })
			.populate('mainCategory subCategory technologies')
			.exec(function(err, data) {
				if (err) return next(err);
				//if (!data) return next(new Error('Nothing is found'));
				if (!data) return next();
				res.locals.params.product = data;
				next();
			});
	});

	app.param('postCategory', function(req, res, next, category) {
		keystone
			.list('PostCategory')
			.model.findOne({ key: category })
			.exec(function(err, data) {
				if (err) return next(err);
				//if (!data) return next(new Error('Nothing is found'));
				if (!data) return next();
				res.locals.params.postCategory = data;
				next();
			});
	});

	app.get('/api/dealers', keystone.middleware.api, routes.api.dealers.list);
	app.get(
		['/api/:postCategory/posts', '/api/:postCategory/:postSubCategory/posts'],
		keystone.middleware.api,
		routes.api.posts.list,
	);

	app.use(subdomain({ base: keystone.get('domain'), removeWWW: true, debug: true }));

	//navigation for all routes.
	var navRouteHandler = require('./nav');
	app.get(
		[
			'/subdomain/:discipline',
			'/subdomain/:discipline/:category',
			'/subdomain/:discipline/:category/:subCategory',
			'/subdomain/:discipline/:category/:subCategory/:product',
			'/',
			'/:category',
			'/:category/:subCategory',
			'/:category/:subCategory/:product',
			'/subdomain/:discipline/archive/*',
			'/archive/*',
		],
		navRouteHandler,
	);

	//app.get('/country', routes.views.country);

	//index page for main home page and discipline home pages.
	app.get(['/subdomain/:discipline/', '/'], routes.views.index);
	app.get(['/subdomain/:discipline/dealers', '/dealers'], routes.views['dealer-locator']);
	app.get(['/subdomain/:discipline/technology', '/technology'], routes.views.technology);
	app.get(
		['/subdomain/:discipline/technology/:technology?', '/technology/:technology?'],
		routes.views['technology-detail'],
	);
	app.all(['/subdomain/:discipline/technology/post/:post', '/technology/post/:post'], routes.views.post);
	app.get(['/subdomain/:discipline/republik/:category?', '/republik/:category?'], routes.views.republik);
	app.all(['/subdomain/:discipline/republik/post/:post', '/republik/post/:post'], routes.views.post);

	app.all(['/subdomain/:discipline/register', '/register'], routes.views.registration);
	app.all(['/subdomain/:discipline/contact', '/contact'], routes.views.contact);

	app.get(
		[
			'/subdomain/:discipline/archive/:version?',
			'/:category',
			'/:category/:subCategory',
			'/subdomain/:discipline/:category',
			'/subdomain/:discipline/:category/:subCategory',
		],
		routes.views['product-category'],
	);

	app.get(['/:page', '/subdomain/:discipline/:page'], routes.views.page);

	app.get(
		[
			'/subdomain/:discipline/:category/:subCategory/:product',
			'/:category/:subCategory/:product',
			'/subdomain/:discipline/archive/:version/:category/:subCategory/:product',
		],
		routes.views.product,
	);

	var domainAndPort = keystone.get('domain') + (keystone.get('port') ? ':' + keystone.get('port') : '');
	app.get(['/:category/:params?'], function(req, res) {
		var redirect = '//bike.' + domainAndPort;

		res.redirect(redirect + '/' + req.params.category);
	});

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
		map: {
			'/technology': ['get'],
			'/helmets': ['get'],
			'/armor': ['get'],
			'/moto': ['get'],
			'/dealers': ['get'],
			'/contact': ['get'],
			'/register': ['get'],
		},
		route: {
			ALL: {
				lastmod: '2016-11-01',
				changefreq: 'always',
				priority: 1.0,
			},
		},
	};

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
		map: {
			'/technology': ['get'],
			'/helmets': ['get'],
			'/armor': ['get'],
			'/moto': ['get'],
			'/dealers': ['get'],
			'/contact': ['get'],
			'/register': ['get'],
		},
		route: {
			ALL: {
				lastmod: '2016-06-23',
				changefreq: 'always',
				priority: 1.0,
			},
		},
	};

	if (keystone.get('env') !== 'production') {
		mapConfig.url = 'dev.' + mapConfig.url;
		mapConfig.disallow = true;
		mapConfig.route['ALL'].disallow = true;
	}

	var sitemap = map(mapConfig);

	app.get('/robots.txt', function(req, res) {
		sitemap.TXTtoWeb(res);
	});
	app.get('/sitemap.xml', function(req, res) {
		keystone
			.list('Product')
			.model.find()
			.populate('mainCategory subCategory')
			.exec(function(err, results, next) {
				results.forEach(function(product) {
					var categoryUrl = '/' + product.mainCategory.slug + '/' + product.subCategory.slug;
					var productUrl = '/' + product.mainCategory.slug + '/' + product.subCategory.slug + '/' + product.slug;
					if (sitemap.map[categoryUrl] == undefined) sitemap.map[categoryUrl] = ['get'];
					sitemap.map[productUrl] = ['get'];
				});
				sitemap.XMLtoWeb(res);
			});
	});
};
