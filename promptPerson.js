// Create a variable and call it readline and then I will require readline. 
//Create an instance of the readline object which will create prompt for me by sending it the standard input and standard output objects. 
//So var rl will be my readline instance and I will use readline to create an interface. 
//With this interface, we're going to send it the process.stdin and process.stdout.
//Readline is going to control these objects for us asking questions and collecting information so that we don't have to control 
//the process.stdin and stdout directly. 

//In order to ask a question of Readline, all you need to do is invoke rl.question. 
//And the first argument will be the question that will show up in the Terminal. 
//We will ask, "What is the name of a real person?" The second argument is the function that will invoke once we have an answer from the Terminal. 
//And in this function, the answer will be sent as an argument.

//We can go ahead and just log that answer to the console

/* Step 1
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What is the name of a real person? ", function(answer) {
	console.log(answer);
});

*/

/* Step 2 

var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
	name: '',
	sayings: []
}

rl.question("What is the name of a real person? ", function(answer) {
	realPerson.name = answer;

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying){
		console.log(saying.trim());
	});
});

*/

/* Step 3 */
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
	name: '',
	sayings: []
}

rl.question("What is the name of a real person? ", function(answer) {
	realPerson.name = answer;

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying){

		realPerson.sayings.push(saying.trim()); //saves saying in array

		if(saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
			rl.prompt();
		}
	});
});

rl.on('close', function() {
	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings); //%j converts array into json string
	process.exit();
});