var keystone = require('keystone');
var Types = keystone.Field.Types;

var BasePage = new keystone.List('BasePage', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});
BasePage.add(
	{
		title: { type: String, required: true },
		slug: { type: String, readonly: true },
		carousel: {type: Types.CloudinaryImages},
		contentHtml: {type: Types.Html},
		embedlyPath: {type: String},
		embedlyData:{type: Types.Embedly, from: 'embedlyPath'}
	}
);
BasePage.register();

var ChildPage = new keystone.List('ChildPage', { inherits: BasePage });
ChildPage.add({ child_content: { type: String, readonly: true } });
ChildPage.register();
