var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * RegistrationRidingType Model
 * =============
 */

var RegistrationRidingType = new keystone.List('RegistrationRidingType', {
	autokey: { from: 'name', path: 'key', unique: true}, sortable: true
});
//RegistrationRidingType.relationship({ path: 'products', ref: 'Product', refPath: 'categories' });

RegistrationRidingType.add({
	name: { type: String, required: true, default: '' }
});

RegistrationRidingType.relationship({ path: 'registration', ref: 'Registration', refPath: 'ridingType'});

RegistrationRidingType.register();
