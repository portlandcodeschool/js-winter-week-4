// Ian Forrest
// Full-Stack Javascript, Winter 2014
// Week 4, Word Frequency

// This is the first advanced assignment I've been able to finish. I'm more than a little excited about it.

var fs = require('fs');

fs.readFile('paradise.txt', { encoding: 'utf8' }, letsCountWords); 

function letsCountWords (err, contents) {

	if (err) throw err;

	var words = contents.replace(/(\n\n)/gm," ").replace(/(\n|-)/gm," ").split(" ");

	var sortHelper = function(a, b) {
		return a[1] - b[1];};

	var wordCounts = {};

	var wordArray = [];

	for (var i = 0; i < words.length; i ++) {
		var num = words[i].toLowerCase();
		wordCounts[num] = wordCounts[num] ? wordCounts[num]+1 : 1;
	}

	for (var singleWord in wordCounts) {

		wordArray.push([singleWord, wordCounts[singleWord]]);

		wordArray.sort(sortHelper);

		wordArray.reverse();

		wordArray.splice(100, (wordArray.length - 100));
	}

		console.log(wordArray);

		}
