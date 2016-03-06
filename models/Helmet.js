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
	categories: { type: Types.Relationship, ref: 'HelmetCategory', many: true },
	technologies: { type: Types.Relationship, ref: 'HelmetTechnology', many: true },
	specs: { type: Types.Html },
	heroImage: { type: Types.CloudinaryImage,  autoCleanup : true },
	carouselImage: { type: Types.CloudinaryImage, autoCleanup : true },
	gallery: { type: Types.CloudinaryImages,  autoCleanup : true },
	extra: { type: Types.Html, wysiwyg: true }
});

// Virtuals
// ------------------------------

Helmet.schema.virtual('url').get(function() {
	return '/helmets/' + this.slug;
});

Helmet.register();

