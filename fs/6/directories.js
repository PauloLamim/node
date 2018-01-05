//Step 1
//move assets directory to the same level of directories.js
/*var fs = require("fs");

fs.renameSync("./assets/logs", "./logs");

console.log("Directory moved");*/

//step 2
//remove assets directory
//directories must be empty in order to be removed
/*var fs = require("fs");

fs.rmdir("./assets", function(err){
	if(err){
		throw err;
	}

	console.log("Assets directory removed");
});

fs.rmdir("./logs", function(err){
	if(err){
		throw err;
	}

	console.log("Logs directory removed");
});*/

//step 3
//read files in log directory, remove them and remove directory

var fs = require("fs");

fs.readdirSync("./logs").forEach(function(filename) {
	fs.unlinkSync("./logs/" + filename);
});

fs.rmdir("./logs", function(err){
	if(err){
		throw err;
	}

	console.log("Logs directory removed");
});