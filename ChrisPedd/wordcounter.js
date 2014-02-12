'use strict';
var fs = require('fs');
fs.readFile('paradise.txt', { encoding: 'utf8' }, function (err, paradise) {
	if (err) throw err;
	var count = 0;
	//var paradiseArr = paradise.split(/[^\w]+/);
	var paradiseArr = paradise.replace(/'/g, '').split(/[^\w'-]+/);
	console.log(paradiseArr);
	count = paradiseArr.length;
	console.log("Number of words = " + (count - 1))
})