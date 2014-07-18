var fs = require('fs');
var lineCounter = require('./linecounter');

fs.readFile('./paradise.txt', {encoding: 'utf8'}, wordCount);

function wordCount(err, data) {
	if (err) throw err;

	var wordCount = 0;

	var lines = data.split("\n");
	
	lines.forEach(function(item){
		var words = item.split(" ");
		wordCount += words.length;
	});

	console.log(wordCount);

}

