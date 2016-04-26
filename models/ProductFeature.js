var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * ProductFeature Model
 * =============
 */

var ProductFeature = new keystone.List('ProductFeature', {
	autokey: { from: 'name', path: 'key', unique: true }
});
ProductFeature.relationship({ path: 'products', ref: 'Product', refPath: 'features' });
ProductFeature.add({
	name: { type: String, required: true, default: '' },
	description: { type: Types.Html, default: '' },
	iconImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	heroImage: { type: Types.CloudinaryImage,  autoCleanup : true}
});

ProductFeature.register();
