var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * SiteSettings Model
 * =============
 */

var SiteSetting = new keystone.List('SiteSetting', {
	autokey: { from: 'name', path: 'key', unique: true, sortable: true}
});
SiteSetting.defaultColumns = 'name';
SiteSetting.add({
	name: { type: String, required: true },
	textValue: {type: Types.Text},
	htmlValue: {type: Types.Html},
	imageValue:{type: Types.CloudinaryImage,  autoCleanup : true}
});

SiteSetting.register();

