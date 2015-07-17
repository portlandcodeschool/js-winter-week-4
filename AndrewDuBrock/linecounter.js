//Basic Assignment
/*
wc shows one fewer line than my result, but I'm not sure where that line is.
Scanning the text, it looks like there are several blank lines, but I'm only one off, so..?
*/
var fs = require('fs');

fs.readFile('../paradise.txt', {encoding: 'utf8'}, function (err, contents) {
  if (err) throw err;
  var paradiseArray = contents.split('\n');
  console.log('There are ' + paradiseArray.length + ' lines in the first chapter of Paradise Lost.');
});
