'use strict';
var fs = require('fs');
var states = fs.readFileSync('states.txt', { encoding: 'utf8' });

function StateObject (firstState, secondState) {
	this.raw = firstState.toLowerCase() + secondState.toLowerCase();
	this.raw = this.raw.split('');
	this.raw = this.raw.sort( function(a,b) {
		if(a < b) return -1;
		if(a > b) return 1;
		return 0;
	});
	this.raw = this.raw.join('');
	this.firstState = firstState;
	this.secondState = secondState;
}

var stateAnagrams = {
	statesRawArr: states.split('\n'),
	anagramArr: [],
	potentialAnagrams: [],
	add: function (arr) {
		this.anagramArr.push(arr);
	},

	theObjectifier: function () {
		var count = 0;
		var x = this;
		this.statesRawArr.forEach(function (item) {
			for (var i = count; i < x.statesRawArr.length-1; i++) {
				x.add (new StateObject (item, x.statesRawArr[i+1]));
			}
			count++;
		})
	},

	compareorator: function () {
		var count = 0;
		var x = this;
		this.anagramArr.forEach(function (item) {
			for (var i = count; i < x.anagramArr.length; i++) {
				if (item.raw === x.anagramArr[i].raw && item.firstState !== x.anagramArr[i].firstState) {
					x.potentialAnagrams.push(item);
					x.potentialAnagrams.push(x.anagramArr[i]);
				}
			}
			count++;
		})
	},
};

stateAnagrams.theObjectifier();
stateAnagrams.compareorator();
console.log(stateAnagrams.potentialAnagrams);
console.log("\nAs an anagram, that looks like:\nOK! That inodorous charlatan.");