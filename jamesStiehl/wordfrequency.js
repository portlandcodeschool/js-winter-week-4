var fs = require('fs');

var contents = fs.readFileSync('paradise.txt', {encoding: 'utf8'});

var wordArray = contents.split(/[^\w'-]+/);

words = {};


wordArray.forEach(function(value){
	value.toLowerCase();
	if (words[value] === undefined){
		words[value] = 1;

	} else {
		words[value]++;
	}
});


var a = 0;
var mostFrequent = '';
for (var key in words){
	if(words[key] > a){
		a = words[key];
		mostFrequent = key;	
	}
}


console.log("'"+mostFrequent+"'" + " is the most frequently occuring word in paradise.txt with a total of "+a+" occurences.");




