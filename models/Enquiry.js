var keystone = require('keystone');
var Types = keystone.Field.Types;
var Email = require('keystone-email');
var hbs = require('hbs');

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true
});

Enquiry.add({
	name: { type: Types.Name, required: true, noedit: true },
	email: { type: Types.Email, required: true, noedit: true },
	phone: { type: String, noedit: true },
	emailTo: { type: Types.Relationship, ref: 'EnquiryEmail'},
	enquiryType: { type: Types.Select, options: [
		{ value: 'message', label: 'Just leaving a message' },
		{ value: 'question', label: 'I\'ve got a question' },
		{ value: 'other', label: 'Something else...' }
	], noedit: true },
	message: { type: Types.Markdown, required: true, noedit: true },
	replied: {type: Types.Boolean},
	createdAt: { type: Date, default: Date.now, noedit: true }
});

Enquiry.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
});

Enquiry.schema.post('save', function() {
	if (this.wasNew) {
		this.sendNotificationEmail(function(err, email){
			if(err){
				console.error(err);
			}
		});
	}
});

Enquiry.schema.methods.sendNotificationEmail = function(callback) {
	if ('function' !== typeof callback) {
		callback = function() {};
	}
	
	var enquiry = this;
	keystone.list('EnquiryEmail').model.find().where({'_id': enquiry.emailTo}).exec(function(err, enquiryEmail) {
		
		if (err) return callback(err);
		if(!enquiryEmail) return callback(err);
		
		var emailLocals = {
			layout: false,
			to: enquiryEmail[0].email,
			enquiryEmail:enquiryEmail,
			from: {
				name: 'Kali Protectives',
				email: 'contact@kaliprotectives.com'
			},
			subject: 'Enquiry on kaliprotectives.com',
			enquiry: enquiry
		};
		var options = {
			from: 'contact@kaliprotectives.com',
			to: enquiryEmail[0].email
			
		};
		new Email('templates/emails/enquiry-notification/email', { transport: 'mailgun', engine: 'hbs' }).send(emailLocals, options, function(err){
			console.log('error:', err);
			console.log('email sent')/* sent */ 
		});
		
	});
	
};

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
