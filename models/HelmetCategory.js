var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * HelmetCategory Model
 * =============
 */

var HelmetCategory = new keystone.List('HelmetCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});
HelmetCategory.relationship({ path: 'helmets', ref: 'Helmet', refPath: 'categories' });
HelmetCategory.add({
	name: { type: String, required: true, default: '' }
});

HelmetCategory.register();
