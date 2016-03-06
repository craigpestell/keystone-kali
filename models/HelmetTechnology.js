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
	description: { type: String, default: '' },
	heroImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	gallery: { type: Types.CloudinaryImages,  autoCleanup : true }
});

HelmetTechnology.register();
