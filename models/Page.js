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
		heroImage: {type: Types.CloudinaryImage,  autoCleanup : true},
		bannerImage: { type: Types.CloudinaryImage,  autoCleanup : true},
		bannerOverlayHtml: { type: Types.Html, default: '' },
		carousel: {type: Types.CloudinaryImages,  autoCleanup : true},
		slides: { type: Types.Relationship, ref: 'Slide', many: true },
		posts: { type: Types.Relationship, ref: 'Post', many: true },
		products: { type: Types.Relationship, ref: 'Product', many: true },
		contentHtml: {type: Types.Html}
	}
);
BasePage.register();

var ChildPage = new keystone.List('ChildPage', { inherits: BasePage });
ChildPage.add({ child_content: { type: String, readonly: true } });
ChildPage.register();
