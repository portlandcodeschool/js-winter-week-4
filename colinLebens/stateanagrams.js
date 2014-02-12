var fs = require('fs');

function isAnagram(str1, str2) {
	var str1chars = [];
	var str2chars = [];

	// Add characters to and sort str1chars
	for(var i = 0; i < str1.length; i++) {
		addChar(str1chars, str1.charAt(i));
	}

	str1chars.sort(alphabeticalSort);
	
	// Add characters to and sort str2chars
	for(var i = 0; i < str2.length; i++) {
		addChar(str2chars, str2.charAt(i));
	}

	str2chars.sort(alphabeticalSort);
	
	return arrayCompare(str1chars, str2chars);
}

function alphabeticalSort(a, b) {
	if (a.char > b.char) {
		return -1;
	} else {
		return 1;
	}
}

function addChar(arr, charIn) {
	// For each item in array, 
	// If char exists -> add 1 to frequency
	// If char doesn't exist -> push({item: char, frequency: 1});
	for (var i =0; i < arr.length; i++) {
		if(arr[i].char === charIn) {
			arr[i].frequency++;
			return;
		}
	}
	
	arr.push({char: charIn, frequency: 1});
}

function arrayCompare(a, b) {
	// If lengths are not equal, return 0
	if (a.length !== b.length) 
		return 0;
	
	// If any element or frequency is different, return 0
	for (var i=0; i < a.length; i++) {
		if(a[i].char !== b[i].char) { return 0; }
		if(a[i].frequency !== b[i].frequency) { return 0; }
	}

	// If you make it through both tests, return 1
	return 1; 
}

function addStates(stateArr) {
	var rtnArray = stateArr;
	
	
	// Remove whitespace and make all lowercase
	rtnArray.forEach(function(item, index, array){
		array[index] = array[index].toLowerCase();
		array[index] = array[index].replace(" ", ""); 
	});

	return rtnArray;
}

var unformattedStates = [];
var states = [];

unformattedStates = fs.readFileSync('./states.txt', {encoding: 'utf8'}).split("\n");
states = addStates(unformattedStates);

// Create full list of statePairs
// combine 1st item with each other item, 2nd item with each other
// item, etc.

var statePairs = [];
var anagramPairs = [];

// Generate a list of indices for valid state pairs
for (var i = 0; i < states.length; i++) {
	for (var j = i + 1; j < states.length; j++) {
		statePairs.push({s1index: i, s2index: j});		
	}
}

// Iterate through, only comparing indices to those
// below it to avoid duplicate entries

for (i = 0; i < statePairs.length; i++) {
	// Get string for first state pair
	var state1 = 
		states[statePairs[i].s1index] +
		states[statePairs[i].s2index];
	for (j = i + 1; j < statePairs.length; j++) {
			// Get string for second state pair to compare
			var state2 =
				states[statePairs[j].s1index] +
				states[statePairs[j].s2index];
	
			// Test if pair of states are anagrams
			if (isAnagram(state1, state2)) {
				anagramPairs.push({
					statePair1: unformattedStates[statePairs[i].s1index] + "," + unformattedStates[statePairs[i].s2index], 
					statePair2: unformattedStates[statePairs[j].s1index] + "," + unformattedStates[statePairs[j].s2index]
				});
			}
	}
}


console.log(anagramPairs);