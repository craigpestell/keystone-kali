var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * HelmetSubCategory Model
 * =============
 */

var HelmetSubCategory = new keystone.List('HelmetSubCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});
//HelmetSubCategory.relationship({ path: 'helmets', ref: 'Helmet', refPath: 'categories' });

HelmetSubCategory.add({
	name: { type: String, required: true, default: '' },
	slug: { type: String, required: true, initial: true},
	parentCategory:{ type: Types.Relationship, ref: 'HelmetCategory'},
	sort: { type: Number }
	
});

// Virtuals
// ------------------------------

HelmetSubCategory.schema.virtual('url').get(function() {
	return '/helmet-category/' + this.slug;
});

HelmetSubCategory.register();
