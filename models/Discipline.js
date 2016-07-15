var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Discipline Model
 * =============
 */

var Discipline = new keystone.List('Discipline', {
	autokey: { from: 'name', path: 'key', unique: true }
});
Discipline.relationship({ path: 'products', ref: 'Product', refPath: 'disciplines' });
Discipline.add({
	name: { type: String, required: true, default: '' },
	slug: { type: String, required: true, default: '', initial: true},
	//description: { type: Types.Html, default: '' },
	//iconImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	//heroImage: { type: Types.CloudinaryImage,  autoCleanup : true}
});

Discipline.register();
