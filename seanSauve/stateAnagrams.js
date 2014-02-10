var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District Of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
var anagrams = [];
states = lowerCaseList(states);

while (states.length >= 4){//loop tests every combination of pairs which include the first state in the list
	var firstState = states.shift();//state to be tested with every possible combination
	var secondList = states.slice(0);// secondary list of states to iterated though all combinations of with two states
	while (secondList.length >= 3){//iterate through options compare with firststate
		var secondState = secondList.shift();
		var thirdList = secondList.slice(0);
		while (thirdList.length >= 2){
			for (var i = 1; i < thirdList.length; i++){//iterating through second pair with given first pair
				anagrams = testPairs(firstState + ' ' + secondState, thirdList[0] + ' ' + thirdList[i], anagrams);
				anagrams = testPairs(firstState + ' ' + thirdList[0], secondState + ' ' + thirdList[i], anagrams);
				anagrams = testPairs(firstState + ' ' + thirdList[i], secondState + ' ' + thirdList[0], anagrams);
			};
			thirdList.shift();		
		};
	};

};
console.log("Anagrams: ", anagrams);

function testPairs (pairOne, pairTwo, anagrams){
	var index;
	var arrayOne = [];
	var arrayTwo = [];
	if (pairOne.length === pairTwo.length){//quick test to rule out pairs of different length
		for (var l = 0; l < pairOne.length; l++){//copy pair strings to array of characters for anagram comparison
			arrayOne[l] = pairOne[l];
			arrayTwo[l] = pairTwo[l];
		}
	} else return anagrams;// return anagram list unchanged if strings are different length
	while (arrayOne.length > 0){//search for a letter matches one letter at a time
		index = arrayTwo.indexOf(arrayOne[0]);
		if (index === -1) return anagrams; //returns anagrams unchanged if a letter is not found in both
		else arrayTwo.splice(index, 1);//remove letter from pair2
		arrayOne.shift(); //remove letter from pair1
		if (arrayOne.length === 0 && arrayTwo.length === 0){//if no letters are left, we have found anagram
			console.log("Anagram found: " + pairOne + ' and ' + pairTwo );
			anagrams.push(pairOne + ' and ' + pairTwo);
			return anagrams; //returns anagram with new anagram on list
		};
	};
};

function lowerCaseList(states){
	for (var s = 0; s < states.length - 1; ++s){
		states[s] = states[s].toLowerCase();
	};
	return states;
}