var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Technology Model
 * =============
 */

var Technology = new keystone.List('Technology', {
	autokey: { from: 'name', path: 'key', unique: true }, sortable: true
});
Technology.add({
	name: { type: String, required: true, default: '' },
	shortDescription: { type: Types.Html, default: '' },
	description: { type: Types.Html, default: '' },
	//iconImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	heroImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	logo: { type: Types.CloudinaryImage,  autoCleanup : true},
	primaryImage:  { type: Types.CloudinaryImage,  autoCleanup : true},
	secondaryImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	tertiaryImage: { type: Types.CloudinaryImage,  autoCleanup : true}
});

Technology.register();
