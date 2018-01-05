//Global timing functions

//-----------------------------------------------------------------------------------------------------

var waitTime = 3000; //3 seconds
var currentTime = 0;
//var waitInterval = 500;
var waitInterval = 10;
var percentWaited = 0;

//console.log('Wait for it');
function writeWaitingPercent(p) {
	process.stdout.clearLine(); //clear last line we wrote
	process.stdout.cursorTo(0); //move the cursor back to the start of the line
	process.stdout.write(`waiting ... ${p} %`);
}

var interval = setInterval(function(){
	currentTime += waitInterval; 
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	//console.log(`waiting ${currentTime/1000} seconds...`);
	writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout( function(){
	clearInterval(interval); //will clear the interval therefore it will stop the application after 3 seconds
	writeWaitingPercent(100);
	console.log('\n\nDone\n\n');
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);