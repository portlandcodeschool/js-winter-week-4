'use strict';
var fs = require('fs');
fs.readFile('paradise.txt', { encoding: 'utf8' }, function (err, paradise) {
	if (err) throw err;
	var count = 0;
	var paradiseArr = paradise.replace(/'/g, '').split(/\W+/);
	count = paradiseArr.length -1;
	console.log("Number of words = " +count)
})