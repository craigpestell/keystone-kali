var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * =============
 */

var Product = new keystone.List('Product', {
	autokey: { from: 'slug', path: 'key', unique: true, drilldown: 'ProductSpec'}, sortable: true//, sortContext: 'ProductSubCategory:products'
});
Product.defaultColumns = 'name,subCategory';
Product.add({
	name: { type: String, required: true },
	slug: { type: String, required: true, default: '', initial: true},
	shopifyIdCan: {type: Number, label: 'Shopify Id Canada'},
	preOrderCan: {type: Boolean, note: 'Show Preorder button instead of Buy Now - Canada'},
	shopifyIdUS: {type: Number, label: 'Shopify Id US'},
	preOrderUS: {type: Boolean, note: 'Show Preorder button instead of Buy Now - US'},
	//type: { type: Types.Relationship, ref: 'ProductType', required: true, initial: true},
	disciplines: { type: Types.Relationship, ref: 'Discipline', many: true },
	canonicalDiscipline: { type: Types.Relationship, ref: 'Discipline', many: false, note: 'The default Discipline for this product'},
	mainCategory: { type: Types.Relationship, ref: 'ProductCategory', required: true, initial: true},
	subCategory: { type: Types.Relationship, ref: 'ProductSubCategory', required: true, initial: true},
	
	heroColor: {type: String, default: '', note: 'Homepage slide color'},
	darkColor:{type: Boolean},
	heroBlurb: { type: Types.Html, default: ''},
	heroBackgroundImage: { type: Types.CloudinaryImage,  autoCleanup : true, note: 'Homepage slide background image' },
	buyNowUrl: {type: String, default: ''},
	
	technologies: { type: Types.Relationship, ref: 'ProductTechnology', many: true },
	features: { type: Types.Relationship, ref: 'ProductFeature', many: true },
	shortDescription: { type: Types.Html, default: '' },
	description: { type: Types.Html, default: '' },
	specs: { type: Types.Html, default: '' },
	usageChart: { type: Types.Html, default: '' },
	
	gallery: { type: Types.CloudinaryImages,  autoCleanup : true },
	//galleryColorSwatches: {type: String, default: '', note: 'semi-colon delimited list of html color values corresponding to each gallery image'},
	imagesPerColorSwatch: {type: Number, note: 'Number of images for each color swatch.'},
	colorways: {type: String, default: '', note: 'semi-colon delimited list of colorways'},

	featureVideo: {type: String, note: 'youtube url'},
	
	sizingChart: { type: Types.Relationship, ref: 'SizingChart' },
	extra: { type: Types.Html, wysiwyg: true }
});

Product.schema.virtual('colorwaysArray').get(function(){
	var colorways = [];
	var colors = this.colorways.split(';');
	colors.forEach(function(color){
		colorways.push({
			color: color
		});
	});
	
	
	//assign index to first image in each swatch collection.
	var imagesPerSwatch = this.imagesPerColorSwatch;
	colorways.forEach(function(swatch, i){
		if(i === 0) {
			colorways[i].productIndex = 0;
		}else{
			colorways[i].productIndex = ((i)*imagesPerSwatch);
		}
	});
	
	return colorways;
});

Product.schema.virtual('technologiesAndFeatures').get(function(){
	if(this.features[0] !== undefined){
		this.features[0].featureAnchor = true;
	}
	return this.technologies.concat(this.features).map(function(item, i){
		item.layout = ((i+1) % 3) || 3;
		return item;
	});
});

Product.schema.virtual('galleryColorwaysArray').get(function(){
	var colorSwatches = [];
	var colors = this.colorways.split(';');
	colors.forEach(function(color){
		var colorway = color.split(':')[0];
		var c = 'yellow';

		if(color.split(':').length > 1) {
			c = color.split(':')[1];
		}
		colorSwatches.push({
			colorway: colorway,
			color: c
		});
	});

	var split = [];
	colorSwatches.forEach(function(swatch, i){
		split = [];
		if(swatch.color.indexOf('/') > -1){
			split = swatch.color.split('/');
		}
		if(split.length){
			colorSwatches[i].split = split;
		}

	});

	//assign index to first image in each swatch collection.
	var imagesPerSwatch = this.imagesPerColorSwatch;
	colorSwatches.forEach(function(swatch, i){
		if(i === 0) {
			colorSwatches[i].productIndex = 0;
		}else{
			colorSwatches[i].productIndex = ((i)*imagesPerSwatch);
		}
	});

	return colorSwatches;
});



Product.register();

