
var keystone = require('keystone');
var cloudinary = require('cloudinary');

var Types = keystone.Field.Types;

var Slide = new keystone.List('Slide',{
	autokey: { from: 'name', path: 'key', unique: true}, sortable: true});
Slide.defaultColumns='name';

Slide.add(
	{
		name: { type: String, required: true, default: ''},
		post: { type: Types.Relationship, ref: 'Post' },
		youtube: {type: Types.Url},
		embedly: { type: Types.Embedly, from: 'youtube' },
		href: {type: String, note: 'relative path to page (e.g. "/helmets")'},
		contentHtml: {type: Types.Html},
		//overlayHtml: {type: Types.Html, note: 'use {{overlayImage}} for overlay image placeholder'},
		//overlayImage: {type: Types.CloudinaryImage,  autoCleanup : true}
	}
);

Slide.schema.virtual('parsedOverlay').get(function(){
	
	var parsed = this.overlayHtml.replace('{{overlayImage}}', this.overlayImage.url);
		//cloudinary.image(this.overlayImage.url,{width: 'auto', dpr: 'auto', responsive_placeholder: "blank" }));
	return parsed;
});

Slide.register();
