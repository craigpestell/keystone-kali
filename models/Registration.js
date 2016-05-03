var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Registration Model
 * =============
 */

var Registration = new keystone.List('Registration', {
	nocreate: true,
	noedit: true
});

Registration.add({
	nameFirst: { type: String, required: true, label: 'First Name' },
	nameLast: { type: String, required: true, label: 'Last Name' },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	address: {type: Types.Location, required: true},
	gender: { type: Types.Select, options: 'male, female', required: true },
	//birthDate: {type: Types.Date, required: true, label: 'Birthdate (mm/dd/yyyy)'},
	age: { type: String },

	helmetModel: {type: String, required: true},
	helmetColor: {type: String, required: true},
	helmetSize: {type: String, required: true},
	helmetPurchaseLocation: {type: String, required: true},
	helmetPricePaid: {type: String},
	feedbackHowOften: {type: String, required: true, label: 'How often do you wear your Kali?'},
	feedbackRidingType: {type: String, required: true, label: 'What type of riding do you use your Kali Helmet for?'},
	feedbackLastHelmet: {type: String, required: true, label: 'What brand was your last helmet?'},
	feedbackWhyKali: {type: Types.Textarea, required: true, label: 'Why did you choose a Kali?'},
	
	feedbackComments: { type: Types.Textarea},
	createdAt: { type: Date, default: Date.now }
});

Registration.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
});

Registration.schema.post('save', function() {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Registration.schema.methods.sendNotificationEmail = function(callback) {

	if ('function' !== typeof callback) {
		callback = function() {};
	}

	var registration = this;

	keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {

		if (err) return callback(err);

		new keystone.Email('registration-notification').send({
			to: admins,
			from: {
				name: 'kali',
				email: 'contact@kali.com'
			},
			subject: 'New Registration for kali',
			registration: registration
		}, callback);

	});

};

Registration.defaultSort = '-createdAt';
Registration.defaultColumns = 'name, email, registrationType, createdAt';
Registration.register();
