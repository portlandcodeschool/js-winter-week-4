//Intermediate Assignment

var fs = require('fs');

//begin by getting words
fs.readFile('../paradise.txt', {encoding: 'utf8'}, function (err, contents) {
  if (err) throw err;
  var paradiseArray = contents.split('\n');
  var words = [];
  paradiseArray.forEach(function (line) {
    line = line.replace(/\s{2,}/g, ' ').replace(/[,.:;!'"?)(]/g, '').toLowerCase();
    line = line.split(' ');
    if (line[0] === '') {
      line.shift();
    }
    words = words.concat(line);
  });

//then generate object with words and their frequencies
  var wordCount = {};
  var sortingArray = [];
  words.forEach(function (word) {
    if (wordCount[word]) {
      wordCount[word]++;
    }
    else wordCount[word] = 1;
  });

//then transfer each word/frequency pair to an array so they can be sorted
  for (var prop in wordCount) {
    var x = {};
    x.word = prop;
    x.frequency = wordCount[prop];
    sortingArray.push(x);
  }

//sort the array
  sortingArray.sort(function (a, b) {
    if (a.frequency > b.frequency)
      return -1;
    if (a.frequency < b.frequency)
      return 1;
    return 0;
  });
  var outputstr = '';
  for (var i = 0; i < 100; i++) {
    outputstr += ("The #" + (i + 1) + " most popular word is: " + sortingArray[i].word + ", which appears " + sortingArray[i].frequency + " times.\n");
  }
  console.log(outputstr);
});
