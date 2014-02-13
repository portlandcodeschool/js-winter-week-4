// Javascript Winter Week 4
// amanda houle on branch 'ahoule'


var fs = require('fs');  

fs.readFile('paradise.txt', 'utf8', function(err, contents) {
	if (err) throw err;
	numOfLines = 1;

	for (var i = 0; i < contents.length; i++)
		if (contents[i] === '\n') {
			numOfLines ++;
		};
	console.log("There are " + numOfLines + " number of lines in this text file.");

})

 