var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * ProductVersion Model
 * =============
 */

var ProductVersion = new keystone.List('ProductVersion', {
	autokey: { from: 'name', path: 'key', unique: true }, sortable: true
});
ProductVersion.relationship({ path: 'products', ref: 'Product', refPath: 'version' });
ProductVersion.add({
	name: { type: String, required: true, default: '' },
	slug: { type: String, required: true, initial: true},
});

// Virtuals
// ------------------------------

//ProductVersion.schema.virtual('url').get(function() {
//	return '/product-category/' + this.slug;
//});

ProductVersion.register();
