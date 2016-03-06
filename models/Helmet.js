var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Helmet Model
 * =============
 */

var Helmet = new keystone.List('Helmet', {
	autokey: { from: 'name', path: 'key', unique: true, sortable: true}
});
Helmet.defaultColumns = 'name,categories,technologies';
Helmet.add({
	name: { type: String, required: true },
	slug: { type: String, required: true, default: 'slug', initial: false},
	categories: { type: Types.Relationship, ref: 'HelmetCategory', many: true },
	technologies: { type: Types.Relationship, ref: 'HelmetTechnology', many: true },
	specs: { type: Types.Relationship, ref: 'HelmetSpec', many: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage},
	carouselImage: { type: Types.CloudinaryImage },
	gallery: { type: Types.CloudinaryImages }
});


Helmet.register();

