//Assignment Week 4 - Word Counting of Paradise text
//Javascript class
//Arcy Douglass
//February 5, 2014

//wordFrequency.js 


//Load text file
var fs = require('fs');
var test = [];

//Load Paradise Lost text
fs.readFile('../paradise.txt', { encoding: 'utf8' }, pushToTest);

//Create prototype class constructor for the word and the count
function CountWord (word){
  this.word = word;
  this.count = 1; 
};

//Prototype function to increment count
CountWord.prototype.incrementCount = function() { 
  return this.count += 1;
};


//Variables
var cleanWords = [];
var wordCount = [];


//Remove punctuation and push an an object to cleanWords
function cleanText ( array){
  var cleanWord = "";

    test.forEach( function (item) {
      cleanWord = "";
      for ( var i = 0; i < item.length; i++) 
        switch(item[i]){
          case ',':
          case '.':
          case ':':
          case '!':
          case '?':
          case '!':
          case ';':
          case '-':
          case '"':
          break;
          default: cleanWord += item[i];
        }
        //cleanWords.push(newObject);
        cleanWords.push(cleanWord);
      })
};


//Check to see if the word is in the wordCount array
function checkCountArray (check) {
  for (var i = 0; i < wordCount.length; i++) {
    if (check === wordCount[i].word){
      return i;
    }
  }
  return false;
}

//Check words
function checkWord (word) {
    var inArray = checkCountArray(word);
    if ((inArray) || (inArray === 0 )){
       wordCount[inArray].incrementCount();
    } else {
      var newObject = new CountWord(word);
        wordCount.push(newObject);
    }
  
}

//Iterate through the array and count the frequency
function countFrequency (array){
  cleanWords.forEach( function(item) {
      checkWord(item);
  })
}


//Remove punctuation and push an an object to cleanWords
function pushToTest (err, contents) {
    if (err) throw err;
    var tempWord = "";

    for (var i = 0; i < contents.length -1; i++) {
      //Check if contents contains a new line character
      //Check if the content index contains a space and if so count
      if ((contents[i] === ' ') || (contents[i] === '\n')){
        test.push(tempWord.toLowerCase());
        tempWord = '';
      } else {
         tempWord += contents[i];
      }
    }

    //Clean up the text
    cleanText(test);

    //Count the frequency of the words
    countFrequency(cleanWords);

    //Sort wordCount according to max frequency
    wordCount.sort(function(a,b){
      return b.count - a.count;
    })

    // wordCount.forEach( function(item) {
    //   console.log( 'word: ' + item.word + ',' + ' count: ' + item.count);
    // })
    
    //Output the 100 most frequent words
    // for (var i = 0; i < 100; i++ ){
    //    console.log( 'word: ' + wordCount[i].word + ',' + ' count: ' + wordCount[i].count);
    // }

    //Trying to output more important words
    // for (var i = 17; i < 117; i++ ){
    //    console.log( 'word: ' + wordCount[i].word + ',' + ' count: ' + wordCount[i].count);
    // }

    // //Output the 100 most frequent words
    // for (var i = 0; i < wordCount.length; i++ ){
    //    console.log( '{' + '\"name\"' + ':' + '\"'+ wordCount[i].word + '\"' + ',' + '\"value\"' +':' + wordCount[i].count + '}' + ',');
    // }

    //Output 101 key words
    for (var i = 17; i < 118; i++ ){
       console.log( '{' + '\"name\"' + ':' + '\"'+ wordCount[i].word + '\"' + ',' + '\"value\"' +':' + wordCount[i].count + '}' + ',');
    }


}















