var async = require('async'),
	keystone = require('keystone');

var Dealer = keystone.list('Dealer');

/**
 * List Dealers
 */
exports.list = function(req, res) {
	Dealer.model.find(function(err, items) {

		if (err) return res.apiError('database error', err);

		res.apiResponse({
			dealers: items
		});

	});
}
