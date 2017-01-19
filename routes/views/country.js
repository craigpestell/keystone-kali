var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	
	
	locals.user_country = req.headers['cf-ipcountry'];
	console.log(locals.user_country);
	
	view.render('country');

};
