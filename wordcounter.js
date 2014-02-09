// Create a program to count the number of words in the 
// first chapter of paradise.txt. Call it wordcounter.js

var fs = require('fs');

fs.readFile('paradise.txt', 'utf8', function(err, contents){
  if (err) throw err; 
  //  replace is a string method
  //  takes a regular expression and the thing it should be replaced with
  //  the regex is modified by `g` which is global
  //  the string is then split by spaces
  var words = contents.replace(/\n/g, " ").split(" "); 
  //console.log(words);
  console.log(words.length);
});