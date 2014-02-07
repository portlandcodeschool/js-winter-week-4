var fs = require('fs');

fs.readFile('paradise.txt', {encoding: 'utf8'}, lineCount);

function lineCount(err, data) {
	if (err) throw err;
	var array = data.split("\n");
	return array.length;
};

module.exports = lineCount;
