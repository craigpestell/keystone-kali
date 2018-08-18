var keystone = require('keystone');
var Types = keystone.Field.Types;


/**
 * Product Model
 * =============
 */
var Product = new keystone.List('Product', {
    autokey: { from: 'slug', path: 'key', unique: true },
    map: { name: 'adminName' },
    sortable: true //, sortContext: 'ProductSubCategory:products'
});
Product.defaultColumns = 'name,subCategory';


const getVersionExpanded = function(version, cb) {
    keystone.list('ProductVersion').model.findOne({ _id: version.toString() }).exec(function(err, v) {
        if (err) {
            cb(err, "unknown")
        } else {
            cb(null, v);
        }
    });
}

const getSubCategoryExpanded = function(subCategory, cb) {
    keystone.list('ProductSubCategory').model.findOne({ _id: subCategory.toString() }).exec(function(err, sc) {
        if (err) {
            cb(err, "unknown")
        } else {
            cb(null, sc);
        }
    });
}
Product.add({

    adminName: {
        type: Types.Text,
        watch: true,
        noedit: true,
        value: function(callback) {
            // attach sub category and version to name for Admim UI lookup.
            var subCat = "";

            var version = this.version;
            var subCat = this.subCategory;

            var title = this.name;

            getSubCategoryExpanded(subCat, function(err, result) {
                if (err) {
                    callback(err);
                }
                subCat = result && result.name;
                getVersionExpanded(version, function(err, result) {
                    if (err) {
                        callback(err);
                    }
                    version = result && result.name;
                    var label = `${title} /${subCat}/${version}`
                    callback(null, label);


                })
            });
        }
    },
    name: { type: String, required: true, initial: true },

    slug: { type: String, required: true, default: '', initial: true },
    version: { type: Types.Relationship, ref: 'ProductVersion' },
    shopifyIdCan: { type: Number, label: 'Shopify Id Canada', hidden: true },
    preOrderCan: { type: Boolean, note: 'Show Preorder button instead of Buy Now - Canada', hidden: true },
    shopifyIdUS: { type: Number, label: 'Shopify Id' },
    preOrderUS: { type: Boolean, note: 'Show Preorder button instead of Buy Now', label: 'Pre Order' },
    //type: { type: Types.Relationship, ref: 'ProductType', required: true, initial: true},
    disciplines: { type: Types.Relationship, ref: 'Discipline', many: true },
    canonicalDiscipline: { type: Types.Relationship, ref: 'Discipline', many: false, note: 'The default Discipline for this product' },
    mainCategory: { type: Types.Relationship, ref: 'ProductCategory', required: true, initial: true },
    subCategory: { type: Types.Relationship, ref: 'ProductSubCategory', required: true, initial: true },

    heroColor: { type: String, default: '', note: 'Homepage slide color' },
    darkColor: { type: Boolean },
    heroBlurb: { type: Types.Html, default: '' },
    heroBackgroundImage: { type: Types.CloudinaryImage, autoCleanup: true, note: 'Homepage slide background image' },
    buyNowUrl: { type: String, default: '' },

    technologies: { type: Types.Relationship, ref: 'ProductTechnology', many: true },
    features: { type: Types.Relationship, ref: 'ProductFeature', many: true },
    shortDescription: { type: Types.Html, default: '' },
    description: { type: Types.Html, default: '' },
    specs: { type: Types.Html, default: '' },
    usageChart: { type: Types.Html, default: '' },

    gallery: { type: Types.CloudinaryImages, autoCleanup: true },
    //galleryColorSwatches: {type: String, default: '', note: 'semi-colon delimited list of html color values corresponding to each gallery image'},
    imagesPerColorSwatch: { type: Number, note: 'Number of images for each color swatch.' },
    colorways: { type: String, default: '', note: 'semi-colon delimited list of colorways' },
    sizingChart: { type: Types.Relationship, ref: 'SizingChart' },
    mainPost: { type: Types.Relationship, ref: 'Post', note: 'Post for Lower content (extra images, videos)' },
    extra: { type: Types.Html, wysiwyg: true }
});

Product.schema.virtual('colorwaysArray').get(function() {
    var colorways = [];
    var colors = this.colorways.split(';');
    colors.forEach(function(color) {
        colorways.push({
            color: color
        });
    });


    //assign index to first image in each swatch collection.
    var imagesPerSwatch = this.imagesPerColorSwatch;
    colorways.forEach(function(swatch, i) {
        if (i === 0) {
            colorways[i].productIndex = 0;
        } else {
            colorways[i].productIndex = ((i) * imagesPerSwatch);
        }
    });

    return colorways;
});

Product.schema.virtual('technologiesAndFeatures').get(function() {
    if (this.features[0] !== undefined) {
        this.features[0].featureAnchor = true;
    }
    return this.technologies.concat(this.features).map(function(item, i) {
        item.layout = ((i + 1) % 3) || 3;
        return item;
    });
});


Product.schema.virtual('galleryColorwaysArray').get(function() {
    var colorSwatches = [];
    var colors = this.colorways.split(';');
    colors.forEach(function(color) {
        var colorway = color.split(':')[0];
        var c = 'yellow';

        if (color.split(':').length > 1) {
            c = color.split(':')[1];
        }
        colorSwatches.push({
            colorway: colorway,
            color: c
        });
    });

    var split = [];
    colorSwatches.forEach(function(swatch, i) {
        split = [];
        if (swatch.color.indexOf('/') > -1) {
            split = swatch.color.split('/');
        }
        if (split.length) {
            colorSwatches[i].split = split;
        }

    });

    //assign index to first image in each swatch collection.
    var imagesPerSwatch = this.imagesPerColorSwatch;
    colorSwatches.forEach(function(swatch, i) {
        if (i === 0) {
            colorSwatches[i].productIndex = 0;
        } else {
            colorSwatches[i].productIndex = ((i) * imagesPerSwatch);
        }
    });

    return colorSwatches;
});



Product.register();