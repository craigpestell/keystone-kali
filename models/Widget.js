var keystone = require('keystone');
var Types = keystone.Field.Types;

var Widget = new keystone.List('Widget', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Widget.add({
	name: { type: Types.Key, required: true },
	type: { type: Types.Select, options: 'image, html, youtube, embedly, carousel, technology-subnav', initial: true, default: 'image', required: true},
	carousel: {
		settings:{ type: Types.Code, dependsOn: {'type': 'carousel'}},
		widgets: {type: Types.Relationship, many: true, ref: 'Widget', dependsOn: {'type': 'carousel'}},
		fullscreen: {type: Boolean, dependsOn: {type: 'carousel'}}
	},
	image: { type: Types.CloudinaryImage, dependsOn: {'type' : 'image'},  autoCleanup : true  },
	youtube: {type: Types.Url, dependsOn: {'type' : 'youtube'} },
	//embedly: { type: Types.Embedly, from: 'youtube', dependsOn: {'type' : 'embedly'}  },
	href: {type: String, note: 'relative path to page (e.g. "/helmets")', dependsOn: {'type' : 'image'} },
	contentHtml: {type: Types.Html },
	widget:{ type: Types.Textarea, default: 'null' },
	container:{ type: Types.Select, options: 'container, container-fluid', default: 'container'}
});

Widget.relationship({ ref: 'Post', refPath: 'gallery.widgets' });

Widget.register();
