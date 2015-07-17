var fs = require('fs');

fs.readFile('paradise.txt', {encoding: 'utf8'}, function (err, contents) {
	if (err) throw err;

	var lower = contents.toLowerCase();
	var res = lower.split(/[\s\n,.?!();:"]/);
	var resSort = res.sort();

	var words = [];
	var count = [];

	for (var i = 0; i < resSort.length; i++){
		if (resSort[i]!==''){
			words.push(resSort[i]);
			var startIndex = i;
			for (var j = i; i < resSort.length; j++){
				if (resSort[j]!==resSort[i]){
					var endIndex = j;
					break;
				}
			}

			count.push(endIndex-startIndex+1);
			i = endIndex + 1; 
		}
	}

	var freq = [];
	count.forEach(function (value){
		freq.push(value);
	});
	freq.sort(compareNumbers);
	var highFreq = [];
	for (i = freq.length-1; i > freq.length-101; i--){
		highFreq.push(freq[i]);
	}

	console.log("The most frequent words in the first chapter of Paradise Lost are:")

	var mostFreqWords = [];
	highFreq.forEach(function (value, index, array){
		count.forEach(function (value2, index2, array2){
			if(value===value2){
				mostFreqWords.push(words[index2]);
				console.log(words[index2] + " was used " + count[index2] + " times.");
			}
		});
	});

	// console.log(words);
	// console.log(count);
	// console.log(freq);
	// console.log(mostFreqWords);

	function compareNumbers(a, b) {
	  return a - b;
	}

});