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
	description: { type: Types.Html, default: '' },
	//iconImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	heroImage: { type: Types.CloudinaryImage,  autoCleanup : true}
});

Technology.register();
