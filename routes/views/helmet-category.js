var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var category = req.params.category;
	
	// Set locals
	locals.section = 'helmets';

	// Load the galleries by sortOrder
	// TODO: filter by category
	
	keystone.list('HelmetCategory').model.find({slug:req.params.category},function (err, data) {
		if(data.length){
			view.query('helmets',keystone.list('Helmet').model.find().where('categories').in([data[0]._doc._id]));
			
		}
		// Render the view
		view.render('helmet-category');
	});
};
