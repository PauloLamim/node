//Process variables

//----------------------------------------------------------------
//console.log(process.argv);

//other example
// node app.js --user George --greeting "Good day Sir"
//---------------------------------------------------------------

//function that helps grab the values from the process.argv array
//from their flag name

function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if(!user || !greeting) {
	console.log("You blew it!");
} else {
	console.log(`Welcome ${user}, ${greeting}`);
}
