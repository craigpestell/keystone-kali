// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

var handlebarsInstance = handlebars.create({
	layoutsDir: 'templates/views/layouts',
	partialsDir: 'templates/views/partials',
	defaultLayout: 'default',
	helpers: new require('./templates/views/helpers')(),
	extname: '.hbs'
});

keystone.init({

	'name': 'kali',
	'brand': 'Kali Protectives',
	'domain': 'localhost',
	'session store': 'mongo',
	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon/favicon.ico',
	'views': 'templates/views',
	'view engine': 'hbs',
	'handlebars instance': handlebarsInstance,
	'custom engine': handlebarsInstance.engine,

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',

	
	's3 config': {
		bucket: 'kali-www',
		key: 'AKIAIHXC3MAW7FFGJFSQ',
		secret: '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'
	},
	'embedly api key': 'e9763d8cbe1c468fb6b5b10b5ac87e98',

	'wysiwyg skin': '',
	//'wysiwyg images': true,
	'wysiwyg cloudinary images': true,
	'wysiwyg additional buttons': 'jsplusBootstrapEditor jsplusBootstrapEditorSelected jsplusShowBlocks',
	//'wysiwyg additional plugins': 'jsplusInclude jsplusBootstrapEditor',
	'wysiwyg additional options': {
		content_css: '/styles/site.css',
		external_plugins: {
			//'ckeditor': '/js/ckeditor/ckeditor.js',
			'jsplusInclude':'/js/tinymceBootstrap/jsplusInclude/plugin.min.js',
			'jsplusBootstrapEditor':'/js/tinymceBootstrap/jsplusBootstrapEditor/plugin.min.js',
            'jsplusBootstrapTools':'/js/tinymceBootstrap/jsplusBootstrapTools/plugin.min.js',
        },
		jsplusInclude: {framework: 'b3', includeCKEditor: false,
			css: [
				"/js/tinymceBootstrap/skins/be/skin.min.css",
				"/js/tinymceBootstrap/skins/be/content.min.css"
			],
			includeCssToGlobalDoc: true
		},
		jsplusBootstrapEditor: {framework: 'b3', includeCKEditor: false},
		jsplusBootstrapTools: {framework: 'b3', includeCKEditor: false},
		jsplusBootstrapShowBlocks: {framework: 'b3', includeCKEditor: false},
		
		extended_valid_elements : "div[*],span[*],i[*]",	
	},
	
	//'mongo': process.env.DO ? '10.134.0.166:27017/kali' : '162.243.149.37:27017/kali'

	'mongo': process.env.DO ? 'mongodb://10.134.12.9:27017/kali' : 'mongodb://104.236.143.31:27017/kali',
	'ga_key': process.env.GOOGLE_TRACKING_KEY,
	'port': process.env.PORT
});

if(process.env.DO){
	keystone.set('domain', 'dev.kaliprotectives.com');
}

if(process.env.PRODUCTION){
	keystone.set('env', 'production');
	keystone.set('domain', 'kaliprotectives.com');
}
keystone.Email.defaults = {};
keystone.Email.defaults.templateExt = 'hbs';
keystone.Email.defaults.templateEngine = require('handlebars');

// Load your project's Models

keystone.import('models');



// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
	'ga_key': keystone.get('ga_key')
});

keystone.set('baseUrl', (keystone.get('env') == 'production') ? 'https://kaliprotectives.com/' : 'http://localhost:3000/');
// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7'
		}
	}
});

// Load your project's email test routes

keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	
	//'galleries': 'galleries',
	//'enquiries': 'enquiries',
	'base-pages': 'base-pages',
	//'users': 'users',
	'products': ['products', 'product-categories', 'product-sub-categories', 'product-features', 'product-technologies'],
	'dealers': 'dealers',
	'posts': ['posts', 'post-categories'],
	'widgets': 'widgets'
});


// Start Keystone to connect to your database and initialise the web server

keystone.start();
