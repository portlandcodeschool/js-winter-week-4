//Jenna Gretsch
//Homework week #4
//Basic

var fs = require('fs');
//nonblocking example using function
fs.readFile('paradise.txt', { encoding: 'utf8'}, countLines);

function countLines (err, contents) {
     if (err) throw err;

	 var x = contents.split("\n").length;
     

     console.log(x);
}

// Intermediate

var fs = require('fs');

fs.readFile('paradise.txt', { encoding: 'utf8'}, countWords);

function countWords (err, contents) {
     if (err) throw err;

	 var x = contents.split(" ").length;
     

     console.log(x);
}




