var moment = require('moment');
var _ = require('underscore');
var hbs = require('handlebars');
var keystone = require('keystone');
var cloudinary = require('cloudinary');

// Declare Constants
var CLOUDINARY_HOST = 'http://res.cloudinary.com';

// Collection of templates to interpolate
var linkTemplate = _.template('<a href="<%= url %>"><%= text %></a>');
var scriptTemplate = _.template('<script src="<%= src %>"></script>');
var cssLinkTemplate = _.template('<link href="<%= href %>" rel="stylesheet">');
var cloudinaryUrlLimit = _.template(
	CLOUDINARY_HOST +
		'/<%= cloudinaryUser %>/image/upload/c_limit,f_auto,h_<%= height %>,w_<%= width %>/<%= publicId %>.jpg',
);

module.exports = function() {
	var _helpers = {};

	/**
	 * Generic HBS Helpers
	 * ===================
	 */

	// standard hbs equality check, pass in two values from template
	// {{#ifeq keyToCheck data.myKey}} [requires an else blockin template regardless]
	_helpers.ifeq = function(a, b, options) {
		if (a == b) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	};

	_helpers.ifCond = function(v1, operator, v2, options) {
		switch (operator) {
			case '==':
				return v1 == v2 ? options.fn(this) : options.inverse(this);
			case '!=':
				return v1 != v2 ? options.fn(this) : options.inverse(this);
			case '===':
				return v1 === v2 ? options.fn(this) : options.inverse(this);
			case '<':
				return v1 < v2 ? options.fn(this) : options.inverse(this);
			case '<=':
				return v1 <= v2 ? options.fn(this) : options.inverse(this);
			case '>':
				return v1 > v2 ? options.fn(this) : options.inverse(this);
			case '>=':
				return v1 >= v2 ? options.fn(this) : options.inverse(this);
			case '&&':
				return v1 && v2 ? options.fn(this) : options.inverse(this);
			case '||':
				return v1 || v2 ? options.fn(this) : options.inverse(this);
			default:
				return options.inverse(this);
		}
	};

	/**
	 * Port of Ghost helpers to support cross-theming
	 * ==============================================
	 *
	 * Also used in the default keystonejs-hbs theme
	 */

	// ### Date Helper
	// A port of the Ghost Date formatter similar to the keystonejs - jade interface
	//
	//
	// *Usage example:*
	// `{{date format='MM YYYY}}`
	// `{{date publishedDate format='MM YYYY'`
	//
	// Returns a string formatted date
	// By default if no date passed into helper than then a current-timestamp is used
	//
	// Options is the formatting and context check this.publishedDate
	// If it exists then it is formated, otherwise current timestamp returned

	_helpers.date = function(context, options) {
		if (!options && context.hasOwnProperty('hash')) {
			options = context;
			context = undefined;

			if (this.publishedDate) {
				context = this.publishedDate;
			}
		}

		// ensure that context is undefined, not null, as that can cause errors
		context = context === null ? undefined : context;

		var f = options.hash.format || 'MMM Do, YYYY',
			timeago = options.hash.timeago,
			date;

		// if context is undefined and given to moment then current timestamp is given
		// nice if you just want the current year to define in a tmpl
		if (timeago) {
			date = moment(context).fromNow();
		} else {
			date = moment(context).format(f);
		}
		return date;
	};

	// ### Category Helper
	// Ghost uses Tags and Keystone uses Categories
	// Supports same interface, just different name/semantics
	//
	// *Usage example:*
	// `{{categoryList categories separator=' - ' prefix='Filed under '}}`
	//
	// Returns an html-string of the categories on the post.
	// By default, categories are separated by commas.
	// input. categories:['tech', 'js']
	// output. 'Filed Undder <a href="blog/tech">tech</a>, <a href="blog/js">js</a>'

	_helpers.categoryList = function(categories, options) {
		var autolink = _.isString(options.hash.autolink) && options.hash.autolink === 'false' ? false : true,
			separator = _.isString(options.hash.separator) ? options.hash.separator : ', ',
			prefix = _.isString(options.hash.prefix) ? options.hash.prefix : '',
			suffix = _.isString(options.hash.suffix) ? options.hash.suffix : '',
			output = '';

		function createTagList(tags) {
			var tagNames = _.pluck(tags, 'name');

			if (autolink) {
				return _.map(tags, function(tag) {
					return linkTemplate({
						url: '/blog/' + tag.key,
						text: _.escape(tag.name),
					});
				}).join(separator);
			}
			return _.escape(tagNames.join(separator));
		}

		if (categories && categories.length) {
			output = prefix + createTagList(categories) + suffix;
		}
		return new hbs.SafeString(output);
	};

	/* To Implement [Ghost Helpers](http://docs.ghost.org/themes/#helpers)
     * The [source](https://github.com/TryGhost/Ghost/blob/master/core/server/helpers/index.js)
     *
     * * `Foreach` Extended Helper
     * * `Asset` Helper
     * * `Content` Helper
     * * `Excerpt` Helper
     * * `Has` Helper
     * * `Encode` Helper
     * * Pagination
     * * BodyClass
     * * PostClass
     * * meta_title
     * * meta_description
     * * ghost_[footer/header]
     *
     */

	/**
	 * KeystoneJS specific helpers
	 * ===========================
	 */

	// block rendering for keystone admin css
	_helpers.isAdminEditorCSS = function(user, options) {
		var output = '';
		if (typeof user !== 'undefined' && user.isAdmin) {
			output = cssLinkTemplate({
				href: '/keystone/styles/content/editor.min.css',
			});
		}
		return new hbs.SafeString(output);
	};

	// block rendering for keystone admin js
	_helpers.isAdminEditorJS = function(user, options) {
		var output = '';
		if (typeof user !== 'undefined' && user.isAdmin) {
			output = scriptTemplate({
				src: '/keystone/js/content/editor.js',
			});
		}
		return new hbs.SafeString(output);
	};

	// Used to generate the link for the admin edit post button
	_helpers.adminEditableUrl = function(user, options) {
		var rtn = keystone.app.locals.editable(user, {
			list: 'Post',
			id: options,
		});
		return rtn;
	};

	// ### CloudinaryUrl Helper
	// Direct support of the cloudinary.url method from Handlebars (see
	// cloudinary package documentation for more details).
	//
	// *Usage examples:*
	// `{{{cloudinaryUrl image width=640 height=480 crop='fill' gravity='north'}}}`
	// `{{#each images}} {{cloudinaryUrl width=640 height=480}} {{/each}}`
	//
	// Returns an src-string for a cloudinary image

	_helpers.cloudinaryUrl = function(context, options) {
		// if we dont pass in a context and just kwargs
		// then `this` refers to our default scope block and kwargs
		// are stored in context.hash
		if (!options && context.hasOwnProperty('hash')) {
			// strategy is to place context kwargs into options
			options = context;
			// bind our default inherited scope into context
			context = this;
		}

		// safe guard to ensure context is never null
		context = context === null ? undefined : context;

		if (context && context.public_id) {
			var imageName = context.public_id.concat('.', context.format);
			if (options.hash.format !== undefined) {
				imageName = imageName.substr(0, imageName.lastIndexOf('.'));
			}
			var url = cloudinary.url(imageName, options.hash);
			//if (window.location.protocol != "https:")
			url = url.replace('http://', '//');
			return url;
		} else {
			return null;
		}
	};

	_helpers.cloudinaryImgSrcSet = function(context, options) {
		if (!options && context.hasOwnProperty('hash')) {
			// strategy is to place context kwargs into options
			options = context;
			// bind our default inherited scope into context
			context = this;
		}

		// safe guard to ensure context is never null
		context = context === null ? undefined : context;

		if (options.hash.widths !== undefined) {
			options.hash.widths = JSON.parse(options.hash.widths);
		} else {
			return;
		}
		if (options.hash.screenWidths !== undefined) {
			options.hash.screenWidths = JSON.parse(options.hash.screenWidths);
		} else {
			return;
		}
		if (options.hash.index !== undefined) {
			options.hash.index = Math.floor(options.hash.index);
		}

		if (context && context.public_id) {
			var imageName = context.public_id.concat('.', context.format);
			if (options.hash.format !== undefined) {
				imageName = imageName.substr(0, imageName.lastIndexOf('.'));
			}
			var imgs = [];

			var styles = [];
			if (options.hash.index && (options.hash.onlyShowFirst !== undefined && options.hash.onlyShowFirst)) {
				styles.push('display:none');
			}
			var srcset = '<picture>'; //[290,330,345,381,384,405,500,600,700,738,720,536,652,652]
			if (options.hash.style) {
				srcset = '<picture style="' + options.hash.style + '">';
			}
			var screenWidths = options.hash.screenWidths;
			options.hash.width = options.hash.widths[options.hash.widths.length - 1];
			var origUrl = cloudinary.url(imageName, options.hash);
			origUrl = origUrl.replace('http://', '//');
			//options.hash.width = options.hash.widths[0];
			options.hash.widths.forEach(function(w, i) {
				var dpr = [1, 2, 3];
				var dprSrcSet = [];
				dpr.forEach(function(pr) {
					options.hash.width = w * pr;
					var url = cloudinary.url(imageName, options.hash);
					url = url.replace('http://', '//');

					dprSrcSet.push(url + ' ' + pr + 'x');
				});
				var srcSet = 'srcset="' + dprSrcSet.join(', ') + '"';
				if (options.hash.dataSrc !== undefined && options.hash.dataSrc) {
					srcSet = 'data-' + srcSet;
				}
				var source = '<source media="(max-width:' + screenWidths[i] + 'px)" ' + srcSet + '>';

				imgs.push(source);
			});
			srcset += imgs.join('\n');
			var id = '';
			if (options.hash.id !== undefined) {
				id = options.hash.id;
			}

			if (id && options.hash.index !== undefined) {
				id += options.hash.index;
			}
			styles.push('width:100%');
			var style = "style='";
			styles.forEach(function(s) {
				style += s + ';';
			});
			style += "'";
			srcset += '<img class="' + options.hash.class + '" ' + style;
			if (id) {
				srcset += 'id="' + id + '" ';
			}
			if (options.hash.dataSrc !== undefined && options.hash.dataSrc) {
				srcset += 'data-';
			}
			srcset += 'src="' + origUrl + '"></picture>';

			return srcset;
		} else {
			return null;
		}
	};

	// ### Content Url Helpers
	// KeystoneJS url handling so that the routes are in one place for easier
	// editing.  Should look at Django/Ghost which has an object layer to access
	// the routes by keynames to reduce the maintenance of changing urls

	// Direct url link to a specific post
	_helpers.postUrl = function(post, options) {
		/**
		 {{#ifCond @root.section "==" "republik"}}
		 <a href="/republik/post/{{key}}">
		 {{/ifCond}}
		 {{#ifCond @root.section "==" "product"}}
		 <a href="/republik/post/{{key}}">
		 {{/ifCond}}
		 {{#ifCond @root.section "==" "technology"}}
		 <a href="/technology/post/{{key}}">
		 {{/ifCond}}

		 */

		var url = '/republik/post/';
		if (options && options.hash && options.hash.section) {
			url = '/${options.hash.section}/post/';
		}
		url += post.key;
		return url;
	};

	// might be a ghost helper
	// used for pagination urls on blog
	_helpers.pageUrl = function(pageNumber, options) {
		return '/blog?page=' + pageNumber;
	};

	// create the category url for a blog-category page
	_helpers.categoryUrl = function(categorySlug, options) {
		return '/blog/' + categorySlug;
	};

	// ### Pagination Helpers
	// These are helpers used in rendering a pagination system for content
	// Mostly generalized and with a small adjust to `_helper.pageUrl` could be universal for content types

	/*
     * expecting the data.posts context or an object literal that has `previous` and `next` properties
     * ifBlock helpers in hbs - http://stackoverflow.com/questions/8554517/handlerbars-js-using-an-helper-function-in-a-if-statement
     * */
	_helpers.ifHasPagination = function(postContext, options) {
		// if implementor fails to scope properly or has an empty data set
		// better to display else block than throw an exception for undefined
		if (_.isUndefined(postContext)) {
			return options.inverse(this);
		}
		if (postContext.next || postContext.previous) {
			return options.fn(this);
		}
		return options.inverse(this);
	};

	_helpers.paginationNavigation = function(pages, currentPage, totalPages, options) {
		var html = '';

		// pages should be an array ex.  [1,2,3,4,5,6,7,8,9,10, '....']
		// '...' will be added by keystone if the pages exceed 10
		_.each(pages, function(page, ctr) {
			// create ref to page, so that '...' is displayed as text even though int value is required
			var pageText = page,
				// create boolean flag state if currentPage
				isActivePage = page === currentPage ? true : false,
				// need an active class indicator
				liClass = isActivePage ? ' class="active"' : '';

			// if '...' is sent from keystone then we need to override the url
			if (page === '...') {
				// check position of '...' if 0 then return page 1, otherwise use totalPages
				page = ctr ? totalPages : 1;
			}

			// get the pageUrl using the integer value
			var pageUrl = _helpers.pageUrl(page);
			// wrapup the html
			html += '<li' + liClass + '>' + linkTemplate({ url: pageUrl, text: pageText }) + '</li>\n';
		});
		return html;
	};

	// special helper to ensure that we always have a valid page url set even if
	// the link is disabled, will default to page 1
	_helpers.paginationPreviousUrl = function(previousPage, totalPages) {
		if (previousPage === false) {
			previousPage = 1;
		}
		return _helpers.pageUrl(previousPage);
	};

	// special helper to ensure that we always have a valid next page url set
	// even if the link is disabled, will default to totalPages
	_helpers.paginationNextUrl = function(nextPage, totalPages) {
		if (nextPage === false) {
			nextPage = totalPages;
		}
		return _helpers.pageUrl(nextPage);
	};

	//  ### Flash Message Helper
	//  KeystoneJS supports a message interface for information/errors to be passed from server
	//  to the front-end client and rendered in a html-block.  FlashMessage mirrors the Jade Mixin
	//  for creating the message.  But part of the logic is in the default.layout.  Decision was to
	//  surface more of the interface in the client html rather than abstracting behind a helper.
	//
	//  @messages:[]
	//
	//  *Usage example:*
	//  `{{#if messages.warning}}
	//      <div class="alert alert-warning">
	//          {{{flashMessages messages.warning}}}
	//      </div>
	//   {{/if}}`

	_helpers.flashMessages = function(messages) {
		var output = '';
		for (var i = 0; i < messages.length; i++) {
			if (messages[i].title) {
				output += '<h4>' + messages[i].title + '</h4>';
			}

			if (messages[i].detail) {
				output += '<p>' + messages[i].detail + '</p>';
			}

			if (messages[i].list) {
				output += '<ul>';
				for (var ctr = 0; ctr < messages[i].list.length; ctr++) {
					output += '<li>' + messages[i].list[ctr] + '</li>';
				}
				output += '</ul>';
			}
		}
		return new hbs.SafeString(output);
	};

	//  ### underscoreMethod call + format helper
	//	Calls to the passed in underscore method of the object (Keystone Model)
	//	and returns the result of format()
	//
	//  @obj: The Keystone Model on which to call the underscore method
	//	@undescoremethod: string - name of underscore method to call
	//
	//  *Usage example:*
	//  `{{underscoreFormat enquiry 'enquiryType'}}

	_helpers.underscoreFormat = function(obj, underscoreMethod) {
		return obj._[underscoreMethod].format();
	};

	_helpers.json = function(context) {
		//console.log('json helper:', JSON.stringify(context));
		return JSON.stringify(context);
	};

	_helpers.everyNth = function(context, every, options) {
		var fn = options.fn,
			inverse = options.inverse;
		var ret = '';
		if (context && context.length > 0) {
			for (var i = 0, j = context.length; i < j; i++) {
				var modZero = i % every === 0;
				ret =
					ret +
					fn(
						_.extend({}, context[i], {
							isModZero: modZero,
							isModZeroNotFirst: modZero && i > 0,
							isLast: i === context.length - 1,
							isFirst: i === 0,
							n: i,
							page: i / every,
						}),
					);
			}
		} else {
			ret = inverse(this);
		}
		return ret;
	};

	_helpers.safeString = function(html) {
		//url = Handlebars.escapeExpression(url);
		//text = Handlebars.escapeExpression(text);

		return new hbs.SafeString(html);
	};

	_helpers.everyOther = function(index, amount, scope) {
		if (++index % amount) return scope.inverse(this);
		else return scope.fn(this);
	};

	_helpers.switch = function(value, options) {
		this._switch_value_ = value;
		var html = options.fn(this); // Process the body of the switch block
		delete this._switch_value_;
		return html;
	};

	_helpers.case = function(value, options) {
		if (value == this._switch_value_) {
			return options.fn(this);
		}
	};

	_helpers.container = function(_this, options) {
		var fn;
		var container = 'container';
		if (arguments.length > 1 && typeof arguments[1].fn === 'function') {
			fn = arguments[1].fn;

			container = _this.container;
		} else {
			fn = _this.fn;
		}
		var output = '<div class="' + container + '">' + fn(this) + '</div>';

		if (container === 'container') {
			output =
				'<div class="container-fluid">' +
				'<div class="col col-lg-1 visible-lg hidden-xl">&nbsp; ' +
				'</div>' +
				'<div class="col col-xl-2 visible-xl">&nbsp;' +
				'</div>' +
				'<div class="col col-sm-12 col-lg-10 col-xl-8">' +
				fn(this) +
				'</div>' +
				'</div>';
		}

		return new hbs.SafeString(output);
	};

	_helpers.cloudinaryImg = function(context, options) {
		var template =
			'<img data-src="{{data-src}}" src="{{src}}" class="cld-responsive {{class}}" alt="{{alt}}" id="{{id}}"/>';

		var srcOptions = options;
		if (options) {
			srcOptions = JSON.parse(JSON.stringify(options));
			srcOptions.hash.width = options.hash.width || 400;
			srcOptions.hash.fetch_format = 'auto';
			srcOptions.hash.quality = 'auto';

			options.hash.width = 'auto';
			options.hash.fetch_format = 'auto';
			options.hash.quality = 'auto';
			options.hash.dpr = 'auto';
		}

		var params = {
			'data-src': _helpers.cloudinaryUrl(context, options),
			src: _helpers.cloudinaryUrl(context, srcOptions),
		};
		if (options) {
			if (options.hash.class) {
				params.class = options.hash.class;
			}
			if (options.hash.alt) {
				params.alt = options.hash.alt;
			}
			if (options.hash.style) {
				params.style = options.hash.style;
			}
			if (options.hash.id) {
				params.id = options.hash.id;
			}
			if (options.hash.idIndex) {
				params.id += options.hash.idIndex;
			}
		}

		template = hbs.compile(template);
		return template(params);
	};

	_helpers.colorSwatchBackground = function(context, options) {
		var bg = '--color-swatch-colors: ';
		var divisor = 1;
		var pctSum = 0;

		if (options) {
			divisor = 100 / options.length;
			options.forEach(function(c, i) {
				if (i) {
					bg += ',';
				}
				bg += c + ' ' + pctSum + '%, ' + c + ' ' + (pctSum + divisor) + '%';
				pctSum += divisor;
			});
		}
		//bg += "'";
		return bg;
	};

	_helpers.stripCrLf = function(context) {
		console.log('context: ', context);
		return context.replace(/\n|\r/g, '');
	};

	return _helpers;
};
