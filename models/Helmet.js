var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Helmet Model
 * =============
 */

var Helmet = new keystone.List('Helmet', {
	autokey: { from: 'slug', path: 'key', unique: true, sortable: true, drilldown: 'HelmetSpec'}
});
Helmet.defaultColumns = 'name,categories,technologies';
Helmet.add({
	name: { type: String, required: true },
	slug: { type: String, required: true, default: '', initial: true},
	mainCategory: { type: Types.Relationship, ref: 'HelmetCategory'},
	subCategory: { type: Types.Relationship, ref: 'HelmetSubCategory' },
	technologies: { type: Types.Relationship, ref: 'HelmetTechnology', many: true },
	features: { type: Types.Relationship, ref: 'HelmetFeature', many: true },
	description: { type: Types.Html, default: '' },
	specs: { type: Types.Html, default: '' },
	usageChart: { type: Types.Html, default: '' },
	heroImage: { type: Types.CloudinaryImage,  autoCleanup : true },
	gallery: { type: Types.CloudinaryImages,  autoCleanup : true },
	galleryColorSwatches: {type: String, default: '', note: 'semi-colon delimited list of html color values corresponding to each gallery image'},
	extra: { type: Types.Html, wysiwyg: true },
	sort: { type: Number }
});

Helmet.schema.virtual('galleryColorSwatchArray').get(function(){
	return this.galleryColorSwatches.split(';');
});

Helmet.schema.virtual('technologiesAndFeatures').get(function(){
	if(this.features[0] !== undefined){
		this.features[0].featureAnchor = true;
	}
	return this.technologies.concat(this.features);
});

Helmet.register();

