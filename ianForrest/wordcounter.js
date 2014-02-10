var fs = require('fs');

fs.readFile('paradise.txt', { encoding: 'utf8' }, letsCountWords); 

function letsCountWords (err, contents) {
	if (err) throw err;

	var words = contents.replace(/(\n\n)/gm," ").replace(/(\n|-)/gm," ").split(" ");

	// Problem: There are some words in Paradise Lost where the hyphen is correctly used:  "straw-built" "dove-like" "co-partners" and "war-like". Also "re-assembling" should remain one word. I have no idea how to add an exception for these words.

	console.log("There are " + words.length + " words in the first chapter of Paradise Lost.");
}


