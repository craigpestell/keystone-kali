var keystone = require('keystone');
var async = require('async');
/*
 * Get all Main categories
 * Get al sub categories
 * Get all products
 * Join products to sub categories, sub categories to main categories
 * */

var getNavData = function(params, navDataCb) {
    //console.log('discipline param:', req.params.discipline);
    //console.log('category param:', req.params.category);

    var disciplineWhere = {slug: ''};
    if (params.discipline) {
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
            }
        },
        function massage(err, results) {
            var returnData = {
				disciplines: results.disciplines,
				categories: results.categories, 
				subCategories: []
			};
            //console.log('subcategories:', results.subcategories);
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
            //console.log("MASSAGED RESULTS: ", returnData);
            //console.log(returnData.categories.bike.subCategories);
            navDataCb(null, returnData);
        });
	});
};

var navRouteHandler = function (req, res, next) {
	//console.log('inside nav route');
	//console.log('ROUTE: ', req.route);
	//console.log('PARAMS: ', req.params);
	var locals = res.locals;
	var domain = keystone.get('domain');
	var domainAndPort = domain + (keystone.get('port')?':' + keystone.get('port'):'');
	locals.domainAndPort = domainAndPort;
	
	getNavData(res.locals.params, function (err, data) {
		//console.log('nav data:', data);
		locals.navLinks = [
			{
				label: 'Technology',
				key: 'technology',
				href: '/technology'/*,
			 dropdown:[
			 {label: 'Overview', key: 'composite-fusion', href: '/composite-fusion'},
			 {label: 'Kali Design', key: 'kali-design', href: '/kali-design'},
			 {label: 'Cutting Edge Safety', key: 'safety', href: '/safety'},
			 {label: 'The White Papers', key: 'white-papers', href: '/white-papers'}
			 ]*/
			}];
		locals.navSubLinks = [];
		/*locals.navLinks.push({
		 label: 'Helmets', key: 'helmets', href: '/helmets',
		 products: data.categories.helmets,
		 categories: data.categories.helmets.subCategories,
		 dropdown: data.categories.helmets.subCategories
		 });*/
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
		var discParam = res.locals.params.discipline || null;

		data.disciplines.forEach(function(disc){
			
			//console.log('port',keystone.get('port'));
			//console.log('discParam:', discParam);
			//console.log('disc',disc);
			if(!discParam || disc.slug !== discParam.slug) {
				locals.navLinks.push({
					label: disc.name,
					key: disc.key,
					href: '//' + disc.slug + '.' + domainAndPort
				});
			}
		});

		locals.navLinks.push({
			label: 'Dealers', key: 'dealer-locator', href: '/dealers'
		});

		if(req.params.category){
			if(data.subCategories.length > 1) {
				data.subCategories.forEach(function(subCategory){
					//if category is specified show sub categories.
					if(subCategory.parentCategory.slug == req.params.category){
						locals.navSubLinks.push(subCategory);
					}
				});
			}
		}
		next();
	});
};

exports = module.exports = navRouteHandler;
