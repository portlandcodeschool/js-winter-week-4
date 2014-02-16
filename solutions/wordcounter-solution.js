var fs = require('fs');

fs.readFile('paradise.txt', {encoding: 'utf8'}, function (err, data) {

  var wordParser = makeWordParser();
  var output = '';

  for (var i = 0; i < data.length; i++) {
    wordParser(data[i]);
  }

  console.log(wordParser().length);

});

function makeWordParser (arr) {
  var state = 0;
  var nonWordChars = ['?', '—', '!', ':', ';', ')', '(', '.', ',', ' ', '\n', '"'];
  var buffer = '';

  arr = Array.isArray(arr) ? arr : [];

  return function (c) {
    if (arguments.length === 0)
      return arr;

    c = c.toLowerCase();
    var isWordChar = nonWordChars.indexOf(c) < 0;
    switch (state) {
      case 0:
        if (isWordChar) { // yay a word character!
          state = 1;
          buffer += c;
        }
        break;
      case 1:
        if (isWordChar) { // another word character, add it to the buffer
          buffer += c;
        } else { // non-word char, word is over!
          arr.push(buffer);
          buffer = '';
          state = 0;
        }
        break;
    }
  };

}