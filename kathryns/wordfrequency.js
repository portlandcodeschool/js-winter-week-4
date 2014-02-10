var fs = require('fs');

fs.readFile('paradise.txt', {encoding: 'utf8'}, function (err, contents) {
	if (err) throw err;
    // somehow count the words in contents :)
	//Removes all 's
	var re = /'s/gi;
	var newstr = contents.replace(re, "");
	// console.log(newstr);
	//Converts all letters to lowercase in contents and removes punctuation and returns in new string called output
	var output = "";
	for (var i = 0; i <= newstr.length - 1; i ++) {
		switch (newstr[i]) {
			case '.': case ':': case ';': case ',': case '?': case '!': case '"': case '(': case ')':
			break;
			default:
			output += newstr[i].toLowerCase();
		}
	}
	//Splits each line into a new array
	var arrayOfLines = output.split("\n");
	// console.log(arrayOfLines);
	var output2 = "";
	//puts arrayOflines back into a string and removing and blank spaces where line breaks were previously
	for (var k=0; k<arrayOfLines.length; k++) {
		if (arrayOfLines[k] !== "") {
			output2 += arrayOfLines[k].toString() + " ";
		}
	}
	//Declares new array with each individual word from paradise lost in an array to count
	var arrayOfWords = output2.split(" ");
	var output3 = " ";
	for (var j=0; j < arrayOfWords.length; j++) {
		//If loop to remove any blank lines between paragraphs in the arrayOfLines
		if (arrayOfWords[j] !== "") {
		//Splits each word in each line into its own array by space
			output3 += arrayOfWords[j].toString() + " ";
		}
	}
	var paradiseWords = output3.split(" ");
	var wordCounts = [];
	paradiseWords.forEach(function (item) {
		wordCounts[item] = wordCounts[item] ? wordCounts[item] + 1 : 1;
	});
	//This is to test whether or not word counts is actually counting
	console.log(wordCounts);
	//I made it this far, but am not certain how to sort the quantities at this point. Any advice on how to break
	//it apart or should I try doing the word counts a different way entirely?
});
