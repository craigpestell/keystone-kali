
var keystone = require('keystone');
var Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Post.add({
	meta: {
		title: { type: String},
		description: { type: String}
	},
	name: { type: String, required: true, initial: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true },
	postLayout: { type: Types.Relationship, ref: 'PostLayout'},
	mainImage: { type: Types.CloudinaryImage,  autoCleanup : true, note: 'blog index / thumbnail' },
	gallery:
		{
			widgets: {type: Types.Relationship, ref: 'Widget', many: true, label: 'Widgets Gallery'},
			layout: { type: Types.Select, options: 'basic, blocks, left, right, carousel, republik-1, home-landing', dependsOn: {'gallery.widgets' : true}, default: "basic" }
		},
	imagesGallery:
		{
			images: { type: Types.CloudinaryImages,  autoCleanup : true, label: 'Images Gallery' },
			layout: { type: Types.Select, options: 'basic, blocks, left, right, carousel, republik-1, home-landing', dependsOn: {'imagesGallery.images' : true}, default: "basic" }
		},

	youtube: {type: Types.Url},
	embedly: { type: Types.Embedly, from: 'youtube' },
	product: { type: Types.Relationship, ref: 'Product', note: 'Product for Slide Post' },
	products: { type: Types.Relationship, ref: 'Product', many: true, note: 'Related Products' },
	showGalleryImages: { type: String, note: 'comma-delimited indexes of Product gallery images (e.g.: "2,3,5"', dependsOn: {product:true}},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
		markdown: { type: Types.Markdown, height: 400 }
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
});


Post.schema.virtual('fullPostUrl').get(function() {
	return keystone.get('baseUrl') + 'blog/post/' + this.key;
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.schema.virtual('galleryImages').get(function(){
	
	var imageIndexes = [2,1];
	var images = [];
	if(this.product) {
		if(this.showGalleryImages){
			imageIndexes = this.showGalleryImages.split(',');
		}
		var _this = this;
		imageIndexes.forEach(function (i) {
			if(_this.product.gallery.length >= i)
				images.push(_this.product.gallery[i]);
		});
	}
	return images;
});


//Post.relationship({ path: 'comments', ref: 'PostComment', refPath: 'post' });

Post.track = true;
Post.defaultColumns = 'name, state|20%, author|20%, publishedDate|20%';
Post.register();
