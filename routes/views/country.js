var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	//Cloudflare country geolocation header
	locals.user_country = req.headers['cf-ipcountry'];
	console.log(locals.user_country);
	
	//just a json object with country property.
	view.render('country');

};
