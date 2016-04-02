var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * HelmetFeature Model
 * =============
 */

var HelmetFeature = new keystone.List('HelmetFeature', {
	autokey: { from: 'name', path: 'key', unique: true }
});
HelmetFeature.relationship({ path: 'helmets', ref: 'Helmet', refPath: 'features' });
HelmetFeature.add({
	name: { type: String, required: true, default: '' },
	description: { type: Types.Html, default: '' },
	iconImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	heroImage: { type: Types.CloudinaryImage,  autoCleanup : true}
});

HelmetFeature.register();
