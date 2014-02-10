//Intermediate Assignment

var fs = require('fs');

fs.readFile('../paradise.txt', {encoding: 'utf8'}, function (err, contents) {
  if (err) throw err;
  var paradiseArray = contents.split('\n');
  var words = [];
  paradiseArray.forEach(function (line) {
    line = line.replace(/\s{2,}/g, ' ').replace(/[,.:;!]/g, '');
    line = line.split(' ');
    if (line[0] === '') {
      line.shift();
    }
    words = words.concat(line);
  });
  console.log('There are ' + words.length + ' words in the first chapter of Paradise Lost.');
});
