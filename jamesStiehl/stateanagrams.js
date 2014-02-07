var usStates = ['Alabama',
				'Alaska',
				'Arizona',
				'Arkansas',
				'California',
				'Colorado',
				'Connecticut',
				'Delaware',
				'Florida',
				'Georgia',
				'Hawaii',
				'Idaho',
				'Illinois',
				'Indiana',
				'Iowa',
				'Kansas',
				'Kentucky',
				'Louisiana',
				'Maine',
				'Maryland',
				'Massachusetts',
				'Michigan',
				'Minnesota',
				'Mississippi',
				'Missouri',
				'Montana',
				'Nebraska',
				'Nevada',
				'New Hampshire',
				'New Jersey',
				'New Mexico',
				'New York',
				'North Carolina',
				'North Dakota',
				'Ohio',
				'Oklahoma',
				'Oregon',
				'Pennsylvania',
				'Rhode Island',
				'South Carolina',
				'South Dakota',
				'Tennessee',
				'Texas',
				'Utah',
				'Vermont',
				'Virginia',
				'Washington',
				'West Virginia',
				'Wisconsin',
				'Wyoming'];

var concatArray = []; // empty array that will be used to store all combinations of states and their sorted, concatenated strings
var combo = 0;
for(var i = 0; i < usStates.length; i++){
	for(var j = i+1; j< usStates.length; j++){
	combo++;
	concatArray.push([usStates[i],usStates[j],usStates[j].replace(" ","").toLowerCase()+usStates[i].replace(" ","").toLowerCase()]);
	}
}

for (var i = 0; i < concatArray.length; i++){
	concatArray[i][2] = concatArray[i][2].split('').sort().join('');
}

var count = 0;
for (var i = 0; i<concatArray.length; i++){
	for(var j = i+1; j< concatArray.length; j++){
		count++;
		var checkComb = uniqueCombination(concatArray[i][0],concatArray[i][1],concatArray[j][0],concatArray[j][1]);
		if(checkComb && concatArray[i][2] === concatArray[j][2]){
			console.log("Holy shit we have a match!\n" + concatArray[i][0]+ " and "+ concatArray[i][1]+
				" are a match with "+concatArray[j][0]+" and "+concatArray[j][1]);
		}
	}
}

function uniqueCombination(a,b,c,d) {
	var flip = true;
	if (a == c || a == d || b == c || b == d){
		flip = false;
	}
	return flip;
}


console.log(count, combo);






