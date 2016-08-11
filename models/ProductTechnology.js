var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * ProductTechnology Model
 * =============
 */

var ProductTechnology = new keystone.List('ProductTechnology', {
	autokey: { from: 'name', path: 'key', unique: true }
});
ProductTechnology.relationship({ path: 'products', ref: 'Product', refPath: 'technologies' });
ProductTechnology.add({
	name: { type: String, required: true, default: '' },
	description: { type: Types.Html, default: '' },
	iconImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	heroImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	primaryImage:  { type: Types.CloudinaryImage,  autoCleanup : true},
	secondaryImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	tertiaryImage: { type: Types.CloudinaryImage,  autoCleanup : true}
});

ProductTechnology.register();
