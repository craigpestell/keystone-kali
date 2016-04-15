var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * HelmetSubCategory Model
 * =============
 */

var HelmetSubCategory = new keystone.List('HelmetSubCategory', {
	autokey: { from: 'slug', path: 'key', unique: true, drilldown: 'Helmet' }, sortable: true
});
//HelmetSubCategory.relationship({ path: 'helmets', ref: 'Helmet', refPath: 'categories' });

HelmetSubCategory.add({
	name: { type: String, required: true, default: '' },
	slug: { type: String, required: true, initial: true},
	parentCategory:{ type: Types.Relationship, ref: 'HelmetCategory'}
	
});

HelmetSubCategory.relationship({ path: 'helmets', ref: 'Helmet', refPath: 'subCategory'});

// Virtuals
// ------------------------------

HelmetSubCategory.schema.virtual('url').get(function() {
	return '/helmet-category/' + this.slug;
});

HelmetSubCategory.register();
