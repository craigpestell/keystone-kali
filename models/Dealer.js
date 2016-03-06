var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Dealer Model
 * ==========
 */

var Dealer = new keystone.List('Dealer');

Dealer.add({
	name: { type: String, required: true, index: true },
	email: { type: Types.Email, initial: true, required: false, index: true },
	location:{ type: Types.Location, initial: true, required: true}
});


/**
 * Registration
 */

Dealer.defaultColumns = 'name, email, location';
Dealer.register();
