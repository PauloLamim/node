//Global Object
//--------------------------------------------------------

//global.console.log("Hello World");
//console.log("Hello World");

//---------------------------------------------------------

//works different then the browser example
//var hello = "Hello World from Node js";
//console.log(global.hello); //undefined
//console.log(hello);

//--------------------------------------------------------
//Substring from string using slice
//Take out the first 17 characthers 
//use template string
//console log paths

/*
var hello = "Hello World from Node js";
var justNode = hello.slice(17);
console.log(`Rock on World from ${justNode}`);
console.log(__dirname); //full path to the directory
console.log(__filename); //same as before but with filename
*/

//-----------------------------------------------------------
//import path module
//console log only filename

var path = require("path"); //path comes with node js installation

console.log(`Rock on World from ${path.basename(__filename)}`);