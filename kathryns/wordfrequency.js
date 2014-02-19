var fs = require('fs');

fs.readFile('paradise.txt', {encoding: 'utf8'}, function (err, contents) {
	if (err) throw err;
    // somehow count the words in contents :)
	//Replaces all line breaks with a space
	var re = /(\r\n|\n|\r)/gm;
	var newstr = contents.replace(re, " ");
	// console.log(newstr);

	// Converts all letters to lowercase in contents and removes punctuation and returns in new string called output
	var output = "";
	for (var i = 0; i <= newstr.length - 1; i ++) {
		switch (newstr[i]) {
			case '.': case ':': case ';': case ',': case '?': case '!': case '"': case '(': case ')':
			break;
			default:
			output += newstr[i].toLowerCase();
		}
	}
	//Splits each word into a new array
	var array1 = output.split(" ");

	var arrayOfWords = [];
	//Removes all spaces in array and puts in a new array
	array1.forEach(function (item, index) {
		if( item !== "") {			
			arrayOfWords.push(item);
		}
	});

	//Declares object wordCounts
	var wordCounts = {};

	//Counts each word in arrayOfWords
	arrayOfWords.forEach(function (item) {
		if (wordCounts[item] = wordCounts[item] ? wordCounts[item] + 1 : 1);
		// if (wordCounts.hasOwnProperty(item)) {
  //       	wordCounts[item] += 1;
  //   	} else {
  //       	wordCounts[item] = 1;
  //   	}
	});
 
 	//Declares new array words
 	var words = [];

 	//Pushes each unique word to array 'words' within the 'wordCounts' object
	for (var word in wordCounts) {
    	words.push(word);
	}
	
	//Calls sort function on words array, using count values in wordCounts 
	words.sort(function (a,b) {
		return wordCounts[b] - wordCounts[a];
	});

	for (var i = 0; i < 100; i++) {
		console.log(words[i] + ': ' + wordCounts[words[i]] + ' x');
	}
});
