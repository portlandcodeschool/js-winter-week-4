var fs = require('fs');

fs.readFile('paradise.txt', {encoding: 'utf8'}, function(err, contents) {
	if (err) throw err;
	var wordCount = 1;

    // count the number of words in content

	for (var i = 0; i < contents.length; i++)
	if (contents[i] === ' ' || contents[i] === "\n") {
		wordCount ++;
};

console.log("There are " + wordCount + " number of words in this text file.");
});


// This is returning an error:  "Cannot read property 'length' of undefined" referring "content.length"
