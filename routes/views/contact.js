var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	locals.data = {page:{title:'Get in touch - Kali Protectives'}};
	
	// Set locals
	locals.section = 'contact';
	//locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;


	var domain = keystone.get('domain');
	var domainAndPort = domain + (keystone.get('port')?':' + keystone.get('port'):'');
	locals.domainAndPort = domainAndPort;


	// Get enquiry names / emails for dropdown
	view.on('init', function (next) {

		var q = keystone.list('EnquiryEmail').model.find().populate('emailTo');
			
		q.exec(function (err, results) {
			locals.enquiryEmails = results;
			next(err);
		});
	});
	
	
	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'contact' }, function(next) {
		
		var newEnquiry = new Enquiry.model(),
			updater = newEnquiry.getUpdateHandler(req);
		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, phone, emailTo, message',
			errorMessage: 'There was a problem submitting your enquiry:'
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
		
	});
	
	view.render('contact');
	
};
