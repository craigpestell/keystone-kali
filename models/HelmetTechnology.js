var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * HelmetTechnology Model
 * =============
 */

var HelmetTechnology = new keystone.List('HelmetTechnology', {
	autokey: { from: 'name', path: 'key', unique: true }
});
HelmetTechnology.relationship({ path: 'helmets', ref: 'Helmet', refPath: 'technologies' });
HelmetTechnology.add({
	name: { type: String, required: true, default: '' },
	description: { type: Types.Html, default: '' },
	iconImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	heroImage: { type: Types.CloudinaryImage,  autoCleanup : true}
});

HelmetTechnology.register();
