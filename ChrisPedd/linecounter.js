'use strict';
var fs = require('fs');

fs.readFile('paradise.txt', { encoding: 'utf8' }, function (err, paradise) {
	if (err) throw err;
	var lineCount = 0,
		paradiseArr = paradise.split('\n'),
		lineSub = 0;

	lineCount = paradiseArr.length;

	paradiseArr.forEach( function(item){
		if (item === '\r') lineSub += 1;
	});

console.log("Number of lines with breaks = " +lineCount+ "\nWithout breaks = " +(lineCount - lineSub));
})