var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * HelmetSpec Model
 * =============
 */

var HelmetSpec = new keystone.List('HelmetSpec', {
	autokey: { from: 'name', path: 'key', unique: true,drilldown:'helmets' }
});
HelmetSpec.relationship({ path: 'helmets', ref: 'Helmet', refPath: 'specs' });
HelmetSpec.add({
	name: { type: String, required: true, default: '' },
	description: { type: String, default: '' }
});

HelmetSpec.register();
