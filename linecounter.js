var fs = require('fs');

var content = fs.readFile('paradise.txt', {encoding: 'utf8'}); //, function (err, contents)

    // count the lines in content

var numOfLines = 1;

for (var i = 0; i < content.length; i++)
	if (content[i] === '\n') {
		numOfLines ++;
};

console.log("There are " + numOfLines + " number of lines in this text file.");