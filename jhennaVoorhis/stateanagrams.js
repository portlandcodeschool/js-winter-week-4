var fs = require('fs');

fs.readFile('states.txt', {encoding: 'utf8'}, function (err, contents) {
	if (err) throw err;

	var states = contents.toLowerCase().split('\n');
	var statePairs = [];
	var results = [];

	states.forEach(function (value, index){
		states.forEach(function (value2, index2){
			statePairs.push({state1: value, state2: value2, combined: ""});
		});
	});

	statePairs.forEach(function (object, index){
		object.combined = object.state1 + object.state2;

		object.combined = object.combined.split("").sort().join();
	});

	statePairs.forEach(function (value, index){
		statePairs.forEach(function (value2, index2){
			if (value.combined === value2.combined &&
				value.state1 !== value2.state1 &&
				value.state2 !== value2.state2 &&
				value.state1 !== value2.state2 &&
				value.state2 !== value2.state1){
				results.push([value.state1, value.state2, value2.state1, value2.state2]);
			}
		});
	});

	console.log("The following states form an anagram: " + results[1]);

	// console.log(statePairs);
});