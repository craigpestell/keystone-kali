var keystone = require('keystone');
var cloudinary = require('cloudinary');

var Types = keystone.Field.Types;

var SizingChart = new keystone.List('SizingChart',{
	autokey: { from: 'name', path: 'key', unique: true}, sortable: true});
SizingChart.defaultColumns='name';
SizingChart.add(
	{
		name: { type: String, required: true, default: ''},
		text:{ type: String, default: ''},
		html: {type: Types.Html, note: ''}
	}
);

SizingChart.register();

