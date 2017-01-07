var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * UserLCRProduct Model
 * =============
 */

var UserLCRProduct = new keystone.List('UserLCRProduct', {
	autokey: { from: 'serial', path: 'key'}
	//nocreate: true,
	//noedit: true
});

UserLCRProduct.add({
	who: { type: Types.Relationship, ref: 'User', required: true, initial: true, index: true },
	serial: {type: String, required: true, initial:true},
	model: {type: String, required: true, initial:true},
	color: {type: String, required: true, initial:true},
	size: {type: String, required: true, initial:true},
	purchaseLocation: {type: String, required: true, initial:true},
	pricePaid: {type: String, required: true, initial:true},
	claimed: {type: Boolean, default: false},
	createdAt: { type: Date, default: Date.now }
});


UserLCRProduct.defaultSort = '-createdAt';

UserLCRProduct.register();
