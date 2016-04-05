var keystone = require('keystone');
var Registration = keystone.list('Registration');

exports = module.exports = function(req, res) {
	console.log('loading registration');	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'register';
	
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.registrationSubmitted = false;
	
	// On POST requests, add the Registration item to the database
	view.on('post', { action: 'register' }, function(next) {
		
		var newRegistration = new Registration.model(),
			updater = newRegistration.getUpdateHandler(req);
		
		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, phone, message',
			errorMessage: 'There was a problem submitting your registration:'
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.registrationSubmitted = true;
			}
			next();
		});
		
	});
	view.render('register');
	
};
