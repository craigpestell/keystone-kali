/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */

var _ = require('underscore');
var keystone = require('keystone');
var async = require('async');

function getSiteSettings(cb) {
	keystone.list('SiteSetting').model.find().exec(function(err, data){
		var simpleData = {};
		data.forEach(function(setting, i){
			simpleData[setting._doc.key] = setting._doc;
		});
		cb(err, simpleData);
	});
}

function getHelmets(categories, cb) {
	function getHelmetsForCategory(category, callback){
		keystone.list('HelmetCategory').model.find({name:category.name}).exec(function (err, category) {
			if(category.length) {
				keystone.list('Helmet').model.find()
					.where('categories').in([category[0]._id])
					.sort('sort' + category[0]._doc.name).exec(callback);
			}else{
				callback('No helmet categories found', null);
			}

		});
	}
	async.map(categories, getHelmetsForCategory,
		function done(err, data){
			var returnData = {};
			var thisData = data;
			
			categories.forEach(function(category, i, categories){
				returnData[categories[i].name] = thisData[i];
			});
			cb(err, returnData);
		});
}

function getHelmetCategoryChildren(categories, cb) {

	
	async.map(categories, function(category, callback){
		keystone.list('HelmetCategory').model.findOne({name:category.name}).exec(function (err, category) {
			if(category !== undefined) {		
				keystone.list('HelmetCategory').model
					.find({parentCategory: category._doc._id})
					.sort('sort')
					.exec(function (err, data) {
						callback(err, data);
					});
			}else{
				callback('No helmet categories found', null);
			}
		});
	},
	function done(err, data){
		var returnData = {};
		var thisData = data;

		categories.forEach(function(category, i, categories){
			returnData[categories[i].name] = thisData[i];
		});
		cb(err, returnData);
	});
}
/**
 Initialises the standard view locals

 The included layout depends on the navLinks array to generate
 the navigation in the header, you may wish to change this array
 or replace it with your own templates / logic.
 */

exports.initLocals = function (req, res, next) {

	var locals = res.locals;

	getSiteSettings(function(err, siteSettings){
		getHelmets([{name:'Bike'}, {name:'Powersports'}],function(err, helmets){
			getHelmetCategoryChildren([{name:'Bike'}, {name:'Powersports'}],function(err, categories){
				//console.log('categories:', categories);
				locals.test = 'xxxxxxxx';
				locals.siteSettings = siteSettings;
				locals.navLinks = [
					{
						label: 'Composite Fusion',
						key: 'composite-fusion',
						href: '/composite-fusion',
						dropdown:[
							{label: 'Overview', key: 'overview', href: '/overview'},
							{label: 'Kali Design', key: 'kali-design', href: '/kali-design'},
							{label: 'Cutting Edge Safety', key: 'safety', href: '/safety'},
							{label: 'The White Papers', key: 'white-papers', href: '/white-papers'}
						]
					},
					{
						label: 'Helmets', key: 'bike', href: '/helmet-category/bike',
						helmets:helmets.Bike,
						categories: categories.Bike
					},
					{label: 'Powersports', key: 'powersports', href: '/helmet-category/powersports',
						helmets: helmets.Powersports,
						categories: categories.Powersports
					},
					//{label: 'Blog', key: 'blog', href: '/blog'},
					//{label: 'Gallery', key: 'gallery', href: '/gallery'},
					//{label: 'Contact', key: 'contact', href: '/contact'}
				];
				//console.log(locals.navLinks);
				/*for(var i in helmets.categories) {
				 console.log(i);
				 }*/

				locals.user = req.user;

				next();

			});
		});
		
	});

};


/**
 Fetches and clears the flashMessages before a view is rendered
 */

exports.flashMessages = function (req, res, next) {

	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error')
	};

	res.locals.messages = _.any(flashMessages, function (msgs) {
		return msgs.length;
	}) ? flashMessages : false;

	next();

};


/**
 Prevents people from accessing protected pages when they're not signed in
 */

exports.requireUser = function (req, res, next) {

	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}

};
