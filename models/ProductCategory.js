var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * ProductCategory Model
 * =============
 */

var ProductCategory = new keystone.List('ProductCategory', {
	autokey: { from: 'name', path: 'key', unique: true }, sortable: true
});
ProductCategory.relationship({ path: 'products', ref: 'Product', refPath: 'categories' });
ProductCategory.add({
	name: { type: String, required: true, default: '' },
	slug: { type: String, required: true, initial: true}
});

// Virtuals
// ------------------------------

//ProductCategory.schema.virtual('url').get(function() {
//	return '/product-category/' + this.slug;
//});

ProductCategory.register();
