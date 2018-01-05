//Another feature of the process object is standard input 
//and standard output

//These two objects offer us a way to communicate with a process while
//it is running. For these example, they are used to read and write
//data to the Terminal

//-------------------------------------------------------------------
//process.stdout.write("Hello ");
//process.stdout.write("World \n\n\n\n");

//------------------------------------------------------------------
//using node.js asynchronous
//Array of questions to ask
var questions = [
	"What is your name?",
	"What is your fav hobby?",
	"What is your preferred programming language?"
];

var answers = [];

function ask(i){
	process.stdout.write(`\n\n\n\n ${questions[i]}`);
	process.stdout.write("  >  ");	
}

//listener
//raised data event
process.stdin.on('data', function(data) { //asynchronous callback 
	//process.stdout.write('\n' + data.toString().trim() + '\n');
	
	//save answers to array
	answers.push(data.toString().trim());

	if(answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit(); //terminates application/process
	}	
});

//another listener
//listen an exit event on the process object

process.on('exit', function(){
	process.stdout.write("\n\n\n\n"); //padding top

	process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);

	process.stdout.write("\n\n\n\n"); //padding bottom	
});

ask(0);