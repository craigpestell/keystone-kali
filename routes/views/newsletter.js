var keystone = require('keystone');
var Newsletter = keystone.list('Newsletter');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = '#KaliForLife';
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.newsletterSubmitted = false;

	view.on('post', { action: 'contact' }, function (next) {

		var application = new Newsletter.model();
		var updater = application.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.newsletterSubmitted = true;
			}
			next();
		});

	});

	view.render('newsletter', {
		section: 'newsletter',
	});

}
