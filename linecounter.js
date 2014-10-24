/*
var fs = require('fs');

var content = fs.readFile('paradise.txt', {encoding: 'utf8'}); //, function (err, contents)

    // count the lines in content

var numOfLines = 1;

for (var i = 0; i < content.length; i++)
	if (content[i] === '\n') {
		numOfLines ++;
};

console.log("There are " + numOfLines + " number of lines in this text file.");
*/
// This is returning an error:  "Cannot read property 'length' of undefined" referring "content.length"


//  Ok, I'm starting over but I don't want to erase what i was doing before yet.

var fs = require('fs');

//var numOfLines;

fs.readFile('paradise.txt', 'utf8', function(err, contents) {
	if (err) throw err;
	numOfLines = 1;

	for (var i = 0; i < contents.length; i++)
		if (contents[i] === '\n') {
			numOfLines ++;
		};
	console.log("There are " + numOfLines + " number of lines in this text file.");

})
