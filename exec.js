var exec = require('child_process').exec;

//exec("explorer http://www.linkedin.com");

exec("dir", function(err, stdout){
	if(err){
		throw err;
	}
	console.log("Listing finish");
	console.log(stdout);
});

exec("git version", function(err, stdout){
	if(err){
		throw err;
	}
	console.log("Git Version Executed");
	console.log(stdout);
});