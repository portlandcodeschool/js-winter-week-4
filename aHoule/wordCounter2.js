var fs = require('fs');

// var content = fs.readFile('paradise.txt', {encoding: 'utf8'}); //, function (err, contents)

/*  This was my test variable:
var content = "Of Man's first disobedience, and the fruit\n" +
"Of that forbidden tree whose mortal taste\n" +
"Brought death into the World, and all our woe,\n" +
"With loss of Eden, till one greater Man\n" +
"Restore us, and regain the blissful Seat,";
*/

var numOfLines = 0;

for (var i = 0; i < content.length; i++)
	if (content[i] === '\n') {
		numOfLines ++;
};

var someArray = content.split(" ");

console.log("There are " + (someArray.length + numOfLines) + " words in this text file.");