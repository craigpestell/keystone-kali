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


/*
* Get all Main categories
* Get al sub categories
* Get all helmets
* Join helmets to sub categories, sub categories to main categories
* */

function getNavData(navDataCb){
	async.parallel({
			categories: function(callback){
				keystone.list('HelmetCategory').model.find().exec(callback);
			},
			subcategories: function(callback){
				keystone.list('HelmetSubCategory').model.find().exec(callback);
			},
			helmets: function(callback){
				keystone.list('Helmet').model.find().exec(callback);
			}
		},
		function massage(err, results){
			var returnData = {};
			returnData.categories = {};
			results.categories.forEach(function(cat){
				returnData.categories[cat.slug] = cat;
				returnData.categories[cat.slug].subCategories = [];
				results.subcategories.forEach(function(subCat, j){
					if(subCat.helmets == undefined) {
						subCat.helmets = [];
					}
					//get all helmets for sub category
					results.helmets.forEach(function(helmet){
						if (subCat._id.equals(helmet.subCategory) && cat._id.equals(subCat.parentCategory)) {
							subCat.helmets.push(helmet);
						}
					});
					
					if(cat._id.equals(subCat.parentCategory)){
						subCat.label = subCat.name;
						subCat.href = '/' + cat.slug + '/' + subCat.slug;
						returnData.categories[cat.slug].subCategories.push(subCat);
					}
				});
			});
			//console.log("MASSAGED RESULTS: ", returnData);
			//console.log(returnData.categories.bike.subCategories);
			navDataCb(null, returnData);
		}
	);

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
		getNavData(function(err, data){
			locals.siteSettings = siteSettings;
			locals.year = new Date().getFullYear();
			locals.navLinks = [
				{
					label: 'Composite Fusion',
					key: 'composite-fusion',
					href: '/composite-fusion',
					dropdown:[
						{label: 'Overview', key: 'composite-fusion', href: '/composite-fusion'},
						{label: 'Kali Design', key: 'kali-design', href: '/kali-design'},
						{label: 'Cutting Edge Safety', key: 'safety', href: '/safety'},
						{label: 'The White Papers', key: 'white-papers', href: '/white-papers'}
					]
				}
				,{
					label: 'Helmets', key: 'bike', href: '/bike',
					helmets: data.categories.bike,
					categories: data.categories.bike.subCategories,
					dropdown: data.categories.bike.subCategories
				}/*,
				{	label: 'Powersports', key: 'powersports', href: '/helmet-category/powersports',
					helmets: data.categories.powersports,
					categories: data.categories.powersports.subCategories
				}*/
				,{
					label: 'Dealer Locator', key: 'dealer-locator', href: '/dealers',
				}
			];
			
	
			locals.user = req.user;
	
			next();
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
