var fs = require("fs");

try
{
	//remove files
	fs.unlinkSync("./lib/config.json");
} catch (err) {
	console.log(err);
}


//remove file
fs.unlink("notes.md", function(err){
	if(err){
		console.log(err);
	} else {
		console.log("Notes.md removed");
	}
});