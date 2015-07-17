var fs = require('fs');

fs.readFile('paradise.txt', {encoding: 'utf8'}, function (err, contents) {
	if (err) throw err;

	var res = contents.split(/[\s\n]/);
	console.log("There are " + (res.length-1) + " words in the first chapter of Paradise Lost");


});