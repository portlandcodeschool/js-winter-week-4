var fs = require('fs');

var contents = fs.readFileSync('paradise.txt', {encoding: 'utf8'});

var wordArray = contents.split(' ');

console.log("There are "+wordArray.length+" words in the paradise.txt file");