var keystone = require("keystone");
var Types = keystone.Field.Types;

/**
 * ProductTechnology Model
 * =============
 */

var ProductTechnology = new keystone.List("ProductTechnology", {
	autokey: { from: "name", path: "key", unique: true },
	sortable: true
});
ProductTechnology.relationship({
	path: "products",
	ref: "Product",
	refPath: "technologies"
});
ProductTechnology.defaultColumns = "year, name";
ProductTechnology.defaultSort = "year";
ProductTechnology.add({
	name: { type: String, required: true, default: "" },
	slug: { type: String },
	shortDescription: { type: Types.Html, default: "" },
	description: { type: Types.Html, default: "" },
	year: { type: Types.Number },
	iconImage: { type: Types.CloudinaryImage, autoCleanup: true },
	flatIconImage: { type: Types.CloudinaryImage, autoCleanup: true },
	rawIconImage: { type: String },
	heroImage: { type: Types.CloudinaryImage, autoCleanup: true },
	heroImageMoto: { type: Types.CloudinaryImage, autoCleanup: true },
	bannerImage: { type: Types.CloudinaryImage, autoCleanup: true },
	bannerOverlayHtml: { type: Types.Html, default: "" },
	primaryImage: { type: Types.CloudinaryImage, autoCleanup: true },
	secondaryImage: { type: Types.CloudinaryImage, autoCleanup: true },
	tertiaryImage: { type: Types.CloudinaryImage, autoCleanup: true },
	contentHtml: { type: Types.Html, default: "" },
	post: { type: Types.Relationship, ref: "Post" }
});

ProductTechnology.register();
