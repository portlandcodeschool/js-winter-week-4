//Assignment Week 4 - Word Counting of Paradise text
//Javascript class
//Arcy Douglass
//February 5, 2014

//wordcounter.js 

//Variables
var fs = require('fs');

//Load Paradise Lost text
fs.readFile('../paradise.txt', { encoding: 'utf8' }, countThoseWords);

	function countThoseWords (err, contents) {
	  if (err) throw err;

	  var counter = 1;

	  for (var i = contents.length - 1; i >= 0; i--) {
	  	//Check if the content index contains a space and if so count
	    if (contents[i] === ' '){
	      //Counts the spaces between the first and last word
	      counter += 1;
	    }
	  }
    //I counted 143 lines in the first chapter of Paradise Lost
	  console.log("There are " + counter + " words in the first chapter of Paradise Lost");
}