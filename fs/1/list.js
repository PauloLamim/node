//Step 1 - syncronously
//Include the file system module
/*var fs = require("fs");

var files = fs.readdirSync('./lib');

console.log(files);*/

//Step 2 async
var fs = require("fs");

fs.readdir("./lib", function(err, files){
	if(err) {
		throw err;
	} else
	{
		console.log(files);
	}
});

console.log("Reading files...");