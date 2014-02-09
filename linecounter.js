//Create a program to count the number of lines in the first chapter of paradise.txt.
// Call it linecounter.js. Use `fs.readFile`

var fs = require('fs');

fs.readFile('paradise.txt', 'utf8', function(err, contents){
  if (err) throw err; 
  // log the length of the array that resulted from the string being split
  // this equals the number of lines in the chapter
  console.log(contents.split('\n').length);
});