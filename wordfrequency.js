// ## Advanced Assignment

// Create a program to determine the 100 most frequent words in the first chapter 
// of paradise.txt. Call it wordfrequency.js

var fs = require('fs'); 

fs.readFile('paradise.txt', 'utf8', function(err, contents){
  if (err) throw err; 
  // take the contents variable and remove newlines and punctuation, replace with spaces
  // split the string into an array, separated at each space
  // toLowerCase must come before split 
  var words = contents.toLowerCase().split(/[?;)(., \n]+/);
  var frequency = {};
  var uniqueWords = [];
  var aWord;
  var sorted; 

  for (var i = 0; i < words.length; i += 1) {
    // aWord represents each key in the frequency object. each key is a word
    // aWord is reset each iteration
    aWord = words[i];
    // test if word is a property/ key of frequency object
    if (aWord in frequency){
    // if the word is a property/ key of frequency already, increment its frequency count
    // the value of each key/ word is the count
      frequency[aWord] += 1; 
    } else {
    // otherwise, the count is one
      frequency[aWord] = 1;
    }
  }

  //console.log(frequency); 

  // transfer words and counts into nested arrays, e.g. [['consult', 1],['read', 1]]
  for (aWord in frequency) {
      uniqueWords.push([aWord, frequency[aWord]]);
  }

  // store results of sort method in a variable. 
  // 'sorted' is a new array
  sorted = uniqueWords.sort(orderMyWords);

  // Only Print out the top 100 most frequent words
  for (var j = 0; j <= 100; j += 1) {
    console.log( (j + 1) + ": " + "'" + sorted[j][0] + "'" + " is used " +
             sorted[j][1] + " times."); 
  }

  // sort descending by frequency of the words, i.e. the number in the nested array
  function orderMyWords(a, b) {
    return b[1] - a[1]; 
  }
});
