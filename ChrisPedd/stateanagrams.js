'use strict';
var fs = require('fs');
var states = fs.readFileSync('states.txt', { encoding: 'utf8' });

function StateObject (firstState, secondState) {
	this.raw = firstState.toLowerCase() + secondState.toLowerCase();
	this.raw = this.raw.split('');
	this.raw = this.raw.sort( function(a,b) {return a > b;} );
	this.raw = this.raw.join('');
	this.firstState = firstState;
	this.secondState = secondState;
}

var stateAnagrams = {
	statesRawArr: states.split('\n'),
	anagramArr: [],
	add: function (arr) {
		this.anagramArr.push(arr);
	},
	theObjectifier: function () {
		var count = 0;
		var x = this;
		this.statesRawArr.forEach(function (item) {
			for (var i = count; i < x.statesRawArr.length-1; i++) {
				x.add (new StateObject (item, x.statesRawArr[i+1]))
			};
			count++;
		})
	},
	compareorator: function () {}
};

stateAnagrams.theObjectifier();
console.log(stateAnagrams.anagramArr);