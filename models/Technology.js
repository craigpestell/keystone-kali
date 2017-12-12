var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Technology Model
 * =============
 */

var Technology = new keystone.List('Technology', {
	autokey: { from: 'name', path: 'key', unique: true }, sortable: true
});
Technology.relationship({ path: 'products', ref: 'Product', refPath: 'technologies' });
Technology.add({
	name: { type: String, required: true, default: '' },
	shortDescription: { type: Types.Html, default: '' },
	primaryImage:  { type: Types.CloudinaryImage,  autoCleanup : true}
});

Technology.register();
