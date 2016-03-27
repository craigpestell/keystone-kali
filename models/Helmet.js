var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Helmet Model
 * =============
 */

var Helmet = new keystone.List('Helmet', {
	autokey: { from: 'name', path: 'key', unique: true, sortable: true, drilldown: 'HelmetSpec'}
});
Helmet.defaultColumns = 'name,categories,technologies';
Helmet.add({
	name: { type: String, required: true },
	slug: { type: String, required: true, default: '', initial: true},
	mainCategories: { type: Types.Relationship, ref: 'HelmetCategory', many: true },
	subCategory: { type: Types.Relationship, ref: 'HelmetSubCategory' },
	technologies: { type: Types.Relationship, ref: 'HelmetTechnology', many: true },
	description: { type: Types.Html, default: '' },
	specs: { type: Types.Html, default: '' },
	usageChart: { type: Types.Html, default: '' },
	heroImage: { type: Types.CloudinaryImage,  autoCleanup : true },
	carouselImage: { type: Types.CloudinaryImage, autoCleanup : true },
	gallery: { type: Types.CloudinaryImages,  autoCleanup : true },
	extra: { type: Types.Html, wysiwyg: true },
	sortBike: { type: Number },
	sortPowersports: { type: Number }
});

// Virtuals
// ------------------------------

Helmet.schema.virtual('url').get(function() {
	return '/helmets/' + this.slug;
});

Helmet.register();

