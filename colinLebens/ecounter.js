var fs = require('fs');

fs.readFile('paradise.txt', { encoding: 'utf8' }, countThoseEs);

function countThoseEs (err, contents) {
  if (err) throw err;

  var counter = 0;

  for (var i = contents.length - 1; i >= 0; i--) {
    if (contents[i].toLowerCase() === 'e') {
      counter += 1;
    }
  }

  console.log("There are " + counter + " e's in the first chapter of Paradise Lost");
}