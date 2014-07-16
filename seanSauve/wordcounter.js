//Sean Sauve
//Portland Code School
//javascript winter course
//week 4 assignment
//wordcounter.js
var fs = require('fs');
fs.readFile('paradise.txt', {encoding: 'utf8'}, countWords);
function countWords(err, contents) { 
	var words = [];
	var count = 0;
	var copy = contents;
	var buildWord = "";
	var chr;
	for (var i = 0; i < contents.length; i++){
		var previousletter = chr;
		chr = copy[i].toLowerCase();
		if (isLetter(chr)) {
			buildWord += chr;
		} else if (isLetter(previousletter)) {
			addWord(buildWord, words);
			buildWord = "";
		};
	};
	console.log (words);
	words.forEach(function(value, index, theArray) {
		count += value[1];
	});
	console.log("the word count is: ", count);
};

function addWord(word, words){
	var found = false; 
	var foundAt = 0
	for (var i = 0; i < words.length; i++){
		if (words[i][0] === word) {
			found = true;
			foundAt = i;
		};
	};
	if (found) words[foundAt][1] +=1;
	else {
		words.push([word, 1]);
		//console.log("addnew: ", words[words.length -1] );

	};
};
function isLetter(letter){
	charValue = letter.charCodeAt(0);
	if ((charValue >= 97 && charValue <=122) || (charValue === 45) || (charValue ===39)) return true;
	else return false;
};