var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {page:{title:'Kali Protectives'}};
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
	//popuplate Home page data.
	keystone.list('Discipline').model.find().where({slug: 'bike'}).exec(function (err, discipline) {
		var disciplineWhere = {};
		if(discipline.length > 0) {
			disciplineWhere = {disciplines: discipline[0]._id};
		}
		view.query('slides', keystone.list('Slide').model.find().where(disciplineWhere).sort('sortOrder'));
	
		// Render the view
		view.render('index');
	});
		
};
