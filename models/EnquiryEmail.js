
var keystone = require('keystone');
var Types = keystone.Field.Types;

var EnquiryEmail = new keystone.List('EnquiryEmail', {
	autokey: { from: 'name', path: 'key', unique: true },
});

EnquiryEmail.add({
	name: { type: String, required: true, initial: true },
	email: { type: Types.Email, required: true, initial: true}
});
EnquiryEmail.defaultColumns = 'name, email';
EnquiryEmail.register();
