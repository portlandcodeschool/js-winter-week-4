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
	  	//Check if the content index contains a space or new line  and if so count
	    if (contents[i] === ' ') || (contents[i] === '\n')){
	      //Counts the spaces between the first and last word
	      counter += 1;
	    }
	  }
    //There are 5969 words in the first chapeter of Paradis Lost
	  console.log("There are " + counter + " words in the first chapter of Paradise Lost");
}