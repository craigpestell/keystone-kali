var async = require('async'),
	keystone = require('keystone');

var Post = keystone.list('Post');

/**
 * List Posts
 */
exports.get = function(req, res) {
	
	console.log('res: ', res);
	if (res.locals.params.post) {

      res.apiResponse({
        post: res.locals.params.post
      });
  }  else {
    res.end();
  }
}
