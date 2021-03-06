var keystone = require('keystone');
var async = require('async');
/*
 * Get all Main categories
 * Get al sub categories
 * Get all products
 * Join products to sub categories, sub categories to main categories
 * */

var getNavData = function(params, navDataCb) {
    
    var disciplineWhere = {slug: ''};
    if (params && params.discipline) {
        disciplineWhere.slug = params.discipline.slug;
    }

	keystone.list('Discipline').model.find().where(disciplineWhere).exec(function (err, discipline) {
		var disciplineWhere = {disciplines:null};
		if(discipline.length > 0) {
			disciplineWhere = {disciplines: discipline[0]._id};
		}
		async.parallel({
			disciplines: function (callback) {
				keystone.list('Discipline').model.find().exec(callback);
			},
            categories: function (callback) {
            	keystone.list('ProductCategory').model.find(disciplineWhere).exec(callback);
            },
            subcategories: function (callback) {
                keystone.list('ProductSubCategory').model.find().where(disciplineWhere)
					.populate('parentCategory').sort('sortOrder').exec(callback);
            },
            products: function (callback) {
                keystone.list('Product').model.find().where(disciplineWhere)
                    .populate('mainCategory subCategory').sort('sortOrder').exec(callback);
            },
            postCategories: function (callback) {
                keystone.list('PostCategory').model.find().where({showInNavigation: true})
					.populate('disciplines').sort('sortOrder').exec(callback);
            }
			
        },
        function massage(err, results) {
            var returnData = {
				disciplines: results.disciplines,
				categories: results.categories, 
				subCategories: [], 
				postCategories: results.postCategories
			};
            if (results.categories) {
                results.categories.forEach(function (cat) {
                    results.subcategories.forEach(function (subCat, j) {
                        if (subCat.products == undefined) {
                            subCat.products = [];
                        }
                        //get all products for sub category
                        results.products.forEach(function (product) {
                            if (subCat._id.equals(product.subCategory.id) &&
                                cat._id.equals(subCat.parentCategory.id)) {
                                subCat.products.push(product);
                            }
                        });

                        if (cat._id.equals(subCat.parentCategory.id)) {
                            returnData.subCategories.push(subCat);
                        }
                    });
                });
            }
            navDataCb(null, returnData);
        });
	});
};

var navRouteHandler = function (req, res, next) {
	var locals = res.locals;
	var domain = keystone.get('domain');
	var domainAndPort = domain + (keystone.get('port')?':' + keystone.get('port'):'');
	locals.domainAndPort = domainAndPort;


	//detect dev site
	if(req.headers.host.indexOf('dev.') === 0 || req.headers.host.indexOf('.dev.') > 0){
		locals.devSite = true;
	}
	
	getNavData(res.locals.params, function (err, data) {
		
		
		locals.navLinks = [
			{
				label: 'Technology',
				key: 'technology',
				href: '/technology'
			}
		];
		if(req.originalUrl.indexOf('/technology/post/') === 0){
			locals.navLinks[locals.navLinks.length-1]['active'] = true;
		}
		var showRepublik = true;
		
		if (res.locals.params && res.locals.params.discipline && res.locals.params.discipline.slug === 'moto') {
			showRepublik = false;
		}
		if(showRepublik){
			locals.navLinks.push({
				label: 'Republik',
				key: 'republik',
				href: '/republik'
			});
		}
		
		if(req.originalUrl.indexOf('/republik/post/') === 0){
			locals.navLinks[locals.navLinks.length-1]['active'] = true;
		}

		locals.navSubLinks = [];
		
		data.categories.forEach(function (category) {
			locals.navLinks.push({
				label: category.name,
				key: category.slug,
				href: '/' + category.slug,
				dropdown: []
			});
			data.subCategories.forEach(function(subCategory){
				if(subCategory.parentCategory.id == category.id) {
					locals.navLinks[locals.navLinks.length-1].dropdown.push({
						label: subCategory.name,
						key: subCategory.key,
						href: '/' + subCategory.slug
					});
				}
			});
		});

		var discParam = res.locals.params && res.locals.params.discipline || null;

		data.disciplines.forEach(function(disc){
			
			var disciplineNav = {
				label: disc.name,
				key: disc.key,
				discipline: disc.key, // used for nav active
				href: '//' + disc.slug + '.' + domainAndPort,
				positionRight: true
			};
			//point to shopify
			if(disc.slug === 'moto') {
				disciplineNav.href = 'https://kali-moto.myshopify.com';
				disciplineNav._blank = true;
			}
			//point bike to helmets index
			if(disc.slug === 'bike') {
				disciplineNav.href = 'https://bike.kaliprotectives.com/';
			}
			if(discParam && discParam === disciplineNav.key){
				disciplineNav.active = true;
			}
				locals.navLinks.push(disciplineNav);
			//}
		});

		locals.navLinks.push({
			label: 'Dealers', key: 'dealer-locator', href: '/dealers', positionRight:true
		});


		if(req.params.category){
			if(data.subCategories.length > 3) {
				data.subCategories.forEach(function(subCategory){
					//if category is specified show sub categories.
					if(subCategory.parentCategory.slug == req.params.category){
						locals.navSubLinks.push(subCategory);
					}
				});
			}
		}
		
		locals.postCategories = data.postCategories;
		next();
	});
};

exports = module.exports = navRouteHandler;
