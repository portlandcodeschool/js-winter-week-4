// make paradise lost into a string.
// split the array into one-word array elements.
// create a function to count every single element.
// return a value for each element.
// sort those values from highest to lowest.
// print out those values, but stop at 100.

var fs = require('fs');

fs.readFile('paradise.txt', { encoding: 'utf8' }, letsCountWords); 

function letsCountWords (err, contents) {
	if (err) throw err;

	var words = contents.replace(/(\n\n)/gm," ").replace(/(\n|-)/gm," ").split(" ");

	// Problem: There are some words in Paradise Lost where the hyphen is correctly used:  "straw-built" "dove-like" "co-partners" and "war-like". Also "re-assembling" should remain one word. I have no idea how to add an exception for these words.

		var wordCounts = {};
		var counter = 0;
		for (var i = 0; i < words.length; i ++) {
			var num = words[i];
			wordCounts[num] = wordCounts[num] ? wordCounts[num]+1 : 1;

		}



		console.log(wordCounts);


}


