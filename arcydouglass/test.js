

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
var test = ['cat.', 'dog;', 'cat!', 'mouse?', 'dog;', 'elephant,', 'tiger:', 'cat'];
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
       console.log(wordCount[inArray].word + ' has been incremented');
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

//Clean up the text
cleanText(test);

//Count the frequency of the words
countFrequency(cleanWords);


//Test output
// cleanWords.forEach( function(item) {
//   console.log( 'word: ' + item.word + ',' + ' count: ' + item.count);
// })

wordCount.forEach( function(item) {
  console.log( 'word: ' + item.word + ',' + ' count: ' + item.count);
})








