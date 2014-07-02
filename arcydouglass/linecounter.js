//Assignment 06 -Line Counting of Paradise text
//Javascript class
//Arcy Douglass
//February 5, 2014

//linecounter.js 

//Variables
var fs = require('fs');

fs.readFile('../paradise.txt', { encoding: 'utf8' }, countLines);

function countLines (err, lines) {
  if (err) throw err;

  var counter = 1;                      //Start counter at first line

  for (var i = lines.length - 1; i >= 0; i--) {
    if (lines[i] === '\n') {            //Count the number of new lines
      counter += 1;
    }
  }

  console.log("There are " + counter + " lines in the first chapter of Paradise Lost");
}