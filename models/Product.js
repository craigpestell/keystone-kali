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
	//type: { type: Types.Relationship, ref: 'ProductType', required: true, initial: true},
	mainCategory: { type: Types.Relationship, ref: 'ProductCategory', required: true, initial: true},
	subCategory: { type: Types.Relationship, ref: 'ProductSubCategory', required: true, initial: true},
	technologies: { type: Types.Relationship, ref: 'ProductTechnology', many: true },
	features: { type: Types.Relationship, ref: 'ProductFeature', many: true },
	shortDescription: { type: Types.Html, default: '' },
	description: { type: Types.Html, default: '' },
	specs: { type: Types.Html, default: '' },
	usageChart: { type: Types.Html, default: '' },
	heroImage: { type: Types.CloudinaryImage,  autoCleanup : true },
	gallery: { type: Types.CloudinaryImages,  autoCleanup : true },
	//galleryColorSwatches: {type: String, default: '', note: 'semi-colon delimited list of html color values corresponding to each gallery image'},
	imagesPerColorSwatch: {type: Number, note: 'Number of images for each color swatch.'},
	colorways: {type: String, default: '', note: 'semi-colon delimited list of colorways'},
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
	return this.technologies.concat(this.features);
});

Product.register();

