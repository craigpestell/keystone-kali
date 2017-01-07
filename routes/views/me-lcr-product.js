var keystone = require('keystone'),
	moment = require('moment'),
	UserLCRProduct = keystone.list('UserLCRProduct');


exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.section = 'LCR Registrations';
	locals.page = {};
	locals.page.title = 'LCR Registrations - Kali Protectives';

	// On POST requests, add the Registration item to the database
	view.on('post', { action: 'profile.register' }, function(next) {

		var newLCRProduct = new UserLCRProduct.model(),
			updater = newLCRProduct.getUpdateHandler(req);

		var requiredFields = [
			'model', 'color', 'size', 'serial', 'purchaseLocation', 'pricePaid', 'who'
			];
		req.body.who = req.user;

		updater.process(req.body, {
			flashErrors: true,
			fields: requiredFields.join(', '),
			errorMessage: 'There was a problem registering your product:'
		}, function(err) {
			console.log('updater.process');
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.registrationSubmitted = true;
				res.redirect('/profile');
			}
			next();
		});

	});

	view.query('UserLCRProduct',
		UserLCRProduct.model.find()
			.where('who', req.user)
			.sort('-createDate')
	);

	console.log('render');
	view.render('profile-lcr-product');

}
