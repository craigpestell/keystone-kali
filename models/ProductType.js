var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * ProductType Model
 * =============
 */

var ProductType = new keystone.List('ProductType', {
	autokey: { from: 'name', path: 'key', unique: true }, sortable: true
});
ProductType.relationship({ path: 'products', ref: 'Product', refPath: 'type' });
ProductType.add({
	name: { type: String, required: true, default: '' },
	slug: { type: String, required: true, initial: true }
});

// Virtuals
// ------------------------------

//ProductType.schema.virtual('url').get(function() {
//	return '/product-category/' + this.slug;
//});

ProductType.register();
