//Step 1
/*
var fs = require("fs");

var contents = fs.readFileSync("./lib/sayings.md","UTF-8");
//var contents = fs.readFileSync("./lib/sayings.md"); reads the binary and stores in node buffer

console.log(contents);
*/

//Step 2

/*var fs = require("fs");

fs.readFile("./lib/sayings.md", "UTF-8", function(err,contents){
	if(err) {
		console.log(err);
	} else
	{
		console.log(contents);
	}
}); */

//Step 3 - combine readfile and readdir and read all the files in the directory

var fs = require("fs");
var path = require("path");



fs.readdir("./lib", function(err,files){
	files.forEach(function(filename) {
		var file = path.join(__dirname, "lib", filename);
		var stats = fs.statSync(file);
		if(stats.isFile() && filename !== ".DS_STORE") {
			fs.readFile(file, "UTF-8", function(err, contents)
			{
				console.log(contents);
			});
		}
	});
});