//Step 1
//Another powerful feature that ships with Node.js is the Event Emitter. 
//The Event Emitter is Node.js's implementation of the pub/sub design pattern, and it allows us to create listeners for an emit custom Events. 
//In fact, every time we've used that on function to listen for a new Event, we've already been using an implementation of the EventEmitter.

//var events = require('events'); //loads events module

//var emitter = new events.EventEmitter(); // the EventEmitter itself is a constructor

//So, every time we use on, we can wire up a custom event. 
//You can name an event whatever you like. In this case, I've just called this customEvent. 
//The second argument that the on function takes is a callback function that will be invoked when the custom event is raised. 
//In this case, our custom event is going to pass a message and a status to this function as arguments. 
//So, when our custom event occurs, this callback function will be invoked asynchronously. 
//Let's just go ahead and log the status in the message using template string. 

//emitter.on('customEvent', function(message, status) {
//	console.log(`${status}: ${message}`);
//});

//So, when a custom event is raised, we'll pass a message and a status to this callback function asynchronously, and we're just going to log that message in status. 
//The next part of the EventEmitter is the ability to trigger or emit custom events. 
//We can trigger or emit a custom event with the emit function. So, emitter.emit will fire our custom event.
//The first argument is the event name that we want to fire. 
//And then, the next arguments are going to be the arguments that will passed to the callback function. 
//So, the first argument in the callback function, the message, is actually the second argument of this emit function. 
//So, for the message, I will send Hello World. And the third argument is going to be the second argument in the callback. 
//So, I will send a status of 200. In this code, we've created a new instance of the EventEmitter object, and we wired up a listener to listen for custom events.
//Now, we are going to emit a custom event.

//emitter.emit('customEvent', "Hello World", 200);

//Step 2
//Person object that inherits the EventEmitter 
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Person = function(name) { //new Person object
	this.name = name;
};

util.inherits(Person, EventEmitter); //Peron inherits everything from the EventEmitter

var ben = new Person("Ben Franklin");

ben.on('speak', function(said){
	console.log(`${this.name}: ${said}`);
})

ben.emit('speak', 'You may delay, but time will not');

//The EventEmitter provides us a way to create custom objects that raise custom events that can be handled asynchronously.
//And because the events are handled asynchronously, it is a very important tool in node.js. 