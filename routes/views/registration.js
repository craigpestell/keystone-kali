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
	locals.data = {};

	view.on('init', function(next) {

		var q = keystone.list('BasePage').model.findOne({
			slug: 'register'
		});//.populate('author categories');

		q.exec(function(err, result) {
			locals.data.page = result;
			next(err);
		});

	});
	
	// On POST requests, add the Registration item to the database
	view.on('post', { action: 'register' }, function(next) {
		
		var newRegistration = new Registration.model(),
			updater = newRegistration.getUpdateHandler(req);
		
		var requiredFields = [
			'nameFirst', 'nameLast', 'email', 'phone', 'address', 'gender', 'birthDate', 
			'helmetModel', 'helmetColor', 'helmetSize','helmetPurchaseLocation', 'helmetPricePaid',
			'feedbackHowOften', 'feedbackRidingType', 'feedbackLastHelmet', 'feedbackWhyKali' ];
		updater.process(req.body, {
			flashErrors: true,
			fields: requiredFields.join(', '),
			errorMessage: 'There was a problem registering your product:'
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
