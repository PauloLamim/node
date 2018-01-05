//create lib directory
var fs = require("fs");

//if directory already exists
if(fs.existsSync("lib"))
{
	console.log("Directory already there");
}
else
{
	fs.mkdir("lib", function(err) {
		if(err) {
			console.log(err);
		}
		else
		{
			console.log("Directory created");
		}
	});
}