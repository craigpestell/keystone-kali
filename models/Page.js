var keystone = require('keystone');

var BasePage = new keystone.List('BasePage', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});
BasePage.add(
	{
		title: { type: String, required: true },
		slug: { type: String, readonly: true },
	}
);
BasePage.register();

var ChildPage = new keystone.List('ChildPage', { inherits: BasePage });
ChildPage.add({ child_content: { type: String, readonly: true } });
ChildPage.register();
