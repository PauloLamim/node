 //So the difference between spawn and execute is spawn is made for processes like this, where execute was made for asynchronously synchronous processes, 
 //meaning that if I do a directory listing we run that process, we get the listing in standard output, and then the process is over. 
 //If I do a git version the process runs, and then we quickly get the standard output and the process is over.

var sayings = [
    "You may delay, but time will not.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "It takes many good deeds to build a good reputation, and only one bad one to lose it.",
    "Early to bed and early to rise makes a man healthy, wealthy and wise.",
    "By failing to prepare, you are preparing to fail.",
    "An investment in knowledge pays the best interest.",
    "Well done is better than well said."
];

var interval = setInterval(function() {
	var i = Math.floor(Math.random() * sayings.length);
	process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function(data) {
	console.log(`STDIN Data Recieved -> ${data.toString().trim()}`);
	clearInterval(interval);
	process.exit();
});