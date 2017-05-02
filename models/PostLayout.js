var keystone = require('keystone');
var Types = keystone.Field.Types;

var PostLayout = new keystone.List('PostLayout', {
	autokey: { from: 'name', path: 'key', unique: true },
	//label: 'Post Layout',
});

PostLayout.add({
	name: { type: String, required: true },
});

PostLayout.relationship({ ref: 'Post', refPath: 'postLayout' });

PostLayout.register();
