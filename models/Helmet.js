var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Helmet Model
 * =============
 */

var Helmet = new keystone.List('Helmet', {
	autokey: { from: 'slug', path: 'key', unique: true, drilldown: 'HelmetSpec'}, sortable: true//, sortContext: 'HelmetSubCategory:helmets'
});
Helmet.defaultColumns = 'name,categories,technologies';
Helmet.add({
	name: { type: String, required: true },
	slug: { type: String, required: true, default: '', initial: true},
	mainCategory: { type: Types.Relationship, ref: 'HelmetCategory'},
	subCategory: { type: Types.Relationship, ref: 'HelmetSubCategory'},
	technologies: { type: Types.Relationship, ref: 'HelmetTechnology', many: true },
	features: { type: Types.Relationship, ref: 'HelmetFeature', many: true },
	description: { type: Types.Html, default: '' },
	specs: { type: Types.Html, default: '' },
	usageChart: { type: Types.Html, default: '' },
	heroImage: { type: Types.CloudinaryImage,  autoCleanup : true },
	gallery: { type: Types.CloudinaryImages,  autoCleanup : true },
	galleryColorSwatches: {type: String, default: '', note: 'semi-colon delimited list of html color values corresponding to each gallery image'},
	imagesPerColorSwatch: {type: Number, note: 'Number of images for each color swatch.'},
	extra: { type: Types.Html, wysiwyg: true }
});

Helmet.schema.virtual('galleryColorSwatchArray').get(function(){
	var colorSwatches = [];
	var colors = this.galleryColorSwatches.split(';');
	colors.forEach(function(color){
		colorSwatches.push({
			color: color
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
			colorSwatches[i].helmetIndex = 0;
		}else{
			colorSwatches[i].helmetIndex = ((i)*imagesPerSwatch);
		}
	});
	
	return colorSwatches;
});

Helmet.schema.virtual('technologiesAndFeatures').get(function(){
	if(this.features[0] !== undefined){
		this.features[0].featureAnchor = true;
	}
	return this.technologies.concat(this.features);
});

Helmet.register();

