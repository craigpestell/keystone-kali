var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Newsletter Model
 * ==========
 */

var Newsletter = new keystone.List('Newsletter');

Newsletter.add({
	email: { type: Types.Email, initial: true, required: false, index: true },
	location:{ type: Types.Location, initial: true, required: true}
});


/**
 * Registration
 */

Newsletter.defaultColumns = 'email, location';
Newsletter.register();
