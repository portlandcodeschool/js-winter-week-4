var fs = require('fs');

fs.readFile('paradise.txt', {encoding: 'utf8'}, function (err, contents) {
  if (err) throw err;

  var counter = 0;

  for (var i = 0; i <= contents.length-1; i++) {
  	if (contents[i] === " ") counter+=1;
  	if (contents[i] === "-") counter+=1;
  	//this may be off by 1 - in a text file does every single line have \n at the end?  Or does the last line not since there is not a line after it?
  }

  console.log("There are " + counter + " words in the first chapter of Paradise Lost.");
});