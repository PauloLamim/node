var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

//Modules.exports is a javascript object
//This allows other javascript file to use this module
//require uses module.exports to load module
module.exports = Person;