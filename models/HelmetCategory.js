var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * HelmetCategory Model
 * =============
 */

var HelmetCategory = new keystone.List('HelmetCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});
HelmetCategory.relationship({ path: 'helmets', ref: 'Helmet', refPath: 'categories' });
HelmetCategory.add({
	name: { type: String, required: true, default: '' },
	slug: { type: String, required: true, initial: true},
	parentCategory:{ type: Types.Relationship, ref: 'HelmetCategory'},
	sort: { type: Number }
	
});

// Virtuals
// ------------------------------

HelmetCategory.schema.virtual('url').get(function() {
	return '/helmet-category/' + this.slug;
});

HelmetCategory.register();
