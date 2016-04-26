var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * ProductSubCategory Model
 * =============
 */

var ProductSubCategory = new keystone.List('ProductSubCategory', {
	autokey: { from: 'slug', path: 'key', unique: true, drilldown: 'Product' }, sortable: true
});
//ProductSubCategory.relationship({ path: 'products', ref: 'Product', refPath: 'categories' });

ProductSubCategory.add({
	name: { type: String, required: true, default: '' },
	slug: { type: String, required: true, initial: true},
	parentCategory:{ type: Types.Relationship, ref: 'ProductCategory'}
	
});

ProductSubCategory.relationship({ path: 'products', ref: 'Product', refPath: 'subCategory'});

// Virtuals
// ------------------------------

ProductSubCategory.schema.virtual('url').get(function() {
	return '/product-category/' + this.slug;
});

ProductSubCategory.register();
