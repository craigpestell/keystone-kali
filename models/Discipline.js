var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Discipline Model
 * =============
 */

var Discipline = new keystone.List('Discipline', {
	autokey: { from: 'slug', path: 'key', unique: true },
	map: { name: 'slug' }
});
Discipline.relationship({ path: 'products', ref: 'Product', refPath: 'disciplines' });
Discipline.add({
	name: { type: String, required: true, default: '', initial :true },
	slug: { type: String, required: true, default: '', initial: true},
	//description: { type: Types.Html, default: '' },
	//iconImage: { type: Types.CloudinaryImage,  autoCleanup : true},
	//heroImage: { type: Types.CloudinaryImage,  autoCleanup : true}
});

Discipline.register();
