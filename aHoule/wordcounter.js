var fs = require('fs');

var content = fs.readFile('paradise.txt', {encoding: 'utf8'}); //, function (err, contents)

/* This, I used as a test variable:
var content = "Of Man's first disobedience, and the fruit\n" +
"Of that forbidden tree whose mortal taste\n" +
"Brought death into the World, and all our woe,\n" +
"With loss of Eden, till one greater Man\n" +
"Restore us, and regain the blissful Seat,"
*/

    // count the number of words in content

var wordCount = 1;

for (var i = 0; i < content.length; i++)
	// if there is a space or new line, add 1 to wordCount

	if (content[i] === ' ' || content[i] === "\n") {
		wordCount ++;
};

console.log("There are " + wordCount + " number of words in this text file.");

// This is returning an error:  "Cannot read property 'length' of undefined" referring "content.length"
