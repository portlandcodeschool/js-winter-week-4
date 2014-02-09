//Basic Assignment

var fs = require('fs');

fs.readFile('../paradise.txt', {encoding: 'utf8'}, function (err, contents) {
  var paradiseArray = contents.split('\n');
  console.log('There are ' + paradiseArray.length + ' lines in the first chapter of Paradise Lost.');
});
