var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Dealer Model
 * ==========
 */

var Dealer = new keystone.List('Dealer');

Dealer.add({
	name: { type: String, required: true, index: true },
	disciplines: { type: Types.Relationship, ref: 'Discipline', many: true },
	location:{ type: Types.Location, initial: true, required: true, enableMapsAPI: true},
	phone: {type: Types.Text},
	web: {type: Types.Url},
	email: {type: Types.Email},
});

/*Dealer.schema.pre('save', function(next) {
	var self = this;
	setTimeout(function(){
		
		self._.location.googleLookup("France", "overwrite", function(err, location, result){
			console.log('location:');
			console.log(location);
			console.log('result:');
			console.log(result);
			if(location !== undefined){
				self.location = location;
				console.log(location);
			}
			next();
		});		
	}, 1000);

 });*/
/*
 "id": "9",
 "name": "Chipotle Minnetonka",
 "lat": "44.970495",
 "lng": "-93.437430",
 "address": "12509 Wayzata Blvd",
 "address2": "",
 "city": "Minnetonka",
 "state": "MN",
 "postal": "55305",
 "phone": "952-252-4900",
 "web": "http:\/\/www.chipotle.com",
 "hours1": "Mon-Sun 11am-10pm",
 "hours2": "",
 "hours3": ""

 */

/**
 * Registration
 */

Dealer.defaultColumns = 'name, email, location';
Dealer.register();
