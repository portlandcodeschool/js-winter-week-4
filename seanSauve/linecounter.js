//Sean Sauve
//Portland Code School
//javascript winter course
//week 4 assignment
//linecounter.js

var fs = require('fs');

fs.readFile('paradise.txt', {encoding: 'utf8'}, function (err, contents){
	var lines = contents.split("\n");
	for (var i = 0; i < lines.length; ++i){
		console.log(i+1, lines[i]);
	}
	console.log("this content is " + lines.length + " lines long!");

});