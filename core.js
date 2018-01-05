//Import a module into a local variable by requiring it. In this case a core module so doesn't need npm to install it
var path = require('path');
var util = require('util');
var v8 = require('v8'); //to check memory usage

//console.log(path.basename(__filename));
util.log(path.basename(__filename)); //same as before but with timestamps and date

//A long path string using the path join function, where it sends to each directory and it creates the string
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

//console.log(dirUploads);
util.log(dirUploads);

util.log(v8.getHeapStatistics());