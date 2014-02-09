var fs = require('fs');

fs.readFile('paradise.txt', {encoding: 'utf8'}, function (err, contents) {
  if (err) throw err;

  var counter = 1;

  for (var i = 0; i <= contents.length-1; i++) {
  	if (contents[i] === "\n") counter+=1;
  }

  console.log("There are " + counter + " lines in the first chapter of Paradise Lost.");
});