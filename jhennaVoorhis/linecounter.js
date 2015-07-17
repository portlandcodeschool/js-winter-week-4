var fs = require('fs');

fs.readFile('paradise.txt', {encoding: 'utf8'}, function (err, contents) {
	if (err) throw err;

	var res = contents.split("\n");
	var counter = 0;
	res.forEach(function (value, index){
		if (value!=='') {
			counter++;
		}
	});

	console.log("There are " + counter + " lines of text in the first chapter of paradise lost.");

});